import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const geistInter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistInter.variable} ${geistInter.variable} antialiased bg-[#404040]`}
      >
        {children}
      </body>
    </html>
  );
}
