import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Aicher 那套是一个家族打天下。Helvetica Neue 本机装了就优先用（见 globals.css
// 的 --font-sans），装不了的机器落到 Archivo —— 同为中性 grotesque，字面接近。
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Peter M.",
  description:
    "Peter M. — HR executive turned AI-talent operator, based in Toronto.",
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
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
