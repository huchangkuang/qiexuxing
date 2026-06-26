import type { Metadata } from "next";
import { Source_Serif_4, Syne } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "qiexuxing.top | 职业旅程与理念",
  description: "在加速的时代里，选择有意的慢。专注于深度与清晰。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${syne.variable} ${sourceSerif.variable} scroll-smooth dark`}
    >
      <body className="font-body-md text-body-md min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
