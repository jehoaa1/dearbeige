import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dear Beige | Mallang Sketch",
  description: "디어베이지 말랑스캐치 공식 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className={`${notoSansKr.className} flex min-h-full flex-col bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
