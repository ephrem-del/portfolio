"use client";

import ProjectCard from "./project-card";
import useProject from "./useProject";
import { useEffect, useState } from "react";

const skills = ["All", "Flutter", "Next"];

const ProjectSection = () => {
  const projectsData = useProject();
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered =
      selectedSkill === "All"
        ? projectsData
        : projectsData.filter((project: any) =>
            project.skills.includes(selectedSkill)
          );
    setFilteredProjects(filtered);
  }, [projectsData, selectedSkill]);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-6xl mb-0">My Projects</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex gap-3 p-2">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={`px-5 py-3 text-lg font-poppins rounded-lg  ${
              selectedSkill === skill
                ? "bg-darkorange-100"
                : "bg-whitesmoke-200 dark:bg-white text-black dark:hover:bg-gainsboro-200"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-7 pt-[2rem] tablet:flex-row">
        {filteredProjects.map((project: any) => (
          <ProjectCard
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
