import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeScript } from "@/components/theme-script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samir Sain - Full-Stack Developer Portfolio",
  description: "Premium portfolio website for Samir Sain, a full-stack web developer",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
