import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/lib/firebase";

const useTestimonial = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const testimonials = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setTestimonialsData(testimonials);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchTestimonialsData();
  }, []);

  return testimonialsData;
};

export default useTestimonial;
