"use client";
import React, { forwardRef, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { useColorModeValue } from "@chakra-ui/react";

type NormalizedRGB = [number, number, number];
const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uColor2: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: any;
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2 r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 + 
                  0.4 * sin(5.0 * (tex.x + tex.y + 
                                   cos(3.0 * tex.x + 5.0 * tex.y) + 
                                   0.02 * tOffset) + 
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Mix base color and wave color using the pattern
  vec3 col = mix(uColor, uColor2, pattern);
  
  // Add subtle noise
  col -= rnd / 15.0 * uNoiseIntensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string; // base color
  color2?: string; // wave color
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const meshRef = useRef<Mesh>(null);

  const finalColor1 = useColorModeValue("#ced4da", "#2d3748");
  const finalColor2 = useColorModeValue("#7986CB", "#1A202C");

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(finalColor1)) },
      uColor2: { value: new Color(...hexToNormalizedRGB(finalColor2)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }, // <- this object must not be replaced
    }),
    []
  );

  // Update uColor on colorMode change
  useLayoutEffect(() => {
    if (meshRef.current) {
      const mat = meshRef.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      // Only update the color values, not the uniform objects themselves
      mat.uniforms.uColor.value.set(...hexToNormalizedRGB(finalColor1));
      mat.uniforms.uColor2.value.set(...hexToNormalizedRGB(finalColor2));
    }
  }, [finalColor1, finalColor2]);

  return (
    <Canvas
      dpr={[1, 2]}
      frameloop="always"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

export default Silk;
