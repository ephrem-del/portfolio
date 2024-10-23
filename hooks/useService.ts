import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/lib/firebase";

const useService = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const services = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setServicesData(services);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchServicesData();
  }, []);

  return servicesData;
};

export default useService;
