import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/lib/firebase";

export default function useProject() {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projects = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProjectsData(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [projectsData]);

  useEffect(() => {
    const filtered =
      selectedSkill === "All"
        ? projectsData
        : projectsData.filter((project: any) =>
            project.skills.includes(selectedSkill)
          );
    setFilteredProjects(filtered);
  }, [projectsData, selectedSkill]);

  return { filteredProjects, selectedSkill, setSelectedSkill };
}
