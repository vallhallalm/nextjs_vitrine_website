"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  VStack,
  Text,
  useColorMode,
  IconButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 48 * 16) {
        onOpen();
      } else {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onOpen, onClose]);

  return (
    <>
      <Box
        display={{ base: isOpen ? "none" : "block", md: "none" }}
        position="fixed"
        top="5"
        left="5"
        zIndex="10"
      >
        <IconButton
          aria-label="Open sidebar"
          icon={<Text fontSize="xl">☰</Text>}
          onClick={onOpen}
          variant="solid"
          bg="#002b57"
          color="white"
          size="lg"
        />
      </Box>
      <Box
        as="nav"
        position={isOpen ? "fixed" : "absolute"}
        left={isOpen ? { base: "0", md: "3" } : "-100%"}
        top={{ base: "0", md: "3" }}
        w={{ base: "100%", md: "200px" }}
        h={{ base: "100vh", md: "96vh" }}
        bg="#002b57"
        color="white"
        p="3"
        transition="left 0.3s ease"
        zIndex="9"
        borderRadius={{ base: "0px", md: "10px" }}
      >
        <IconButton
          aria-label="Close sidebar"
          icon={<Text fontSize="xl">X</Text>}
          onClick={onClose}
          variant={"solid"}
          bg="#002b57"
          color="white"
          size="lg"
          position="absolute"
          top="1rem"
          right="1rem"
          display={{ base: "block", md: "none" }}
        />
        <VStack spacing="5" align="start">
          <Box
            display="flex"
            justifyContent="center"
            w="full"
            alignItems="center"
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="#f8f9fa"
              whiteSpace={"nowrap"}
            >
              Louis Magnier
            </Text>
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color="inherit"
              ml="5px"
            />
          </Box>
          <Box
            sx={{
              "&:hover": {
                textDecoration: "none",
                bg: "#f8f9fa",
                color: "#002b57",
              },
              p: "2",
              borderRadius: "md",
              color: "#f8f9fa",
            }}
          >
            <Link
              href="/"
              onClick={() => window.innerWidth <= 48 * 16 && onClose()}
            >
              Home
            </Link>
          </Box>
          <Box
            sx={{
              "&:hover": {
                textDecoration: "none",
                bg: "#f8f9fa",
                color: "#002b57",
              },
              p: "2",
              borderRadius: "md",
              color: "#f8f9fa",
            }}
          >
            <Link
              href="/career"
              onClick={() => window.innerWidth <= 48 * 16 && onClose()}
            >
              Career
            </Link>
          </Box>
          <Box
            sx={{
              "&:hover": {
                textDecoration: "none",
                bg: "#f8f9fa",
                color: "#002b57",
              },
              p: "2",
              borderRadius: "md",
              color: "#f8f9fa",
            }}
          >
            <Link
              href="/projects"
              onClick={() => window.innerWidth <= 48 * 16 && onClose()}
            >
              Projects
            </Link>
          </Box>
          <Box
            sx={{
              "&:hover": {
                textDecoration: "none",
                bg: "#f8f9fa",
                color: "#002b57",
              },
              p: "2",
              borderRadius: "md",
              color: "#f8f9fa",
            }}
          >
            <Link
              href="/hobbies"
              onClick={() => window.innerWidth <= 48 * 16 && onClose()}
            >
              Hobbies
            </Link>
          </Box>
          <Box
            sx={{
              "&:hover": {
                textDecoration: "none",
                bg: "#f8f9fa",
                color: "#002b57",
              },
              p: "2",
              borderRadius: "md",
              color: "#f8f9fa",
            }}
          >
            <Link
              href="/contact"
              onClick={() => window.innerWidth <= 48 * 16 && onClose()}
            >
              Contact
            </Link>
          </Box>
          <Button
            fontSize={"12px"}
            as={Link}
            href="/resume_louis_magnier.pdf"
            colorScheme="blue"
            size="lg"
            target="_blank"
            download
          >
            Download My Resume
          </Button>
        </VStack>
      </Box>
    </>
  );
}
