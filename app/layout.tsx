import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/navbar";
import FooterSection from "../components/footer-section/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ephrem's portfolio",
  description: "Ephrem mekurias personal portfolio website",
};

const setThemeScript = `(function(){
const theme = localStorage.theme;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
if(theme==='dark' || (!theme && prefersDarkMode)){
document.documentElement.classList.add('dark')
} else {
 document.documentElement.classList.remove('dark')
 }
})();
 `;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
      </head>
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
