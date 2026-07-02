"use client";

import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-[13px]">
          &copy; {new Date().getFullYear()} {PERSONAL.firstName} {PERSONAL.lastName}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-[13px] hover:text-primary transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-secondary text-[13px] hover:text-primary transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
