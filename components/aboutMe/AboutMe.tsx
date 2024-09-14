import Image from "next/image";
import React from "react";

const skills = ["Flutter", "React", "Next", "Node", "Express"];

const AboutMe = () => {
  return (
    <div className="">
      <div
        id="about-me"
        className={` flex flex-col items-center justify-center dark:text-white tablet:gap-[100px] px-[5%] font-nav-bar-text-21 tablet:flex-row tablet:px-[10%] desktop:px-[20%]`}
      >
        <div className="hidden tablet:flex">
          <div className="h-[617.2px] w-[538px] relative">
            <Image
              className="w-full h-full object-cover"
              loading="lazy"
              fill
              alt="personal image"
              src="/group-7@2x.png"
            />
            <div className="absolute top-[100px] left-[100px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
          </div>
        </div>
        <div className="flex flex-col justify-start pb-[42px] box-border tablet:min-w-[491px] ">
          <div className=" flex flex-col gap-[15px] max-w-full">
            <h1 className="m-0 relative font-semibold font-[inherit] inline-block max-w-full tablet:text-46xl ">{`About Me `}</h1>
            <div className="flex flex-col items-start justify-start gap-5 text-2xl">
              <div className=" tracking-[0.03em] mq450:text-mid">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <div className="flex flex-col items-start justify-center gap-[15px] tablet:text-5xl">
                {skills.map((skill) => (
                  <div
                    key={""}
                    className="flex flex-col gap-2 tablet:gap-[5px]"
                  >
                    <div className=" font-semibold inline-block min-w-[35px]">
                      {skill}
                    </div>
                    <div className="h-8 relative">
                      <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[300px] h-2 tablet:w-[430px] tablet:h-3" />
                      <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[200px] h-2 tablet:w-[300px] tablet:h-3 z-[1]" />
                      <div className="absolute top-[3px] left-[195px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border z-[2] w-5 h-5 tablet:w-8 tablet:h-8 tablet:left-[295px] tablet:top-[0px] " />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
