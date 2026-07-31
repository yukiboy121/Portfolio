import { useState, useEffect } from "react";

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ProjectCaseStudy from "@/components/sections/ProjectCaseStudy";
import type { Project } from "@/data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);



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
    <div className="bg-transparent min-h-screen text-[var(--color-text)]">

      <Navigation onContactClick={handleContactClick} />

      <main>
        <Hero />
        <About />
        <SelectedWork onProjectClick={handleProjectClick} />
        <Services />
        <Skills />
        <Experience />
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
