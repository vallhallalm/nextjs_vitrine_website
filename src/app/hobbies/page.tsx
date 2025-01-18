import { AspectRatio, Box, Heading, VStack, Text } from "@chakra-ui/react";
import styles from "../page.module.css";
import FooterComponent from "@/components/footer";

export default function Hobbies() {
  return (
    <Box className={styles.page}>
      <Box className={styles.main}>
        <Box
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          fontSize={"50px"}
          fontWeight={500}
        >
          Hobbies
        </Box>
        <VStack spacing={6} align="center">
          <VStack spacing={6} align="start">
            <Heading
              size="lg"
              borderBottom="2px solid"
              borderColor="blue.500"
              pb={2}
            >
              Music
            </Heading>
            <Text fontSize="md">
              Music has always been a source of inspiration and creativity for
              me. I particularly enjoy playing metal and technical music, which
              challenges my technical skills and creativity.
            </Text>
            <AspectRatio ratio={16 / 9} w="full">
              <iframe
                src="https://www.youtube.com/embed/61dAKb4wG8U"
                title="Music Cover Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </VStack>
          <VStack spacing={6} align="start">
            <Heading
              size="lg"
              borderBottom="2px solid"
              borderColor="blue.500"
              pb={2}
            >
              Leathercraft
            </Heading>
            <Text fontSize="md">
              Leathercraft is another passion of mine, where I enjoy creating
              unique, handcrafted items like wallets. It’s a meticulous art that
              combines patience and precision.
            </Text>
          </VStack>
        </VStack>
        <FooterComponent currentPage="hobbies" />
      </Box>
    </Box>
  );
}
