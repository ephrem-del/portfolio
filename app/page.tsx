import AboutMe from "../components/aboutMe/AboutMe";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-6 gap-[5rem] ">
      <Hero />
      <AboutMe />
    </main>
  );
}
