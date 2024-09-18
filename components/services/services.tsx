import ServiceCardList from "./service-card-list";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="tablet:text-46xl mb-0">Services</h1>
      <p className="flex justify-center tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <ServiceCardList />
    </section>
  );
};

export default Services;
