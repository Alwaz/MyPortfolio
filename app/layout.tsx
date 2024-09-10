import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/Providers/LenisProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";
import og from "@/public/og.png";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alwazqazi-portfolio.vercel.app"),
  title: "Alwaz Qazi | Portfolio",
  description:
    "Transforming ideas into Products. Join me on this exciting digital journey.",
  openGraph: {
    title: "Alwaz Qazi | Portfolio",
    description:
      "Transforming ideas into Products. Join me on this exciting digital journey.",
    url: "https://alwazqazi-portfolio.vercel.app",
    siteName: "alwazqazi-portfolio.vercel.app",
    type: "website",
    images: [
      {
        url: og.src,
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alwazqazi-portfolio.vercel.app",
  },
  category: "programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white text-black antialiased dark:bg-black dark:text-white",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <LenisProvider>
            <main>{children}</main>
          </LenisProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
