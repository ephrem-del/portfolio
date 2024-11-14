import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/navbar";
import FooterSection from "../components/footer-section/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ephrem's portfolio",
  description: "Ephrem mekuria's personal portfolio website",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-center gap-[50px] py-[12px]  bg-white dark:bg-main desktop:space-y-[120px] desktop:pt-[30px] `}
      >
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
