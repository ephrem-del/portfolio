import Image, { StaticImageData } from "next/image";

interface TestimonialsCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

const TestimonialCard: React.FC<TestimonialsCardProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[1rem] p-5 bg-whitesmoke-200 dark:bg-white rounded-lg tablet:flex-row">
      <div className="flex items-center gap-5 ">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          className="rounded-full object-cover h-[100px] w-[100px] tablet:h-[150px] tablet:w-[150px]"
        />
        <div className=" tablet:hidden">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center tablet:items-start">
        <p className="text-black m-0 text-sm">
          <span className="text-4xl text-darkorange-100 ml-[-16px]">
            &ldquo;
          </span>
          {description}
          <sub
            className="text-3xl text-b text-darkorange-100 ml-2 relative "
            style={{ top: "0.5em", marginLeft: "4px" }}
          >
            &rdquo;
          </sub>
        </p>
        <div className="hidden tablet:block">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
