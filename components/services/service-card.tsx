import { collection, getDocs } from "firebase/firestore";
import * as DiIcons from "react-icons/di";
import { db } from "../lib/firebase";

const ServiceCard = async () => {
  const querySnapshot = await getDocs(collection(db, "services"));
  const serviceData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return (
    <>
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
    </>
  );
};

export default ServiceCard;
