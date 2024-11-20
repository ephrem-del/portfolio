"use client";

import { useState } from "react";
import FormComponent from "./form-component";
import { handleSubmitToAPI, prepareFormData } from "./form-service";

export default function FormHandler() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    title: "",
    description: "",
    feedback: "",
    techStack: "",
    file: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e:any) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({ ...prevData, file: file  }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const preparedData = prepareFormData(formData);
    try {
      await handleSubmitToAPI(preparedData);
      alert("Form submitted successfully!");
      setFormData({
        category: "",
        name: "",
        title: "",
        description: "",
        feedback: "",
        techStack: "",
        file: null,
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <FormComponent
      formData={formData}
      onInputChange={handleInputChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
}
