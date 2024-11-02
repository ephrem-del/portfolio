import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/lib/firebase";

const useFirestoreData = (collectionName:any) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
    
      const fetchFirestoreData = async () => {
        setLoading(true)

        try {
          const querySnapshot = await getDocs(collection(db, collectionName));
          const item = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
  
          setData(item);
          setError(null)

        } catch (error) {
          console.error("Error fetching projects:", error);
        } finally{
          setLoading(false)
        }
      };
  
      fetchFirestoreData();
    }, [collectionName]);
  
    return {data, loading, error}
  };
  
  export default useFirestoreData;