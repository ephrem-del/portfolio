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

const useServiceData = () => {
  const [data, setData] = useState<Project[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getFirestoreData("services")
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

  return { data, isLoading, error };
};

export default useServiceData;
