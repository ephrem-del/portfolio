"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/subtract.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./nav-links";
import SocialLinks from "../hero/social-links";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const mobileClassName =
    "[text-decoration:none] tracking-[0.03em] text-lgi text-black font-nav-bar-text-21 px-[12px] cursor-pointer text-nowrap";

  return (
    <div onClick={handleNav} className="flex z-20 desktop:hidden">
      <div>
        <AiOutlineMenu />
      </div>
      <div
        className={
          nav
            ? "fixed flex justify-center items-center left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-screen bg-slate-300 px-5 py-3"
              : "fixed left-[-100%] top-0 "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={logo} height={40} width={40} alt="logo" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex justify-center border-b border-stone-400 my-4">
            <p className="">Ephrem M. personal portfolio</p>
          </div>
          <div className="pt-5">
            <div className="flex flex-col items-start justify-start cursor-pointer gap-7">
              <NavLinks navLinksForMobile={mobileClassName} />
            </div>
          </div>
          <div className="flex flex-col items-center pt-20">
            <p className="text-lgi font-bold"> Lets connect</p>
            <div className="flex items-center justify-center text-[10px]">
              <div className="rounded-full cursor-pointer">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div
    //         className={
    //           nav
    //             ? "fixed left-0 top-0 w-[50%] h-screen bg-slate-300 px-5 py-3"
    //             : "fixed left-[-100%] top-0 "
    //         }
    //       >
    //         <div className="flex w-full items-center justify-between">
    //           <Image src={logo} height={40} width={40} alt="logo" />
    //           <div
    //             onClick={handleNav}
    //             className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
    //           >
    //             <AiOutlineClose />
    //           </div>
    //         </div>
    //         <div className="flex justify-center border-b border-stone-400 my-4">
    //           <p className="">Ephrem M. personal portfolio</p>
    //         </div>
    //         <div className="pt-5">
    //           <div className="flex flex-col items-start justify-start cursor-pointer gap-7">
    //             <NavLinks navLinksForMobile={mobileClassName} />
    //           </div>
    //         </div>
    //         <div className="flex flex-col items-center pt-20">
    //           <p className="text-lgi font-bold"> Lets connect</p>
    //           <div className="flex items-center justify-center text-[10px]">
    //             <div className="rounded-full cursor-pointer">
    //               <SocialLinks />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
  );
};

export default SideNav;
