"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = NAV_LINKS.filter((l) => l.label !== "Home");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-primary font-medium text-base tracking-tight"
        >
          {PERSONAL.firstName[0]}
          {PERSONAL.lastName[0]}
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary text-[13px] hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden relative w-5 h-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute top-0 left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${
              mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-current transition-all duration-300 ${
              mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-secondary text-sm hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
