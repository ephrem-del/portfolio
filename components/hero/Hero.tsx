"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import ToggleTheme from "../theme-toggle/toggle-theme";
import useHeroData from "../../hooks/useHeroData";
import Link from "next/link";
import SocialMediaPlatformLinks from "./social-media-platform-links";

const HeroSection = () => {
  const { data, isLoading, error } = useHeroData({ itemQuantity: 1 });

  if (isLoading) return <div className="px-[400px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const greeting = data.length > 0 ? data[0].greeting : "";
  const name = data.length > 0 ? data[0].name : "";
  const profession = data.length > 0 ? data[0].title : "";
  const description = data.length > 0 ? data[0].description : "";
  const image = data.length > 0 ? data[0].imageUrl : "";

  return (
    <>
      <div className="fixed flex items-center justify-center top-40 left-4 cursor-pointer tablet:top-40 tablet:left-8 laptop:top-60 laptop:left-20">
        <ToggleTheme />
      </div>
      <div
        id="hero"
        className={`flex flex-col-reverse items-center justify-center px-[5%]  pt-[10%]  gap-10 font- dark:text-white tablet:flex-row tablet:gap-[140px] tablet:px-[20%] desktop:px-[20%] desktop:pt-[10%]`}
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-col desktop:gap-[20px]">
            <div className=" flex flex-col items-start justify-start gap-1.5 desktop:self-stretch">
              <div className="flex items-start justify-start">
                <div className="tracking-[0.03em] font-semibold inline-block  desktop:min-w-[90px]">
                  {greeting}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-start">
                  <h3 className="m-0  font-semibold text-lg text-darkorange-100">
                    {name}
                  </h3>
                </div>
                <div className="flex items-start justify-start gap-2 -my-[1rem] desktop:text-2xl desktop:flex-col desktop:-my-[2px]">
                  <h1 className="text-inherit tracking-[0.03em] font-bold font-[inherit] desktop:inline-block desktop:max-w-full desktop:w-[400px] desktop:m-0">
                    {profession}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="flex  text-left leading-relaxed tracking-normal">
                {description}
              </p>
              <Link
                href={"#contact"}
                className=" bg-orange-400 rounded text-lg no-underline px-[1rem] py-[.5rem] text-white desktop:text-2xl cursor-pointer"
              >
                hire me
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-full overflow-hidden h-[200px] w-[200px] relative  desktop:h-[250px] desktop:w-[250px]">
            <Image
              src={image}
              alt={`Image of ${name}`}
              className="object-cover"
              fill
            />
          </div>
          <div className="hidden tablet:flex">
            <div className="flex flex-wrap items-center justify-center gap-3 my-8 w-full">
              <div className="rounded-full cursor-pointer">
                <SocialMediaPlatformLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
    </Suspense>
  );
};

export default Hero;
