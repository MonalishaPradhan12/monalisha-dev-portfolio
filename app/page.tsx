import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSections";
import AboutSection from "./components/AboutSections";
import SkillsSection from "./components/SkillSection";
import JourneySection from "./components/JourneySections";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSections from "./components/FooterSections"
import Chatbot from "./components/Chatbot";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>  
       <ProjectsSection/>
      <JourneySection/>
     
      <ContactSection/>
      <FooterSections/>
      <Chatbot/>
    </>
  );
}