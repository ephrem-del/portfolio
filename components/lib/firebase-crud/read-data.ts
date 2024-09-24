"use client";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useFirestoreData = () => {
  const [collectionsData, setCollectionsData] = useState({
    services: [],
    users: [],
    products: [],
  });

  const fetchData = async () => {
    try {
      const collections = ["services", "users", "products"];
      const data = {};

      for (const collectionName of collections) {
        const querySnapshot = await getDocs(collection(db, collectionName));

        data[collectionName] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }
      setCollectionsData((prevData) => ({
        ...prevData,
        ...data,
      }));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("data ", collectionsData);

  return collectionsData;
};

export default useFirestoreData;
