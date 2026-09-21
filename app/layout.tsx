import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gaojiannan (Peter) Mu",
  description:
    "Gaojiannan (Peter) Mu — HR executive turned AI-talent operator, based in Toronto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-locale="en" suppressHydrationWarning>
      <head>
        {/* 中文字体走 Google Fonts 的 unicode-range 分片，
            只下载页面实际用到的字形块 —— 对 CJK 比打包进构建产物快得多 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
        />
      </head>
      <body className={sourceSans.variable}>{children}</body>
    </html>
  );
}
