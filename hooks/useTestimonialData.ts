import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface Testimonial {
  name: string;
  title: string;
  imageUrl: string;
  feedback: string;
}

const useTestimonialData = () => {
  const [data, setData] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getFirestoreData<Testimonial>("testimonials", 5)
      .then(({ collectionData, error }) => {
        if (error) {
          setError(error);
        } else {
          setData(collectionData ?? []);
        }
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};

export default useTestimonialData;