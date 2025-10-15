import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { useMemo } from "react";
import theme from "../theme/theme";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("../components/silkBackground"), {
  ssr: false, // <- this is the key
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Louis Magnier",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sideBarComp = useMemo(() => {
    return <Sidebar />;
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider theme={theme}>
          <Silk speed={5} scale={1} noiseIntensity={0.1} rotation={0} />
          <Box sx={{ direction: "row" }}>
            <Box pl={{ base: "5px", md: "220px" }}>
              {children}
              <Box style={{ alignItems: "center", justifyContent: "center" }}>
                © 2024 - Louis Magnier
              </Box>
            </Box>
          </Box>
          {sideBarComp}
        </ChakraProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Louis Magnier",
              jobTitle: "Lead Software Engineer",
              url: "https://louis-magnier.eu",
              sameAs: [
                "https://www.linkedin.com/in/louis-magnier-8a84b3221/",
                "https://github.com/vallhallalm",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Scorechain",
              },
              alumnOf: {
                "@type": "EducationalOrganization",
                name: "Université de Technologie de Troyes",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
