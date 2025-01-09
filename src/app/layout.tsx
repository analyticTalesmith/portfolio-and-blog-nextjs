import type { Metadata } from "next";
import { Jost, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import WebsiteHeading from "@/components/layout/header";
import ContentWrapper from "@/components/layout/contentwrapper";
import WebsiteFooter from "@/components/layout/footer";
import ScrollToTopButton from "@/components/ui/scrolltotopbutton";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  display: 'swap',
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  display: 'swap',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${space_grotesk.variable}`}suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <WebsiteHeading />
            <ScrollProgressBar />
            <ContentWrapper>
              {children}
            </ContentWrapper>
            <ScrollToTopButton />
            <WebsiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
