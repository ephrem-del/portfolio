import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const collectionsData = {
  services: [
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      icon: "DiJsBadge",
    },
    {
      title: "App Development",
      description: "Mobile app development for different Brand devices",
      icon: "DiReact",
    },
    {
      title: "Software Developer ",
      description: "Responsive and scalable full stack web development",
      icon: "DiCodeBadge",
    },
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      icon: "DiJsBadge",
    },
  ],
};

const addingData = async () => {
  try {
    for (const [collectionName, documents] of Object.entries(collectionsData)) {
      const collectionRef = collection(db, collectionName);

      for (const doc of documents) {
        const docRef = await addDoc(collectionRef, doc);
        console.log(`Document added to ${collectionName} with ID: `, docRef.id);
      }
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addingData;
