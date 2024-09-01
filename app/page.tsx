import AboutMe from "../components/aboutMe/AboutMe";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-[5rem] ">
      <Hero />
      <AboutMe />
    </main>
  );
}
