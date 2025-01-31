import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  Link,
  AspectRatio,
  Heading,
  Tooltip,
} from "@chakra-ui/react";

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  githubLink?: string;
  videoLink?: string;
  technologyIcon?: { icon: string; tooltip: string }[];
  dateFrom?: string;
  dateTo?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    name,
    description,
    githubLink,
    image,
    videoLink,
    technologyIcon,
    dateFrom,
    dateTo,
  } = props;

  return (
    <Link href={githubLink} isExternal style={{ textDecoration: "none" }}>
      <Box
        className="container"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ shadow: "lg", transform: "scale(1.025)" }}
        shadow="md"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
      >
        <VStack align="start" spacing={4} padding={4}>
          <VStack justifyContent={"start"} alignItems={"start"}>
            <Heading
              size="lg"
              borderBottom="2px solid"
              borderColor="blue.500"
              pb={2}
            >
              {name}
            </Heading>
            <Text fontSize={"10px"} fontStyle={"italic"}>
              {dateFrom ? `From ${dateFrom} ` : undefined}{" "}
              {dateTo ? `to ${dateTo} ` : undefined}
            </Text>
          </VStack>
          <VStack
            flexDirection={"row"}
            width="100%"
            alignItems={"right"}
            justifyContent={"right"}
          >
            {technologyIcon?.map((icon, i) => (
              <Tooltip key={icon.tooltip + i} label={icon.tooltip}>
                <Image
                  src={icon.icon}
                  alt={`Tech icon ${icon.tooltip}`}
                  width="10"
                  height="10"
                />
              </Tooltip>
            ))}
          </VStack>
          <Text whiteSpace="pre-wrap" fontSize="md">
            {description}
          </Text>
        </VStack>
        {image && (
          <Image
            src={image}
            alt={name}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        )}
        {videoLink && (
          <AspectRatio ratio={16 / 9} w="full">
            <iframe
              src={videoLink}
              title={`Project ${name} Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        )}
      </Box>
    </Link>
  );
};

export default ProjectCard;
