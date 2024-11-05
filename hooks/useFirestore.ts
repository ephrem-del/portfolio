
import { useEffect, useState } from "react";
import {getFirestoreData} from "../components/lib/firebase-crud/read-data";

const useFirestoreData = (collectionName:any) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
  useEffect(() => {
    setLoading(true);
    getFirestoreData(collectionName)
      .then(({ collectionData, error }) => {
        if (error != null) {
          setError(error);
        } else {
          setData(collectionData);
        }
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

      return {data, isLoading, error}
  };
  
  export default useFirestoreData;