import type { Metadata } from "next";
import { draftMode } from 'next/headers'
import { ReactTempus } from 'tempus/react'
import { GoogleAnalytics } from '@next/third-parties/google'

import { Lexend, Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import site from "./site";


const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const bodoni_moda = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
          {children}
      </body>
      <ReactTempus patch={!isDraftMode} />
      <GoogleAnalytics gaId="G-XHHNV9QKWL" />
    </html>
  );
}
