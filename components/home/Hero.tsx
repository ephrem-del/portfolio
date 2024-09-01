import Image from "next/image";
import React from "react";
import photoP from "../../public/photoP.jpg";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ToggleTheme from "../themeToggle/Theme";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[7rem] right-[5rem] flex items-center justify-center h-[30px] w-[30px] rounded-full bg-slate-500" >
        <ToggleTheme />
      </div>
      <div className="flex flex-col-reverse items-center sm:flex-row  gap-2 sm:gap-[8rem]  ">
        <div className="max-w-[400px]">
          <h3 className="text-md font-bold">Hi I am </h3>
          <h2 className="text-lg font-bold">Ephrem Mekuria</h2>
          <h1 className="text-3xl font-bold">Flutter developer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            cumque ipsum
          </p>
          <button className="bg-orange-400 rounded px-5 mt-3 text-white">
            hire me
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full ">
            <Image
              src={photoP}
              alt="ephrem's photo"
              height={150}
              width={150}
              className="obeject-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-2 my-8 w-full sm:w-[80%]">
            <div className="rounded-full cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full  cursor-pointer">
              <FaGithub />
            </div>
            <div className="rounded-full cursor-pointer">
              <FaFacebook />
            </div>
            <div className="rounded-full cursor-pointer">
              <FaDiscord />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
