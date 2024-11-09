import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface FirestoreResponse {
  collectionData: Service[];
  error: string | null;
}

const useServiceData = () => {
  const [data, setData] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData("services", 4)
      .then(({ collectionData, error }: FirestoreResponse) => {
        if (error) {
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
