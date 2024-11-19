import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import uploadImage from "./storage";

export const createFirestoreData = async ({
  category,
  data,
}: {
  category: string;
  data: any;
}) => {
  try {
    const collectionRef = collection(db, category);

    let uploadedImageUrl;
    if (data.file) {
      uploadedImageUrl = await uploadImage(category, data.file);
    }

    const docRef = await addDoc(collectionRef, {
      ...data,
      ...(uploadedImageUrl && { imageUrl: uploadedImageUrl }),
      createdAt: serverTimestamp(),
    });

    console.log(`Document added to ${category} with ID: `, docRef.id);
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error adding document: ", e.message);
    } else {
      console.error("Unexpected error: ", e);
    }
  }
};

export default createFirestoreData;
