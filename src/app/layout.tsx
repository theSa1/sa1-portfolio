import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { LenisScrollWrapper } from "@/components/lenis-scroll-wrapper";

export const metadata: Metadata = {
  title: "Savan | Portfolio",
  description: "Hey! 👋, I'm Savan",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LenisScrollWrapper>{children}</LenisScrollWrapper>
      </body>
    </html>
  );
}
