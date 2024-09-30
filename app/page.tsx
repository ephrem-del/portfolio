import Hero from "../components/hero/Hero";
import ContactSection from "../components/contact-section/contact";
import AboutMe from "../components/about-me/about";
import ServiceSection from "../components/services/service-section";
import ProjectSection from "../components/projects/project-section";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-[3rem]  ">
      <Hero />
      <AboutMe />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
