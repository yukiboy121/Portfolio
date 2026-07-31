import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TerminalWindow from '../components/TerminalWindow';

const socials = [
  { icon: Github, label: 'github.com/alexrivera', href: '#' },
  { icon: Linkedin, label: 'in/alexrivera', href: '#' },
  { icon: Twitter, label: '@alexrivera_dev', href: '#' },
  { icon: Mail, label: 'hello@alexrivera.dev', href: 'mailto:hello@alexrivera.dev' },
];

interface FieldProps {
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  placeholder: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
}

const Field = ({ label, type = 'text', textarea = false, value, placeholder, focused, onFocus, onBlur, onChange }: FieldProps) => (
  <div className="relative">
    <span
      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
        focused || value
          ? 'top-2 text-[9px] text-neon tracking-widest uppercase'
          : 'top-[15px] text-[12px] text-faint'
      }`}
    >
      <span className="text-neon/70">&gt;</span> {label}
    </span>
    {textarea ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={focused ? placeholder : ''}
        required
        rows={5}
        className="w-full px-4 pt-6 pb-3 rounded-md bg-elevated/50 border border-neon/10 text-ink text-[13px] placeholder:text-faint/60 focus:outline-none focus:border-neon/45 focus:shadow-[0_0_20px_rgba(0,255,65,0.07)] transition-all resize-none caret-neon"
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={focused ? placeholder : ''}
        required
        className="w-full px-4 pt-6 pb-3 rounded-md bg-elevated/50 border border-neon/10 text-ink text-[13px] placeholder:text-faint/60 focus:outline-none focus:border-neon/45 focus:shadow-[0_0_20px_rgba(0,255,65,0.07)] transition-all caret-neon"
      />
    )}
  </div>
);

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3200);
    }, 1600);
  };

  const field = (id: keyof typeof form) => ({
    value: form[id],
    focused: focused === id,
    onFocus: () => setFocused(id),
    onBlur: () => setFocused(null),
    onChange: (v: string) => setForm((f) => ({ ...f, [id]: v })),
  });

  return (
    <section id="contact" className="relative py-28 md:py-36" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-panel/50 to-transparent" />
      <motion.div
        className="absolute top-1/3 -left-24 w-[480px] h-[480px] rounded-full bg-neon/[0.04] blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="09"
          command="ssh guest@alexrivera.dev -p 22"
          title="OPEN A CONNECTION"
          subtitle="Port 22 is open. Send a packet — I respond within 24 hours, encrypted with enthusiasm."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* left — connection info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* status */}
            <div className="panel brackets p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon" />
                </span>
                <p className="text-[13px] text-ink font-semibold">connection established</p>
                <span className="ml-auto text-[10px] text-neon border border-neon/25 rounded px-2 py-0.5 bg-neon/5">
                  ACCEPTING PROJECTS
                </span>
              </div>
              <p className="text-[12px] text-dim leading-relaxed">
                handshake complete · latency <span className="text-neon">12ms</span> · TLS 1.3 ·
                currently booking <span className="text-ink">Q1 2025</span>
              </p>
            </div>

            {/* pgp / contact block */}
            <TerminalWindow title="alex@dev: ~/contact — info" delay={0.15}>
              <div className="space-y-2.5 text-[12px]">
                <p className="text-faint text-[10px] mb-3">-----BEGIN CONTACT BLOCK-----</p>
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 p-2.5 rounded border border-neon/10 bg-elevated/30 text-dim hover:text-neon hover:border-neon/35 hover:bg-neon/5 transition-all group"
                    initial={{ opacity: 0, x: -14 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <s.icon size={14} className="text-neon/70 group-hover:text-neon" />
                    <span>{s.label}</span>
                    <span className="ml-auto text-faint group-hover:text-neon transition-colors">↗</span>
                  </motion.a>
                ))}
                <p className="text-faint text-[10px] pt-1">-----END CONTACT BLOCK-----</p>
              </div>
            </TerminalWindow>

            {/* location ping */}
            <div className="panel p-5">
              <p className="text-[11px] text-faint mb-3">
                <span className="text-neon">$</span> ping alex --location
              </p>
              <div className="space-y-1.5 text-[12px]">
                <p className="text-dim">64 bytes from <span className="text-cyanx">san-francisco.ca</span>: icmp_seq=1 ttl=57 time=<span className="text-neon">8.4 ms</span></p>
                <p className="text-dim">64 bytes from <span className="text-cyanx">san-francisco.ca</span>: icmp_seq=2 ttl=57 time=<span className="text-neon">7.9 ms</span></p>
                <p className="text-faint">--- alex ping statistics ---</p>
                <p className="text-dim">2 packets transmitted, <span className="text-neon">0% packet loss</span></p>
              </div>
            </div>
          </motion.div>

          {/* right — terminal form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10 bg-elevated/60">
                <span className="w-2.5 h-2.5 rounded-full bg-redx/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amberx/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                <span className="ml-3 text-[11px] text-dim">compose — secure_channel</span>
                <span className="ml-auto text-[10px] text-neon/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ticker" /> encrypted
                </span>
              </div>

              <form onSubmit={send} className="p-6 md:p-8 space-y-5">
                <p className="text-[12px] text-faint">
                  <span className="text-neon">$</span> mail -s <span className="text-amberx">"new_project"</span> alex@rivera.dev
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="name" placeholder="ada lovelace" {...field('name')} />
                  <Field label="email" type="email" placeholder="ada@analytical.engine" {...field('email')} />
                </div>
                <Field label="message" textarea placeholder="describe your mission…" {...field('message')} />

                {/* output log */}
                <div className="rounded-md bg-void/60 border border-neon/10 p-3.5 text-[11px] leading-relaxed min-h-[64px]">
                  {status === 'idle' && (
                    <p className="text-faint">
                      <span className="text-neon/60">›</span> awaiting transmission…
                      <span className="block-cursor" />
                    </p>
                  )}
                  {status === 'sending' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                      <p className="text-dim"><span className="text-neon">›</span> encrypting payload (AES-256)…</p>
                      <p className="text-dim"><span className="text-neon">›</span> establishing secure tunnel…</p>
                      <p className="text-amberx"><span>›</span> transmitting<span className="blink">▊</span></p>
                    </motion.div>
                  )}
                  {status === 'sent' && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-neon" />
                      <p className="text-neon">packet delivered · exit code 0 — expect a reply within 24h</p>
                    </motion.div>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-md bg-neon text-void text-[13px] font-bold hover:shadow-[0_0_36px_rgba(0,255,65,0.35)] transition-all disabled:opacity-70 brackets"
                  whileHover={status === 'idle' ? { scale: 1.01 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.99 } : {}}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.span
                        className="w-4 h-4 border-2 border-void/30 border-t-void rounded-full inline-block"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      transmitting…
                    </>
                  ) : status === 'sent' ? (
                    <>✓ delivered</>
                  ) : (
                    <>
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      ./send_message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
