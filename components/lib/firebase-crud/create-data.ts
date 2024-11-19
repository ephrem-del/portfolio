import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import uploadImage from "./storage";

const collectionsData = {
  hero: [
    {
      title: "Subtract",
      description: `Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
nibh lectus netus in. Aliquet donec morbi convallis pretium.
Turpis tempus pharetra`,
      imageUrl: heroImageUrl,
    },
  ],
  aboutMe: [
    {
      skills: ["Flutter", "React", "Next", "Node", "Express"],
      imageUrl: aboutImageUrl,
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      // icon: "DiJsBadge",
      imageUrl: imageUrl,
    },
    {
      title: "App Development",
      description: "Mobile app development for different Brand devices",
      // icon: "DiReact",
      imageUrl: imageUrl,
    },
    {
      title: "Software Developer ",
      description: "Responsive and scalable full stack web development",
      // icon: "DiCodeBadge",
      imageUrl: imageUrl,
    },
    {
      title: "Web Development",
      description: "Responsive and scalable full stack web development",
      // icon: "DiJsBadge",
      imageUrl: imageUrl,
    },
  ],

  projects: [
    {
      title: "web development",
      imageUrl: imageUrl,
      description: "E-SIM selling web development",
      techStack: ["UI/UX", "React", "Tailwind CSS"],
    },
    {
      title: "web devlopment",
      imageUrl: imageUrl,
      description: "E-commerce site development",
      techStack: ["Next", "Firebase", "Tailwind CSS"],
    },
    {
      title: "mobile app",
      description: "Mobile app development",
      techStack: ["Flutter", "Dart", "Tailwind CSS"],
    },
  ],

  testimonials: [
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: imageUrl,
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: imageUrl,
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      imageUrl: imageUrl,
    },
  ],
};

function hasImageUrl(doc: any): doc is { imageUrl: string } {
  return "imageUrl" in doc && typeof doc.imageUrl === "string";
}

const createFirestoreData = async () => {
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
