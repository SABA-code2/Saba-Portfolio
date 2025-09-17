import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import ProjectShowcase from "@/components/projectShowCase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        {/* <AboutSection />  */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
