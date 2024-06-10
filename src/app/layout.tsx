/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Sistem Inventaris KLHK",
 description: "Sivaris KLHK",
 icons: {
  icon:
   "https://res.cloudinary.com/caturteguh/image/upload/v1636599929/klhk/favicon-klhk_sbhpy4.png",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={inter.className}>{children}</body>
  </html>
 );
}
