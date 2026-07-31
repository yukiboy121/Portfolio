import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';

const endpoints = [
  {
    method: 'POST',
    path: '/api/services/web-development',
    desc: 'Custom web applications engineered for speed. SPA to full-stack, pixel-perfect and performance-obsessed.',
    features: ['react / next.js', 'sub-second LCP', 'SEO + a11y', 'responsive by default'],
    price: '$5,000+',
    eta: '2–4 wks',
    color: '#00ff41',
  },
  {
    method: 'POST',
    path: '/api/services/creative-development',
    desc: 'WebGL, 3D, GSAP choreography and immersive scroll experiences. The award-bait endpoints.',
    features: ['three.js / webgl', 'gsap timelines', 'interactive art', '60fps guaranteed'],
    price: '$7,000+',
    eta: '3–5 wks',
    color: '#5eead4',
  },
  {
    method: 'PUT',
    path: '/api/services/ui-ux-design',
    desc: 'Interfaces where every pixel has a reason. Research, wireframes, prototypes, design systems.',
    features: ['user research', 'wireframing', 'prototyping', 'design systems'],
    price: '$3,000+',
    eta: '1–3 wks',
    color: '#fbbf24',
  },
  {
    method: 'POST',
    path: '/api/services/ecommerce',
    desc: 'Headless storefronts that convert. Checkout flows so smooth they feel like a cheat code.',
    features: ['headless / shopify', 'payment rails', 'inventory APIs', 'analytics wired in'],
    price: '$6,000+',
    eta: '3–6 wks',
    color: '#a3e635',
  },
  {
    method: 'PATCH',
    path: '/api/services/mobile-apps',
    desc: 'Cross-platform mobile that ships once and runs everywhere — with native-grade feel.',
    features: ['react native', 'ios + android', 'store deployment', 'push + offline'],
    price: '$8,000+',
    eta: '4–8 wks',
    color: '#2dd4bf',
  },
  {
    method: 'GET',
    path: '/api/services/consulting',
    desc: 'Architecture reviews, audits and pair-programming with your team. I find the leaks.',
    features: ['tech audits', 'architecture review', 'perf optimization', 'team training'],
    price: '$200/hr',
    eta: 'on demand',
    color: '#34d399',
  },
];

const EndpointCard = ({ ep, index }: { ep: (typeof endpoints)[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="group panel panel-hover brackets p-6 flex flex-col"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      {/* endpoint line */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="px-2 py-1 rounded text-[10px] font-bold tracking-wider"
          style={{ color: ep.color, background: `${ep.color}14`, border: `1px solid ${ep.color}35` }}
        >
          {ep.method}
        </span>
        <code className="text-[11px] text-dim truncate">{ep.path}</code>
      </div>

      <p className="text-[13px] text-ink/90 leading-relaxed mb-4 flex-1">{ep.desc}</p>

      {/* features as body params */}
      <div className="space-y-1.5 mb-5">
        {ep.features.map((f) => (
          <p key={f} className="text-[11px] text-dim">
            <span style={{ color: ep.color }}>›</span> {f}
          </p>
        ))}
      </div>

      {/* response */}
      <div className="pt-4 border-t border-neon/10 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-faint mb-0.5">200 OK · response</p>
          <p className="font-display text-lg font-bold" style={{ color: ep.color }}>
            {ep.price} <span className="text-[11px] text-faint font-normal">/ {ep.eta}</span>
          </p>
        </div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-neon border border-neon/25 rounded px-2 py-1">
          200 OK
        </span>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon/[0.03] blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="05"
          command="man services --all-endpoints"
          title="THE API"
          subtitle="Six endpoints. Every request returns 200. Rate limit: my calendar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {endpoints.map((ep, i) => (
            <EndpointCard key={ep.path} ep={ep} index={i} />
          ))}
        </div>

        {/* base url line */}
        <motion.p
          className="mt-10 text-[12px] text-faint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-neon/60">ℹ</span> base_url:{' '}
          <span className="text-dim">https://alexrivera.dev/v1</span> · auth:{' '}
          <span className="text-dim">bearer hello@alexrivera.dev</span> · all endpoints accept{' '}
          <span className="text-neon/70">JSON</span> and <span className="text-neon/70">ambition</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
