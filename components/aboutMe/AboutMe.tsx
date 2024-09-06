import Image from "next/image";
import React from "react";
import photoP from "../../public/photoP.jpg";

const AboutMe = () => {
  return (
    <>
     {/* <div id="about-me" className="flex justify-center gap-[8rem] ">
    //   <div className="relative w-[150px] h-[150px] overflow-hidden rounded-full">
    //     <Image src={photoP} alt="profile photo" />
    //   </div>
    //   <div className="flex flex-col max-w-[300px]">
    //     <h1 className="text-[2rem]">About Me</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia
    //       reprehenderit
    //     </p>
    //     <ul>
    //       <li>Flutter</li>
    //       <li>Flutter</li>
    //       <li>Flutter</li>
    //       <li>Flutter</li>
    //       <li>Flutter</li>
    //     </ul>
    //   </div>
     </div> */}
    <div
    id="about-me"
      className={`flex-1 flex flex-row items-end justify-center gap-[30px] text-46xl font-nav-bar-text-21 mq925:gap-4 mq1400:flex-wrap`}
    >
      <div className="h-[675px] w-[681px] relative min-w-[681px] max-w-full mq925:min-w-full mq1400:flex-1">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover"
          loading="lazy"
          alt=""
          src="/group-7@2x.png"
        />
        <div className="absolute top-[111px] left-[153px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
      </div>
      <div className="flex-1 flex flex-col justify-center pb-[42px] box-border min-w-[491px] mq925:pb-[27px] mq925:box-border mq925:min-w-full">
        <div className=" flex flex-col gap-[15px] max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block max-w-full mq925:text-33xl mq450:text-20xl">{`About Me `}</h1>
          <div className="flex flex-col items-start justify-start gap-5 text-2xl">
            <div className=" tracking-[0.03em] mq450:text-mid">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[15px] text-5xl">
              <div className="flex flex-col gap-[7px]">
                <div className="tracking-[0.03em] font-semibold inline-block min-w-[35px] mq450:text-lgi">
                  UX
                </div>
                <div className="h-8 relative">
                  <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[430px] h-3" />
                  <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[300px] h-3 z-[1]" />
                  <div className="absolute top-[0px] left-[300px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[17px]">
                <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">
                  Website Design
                </div>
                <div className="h-8 relative">
                  <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[430px] h-3" />
                  <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[300px] h-3 z-[1]" />
                  <div className="absolute top-[0px] left-[300px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[18px]">
                <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">{`App Design `}</div>
                <div className="h-8 relative">
                  <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[430px] h-3" />
                  <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[300px] h-3 z-[1]" />
                  <div className="absolute top-[0px] left-[300px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2">
                <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">{`Graphic Design `}</div>
                <div className="h-8 relative">
                  <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[430px] h-3" />
                  <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[300px] h-3 z-[1]" />
                  <div className="absolute top-[0px] left-[300px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
