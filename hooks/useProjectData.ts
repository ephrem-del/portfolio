import { useEffect, useState } from "react";
import { fetchFirestoreData } from "../components/lib/firebase-crud/fetch-data";
import { Skills } from "../components/projects/project-section";

export interface ProjectType {
  id?: string;
  title: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

export default function useProjectData() {
  const [data, setData] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skills>(
    Skills.All.toLowerCase() as Skills
  );
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchFirestoreData<ProjectType>("projects", 3)
      .then(({ collectionData, error }) => {
        if (error !== null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const filtered =
        selectedSkill === Skills.All.toLowerCase()
          ? data
          : data.filter((project: ProjectType) =>
              project.skills.includes(selectedSkill.toLowerCase())
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