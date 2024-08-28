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

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed top-0 left-0 w-full">
      <div className="container flex items-center justify-center mx-auto my-4 gap-20  ">
        <div className="flex items-center gap-3">
          <div className="w-17 h-17 rounded-full overflow-hidden ">
            <Image
              src={logo}
              height={50}
              width={50}
              alt="portfolio"
              className="object-cover"
            />
          </div>
          <p className="text-lg first-letter:font-bold ">Ephrem</p>
        </div>
        <div className="flex gap-10 ">
          <ul className=" hidden md:flex gap-5">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={""}>
              <li className="whitespace-nowrap">
                
                About Me</li>
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
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu />
          </div>
          <button className=" hidden sm:flex bg-blue-500 px-2 py-1 text-white rounded whitespace-nowrap">
            <p className="text-xs"> Download CV</p>
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
    </div>
  );
};

export default Navbar;
