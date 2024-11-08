import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export async function getFirestoreData(
  collectionName: any,
  limitNumber?: number
) {
  const collectionRef = collection(db, collectionName);
  const q = query(
    collectionRef,
    orderBy("createdAt", "desc"),
    limit(limitNumber)
  );
  try {
    const querySnapshot = await getDocs(q);
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
