import Services from "../components/services/services";
import Hero from "../components/hero/Hero";
import ContactSection from "../components/contact-section/contact";
import AboutMe from "../components/about-me/about";



export default async function Home() {
 
  
  return (
    <main className="flex flex-col min-h-screen gap-[3rem]  ">
      <Hero />
      <AboutMe />
      <Services  />
      <ContactSection />
    </main>
  );
}
