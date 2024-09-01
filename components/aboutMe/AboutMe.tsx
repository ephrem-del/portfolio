import Image from "next/image";
import React from "react";
import photoP from "../../public/photoP.jpg";

const AboutMe = () => {
  return (
    <div className="flex gap-[8rem] ">
      <div className="relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image src={photoP} alt="profile photo" />
      </div>
      <div className="flex flex-col max-w-[300px]">
        <h1 className="text-[2rem]">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia
          reprehenderit
        </p>
        <ul>
          <li>Flutter</li>
          <li>Flutter</li>
          <li>Flutter</li>
          <li>Flutter</li>
          <li>Flutter</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
