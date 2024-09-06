import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ephrem's portfolio",
  description: "Ephrem mekurias personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}flex flex-col items-center justify-center pt-[60px] px-[20%] space-y-[100px] bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
