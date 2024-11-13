import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";
import { Skills } from "../components/projects/project-section";

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  techStack: string[];
}

export default function useProjectData() {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skills>(Skills.All);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<Project>("projects", 3)
      .then(({ collectionData, error }) => {
        if (error != null) {
          setError(error);
        } else {
          setData(collectionData ?? []);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const filtered =
        selectedSkill === "All"
          ? data
          : data.filter((project: Project) =>
              project.techStack.includes(selectedSkill)
            );
      setFilteredProjects((prevFilteredProjects) =>
        prevFilteredProjects === filtered ? prevFilteredProjects : filtered
      );
    }
  }, [data, selectedSkill]);

  return {
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
  };
}
