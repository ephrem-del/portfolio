"use client";

import Image from "next/image";
import React from "react";
import useAboutMeData from "../../hooks/useAboutMeData";

const AboutMe = () => {
  const { data, isLoading, error } = useAboutMeData({ itemQuantity: 1 });

  if (isLoading) return <div className="px-[400px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = data.length > 0 ? data[0].title : "";
  const description = data.length > 0 ? data[0].description : "";
  const skills: string[] = data.length > 0 ? data[0].skills : [];
  const image = data.length > 0 ? data[0].imageUrl : "";

  return (
    <div>
      <div
        id="about-me"
        className={`flex items-center justify-center px-[5%]  pt-[10%]  gap-5  dark:text-white tablet:gap-[140px] tablet:px-[40%] desktop:px-[30%]`}
      >
        <div className="hidden tablet:flex">
          <div className="rounded-full overflow-hidden h-[200px] w-[200px] relative  desktop:h-[300px] desktop:w-[300px]">
            <Image
              src={image}
              alt={`Image ${title}`}
              className="object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex justify-start pb-[42px]">
          <div className=" flex flex-col gap-[5px]">
            <h1 className="m-0 relative font-semibold font-[inherit]  tablet:text-3xl ">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-start gap-5 tablet:min-w-[300px]">
              <p className="flex  text-left leading-relaxed tracking-normal">
                {description}
              </p>
              <div className="flex flex-col items-start justify-center gap-[7px] tablet:text-md">
                {skills.map((skill: string) => (
                  <div
                    key={skill}
                    className="flex flex-col gap-1 tablet:gap-[2px]"
                  >
                    <div className=" font-semibold inline-block ">
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </div>
                    <div className="h-8 relative">
                      <div className="absolute top-[10px] left-[20px] rounded-md bg-whitesmoke-200 w-[250px] h-2 tablet:w-[300px] tablet:h-2" />
                      <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 w-[200px] h-2 tablet:w-[250px] tablet:h-2 z-[1]" />
                      <div className="absolute top-[3px] left-[195px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-200 border-darkorange-100 border-[0px] border-solid box-border z-[2] w-5 h-5 tablet:w-6 tablet:h-6 tablet:left-[240px] tablet:top-[1px] " />
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
