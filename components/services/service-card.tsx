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
    title: "Mobile App Development",
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
        return <div key={""}></div>;
      })}
    </>
  );
};

export default ServiceCard;
