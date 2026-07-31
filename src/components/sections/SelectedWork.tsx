import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import type { Project } from "@/data/projects";

interface SelectedWorkProps {
  onProjectClick: (project: Project) => void;
}

function ProjectCard({
  project,
  index,
  onProjectClick,
}: {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1]);
  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className={`mb-24 md:mb-40 ${isEven ? "" : "md:ml-auto"}`}>
      <div
        className={`grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-12`}
      >
        {/* Meta */}
        <div
          className={`flex flex-col justify-between ${
            isEven
              ? "md:col-span-3 md:order-1"
              : "md:col-span-3 md:order-2 md:col-start-10"
          }`}
        >
          <Reveal delay={0.1}>
            <div>
              <p className="text-[40px] md:text-[56px] font-display font-extralight text-[#E6E6E3] leading-none tracking-[-0.04em]">
                {project.number}
              </p>
              <h3 className="font-display font-semibold text-[16px] md:text-[20px] tracking-[-0.02em] text-[#111111] mt-4 leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 mt-3">
                <p className="text-[10px] tracking-[0.15em] text-[#AAAAAA] font-medium">
                  {project.year}
                </p>
                <span className="w-4 h-px bg-[#DDDDDD]" />
                <p className="text-[10px] tracking-[0.15em] text-[#AAAAAA] font-medium">
                  {project.category}
                </p>
              </div>
              <p className="text-[12px] leading-[1.7] text-[#999999] font-light mt-4 max-w-[240px] hidden md:block">
                {project.description.slice(0, 120)}...
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <button
              onClick={() => onProjectClick(project)}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium text-[#111111] group"
              data-cursor="VIEW →"
            >
              <span>VIEW PROJECT</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Reveal>
        </div>

        {/* Image */}
        <div
          className={`${
            isEven
              ? "md:col-span-8 md:col-start-5 md:order-2"
              : "md:col-span-8 md:col-start-1 md:order-1"
          }`}
        >
          <Reveal delay={0.15}>
            <button
              onClick={() => onProjectClick(project)}
              className="project-image-container relative overflow-hidden w-full aspect-[16/10] bg-[#EFEFED] block group"
              data-cursor="VIEW →"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ y: imageY, scale: imageScale }}
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-700" />
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork({ onProjectClick }: SelectedWorkProps) {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-16 md:mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 mb-20 md:mb-32">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[#777777] font-medium">
              SELECTED WORK
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-5 mt-6 md:mt-0">
          <Reveal delay={0.15}>
            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[#777777] font-light max-w-md">
              A curated selection of projects that represent my approach 
              to building digital products — thoughtful, functional, and refined.
            </p>
          </Reveal>
        </div>
      </div>

      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
          onProjectClick={onProjectClick}
        />
      ))}
    </section>
  );
}
