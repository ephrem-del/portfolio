import React from "react";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="tablet:text-6xl mb-0">My Projects</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex flex-col gap-3 tablet:flex-row"></div>
    </section>
  );
};

export default ProjectSection;
