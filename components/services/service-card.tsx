
import { ServiceType } from "../../hooks/useServiceData";
import Image from "next/image";

const ServiceCard: React.FC<ServiceType> = ({ title, description, imageUrl }) => {

  return (
    <div className="flex flex-col justify-start px-5 py-7 bg-whitesmoke-200 dark:bg-white text-black rounded-lg">
      <Image
        src={imageUrl}
        alt={`images of ${title}`}
        width={100}
        height={100}
        className="rounded object-cover h-[3rem] w-[3rem]"
      />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default ServiceCard;
