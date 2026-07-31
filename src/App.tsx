import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// chrome
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import TopBar from './components/TopBar';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import MarqueeSection from './components/Marquee';
import Footer from './components/Footer';

// sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Achievements from './sections/Achievements';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const onBoot = useCallback(() => setLoading(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-void text-ink overflow-x-hidden md:[cursor:none]">
      {/* boot sequence */}
      <AnimatePresence>{loading && <Preloader onComplete={onBoot} />}</AnimatePresence>

      {/* overlays & chrome */}
      <CustomCursor />
      <ScrollProgress />
      <div className="scanlines" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      <div className="scan-bar" aria-hidden="true" />

      <TopBar onCommandPalette={() => setCmdOpen(true)} />
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* main */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative z-10"
      >
        <Hero />
        <MarqueeSection />
        <About />
        <Skills />
        <Projects />
        <MarqueeSection />
        <Experience />
        <Services />
        <Testimonials />
        <Achievements />
        <Gallery />
        <Contact />
        <Footer />
      </motion.main>

      {/* fixed bottom chrome */}
      <StatusBar />

      {/* back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-5 z-[96] flex items-center gap-1.5 px-3 py-2 rounded border border-neon/25 bg-panel/90 backdrop-blur text-neon text-[11px] hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Back to top"
          >
            <ArrowUp size={12} /> top
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
