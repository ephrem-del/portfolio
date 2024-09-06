"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/subtract.png";
import Link from "next/link";
import NavLinks from "./nav-links";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <>
      {/* <div
        className={
          nav
            ? "md:hidden fixed flex justify-center items-center left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-300 p-10"
              : "fixed left-[-100%] top-0 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={logo} height={50} width={50} alt="logo" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex justify-center border-b border-stone-400 my-4">
            <p className="">Ephrem M. personal portfolio</p>
          </div>
          <div className="pt-5">
            <ul className="flex flex-col gap-3">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={""}>
                <li>
                  <p>About Me</p>
                </li>
              </Link>
              <Link href={""}>
                <li>Services</li>
              </Link>
              <Link href={""}>
                <li>Projects</li>
              </Link>
              <Link href={""}>
                <li>Testimonials</li>
              </Link>
              <Link href={""}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <p className=""> Lets connect</p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <FaFacebook />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <FaDiscord />
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      <header
        className={`flex flex-row items-center justify-center pb-[50px] z-50 ${
          isScrolled
            ? "flex bg-gainsboro-200 rounded-2xl px-10 fixed top-0 "
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-col items-start justify-start max-w-full">
          <div className="w-[400px] flex flex-row items-center justify-center box-border gap-5">
            <Image
              src={logo}
              alt="portfolio"
              priority
              className="h-[67px] w-[67px] relative"
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <a className="[text-decoration:none] text-[inherit] text-19xl inline-block whitespace-nowrap">
                <b>E</b>
                <span>{`phrem `}</span>
              </a>
            </div>
          </div>
        </div>
        <nav className="flex flex-col items-start justify-start">
          <nav className=" flex flex-row items-start justify-start">
            <div className="flex flex-row items-center justify-start cursor-pointer">
              <NavLinks />
            </div>
          </nav>
        </nav>
        <div className="flex flex-col items-start justify-start  bg-darkorange-100 rounded-8xs ml-4">
          <button className="cursor-pointer [border:none] p-[14px] text-mid rounded-8xs bg-darkorange-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered">
            <Link
              href={""}
              className="[text-decoration:none] relative text-xl tracking-[0.03em] text-white inline-block z-[1]"
            >
              Downlaod CV
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
