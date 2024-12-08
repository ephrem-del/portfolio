"use client";

import Image from "next/image";
import React from "react";
import { ProjectType } from "../../hooks/useProjectData";
import imagePlaceholder from "../../public/subtract.png";

const ProjectCard: React.FC<ProjectType> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center tablet:items-start  text-black rounded-lg laptop:items-center  w-[300px] relative  tablet:w-[200px] laptop:w-[300px]">
      <div className="relative h-[200px] w-[300px] tablet:h-[250px] tablet:w-[200px] laptop:h-[250px] laptop:w-[300px]">
        <Image
          src={imageUrl ?? imagePlaceholder}
          alt={`my ${title} image`}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-sm text-darkorange-100 pt-3">{title}</h3>
      <h1 className="mt-2 text-sm text-gray-700  line-clamp-2 dark:text-white">
        {description}
      </h1>
    </div>
  );
};

export default ProjectCard;
