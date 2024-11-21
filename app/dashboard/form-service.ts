import createFirestoreData from "../../components/lib/firebase-crud/create-data";
import uploadImage from "../../components/lib/firebase-crud/storage";
import { FormData } from "../../hooks/useFormHandler";

export const prepareFormData = (formData: FormData) => {
  const techStackArray = formData.techStack
    ? formData.techStack.split(",").map((tech: string) => tech.trim())
    : [];

  let data = {};
  switch (formData.category) {
    case "hero":
      data = { description: formData.description };
      break;
    case "aboutMe":
      data = { skills: techStackArray };
      break;
    case "services":
      data = { description: formData.description, title: formData.title };
      break;
    case "projects":
      data = {
        description: formData.description,
        title: formData.title,
        skills: techStackArray,
      };
      break;
    case "testimonials":
      data = {
        title: formData.title,
        name: formData.name,
        feedback: formData.feedback,
      };
      break;
  }
  return { category: formData.category, data, file: formData.file };
};

export const handleSubmitToAPI = async ({ category, data, file }: any) => {
  if (file) {
    const uploadedImageUrl = await uploadImage(category, file);
    if (uploadedImageUrl) {
      data.imageUrl = uploadedImageUrl;
    }
  }
  await createFirestoreData({ category, data });
};
