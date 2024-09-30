import * as DiIcons from "react-icons/di";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  const ServiceIcon = DiIcons[icon];

  return (
    <div className="flex flex-col justify-start px-5 py-7 bg-whitesmoke-200 dark:bg-white text-black rounded-lg">
      <ServiceIcon size={"3rem"} color="blue" />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default ServiceCard;
