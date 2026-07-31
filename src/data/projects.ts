export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  idea: string;
  build: string;
  details: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "online-web-store",
    number: "01",
    title: "ONLINE WEB STORE",
    year: "2026",
    category: "WEB DEVELOPMENT",
    description:
      "A fully responsive e-commerce platform designed around a seamless shopping experience. Every interaction — from browsing to checkout — was crafted to feel intuitive and effortless.",
    idea: "The goal was to rethink how users browse and purchase products online, removing unnecessary friction and creating a genuinely enjoyable flow from discovery to delivery.",
    build:
      "Built with React and Node.js, featuring real-time inventory management, secure payment processing, and an admin dashboard for complete product control.",
    details:
      "Custom filtering system, wishlist functionality, dynamic cart, order tracking, and responsive design across all devices.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/images/project-1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pc-builder",
    number: "02",
    title: "PC BUILDER",
    year: "2026",
    category: "FULL STACK / INTERACTIVE",
    description:
      "An interactive PC configuration tool that lets users assemble custom computers with real-time compatibility checking and pricing.",
    idea: "Building a PC should be exciting, not confusing. This tool guides users through component selection while ensuring every part works together perfectly.",
    build:
      "Full-stack application with a React frontend, Express backend, and a comprehensive database of components with real-time compatibility validation.",
    details:
      "Real-time price calculation, component compatibility engine, saved builds, share functionality, and performance benchmarking estimates.",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
    ],
    image: "/images/project-2.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "fivem-system",
    number: "03",
    title: "FIVEM ROLEPLAY SYSTEM",
    year: "2025",
    category: "GAME DEVELOPMENT",
    description:
      "A comprehensive roleplay framework for FiveM servers, featuring custom game mechanics, economy systems, and player management tools.",
    idea: "Creating an immersive roleplay experience requires systems that feel alive. Every mechanic was designed to encourage authentic player interaction.",
    build:
      "Built on QBCore/QBX framework with custom Lua scripts, integrated with a web-based admin panel and real-time server monitoring.",
    details:
      "Custom job system, dynamic economy, inventory management, vehicle system, housing, and an extensive admin toolkit.",
    technologies: ["Lua", "QBCore", "QBX", "JavaScript", "MySQL"],
    image: "/images/project-3.jpg",
    githubUrl: "#",
  },
  {
    id: "discord-bot",
    number: "04",
    title: "DISCORD BOT SYSTEM",
    year: "2025",
    category: "BACKEND / AUTOMATION",
    description:
      "A modular Discord bot ecosystem with advanced moderation, custom commands, and community engagement features serving thousands of users.",
    idea: "Community management shouldn't require constant attention. This bot handles the repetitive work so communities can focus on what matters — connection.",
    build:
      "Developed with Discord.py featuring a plugin architecture, PostgreSQL for data persistence, and a web dashboard for configuration.",
    details:
      "Auto-moderation, ticket system, role management, welcome flows, custom commands, analytics dashboard, and API integrations.",
    technologies: ["Python", "Discord.py", "PostgreSQL", "FastAPI", "Docker"],
    image: "/images/project-4.jpg",
    githubUrl: "#",
  },
  {
    id: "clothing-store",
    number: "05",
    title: "CLOTHING STORE",
    year: "2025",
    category: "E-COMMERCE",
    description:
      "A fashion-forward e-commerce platform that prioritizes visual storytelling, creating a browsing experience that feels editorial rather than transactional.",
    idea: "Fashion is visual. The store was designed to feel more like a lookbook than a traditional shop, letting the clothing speak through beautiful presentation.",
    build:
      "React-based storefront with headless CMS integration, dynamic product pages, and a streamlined checkout experience.",
    details:
      "Lookbook-style product pages, size guide integration, wishlist, dynamic filtering, and mobile-first responsive design.",
    technologies: ["React", "Next.js", "Sanity CMS", "Stripe", "Vercel"],
    image: "/images/project-5.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "custom-web-app",
    number: "06",
    title: "CUSTOM WEB APPLICATION",
    year: "2026",
    category: "FULL STACK",
    description:
      "A bespoke web application built for a specific business workflow, transforming complex manual processes into an elegant digital system.",
    idea: "When off-the-shelf tools don't fit, custom software becomes the answer. This application was designed around real workflows, not the other way around.",
    build:
      "Full-stack TypeScript application with real-time collaboration features, role-based access control, and comprehensive analytics.",
    details:
      "Custom workflow engine, real-time updates, document management, reporting suite, and integration with third-party services.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
    ],
    image: "/images/project-6.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];
