import { addDoc, collection, serverTimestamp } from "firebase/firestore";
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
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      description: "E-SIM selling web development",
      skills: ["UI/UX", "React", "Tailwind CSS"],
    },
    {
      title: "web devlopment",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      description: "E-commerce site development",
      skills: ["Next", "Firebase", "Tailwind CSS"],
    },
    {
      title: "mobile app",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      description: "Mobile app development",
      skills: ["Flutter", "Dart", "Tailwind CSS"],
    },
  ],

  testimonials: [
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
    },
  ],
};

const addingData = async () => {
  try {
    for (const [collectionName, documents] of Object.entries(collectionsData)) {
      const collectionRef = collection(db, collectionName);

      for (const doc of documents) {
        const docRef = await addDoc(collectionRef, {
          ...doc,
          createdAt: serverTimestamp(),
        });
        console.log(`Document added to ${collectionName} with ID: `, docRef.id);
      }
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addingData;
