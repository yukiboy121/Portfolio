import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import About from "@/components/sections/About";
import Quote from "@/components/sections/Quote";
import SelectedWork from "@/components/sections/SelectedWork";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ProjectCaseStudy from "@/components/sections/ProjectCaseStudy";
import type { Project } from "@/data/projects";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCaseStudyOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCaseStudyClose = () => {
    setCaseStudyOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelectedProject(null), 600);
  };

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen">
      <CustomCursor />
      <PageLoader isLoading={isLoading} />

      <Navigation onContactClick={handleContactClick} />

      <main>
        <Hero />
        <Introduction />
        <About />
        <Quote />
        <SelectedWork onProjectClick={handleProjectClick} />
        <Services />
        <Skills />
        <Experience />
        <Philosophy />
        <Contact />
      </main>

      <Footer />

      <ProjectCaseStudy
        project={selectedProject}
        isOpen={caseStudyOpen}
        onClose={handleCaseStudyClose}
      />
    </div>
  );
}
