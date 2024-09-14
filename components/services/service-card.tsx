import React from "react";
import { FaCode } from "react-icons/fa";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiFlutter } from "react-icons/si";

const services = [
  {
    title: "Web Development",
    description: "Responsive and scalable full stack web development",
    icon: FaCode,
  },
  {
    title: "App Development",
    description: "Mobile app development for differnt Brand devices",
    icon: SiFlutter,
  },
  {
    title: "Software Developer ",
    description: "Responsive and scalable full stack web development",
    icon: LiaConnectdevelop,
  },
  {
    title: "Web Development",
    description: "Responsive and scalable full stack web development",
    icon: FaCode,
  },
];

const ServiceCard = () => {
  return (
    <>
      {services.map((service) => {
        const ServiceIcon = service.icon;
        return (
          <div
            key={""}
            className="flex flex-col justify-start px-5 py-7 bg-gray-200 dark:bg-white text-black rounded-lg"
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
    </>
  );
};

export default ServiceCard;
