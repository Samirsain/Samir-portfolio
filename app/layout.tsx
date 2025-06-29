import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeScript } from "@/components/theme-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "Premium portfolio website for a full-stack web developer",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
