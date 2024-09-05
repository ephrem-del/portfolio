import Image from "next/image";
import React from "react";
import photoP from "../../public/photoP.jpg";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ToggleTheme from "../themeToggle/Theme";
import SocialLinks from "./social-links";

const Hero = () => {
  return (
    <>
      {/* <div className="absolute top-[7rem] right-[5rem] flex items-center justify-center h-[30px] w-[30px] rounded-full bg-slate-500">
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

         <div className="flex flex-col items-center"> 
        <div className="relative h-[300px] w-[300px] bg-blue-400 rounded-full overflow-hidden "> 
        <div className="absolute inset-0 top-8 left-4">
              <Image
                src={photoP}
                alt="ephrem's photo"
                // layout="fill"
                objectFit="cover"
                width={250}
                height={250}
                className="rounded-full"
              />
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
      </div>  */}
      <div
        className={`flex flex-row items-center justify-center gap-[140px] text-5xl font-nav-bar-text-21 mq925:gap-[35px] mq450:gap-[18px] mq1400:gap-[70px] mq1400:flex-wrap `}
      >
        <div className="flex-1 flex flex-col pb-[25px] min-w-[450px] mq925:min-w-full">
          <div className="flex flex-col items-center gap-[40px] max-w-full mq925:gap-[21px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                <div className="tracking-[0.03em] font-semibold inline-block min-w-[90px] mq450:text-lgi">{`Hi I am `}</div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full text-13xl">
                <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                  <h3 className="m-0 tracking-[0.03em] font-semibold font-[inherit]  text-darkorange-100 mq925:text-7xl mq450:text-lgi">{`Ephrem Mekuria `}</h3>
                </div>
                <div className="flex flex-col items-start justify-start mt-[-13px] text-81xl">
                  <h1 className="m-0 w-[500px] text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] inline-block max-w-full mq925:text-31xl mq925:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`Flutter`}</h1>
                  <div className="self-stretch flex flex-row justify-end mt-[-25px]">
                    <h1 className="m-0 text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] mq925:text-31xl mq925:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`Developer `}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[27px] max-w-full text-justify text-2xl">
              <div className="self-stretch tracking-[0.03em] mq450:text-mid">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <button className=" bg-orange-400 rounded text-19xl px-[2rem] text-white">
                hire me
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[617.2px] w-[538px] relative min-w-[538px] max-w-full mq925:min-w-full mq1400:flex-1">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
            <div className="absolute top-[78px] left-[82px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
          </div>
          <div className="flex items-center justify-center gap-5 my-8 w-full sm:w-[80%]">
            <div className="rounded-full cursor-pointer">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
