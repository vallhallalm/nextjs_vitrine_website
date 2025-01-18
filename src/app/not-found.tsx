// /app/404.tsx
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <VStack spacing="5" textAlign="center">
        <Heading size="2xl">Oops! Page Not Found</Heading>
        <Text fontSize="xl">
          The page you&apos;re looking for does not exist.
        </Text>
        <Link href="/">
          <Button colorScheme="blue" size="lg">
            Go back to Home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
