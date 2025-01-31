import { VStack } from "@chakra-ui/react";

interface KeyNumberProps {
  yearsExperience: string;
  projectsCount: number;
}

export default function KeyNumbers(props: KeyNumberProps) {
  const { yearsExperience, projectsCount } = props;
  return (
    <VStack flexDirection={{ base: "row", lg: "column" }} p="6">
      <VStack mr={{ base: "10px", lg: "0px" }}>
        <StatCard value={yearsExperience} label="Years of Experience" />
      </VStack>
      <StatCard value={projectsCount} label="Projects Completed" />
    </VStack>
  );
}

interface StatCardProps {
  value: string | number;
  label: string;
}

function StatCard(props: StatCardProps) {
  const { value, label } = props;
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ shadow: "lg" }}
      shadow="md"
      p="10px"
      className="container"
    >
      <p style={{ fontSize: "80px" }}>{value}+</p>
      <p style={{ fontSize: "20px" }}>{label}</p>
    </VStack>
  );
}
