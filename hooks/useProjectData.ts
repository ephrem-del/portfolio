import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

interface FirestoreResponse {
  collectionData: Project[];
  error: string | null;
}

export default function useProjectData() {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    setLoading(true);
    getFirestoreData("projects")
      .then(({ collectionData, error }: FirestoreResponse) => {
        if (error != null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered =
      selectedSkill === "All"
        ? data
        : data.filter((project: any) => project.skills.includes(selectedSkill));
    setFilteredProjects(filtered);
  }, [data, selectedSkill]);

  return {
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
  };
}
