import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default async function getFirestoreData() {
  const querySnapshot = await getDocs(collection(db, "services"));
  const serviceData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return serviceData;
}
