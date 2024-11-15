import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import uploadImage from "./storage";
import imageUrl from "../../../public/subtract.png";
import heroImageUrl from "../../../public/group-2@2x.png";
import aboutImageUrl from "../../../public/group-7@2x.png";

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
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      imageUrl: imageUrl,
      description: "E-SIM selling web development",
      techStack: ["UI/UX", "React", "Tailwind CSS"],
    },
    {
      title: "web devlopment",
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      imageUrl: imageUrl,
      description: "E-commerce site development",
      techStack: ["Next", "Firebase", "Tailwind CSS"],
    },
    {
      title: "mobile app",
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/project.png?alt=media&token=625b774f-fd6c-4d05-a72a-edf455a3205c",
      imageUrl: imageUrl,
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
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
      imageUrl: imageUrl,
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
      imageUrl: imageUrl,
    },
    {
      name: "Hakim",
      title: "CTO",
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
          a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
          fugit eos similique quasi odio quo laudantium, minus sunt.`,
      // imageUrl:
      //   "https://firebasestorage.googleapis.com/v0/b/portfolio-d5a6b.appspot.com/o/programming.jpg?alt=media&token=48a0520e-b0ce-477e-93ba-3ac41d8847d2",
      imageUrl: imageUrl,
    },
  ],
};

function hasImageUrl(doc: any): doc is { imageUrl: string } {
  return "imageUrl" in doc && typeof doc.imageUrl === "string";
}

const addingData = async () => {
  try {
    for (const [collectionName, documents] of Object.entries(collectionsData)) {
      const collectionRef = collection(db, collectionName);

      for (const doc of documents) {
        let uploadedImageUrl: string | undefined = undefined;

        if (hasImageUrl(doc)) {
          uploadedImageUrl = await uploadImage(collectionName, doc.imageUrl);
        }

        const docRef = await addDoc(collectionRef, {
          ...doc,
          ...(uploadedImageUrl && { imageUrl: uploadedImageUrl }),
          createdAt: serverTimestamp(),
        });
        console.log(`Document added to ${collectionName} with ID: `, docRef.id);
      }
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error adding document: ", e.message);
    } else {
      console.error("Unexpected error: ", e);
    }
  }
};

export default addingData;