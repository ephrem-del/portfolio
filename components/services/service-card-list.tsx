import React from "react";
import { FaCode } from "react-icons/fa";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiFlutter } from "react-icons/si";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Responsive and scalable full stack web development",
    icon: FaCode,
  },
  {
    id: 2,
    title: "App Development",
    description: "Mobile app development for differnt Brand devices",
    icon: SiFlutter,
  },
  {
    id: 3,
    title: "Software Developer ",
    description: "Responsive and scalable full stack web development",
    icon: LiaConnectdevelop,
  },
  {
    id: 4,
    title: "Web Development",
    description: "Responsive and scalable full stack web development",
    icon: FaCode,
  },
];

const ServiceCardList = () => {
  return (
    <div className="flex flex-col gap-3 tablet:flex-row">
      {services.map((service) => {
        const ServiceIcon = service.icon;
        return (
          <div
            key={service.id}
            className="flex flex-col justify-start px-5 py-7 bg-whitesmoke-200 dark:bg-white text-black rounded-lg"
          >
            <div className="">
              <ServiceIcon size={"3rem"} color="blue" />
            </div>
            <div className="">
              <h1 className="text-lg font-bold">{service.title}</h1>
            </div>
            <div>
              <p className="">{service.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCardList;