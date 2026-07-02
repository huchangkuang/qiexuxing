import type { Metadata } from "next";
import { Archivo, Noto_Sans_SC } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "qiexuxing | 个人作品集",
    template: "%s | qiexuxing",
  },
  description: "个人作品集 — Mind Mirror、AIGC 工作台",
  applicationName: "qiexuxing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${archivo.variable} ${notoSansSc.variable}`}>
      <body className="page-ambient flex min-h-screen flex-col text-foreground">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
