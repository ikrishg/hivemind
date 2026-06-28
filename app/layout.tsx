import type { Metadata } from "next";
import { draftMode } from 'next/headers'
import { ReactTempus } from 'tempus/react'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Lexend, Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import site from "./site";
import { SmoothScroll } from "@/components/smooth-scroll";


const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const bodoni_moda = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishg.com"),
  title: site.name,
  description: site.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html
      lang="en"
      dir="ltr"
      className={` ${lexend.variable} ${bodoni_moda.variable} ${jetbrains_mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
        <ReactTempus patch={!isDraftMode} />
        <GoogleAnalytics gaId="G-XHHNV9QKWL" />
      </body>
    </html>
  );
}
