import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import { useMemo } from "react";
import theme from "../theme/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Louis Magnier",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sideBarComp = useMemo(() => {
    return <Sidebar />;
  }, []);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider theme={theme}>
          <Box sx={{ direction: "row" }}>
            <Box pl={{ base: "5px", md: "220px" }}>
              {children}
              <Box style={{ alignItems: "center", justifyContent: "center" }}>
                © 2024 - Louis Magnier
              </Box>
            </Box>
          </Box>
          {sideBarComp}
        </ChakraProvider>
      </body>
    </html>
  );
}
