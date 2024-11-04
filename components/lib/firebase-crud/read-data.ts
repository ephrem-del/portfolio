import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export async function getFirestoreData(collectionName:any) {
  // const querySnapshot = await getDocs(collection(db, "services"));

  const querySnapshot = await getDocs(collection(db, collectionName));
  const servicesData = querySnapshot.docs.map(doc => {
    return { 
      ...doc.data(),
      id: doc.id}
  });

  return servicesData
}