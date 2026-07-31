import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCaseStudyProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCaseStudy({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#F7F7F5] overflow-y-auto"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="fixed top-6 right-6 md:top-8 md:right-12 z-[110] text-[11px] tracking-[0.2em] font-medium text-[#111111] flex items-center gap-2 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            data-cursor=""
          >
            <span>CLOSE</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">
              ✕
            </span>
          </motion.button>

          <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-4">
                {project.number}
              </p>
              <h1 className="font-display font-bold text-[10vw] md:text-[6vw] lg:text-[4.5vw] leading-[1] tracking-[-0.03em] text-[#111111]">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-[11px] tracking-[0.15em] text-[#777777] font-medium">
                  {project.year}
                </p>
                <span className="w-6 h-px bg-[#DDDDDD]" />
                <p className="text-[11px] tracking-[0.15em] text-[#777777] font-medium">
                  {project.category}
                </p>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="mt-12 md:mt-20 overflow-hidden bg-[#EFEFED]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
              <motion.div
                className="md:col-span-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-6">
                  DESCRIPTION
                </p>
                <p className="text-[15px] leading-[1.7] text-[#555555] font-light">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                className="md:col-span-7 md:col-start-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="space-y-12">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-4">
                      THE IDEA
                    </p>
                    <p className="text-[15px] leading-[1.7] text-[#555555] font-light">
                      {project.idea}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-4">
                      THE BUILD
                    </p>
                    <p className="text-[15px] leading-[1.7] text-[#555555] font-light">
                      {project.build}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-4">
                      THE DETAILS
                    </p>
                    <p className="text-[15px] leading-[1.7] text-[#555555] font-light">
                      {project.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technology */}
            <motion.div
              className="mt-16 md:mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="h-px bg-[#E6E6E3] mb-10" />
              <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium mb-6">
                TECHNOLOGY
              </p>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[12px] tracking-[0.08em] text-[#555555] font-medium px-4 py-2 border border-[#E6E6E3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="mt-16 md:mt-24 flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium text-[#111111] group"
                  data-cursor="OPEN ↗"
                >
                  <span>LIVE WEBSITE</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium text-[#111111] group"
                  data-cursor="OPEN ↗"
                >
                  <span>GITHUB</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}
            </motion.div>

            {/* Back */}
            <motion.div
              className="mt-20 md:mt-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <div className="h-px bg-[#E6E6E3] mb-10" />
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium text-[#777777] group"
                data-cursor=""
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                <span>BACK TO ALL PROJECTS</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
