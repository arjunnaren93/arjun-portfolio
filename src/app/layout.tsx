import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Narendran — Staff Data Analyst",
  description:
    "Portfolio of Arjun Narendran, Staff Data Analyst at GoFundMe. Turning data into decisions.",
  openGraph: {
    title: "Arjun Narendran — Staff Data Analyst",
    description: "Turning data into decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${geist.variable} ${geistMono.variable}`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <GrainOverlay />
          <ScrollProgress />
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
