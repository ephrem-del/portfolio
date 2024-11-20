
interface FormProps {
  formData: any;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormComponent({
  formData,
  onInputChange,
  onFileChange,
  onSubmit,
}: FormProps) {

  return (
    <form
      onSubmit={onSubmit}
      className=" p-6 bg-gray-100 rounded-md shadow-md"
    >
      <label className="block mb-2">
        <span className="text-gray-700">Category</span>
        <select
          name="category"
          value={formData.category}
          onChange={onInputChange}
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
      {formData.category == "testimonials" && (
        <label className="block mb-2">
          <span className="text-gray-700">name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            className="mt-1 block w-full h-[25px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </label>
      )}

      {["services", "projects", "testimonials"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onInputChange}
            className="mt-1 block w-full h-[25px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </label>
      )}

      {["hero", "services", "projects"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={onInputChange}
            className="mt-1 block w-full h-[70px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          ></textarea>
        </label>
      )}

      {formData.category == "testimonials" && (
        <label className="block mb-2">
          <span className="text-gray-700">feedback</span>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={onInputChange}
            className="mt-1 block w-full h-[70px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          ></textarea>
        </label>
      )}

      {["aboutMe", "projects"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Tech Stack (comma-separated)</span>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={onInputChange}
            className="mt-1 block w-full h-[50px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </label>
      )}

      <label className="block mb-4">
        <span className="text-gray-700">Upload Image</span>
        <input
          type="file"
          onChange={onFileChange}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-20"
      >
        submit
      </button>
    </form>
  );
}

