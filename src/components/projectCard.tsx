"use client";
import React, { useCallback, useState } from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  AspectRatio,
  Heading,
  Tooltip,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ProjectCardProps {
  name: string;
  description: string;
  image?: string;
  githubLinks?: { name: string; link: string }[];
  videoLink?: string;
  technologyIcon?: { icon: string; tooltip: string }[];
  dateFrom?: string;
  dateTo?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const {
    name,
    description,
    githubLinks,
    image,
    videoLink,
    technologyIcon,
    dateFrom,
    dateTo,
  } = props;

  const [showButtons, setShowButtons] = useState(false);

  const handleClick = useCallback(() => {
    if (!githubLinks?.length) return;
    if (githubLinks.length === 1) {
      window.open(githubLinks[0].link, "_blank");
    } else {
      setShowButtons(true);
    }
  }, [githubLinks]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowButtons(false);
  }, []);

  return (
    <VStack onClick={handleClick} cursor="pointer">
      <Box
        position="relative"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ shadow: "lg", transform: "scale(1.025)" }}
        shadow="md"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        width="100%"
      >
        {showButtons && (
          <IconButton
            icon={<CloseIcon />}
            aria-label="Close"
            size="sm"
            position="absolute"
            top={2}
            right={2}
            zIndex={1}
            onClick={handleClose}
          />
        )}

        <VStack align="start" spacing={4} padding={4}>
          <VStack alignItems="start">
            <Heading
              size="lg"
              borderBottom="2px solid"
              borderColor="blue.500"
              pb={2}
            >
              {name}
            </Heading>
            <Text fontSize="10px" fontStyle="italic">
              {dateFrom ? `From ${dateFrom} ` : ""}
              {dateTo ? `to ${dateTo}` : ""}
            </Text>
          </VStack>

          <VStack
            flexDirection="row"
            flexWrap="wrap"
            width="100%"
            justifyContent="flex-start"
          >
            {technologyIcon?.map((icon, i) => (
              <Tooltip key={i} label={icon.tooltip}>
                <Image
                  src={icon.icon}
                  alt={icon.tooltip}
                  width="10"
                  height="10"
                />
              </Tooltip>
            ))}
          </VStack>

          {showButtons ? (
            <VStack width="100%" spacing={2} align="stretch">
              {githubLinks?.map((link, idx) => (
                <Button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(link.link, "_blank");
                  }}
                  colorScheme="blue"
                >
                  {link.name}
                </Button>
              ))}
            </VStack>
          ) : (
            <Text whiteSpace="pre-wrap" fontSize="md">
              {description}
            </Text>
          )}
        </VStack>

        {image && (
          <Image src={image} alt={name} objectFit="cover" width="100%" />
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
    </VStack>
  );
};

export default ProjectCard;
