import { Box, Button, VStack, Image } from "@chakra-ui/react";
import styles from "../page.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { pathsExternal } from "../paths";
import Link from "next/link";
import FooterComponent from "@/components/footer";

export default function Contact() {
  return (
    <Box className={styles.page}>
      <Box className={styles.main} width={"100%"} display={"flex"}>
        <Box
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          fontSize={"50px"}
          fontWeight={500}
        >
          Contact
        </Box>
        <VStack
          flexDirection="row"
          justifyContent={"center"}
          alignItems={"center"}
          marginBottom={"20px"}
        >
          <Image
            src="/louis_magnier.png"
            alt="Louis Magnier"
            display={{ base: "none", md: "block" }}
            width={{ md: 240, lg: 380 }}
            height={{ md: 240, lg: 380 }}
            marginRight={{
              base: "0%",
              sm: "5%",
              md: "10%",
              lg: "20%",
              xl: "30%",
            }}
          />
          <VStack spacing={6} align="center">
            <Button
              as="a"
              href={pathsExternal.mailto}
              leftIcon={<HiOutlineMail />}
              colorScheme="blue"
              variant="outline"
              target="_blank"
              size="lg"
            >
              Email Me
            </Button>
            <Button
              as="a"
              href={pathsExternal.linkedin}
              leftIcon={<FaLinkedin />}
              colorScheme="blue"
              variant="outline"
              target="_blank"
              size="lg"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href={pathsExternal.github}
              leftIcon={<FaGithub />}
              colorScheme="blue"
              variant="outline"
              target="_blank"
              size="lg"
            >
              GitHub
            </Button>
            <Button
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
        </VStack>

        <FooterComponent currentPage="contact" />
      </Box>
    </Box>
  );
}
