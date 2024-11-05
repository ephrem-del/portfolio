import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getFirestoreData(collectionName: any) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const servicesData = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return { collectionData: servicesData, error: null };
  } catch (error) {
    console.error("error fetching data:", error);
    return { collectionData: null, error: error.message || "an error occured" };
  }
}