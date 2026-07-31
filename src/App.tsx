import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Menu, MoveRight, X } from 'lucide-react';
import { projects, Project } from './data/projects';

const nav = ['Work', 'About', 'Experience', 'Contact'];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, text: '' });
  const [selected, setSelected] = useState<Project | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => { const handler = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', handler, { passive: true }); return () => window.removeEventListener('scroll', handler); }, []);
  const go = (target: string) => { setMenu(false); document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }); };
  const cursorMove = (event: MouseEvent<HTMLElement>, text = '') => setCursor({ x: event.clientX, y: event.clientY, text });
  const send = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  const reveal = (delay = 0) => reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .75, delay, ease: [.16, 1, .3, 1] } };

  return <main onMouseMove={(e) => cursorMove(e)}>
    <div className={`cursor ${cursor.text ? 'cursor-word' : ''}`} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}>{cursor.text}</div>
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}><a href="#top" className="monogram">SN<span>.</span></a><nav>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav><button onClick={() => go('#contact')} className="nav-talk">Let’s talk <ArrowUpRight size={14} /></button><button className="menu" onClick={() => setMenu(true)} aria-label="Open navigation"><Menu size={20} /></button></header>
    <AnimatePresence>{menu && <motion.div className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><button onClick={() => setMenu(false)} aria-label="Close navigation"><X size={25} /></button>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => go(`#${item.toLowerCase()}`)}>{item}</a>)}<a href="#contact" onClick={() => go('#contact')}>Let’s talk <ArrowUpRight /></a></motion.div>}</AnimatePresence>

    <section className="hero" id="top"><motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>Sri Lanka <span>—</span> Available worldwide</motion.div><div className="hero-name"><motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7 }}>Developer / Creative developer</motion.p><motion.h1 initial="hidden" animate="visible"><motion.span variants={{ hidden: { y: '115%' }, visible: { y: 0, transition: { duration: 1, delay: .38, ease: [.16, 1, .3, 1] } } }}>SNEHA</motion.span><motion.span variants={{ hidden: { y: '115%' }, visible: { y: 0, transition: { duration: 1, delay: .52, ease: [.16, 1, .3, 1] } } }}>NETHSARA<span className="period">.</span></motion.span></motion.h1></div><motion.div className="hero-bottom" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}><p>I build digital experiences where technology meets thoughtful design.</p><a href="#work">Scroll to explore <ArrowDown size={15} /></a></motion.div></section>

    <section className="intro" id="about"><motion.p className="label" {...reveal()}>01 / Introduction</motion.p><motion.h2 {...reveal(.08)}>I build digital things<br />with <em>purpose.</em></motion.h2><motion.div className="intro-copy" {...reveal(.16)}><p>From sharp interfaces to the systems beneath them, I turn complex ideas into useful, elegant digital experiences.</p><a className="underlink" href="#work">Explore my work <MoveRight size={16} /></a></motion.div></section>

    <section className="about"><p className="label">02 / About</p><div className="about-main"><h2>Design is how<br />technology <em>feels.</em></h2><div><p>I’m Sneha Nethsara, a developer with a creative point of view. I care just as much about the invisible details—performance, architecture and reliability—as I do about the feeling of the final interaction.</p><p>I make web applications, full-stack systems, commerce platforms, interactive sites, bots and custom software.</p></div></div><div className="facts"><div><span>Based in</span><strong>Sri Lanka</strong></div><div><span>Focus</span><strong>Web / Full stack</strong></div><div><span>Currently</span><strong>Building digital products</strong></div></div></section>

    <section className="poster"><motion.h2 {...reveal()}>Good software<br />should feel<br /><em>effortless.</em></motion.h2></section>

    <section className="work" id="work"><div className="section-heading"><p className="label">03 / Selected work</p><h2>Selected <em>work.</em></h2></div><div className="project-list">{projects.map((project, i) => <motion.button {...reveal(i % 2 ? .08 : 0)} key={project.id} onClick={() => setSelected(project)} onMouseEnter={(e) => cursorMove(e, 'VIEW →')} onMouseLeave={(e) => cursorMove(e)} className={`project-row project-${i % 3}`}><div className="project-art"><div className="art-frame"><span>{project.number}</span><i /><b /><em /></div></div><div className="project-details"><div><p>{project.number} / {project.category}</p><h3>{project.name}</h3></div><div className="project-year"><span>{project.year}</span><ArrowUpRight size={21} /></div></div></motion.button>)}</div></section>

    <AnimatePresence>{selected && <motion.aside className="case-study" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: .65, ease: [.76, 0, .24, 1] }}><button className="case-close" onClick={() => setSelected(null)} aria-label="Close case study"><X /></button><p className="label">{selected.number} / {selected.category} / {selected.year}</p><h2>{selected.name}</h2><div className="case-art"><span>{selected.number}</span><div /></div><div className="case-grid"><p className="case-lead">{selected.description}</p><div><h4>The idea</h4><p>{selected.idea}</p><h4>The build</h4><p>{selected.build}</p><h4>Technology</h4><p>{selected.technology.join(' · ')}</p><h4>Result</h4><p>{selected.result}</p></div></div><div className="case-links"><a href="#contact" onClick={() => setSelected(null)}>Start a similar project <ArrowUpRight size={16} /></a><button onClick={() => setSelected(null)}>Back to work</button></div></motion.aside>}</AnimatePresence>

    <section className="skills"><p className="label">04 / Capabilities</p><div className="skill-columns"><div><span>Languages</span>{['JavaScript', 'TypeScript', 'Python', 'PHP', 'Lua'].map(x => <p title="Used in production projects" key={x}>{x}</p>)}</div><div><span>Frameworks</span>{['React', 'Next.js', 'Node.js', 'Express', 'Discord.py'].map(x => <p title="Used in production projects" key={x}>{x}</p>)}</div><div><span>Specialized</span>{['E-commerce', 'FiveM', 'QBCore', 'QBX', 'APIs'].map(x => <p title="Used in production projects" key={x}>{x}</p>)}</div></div></section>

    <section className="experience" id="experience"><p className="label">05 / Experience</p><div className="experience-list"><div><span>2026</span><p>Building advanced full-stack applications, interactive experiences and digital products.</p></div><div><span>2025</span><p>Expanding into backend systems, bots and larger web applications.</p></div><div><span>2024</span><p>Creating websites and custom systems with a focus on clarity and craft.</p></div></div></section>

    <section className="services"><p className="label">06 / What I do</p>{['Web development', 'Full stack development', 'E-commerce', 'Interactive experiences', 'Backend systems', 'Custom software'].map((service, i) => <div key={service} onMouseEnter={(e) => cursorMove(e, 'EXPLORE')} onMouseLeave={(e) => cursorMove(e)}><span>0{i + 1}</span><h3>{service}</h3><ArrowUpRight /></div>)}</section>

    <section className="philosophy"><p className="label">07 / How I think</p><div><p>Interfaces should make the next step feel obvious.</p><p>Technology is best when it respects people’s time.</p><p>Details are what turn something functional into something felt.</p></div></section>

    <section className="contact" id="contact"><p className="label">08 / Contact</p><h2>Let’s<br />make<br />something<br /><em>great.</em></h2><button onClick={() => setFormOpen(true)} className="conversation">Start a conversation <ArrowUpRight /></button><footer><span>SN / Sneha Nethsara</span><span>Developer &amp; Creative Developer</span><div><a href="https://github.com" target="_blank">GitHub</a><a href="https://linkedin.com" target="_blank">LinkedIn</a><a href="mailto:hello@snehanethsara.com">Email</a></div><a href="#top">Back to top ↑</a></footer></section>
    <AnimatePresence>{formOpen && <motion.div className="form-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><form onSubmit={send}><button type="button" onClick={() => { setFormOpen(false); setSent(false); }} className="form-close" aria-label="Close form"><X /></button>{sent ? <div className="thank-you"><p className="label">Message sent</p><h2>Thank<br />you.</h2><button type="button" className="underlink" onClick={() => { setFormOpen(false); setSent(false); }}>Close <ArrowUpRight /></button></div> : <><p className="label">Start a conversation</p><h2>Tell me a little<br />about it.</h2><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Project<input required placeholder="What are we making?" /></label><label>Message<textarea required placeholder="A few useful details…" /></label><button className="submit">Send <ArrowUpRight /></button></>}</form></motion.div>}</AnimatePresence>
  </main>;
}
export default App;
