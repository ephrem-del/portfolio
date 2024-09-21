import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const collectionsData = {
  services: [
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      icon: "FaCode",
    },
    {
      title: "App Development",
      description: "Mobile app development for different Brand devices",
      icon: "SiFlutter",
    },
    {
      title: "Software Developer ",
      description: "Responsive and scalable full stack web development",
      icon: "LiaConnectdevelop",
    },
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      icon: "FaCode",
    },
  ],
  users: [
    {
      name: "John Doe",
      email: "john@example.com",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
    },
  ],
  products: [
    {
      productName: "Laptop",
      price: 999,
    },
    {
      productName: "Smartphone",
      price: 699,
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
