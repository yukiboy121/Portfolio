import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/motion/AnimatedText";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
      setTimeout(() => {
        setFormState("idle");
        setFormOpen(false);
        setFormData({ name: "", email: "", project: "", message: "" });
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-24 md:mb-40" />

      <div className="min-h-[50vh] flex flex-col justify-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.25em] text-[#AAAAAA] font-medium mb-8 md:mb-12">
            NEXT STEP
          </p>
        </Reveal>
        <AnimatedText
          text="LET'S MAKE SOMETHING GREAT."
          className="font-display font-bold text-[9vw] md:text-[6.5vw] lg:text-[5vw] leading-[1.05] tracking-[-0.04em] text-[#111111]"
        />

        <Reveal delay={0.3} className="mt-12 md:mt-16">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="inline-flex items-center gap-3 text-[12px] md:text-[13px] tracking-[0.15em] font-medium text-[#111111] group"
            data-cursor=""
          >
            <span>{formOpen ? "CLOSE" : "START A CONVERSATION"}</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </button>
        </Reveal>

        {/* Form */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              className="mt-12 md:mt-20 max-w-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {formState === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12"
                >
                  <p className="font-display font-semibold text-[28px] md:text-[36px] tracking-[-0.02em] text-[#111111]">
                    THANK YOU.
                  </p>
                  <p className="text-[14px] text-[#777777] font-light mt-3">
                    I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {[
                    { key: "name", label: "NAME", type: "text" },
                    { key: "email", label: "EMAIL", type: "email" },
                    { key: "project", label: "PROJECT", type: "text" },
                  ].map((field, i) => (
                    <motion.div
                      key={field.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="relative group"
                    >
                      <label className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium block mb-2 transition-colors duration-300 group-focus-within:text-[#111111]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.key]: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-[#E6E6E3] py-3 text-[14px] text-[#111111] font-light focus:outline-none focus:border-[#111111] transition-colors duration-500 placeholder:text-[#CCCCCC]"
                        placeholder={`Your ${field.label.toLowerCase()}`}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.24, duration: 0.5 }}
                    className="relative group"
                  >
                    <label className="text-[10px] tracking-[0.2em] text-[#AAAAAA] font-medium block mb-2 transition-colors duration-300 group-focus-within:text-[#111111]">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#E6E6E3] py-3 text-[14px] text-[#111111] font-light focus:outline-none focus:border-[#111111] transition-colors duration-500 resize-none placeholder:text-[#CCCCCC]"
                      placeholder="Tell me about your project"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32, duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium text-[#111111] group mt-4 disabled:opacity-50"
                      data-cursor=""
                    >
                      <span>
                        {formState === "sending" ? "SENDING..." : "SEND"}
                      </span>
                      {formState !== "sending" && (
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
