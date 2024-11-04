import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { StackSection } from "@/sections/StackSection";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <h1>
        <Header />
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </h1>
    </div>
  );
}
