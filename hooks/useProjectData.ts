import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";
// import useFirestoreData from "./useFirestore";

export default function useProjectData() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    getFirestoreData("projects")
      .then(({ collectionData, error }) => {
        if (error != null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    const filtered =
      selectedSkill === "All"
        ? data
        : data.filter((project: any) => project.skills.includes(selectedSkill));
    setFilteredProjects(filtered);
  }, [selectedSkill]);

  return {
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
  };
}
