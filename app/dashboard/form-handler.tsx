"use client";

import { useState } from "react";
import createFirestoreData from "../../components/lib/firebase-crud/create-data";
import uploadImage from "../../components/lib/firebase-crud/storage";

export default function FormHandler() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    techStack: "",
    file: null,
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const techStackArray = formData.techStack
        ? formData.techStack.split(",").map((tech) => tech.trim())
        : [];

      let data: any = {
        title: formData.title,
        description: formData.description,
      };

      switch (formData.category) {
        case "hero":
          data = {
            ...data,
            description: formData.description,
          };
          break;
        case "aboutMe":
          data = {
            skills: techStackArray,
          };
          break;
        case "services":
          data = {
            ...data,
            description: formData.description,
          };
          break;
        case "projects":
          data = {
            ...data,
            techStack: techStackArray,
          };
          break;
        case "testimonials":
          data = {
            name: formData.title,
            feedback: formData.description,
          };
          break;
        default:
          throw new Error("Unknown category");
      }

      if (formData.file) {
        const uploadedImageUrl = await uploadImage(
          formData.category,
          formData.file
        );
        if (uploadedImageUrl) {
          data.imageUrl = uploadedImageUrl;
        }
      }

      await createFirestoreData({
        category: formData.category,
        data,
      });

      setFormData({
        category: "",
        title: "",
        description: "",
        techStack: "",
        file: null,
      });
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit data. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 bg-gray-100 rounded-md shadow-md"
    >
      <label className="block mb-2">
        <span className="text-gray-700">Category</span>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="mt-1 block w-full h-[40px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
        >
          <option value="">Select a category</option>
          <option value="hero">Hero</option>
          <option value="aboutMe">About Me</option>
          <option value="services">Services</option>
          <option value="projects">Projects</option>
          <option value="testimonials">Testimonials</option>
        </select>
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full h-[25px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Description</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="mt-1 block w-full h-[70px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        ></textarea>
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Tech Stack (comma-separated)</span>
        <input
          type="text"
          name="techStack"
          value={formData.techStack}
          onChange={handleInputChange}
          className="mt-1 block w-full h-[50px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Upload Image</span>
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </label>

      <button
        type="submit"
        // disabled={uploading}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-20"
      >
        {/* {uploading ? "Uploading..." : "Submit"} */}
        submit
      </button>
    </form>
  );
}
