// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = async () => {
  "use server";
  return Promise.resolve(
    extendTheme({
      config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
      },
    })
  );
};

export default theme;
