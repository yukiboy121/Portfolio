"use client";

import { useState } from "react";
import { PERSONAL } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function Contact() {
  const { ref, inView } = useInView();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className={`text-3xl md:text-4xl font-light text-primary mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Contact
        </h2>
        <div
          className={`h-px bg-white/[0.06] mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div
            className={`space-y-7 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-1.5">
                Email
              </h4>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="text-primary text-sm hover:text-accent transition-colors duration-300"
              >
                {PERSONAL.email}
              </a>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-1.5">
                Phone
              </h4>
              <a
                href={`tel:${PERSONAL.phone}`}
                className="text-primary text-sm hover:text-accent transition-colors duration-300"
              >
                {PERSONAL.phone}
              </a>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-1.5">
                Location
              </h4>
              <p className="text-primary text-sm">{PERSONAL.location}</p>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-1.5">
                GitHub
              </h4>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm hover:text-accent transition-colors duration-300"
              >
                {PERSONAL.github.replace("https://", "")}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="input-apple"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="input-apple"
            />
            <textarea
              placeholder="Message"
              required
              className="input-apple"
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full py-3 px-6 rounded-full bg-primary text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent!"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
