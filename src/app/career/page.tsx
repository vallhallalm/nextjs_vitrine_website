import { Box } from "@chakra-ui/react";
import styles from "../page.module.css";
import career from "../../../public/career.json";
import ProjectCard from "@/components/projectCard";
import FooterComponent from "@/components/footer";

export default function Career() {
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
          Career
        </Box>
        <Box>
          {career.map((project, i) => (
            <Box key={`project-card-${i}`} paddingBottom={"20px"}>
              <ProjectCard
                name={project.name}
                description={project.description}
                image={project.image}
                technologyIcon={project.technologies}
                dateFrom={project.from}
                dateTo={project.to}
              />
            </Box>
          ))}
        </Box>
        <FooterComponent currentPage="career" />
      </Box>
    </Box>
  );
}
