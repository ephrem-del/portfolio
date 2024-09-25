import { collection, getDocs } from "firebase/firestore";
import ServiceCardList from "./service-card-list";
import { db } from "../lib/firebase";

const Services = async () => {
  const querySnapshot = await getDocs(collection(db, "services"));
  const serviceData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(serviceData);
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
      <ServiceCardList serviceData={serviceData} />
    </section>
  );
};

export default Services;
