import { useEffect, useState } from "react";
import useFirestoreData from "./useServices";

export default function useProject() {
  const{data} = useFirestoreData("projects")
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filtered =
      selectedSkill === "All"
        ? data
        : data.filter((project: any) =>
            project.skills.includes(selectedSkill)
          );
    setFilteredProjects(filtered);
  }, [data, selectedSkill]);

  return { filteredProjects, selectedSkill, setSelectedSkill };
}
