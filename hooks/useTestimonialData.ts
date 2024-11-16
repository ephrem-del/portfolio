import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface TestimonialType {
  name: string;
  title: string;
  imageUrl: string;
  feedback: string;
}

const useTestimonialData = () => {
  const [data, setData] = useState<TestimonialType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<TestimonialType>("testimonials", 5)
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

export default useTestimonialData;