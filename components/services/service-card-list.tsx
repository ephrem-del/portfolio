import ServiceCard from "./service-card";

const ServiceCardList = async () => {
  return (
    <div className="flex flex-col gap-3 tablet:flex-row">
      <ServiceCard />
    </div>
  );
};

export default ServiceCardList;
