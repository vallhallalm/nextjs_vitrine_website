import styles from "./page.module.css";
import { Box, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";
import FooterComponent from "@/components/footer";
import skills from "../../public/skills.json";
import KeyNumbers from "@/components/keyNumber";

function calculateYearsPassed(): string {
  const feb2_2023 = new Date("2023-02-02");
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - feb2_2023.getTime();
  const yearsPassed = timeDifference / (1000 * 3600 * 24 * 365.25); // Convert ms to years

  return yearsPassed.toFixed(0);
}

export default function Home() {
  return (
    <Box className={styles.page}>
      <Box className={styles.main}>
        <VStack flexDirection={{ base: "column", lg: "row" }}>
          <Image
            src="/louis_magnier.png"
            alt="Louis Magnier"
            width={{ base: 240, md: 380 }}
            height={{ base: 240, md: 380 }}
          />
          <VStack ml={{ base: "0px", lg: "60px" }}>
            <KeyNumbers
              yearsExperience={calculateYearsPassed()}
              projectsCount={10}
            />
          </VStack>
        </VStack>
        <Box
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          fontSize={"50px"}
          fontWeight={500}
        >
          A quick overview
        </Box>
        <Box width={"100%"}>
          My name is Louis Magnier, and I am currently a Software Engineer at
          Scorechain in Luxembourg. I am deeply passionate about software
          development, with a strong focus on creating performant, scalable, and
          reliable systems. I hold a Master’s degree in Informatics and
          Information Systems from Université de Technologie de Troyes (UTT,
          France).
        </Box>
        <Box>
          Over the years, I have gained extensive experience in various fields
          of computer science, including data engineering, backend development,
          UI/UX design, DevOps, artificial intelligence, and blockchain
          technologies. As a constant learner, I thrive in challenging
          environments, where I can apply my skills to build robust and
          innovative software solutions.
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" marginBottom={4}>
            Key Technical Skills
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {skills.map((skillCategory, index) => (
              <Box
                key={index}
                padding={4}
                borderWidth={1}
                borderRadius="md"
                shadow="md"
                className="container"
              >
                <Text fontSize="lg" fontWeight="bold" marginBottom={2}>
                  {skillCategory.title}
                </Text>
                <VStack align="start" spacing={1}>
                  {skillCategory.items.map((item, i) => (
                    <VStack
                      width={"100%"}
                      key={i}
                      flexDirection="row"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Text fontSize="md" lineHeight="1.6">
                        • {item.title}
                      </Text>
                      {item.iconSrc && (
                        <Image
                          alt={`${item.title} technology icon`}
                          height="7"
                          width="7"
                          color="white"
                          src={item.iconSrc}
                        />
                      )}
                    </VStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <FooterComponent currentPage="home" />
      </Box>
    </Box>
  );
}
