import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface AboutMe {
  skills: string[];
  imageUrl: string;
}

const useAboutMeData = () => {
  const [data, setData] = useState<AboutMe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<AboutMe>("aboutMe", 1)
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

  return { data, isLoading, error };
};

export default useAboutMeData;
