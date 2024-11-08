import { useEffect, useState } from "react";
import { getFirestoreData } from "../components/lib/firebase-crud/read-data";

interface Testimonial {
  title: string;
  imageUrl: string;
  description: string;
  skills: string[];
}

interface FirestoreResponse {
  collectionData: Testimonial[];
  error: string | null;
}

const useTestimonialData = () => {
  const [data, setData] = useState<Testimonial[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    setLoading(true);
    getFirestoreData("testimonials")
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

export default useTestimonialData;
