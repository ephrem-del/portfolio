"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/subtract.png";
import Link from "next/link";
import NavLinks from "./nav-links";
import SideNav from "./side-navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopClassName =
    "[text-decoration:none] tracking-[0.03em] text-5xl font-nav-bar-text-21 dark:text-white px-[12px] cursor-pointer hover:text-blue-600 text-nowrap";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "w-full gap-[60px] flex items-center justify-center bg-gainsboro-200 dark:bg-gray-100 pt-3 pb-2 z-50 fixed top-0 transition ease-in-out duration-700 desktop:justify-center desktop:gap-0"
          : "w-full flex flex-row items-center justify-center gap-[60px] dark:text-white tablet:gap-[30px] tablet:px-5 desktop:gap-0 desktop:px-0 "
      }`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className=" flex flex-row items-center justify-center box-border gap-2 desktop:w-[400px] desktop:gap-5">
          <Image
            src={logo}
            alt="portfolio"
            priority
            className="h-[40px] w-[40px] desktop:w-[70px] desktop:h-[70px]"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <a className="[text-decoration:none] text-xl inline-block whitespace-nowrap desktop:text-19xl">
              <b>E</b>
              <span>{`phrem `}</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="hidden tablet:flex tablet:flex-col tablet:items-start tablet:justify-start">
        <nav className=" flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-start cursor-pointer">
            <NavLinks desktopClassName={desktopClassName} />
          </div>
        </nav>
      </nav>
      <div className="flex flex-col items-start justify-start  bg-darkorange-100 rounded-8xs desktop:ml-4">
        <button className="cursor-pointer [border:none] px-[4px] py-1  rounded-8xs bg-darkorange-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered desktop:p-[14px] desktop:text-mid">
          <Link
            href={""}
            className="[text-decoration:none] relative text-xl tracking-[0.03em] text-white inline-block z-[1]"
          >
            Downlaod CV
          </Link>
        </button>
      </div>
      <SideNav />
    </header>
  );
};

export default Navbar;
