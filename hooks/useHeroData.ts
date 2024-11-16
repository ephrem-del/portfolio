import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

export interface HeroType {
  title: string;
  description: string;
  imageUrl: string;
}

const useHeroData = () => {
  const [data, setData] = useState<HeroType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<HeroType>("hero", 1)
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

export default useHeroData;
