type FormFieldType = {
  name: string;
  label: string;
  type: "text" | "textarea" | "number" | "date" | "email" | "file" | "url";
};

export const formFields: { [key: string]: FormFieldType[] } = {
  hero: [
    { name: "greeting", label: "Greetings", type: "textarea" }, // Hi I am
    { name: "name", label: "Name", type: "text" }, // ephrem mekuria
    { name: "title", label: "Title", type: "text" }, // flutter developer
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  aboutMe: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "skills", label: "Skills (comma-separated)", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  services: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    { name: "description", label: "Description", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  projects: [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "skills", label: "Skills (comma-separated)", type: "text" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  testimonials: [
    { name: "name", label: "Name", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "feedback", label: "Feedback", type: "textarea" },
    { name: "imageUrl", label: "Image URL", type: "file" },
  ],
  uploadCV: [{ name: "cvUrl", label: "CV URL", type: "file" }],
  socialMediaPlatforms: [
    { name: "name", label: "Name", type: "text" },
    { name: "linkUrl", label: "link Url", type: "url" },
    { name: "imageUrl", label: "Image Url", type: "file" },
  ],
};

export const tableHeaders: { [key: string]: string[] } = {
  hero: [
    "Greetings",
    "Name",
    "Title",
    "Description",
    "Image",
    "Created At",
    "Actions",
  ],
  aboutMe: ["Title","Description","Skills", "Image", "Created At", "Actions"],
  services: ["Title", "Description", "Image", "Created At", "Actions"],
  projects: [
    "Title",
    "Description",
    "Tech Stack",
    "Image",
    "Created At",
    "Actions",
  ],
  testimonials: ["Name", "Title", "Feedback", "Image", "Created At", "Actions"],

  uploadCV: ["CV Url", "Created At", "Actions"],
  socialMediaPlatforms: ["Name", "link Url", "image", "created at", "Actions"],
};
