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
        className={`${inter.className}flex flex-col items-center justify-center `}
      >
        <div className="w-full relative overflow-hidden flex flex-col pt-[61px] pb-[691px] box-border gap-[139px] leading-[normal] tracking-[normal]">
          <section className="flex flex-row items-center justify-center py-0 box-border max-w-full shrink-0 text-center">
            <div className="flex flex-col items-center justify-center gap-[69.5px] max-w-full">
              <header className=" flex flex-row pb-[50.5px] box-border max-w-full">
                <Navbar />
              </header>
              <div className="flex flex-row items-start justify-center">
                <div className="flex flex-col items-center gap-[36.8px]">
                  {children}
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
