export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  year: string;
  description: string;
  idea: string;
  build: string;
  technology: string[];
  result: string;
};

// Keep project copy, links, and metadata here so the portfolio stays simple to update.
export const projects: Project[] = [
  { id: 'store', number: '01', name: 'Online Web Store', category: 'Web development', year: '2026', description: 'A considered storefront that makes discovery feel as intentional as the product itself.', idea: 'Turn a familiar shopping journey into a calm, high-confidence experience.', build: 'Responsive commerce UI, a flexible content system, and a checkout designed for speed.', technology: ['Next.js', 'TypeScript', 'Stripe'], result: 'A store that feels easy to return to.' },
  { id: 'builder', number: '02', name: 'PC Builder', category: 'Full stack / E-commerce', year: '2026', description: 'A guided configuration tool for choosing compatible hardware without the noise.', idea: 'Make technical decisions feel straightforward for every kind of buyer.', build: 'Product logic, compatibility rules, live pricing, and a focused visual system.', technology: ['React', 'Node.js', 'PostgreSQL'], result: 'Complex decisions, made clear.' },
  { id: 'fivem', number: '03', name: 'Roleplay System', category: 'FiveM / Systems', year: '2025', description: 'An interconnected roleplay experience built around reliable, expressive systems.', idea: 'Create a world where the technology disappears behind the player experience.', build: 'Custom resources, game economy flows, and scalable server-side architecture.', technology: ['Lua', 'FiveM', 'QBCore'], result: 'A richer world with less friction.' },
  { id: 'discord', number: '04', name: 'Discord Bot System', category: 'Backend / Automation', year: '2025', description: 'A dependable community system that turns busy servers into well-run spaces.', idea: 'Automate the repetitive work while keeping moderation human.', build: 'Events, permissions, moderation tools, and clean operational reporting.', technology: ['Python', 'Discord.py', 'APIs'], result: 'Useful automation, quietly working.' },
  { id: 'clothing', number: '05', name: 'Clothing Store', category: 'E-commerce', year: '2025', description: 'A fashion-first digital store with an editorial eye and fast foundations.', idea: 'Let product imagery and pace carry the brand.', build: 'Custom product pages, content management, and an uncompromised mobile experience.', technology: ['Next.js', 'Shopify', 'Framer Motion'], result: 'Designed to make browsing feel tactile.' },
  { id: 'custom', number: '06', name: 'Custom Web App', category: 'Product development', year: '2024', description: 'A tailored internal tool that replaces manual processes with a single useful system.', idea: 'Reduce complexity without reducing capability.', build: 'Workflow mapping, interface design, backend services, and role-based access.', technology: ['React', 'Express', 'Docker'], result: 'A system built around the way people work.' },
];
