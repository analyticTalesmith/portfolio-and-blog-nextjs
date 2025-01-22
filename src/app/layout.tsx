import type { Metadata } from "next";
import { Jost, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import WebsiteHeading from "@/components/layout/page-core/header";
import WebsiteFooter from "@/components/layout/page-core/footer";
import ScrollToTopButton from "../components/ui/scrolltotopbutton";
import ScrollProgressBar from "../components/ui/scroll-progress-bar";

import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  display: "swap",
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analytic Talesmith",
  description: "Exploring the connections between data, people, and innovation—ideas for a more efficient, mindful, and insightful world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${space_grotesk.variable}`}
      suppressHydrationWarning
    >
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
          {children}
          <ScrollToTopButton />
          <WebsiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
