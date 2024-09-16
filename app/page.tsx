import Services from "../components/services/services";
import AboutMe from "../components/aboutMe/AboutMe";
import Hero from "../components/hero/Hero";
import ContactSection from "../components/contact-section/contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-[3rem]  ">
      <Hero />
      <AboutMe />
      <Services />
      <ContactSection />
    </main>
  );
}
