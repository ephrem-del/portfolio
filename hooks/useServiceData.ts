import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/get-data";

export interface ServiceType {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
}

const useServiceData = () => {
  const [data, setData] = useState<ServiceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<ServiceType>("services", 4)
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

export default useServiceData;
