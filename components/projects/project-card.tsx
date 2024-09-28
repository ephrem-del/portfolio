import Image from "next/image";
import React from "react";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col justify-start text-black rounded-lg">
      <Image
        alt="personal image"
        src={imageUrl}
        className="h-[200px] w-[320px] relative tablet:h-[400px] tablet:w-[350px]"
      />
      <h3 className="text-sm text-darkorange-100 pt-3">{title}</h3>
      <h1 className="text-md mt-0 dark:text-white">{description}</h1>
    </div>
  );
};

export default ProjectCard;
