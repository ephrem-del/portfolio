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

  projects: [
    {
      title: "web development",
      imageUrl: projectImage,
      description: "E-SIM selling web development",
      skills: ["UI/UX", "React", "Tailwind CSS"],
    },
    {
      title: "web devlopment",
      imageUrl: projectImage,
      description: "E-commerce site development",
      skills: ["Next", "Firebase", "Tailwind CSS"],
    },
    {
      title: "mobile app",
      imageUrl: projectImage,
      description: "Mobile app development",
      skills: ["Flutter", "Dart", "Tailwind CSS"],
    },
  ],

  testimonials: [
    {
      name: "Hakim",
      title: "CTO",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: employeerImage,
    },
    {
      name: "Hakim",
      title: "CTO",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: employeerImage,
    },
    {
      name: "Hakim",
      title: "CTO",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: employeerImage,
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
