import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MSW } from "@/component/MSW";
import ReactQueryProvider from "@/component/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모두의 랜덤 디펜스",
  description: "백준 기반 온라인 알고리즘 학습 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko_KR">
      <body className={inter.className}>
        <MSW />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
