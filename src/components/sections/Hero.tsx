"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

function useTypewriter(
  texts: string[],
  typingSpeed = 50,
  deletingSpeed = 25,
  pauseMs = 2500
) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pauseMs);
          }
        } else {
          if (display.length > 0) {
            setDisplay(display.slice(0, -1));
          } else {
            setDeleting(false);
            setIdx((prev) => (prev + 1) % texts.length);
          }
        }
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(PERSONAL.role);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  const nameText = PERSONAL.name;
  const nameLetters = nameText.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,109,255,0.08), transparent 70%)",
          top: "15%",
          left: "10%",
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06), transparent 70%)",
          bottom: "15%",
          right: "10%",
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(180,74,255,0.05), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
          transition: "transform 1.4s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-surface/30 text-[11px] text-text-secondary tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for projects
          </span>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="text-[13px] md:text-sm font-medium text-text-muted uppercase tracking-[0.25em]">
            Hi, I&apos;m
          </span>
        </motion.div>

        <h1 className="text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.02] tracking-tight mb-6">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ opacity: 0, y: 60, rotateX: -70 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.6 + i * 0.04,
                duration: 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-gradient-primary inline-block"
              style={{
                whiteSpace: letter === " " ? "pre" : undefined,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-text-secondary tracking-wide">
            {typed}
          </span>
          <motion.span
            className="inline-block w-[2px] h-7 sm:h-8 bg-primary ml-1.5 rounded-full"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        <motion.p
          className="max-w-2xl mx-auto text-text-secondary text-[15px] sm:text-base md:text-lg leading-relaxed mb-14 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div
              className="absolute inset-0 rounded-full animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, #7c6dff, #b44aff, #00d4ff, #7c6dff)",
                backgroundSize: "300% 300%",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-sm font-medium text-text-primary border border-border hover:border-border-hover hover:bg-surface-hover transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-12 sm:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "3+", label: "Years Coding" },
            { value: "5+", label: "Technologies" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-gradient-primary"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 3 + i * 0.15,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-[10px] sm:text-[11px] text-text-muted mt-1.5 uppercase tracking-[0.25em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-border flex justify-center pt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-text-muted"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 12, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
