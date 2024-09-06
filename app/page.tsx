import AboutMe from "../components/aboutMe/AboutMe";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-[3rem] px-10 ">
      <Hero />
      <AboutMe />
    </main>
  );
}
