import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface Service {
  title: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

interface FirestoreResponse {
  collectionData: Service[];
  error: string | null;
}

const useServiceData = () => {
  const [data, setData] = useState<Service[]>([]);
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
