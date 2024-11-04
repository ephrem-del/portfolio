
import { useEffect, useState } from "react";
import {getFirestoreData} from "../components/lib/firebase-crud/read-data";

const useFirestoreData = (collectionName:any) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(()=>{
      const fetchData = async () => {
      setLoading(true)
      try {
        const servicesData = await getFirestoreData(collectionName)
        setData(servicesData)

      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err);

      } finally {
        setLoading(false);
      }
      }
      
      fetchData()
    },[])

      return {data, isLoading, error}
  };
  
  export default useFirestoreData;