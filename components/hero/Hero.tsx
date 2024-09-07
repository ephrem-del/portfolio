import React from "react";
import SocialLinks from "./social-links";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className={`flex flex-col-reverse items-center justify-center px-[20%] font-nav-bar-text-21 desktop:flex-row desktop:gap-[140px] `}
      >
        <div className="w-full flex flex-col desktop:min-w-[450px] ">
          <div className="flex flex-col desktop:gap-[40px] desktop:max-w-full ">
            <div className=" flex flex-col items-start justify-start gap-1.5 desktop:max-w-full desktop:self-stretch">
              <div className="flex flex-row items-center justify-center py-0 px-[7px] desktop:items-start desktop:justify-start">
                <div className="tracking-[0.03em] font-semibold inline-block desktop:min-w-[90px]">{`Hi I am `}</div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full desktop:text-13xl">
                <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                  <h3 className="m-0 tracking-[0.03em] font-semibold font-[inherit]  text-darkorange-100 ">{`Ephrem Mekuria `}</h3>
                </div>
                <div className="flex flex-col items-start justify-start desktop:mt-[-13px] desktop:text-81xl">
                  <h1 className="m-0  text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] desktop:inline-block desktop:max-w-full desktop:w-[500px]">{`Flutter`}</h1>
                  <div className=" flex flex-row justify-end mt-[-25px] desktop:self-stretch">
                    <h1 className="m-0 text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] ">{`Developer `}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[27px] max-w-full text-justify text-2xl">
              <div className="self-stretch tracking-[0.03em] ">
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
          <div className="h-[300px] w-[250px] relative max-w-full desktop:min-w-[538px] desktop:h-[620px] desktop:w-[540px]  ">
            <img
              className="w-full h-full object-cover"
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
            <div className="hidden desktop:flex">
              <div className="absolute top-[78px] left-[82px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 my-8 w-full">
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
