import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import ServiceCard from "./service-card";

const ServiceSection = async () => {
  const querySnapshot = await getDocs(collection(db, "services"));
  const serviceData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="tablet:text-6xl mb-0">Services</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex flex-col gap-3 tablet:flex-row">
        {serviceData.map((service: any) => (
          <ServiceCard
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
