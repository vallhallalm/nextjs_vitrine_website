import { Box } from "@chakra-ui/react";
import styles from "../page.module.css";
import projects from "../../../public/projects.json";
import ProjectCard from "@/components/projectCard";
import FooterComponent from "@/components/footer";

export default function Project() {
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
          Projects
        </Box>
        <Box>
          {projects.map((project, i) => (
            <Box key={`project-card-${i}`} paddingBottom={"20px"}>
              <ProjectCard
                name={project.name}
                description={project.description}
                githubLink={project.gitLink}
                image={project.image}
                videoLink={project.videoLink}
              />
            </Box>
          ))}
        </Box>
        <FooterComponent currentPage="projects" />
      </Box>
    </Box>
  );
}
