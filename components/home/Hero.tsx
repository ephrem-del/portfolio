import Image from "next/image";
import React from "react";
import photoP from "../../public/photoP.jpg";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ToggleTheme from "../themeToggle/Theme";

const Hero = () => {
  return (
    <>
      <div className="absolute top-[7rem] right-[5rem] flex items-center justify-center h-[30px] w-[30px] rounded-full bg-slate-500">
        <ToggleTheme />
      </div>
      <div className="flex justify-center flex-col-reverse sm:flex-row  sm:gap-[5rem]  ">
        <div className="flex flex-col">
          <p>
            Hi I am <br />
            <strong className="text-green-700 text-lg">Ephrem Mekuria</strong>
            <br />
            <span className="relative inline-block pb-10">
              <strong className="text-[3rem]">Flutter</strong>
              <strong className="text-[3rem] absolute top-12 left-[5rem]">
                Developer
              </strong>
            </span>
          </p>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              cumque ipsum
            </p>
            <button className=" bg-orange-400 rounded px-5 mt-3 text-white">
              hire me
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center"> */}
          {/* <div className="relative h-[300px] w-[300px] bg-blue-400 rounded-full overflow-hidden "> */}
            {/* <div className="absolute inset-0 top-8 left-4">
              <Image
                src={photoP}
                alt="ephrem's photo"
                // layout="fill"
                objectFit="cover"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div> */}
            <div className="h-[617.2px] w-[538px] relative flex-1">
              <Image
                src={photoP}
                alt="ephrem's photo"
                // layout="fill"
                // objectFit="cover"
                // width={250}
                // height={250}
                className="absolute top-[0px] left-[0px] w-full h-full rounded-full object-cover"
              />
              <div className="absolute top-[78px] left-[82px] bg-slate-800 w-[374px] h-[83px] z-[1]" />
            {/* </div> */}
          {/* </div> */}
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
      {/* <div
        className={`self-stretch flex flex-row items-start justify-start gap-[141px]`}
      >
        <div className="flex-1 flex flex-col items-start justify-center pb-[25.2px] ">
          <div className=" flex flex-col items-start justify-start gap-[43px]  ">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <div className="flex flex-row items-start justify-start">
                <div className="font-semibold text-stone-950 ">{`Hi I am `}</div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start">
                  <h3 className=" font-bold text-stone-950 ">{`Muhammad Umair `}</h3>
                </div>
                <div className=" flex flex-col items-start justify-start text-stone-950 font-bold text-[3rem]">
                  <h1 className="relative text-inherit inline-block max-w-full">{`UI & UX`}</h1>
                  <div className="flex flex-row items-start justify-end">
                    <h1 className="relative text-inherit">{`Designer `}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-start gap-[27px] ">
              <div className=" text-stone-950">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <button className=" bg-orange-400 rounded px-5 mt-3 text-white">
                hire me
              </button>
            </div>
          </div>
        </div>
        <div className="h-[617.2px] w-[538px] relative flex-1">
          <Image
            src={photoP}
            alt="ephrem's photo"
            // layout="fill"
            // objectFit="cover"
            // width={250}
            // height={250}
            className="absolute top-[0px] left-[0px] w-full h-full rounded-full object-cover"
          />
          <div className="absolute top-[78px] left-[82px] bg-slate-800 w-[374px] h-[83px] z-[1]" />
        </div>
      </div> */}
    </>
  );
};

export default Hero;
