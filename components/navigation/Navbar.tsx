"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/subtract.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import NavLinks from "./nav-links";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" flex flex-row items-center justify-center gap-2">
        <div className="w-[700px] flex flex-col items-start justify-start">
          <div className="flex flex-row gap-5 ">
            <Image
              src={logo}
              height={67}
              width={67}
              alt="portfolio"
              className="object-cover"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <Link
                href={""}
                className="[text-decoration:none] self-stretch h-[59px] relative text-stone-950 text-[2rem] inline-block whitespace-nowrap"
              >
                <b>E</b>
                <span>{`phrem `}</span>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex flex-col items-start justify-start pt-[7px]">
          <nav className=" flex flex-row items-start justify-start gap-3 text-xl">
            <div className="flex flex-row items-start justify-start py-2.5 cursor-pointer">
              <NavLinks />
            </div>
          </nav>
        </nav>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu />
        </div>
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <button className="cursor-pointer [border:none] p-[10px] bg-red-500 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered">
            <a className="[text-decoration:none] relative text-xl tracking-[0.03em] text-white inline-block z-[1]">
              Downlaod CV
            </a>
          </button>
        </div>
      </div>

      <div
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
      </div>
    </>
  );
};

export default Navbar;
