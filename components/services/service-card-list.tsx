
import * as DiIcons from "react-icons/di";

const ServiceCardList = ({ serviceData }) => {
  return (
    <div className="flex flex-col gap-3 tablet:flex-row">
      {serviceData.map((service: any) => {
        const ServiceIcon = DiIcons[service.icon];

        return (
          <div
            key={service.id}
            className="flex flex-col justify-start px-5 py-7 bg-whitesmoke-200 dark:bg-white text-black rounded-lg"
          >
            <ServiceIcon size={"3rem"} color="blue" />
            <h1 className="text-lg font-bold">{service.title}</h1>
            <p className="">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCardList;
