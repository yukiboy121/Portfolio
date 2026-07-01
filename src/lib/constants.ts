export const PERSONAL = {
  name: "Sneha Nethsara",
  firstName: "Sneha",
  lastName: "Nethsara",
  role: [
    "Full Stack Developer",
    "Web Developer",
    "FiveM Developer",
    "Discord Bot Developer",
  ],
  tagline:
    "Student Developer passionate about Web Development, FiveM Development, Discord Bots, and creating modern digital experiences.",
  location: "Ellagawa, Ratnapura, Sri Lanka",
  email: "yukiboy49@gmail.com",
  phone: "+94 75 948 9684",
  github: "https://github.com/yukiboy121",
  portfolio: "https://zaikodev.xyz",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_TEXT = [
  "Motivated and passionate student developer with hands-on experience in web development, FiveM server development, Discord bot development, and WordPress websites.",
  "Skilled in Git, Linux, VS Code, and modern web technologies. Strong teamwork and leadership skills gained through leading the school media unit.",
  "Currently expanding knowledge in software engineering and full-stack web development.",
];

export const SKILLS_DATA = {
  programming: {
    title: "Programming",
    icon: "code",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Lua", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "Web Development", level: 80 },
    ],
  },
  platforms: {
    title: "Platforms",
    icon: "layers",
    items: [
      { name: "WordPress", level: 75 },
      { name: "FiveM Server Dev", level: 85 },
      { name: "Discord Bot Dev", level: 80 },
    ],
  },
  creative: {
    title: "Creative",
    icon: "palette",
    items: [
      { name: "Adobe Photoshop", level: 70 },
      { name: "Adobe Illustrator", level: 65 },
      { name: "Photography", level: 60 },
    ],
  },
  tools: {
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "Git", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Linux", level: 70 },
    ],
  },
  soft: {
    title: "Soft Skills",
    icon: "users",
    items: [
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 85 },
      { name: "Fast Learning", level: 90 },
    ],
  },
};

export const EXPERIENCE_DATA = [
  {
    title: "FiveM Server Developer",
    description:
      "Developed and customized FiveM game servers using Lua. Implemented custom gameplay systems, server configurations, and optimized performance.",
    tags: ["Lua", "MySQL", "Server Config"],
  },
  {
    title: "Discord Bot Developer",
    description:
      "Created Discord bots for automation, moderation, ticket systems, logging, and server management.",
    tags: ["JavaScript", "Discord.js", "Node.js"],
  },
  {
    title: "Web Developer",
    description:
      "Built responsive websites using HTML, CSS, JavaScript, and WordPress.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    title: "President — School Media Unit",
    description:
      "Led the school media team. Managed event coverage. Organized creative projects. Improved teamwork and communication.",
    tags: ["Leadership", "Management", "Communication"],
  },
];

export const EDUCATION_DATA = [
  { school: "Ellagawa Vidyalaya", period: "" },
  { school: "Kiriela Central College", period: "" },
  { school: "Taxila Maha Vidyalaya — Horana", period: "" },
  { school: "Advanced Level (A/L) Student", period: "Current", isCurrent: true },
];

export const LANGUAGES_DATA = [
  { name: "Sinhala", level: "Fluent", percent: 95 },
  { name: "English", level: "Basic Conversational", percent: 45 },
];

export const PROJECTS_DATA = [
  {
    title: "FiveM Roleplay Server",
    category: "FiveM Servers",
    description:
      "Custom-built FiveM roleplay server with advanced Lua scripting, optimized performance, and immersive gameplay systems.",
    tags: ["Lua", "FiveM", "MySQL", "Server Config"],
    gradient: "from-[#6C63FF]/20 to-[#A855F7]/10",
    accent: "#6C63FF",
  },
  {
    title: "Discord Moderation Bot",
    category: "Discord Bots",
    description:
      "Feature-rich Discord bot with moderation, ticket system, auto-roles, logging, and custom commands.",
    tags: ["JavaScript", "Discord.js", "Node.js"],
    gradient: "from-[#00E5FF]/20 to-[#6C63FF]/10",
    accent: "#00E5FF",
  },
  {
    title: "Portfolio Website",
    category: "Web Applications",
    description:
      "Modern responsive portfolio website with animations, 3D elements, and premium design aesthetics.",
    tags: ["Next.js", "React", "Three.js", "Tailwind"],
    gradient: "from-[#A855F7]/20 to-[#00E5FF]/10",
    accent: "#A855F7",
  },
  {
    title: "Business WordPress Site",
    category: "WordPress Websites",
    description:
      "Professional WordPress website with custom theme, SEO optimization, and responsive design.",
    tags: ["WordPress", "PHP", "CSS", "SEO"],
    gradient: "from-[#6C63FF]/20 to-[#00E5FF]/10",
    accent: "#6C63FF",
  },
  {
    title: "FiveM Vehicle System",
    category: "FiveM Servers",
    description:
      "Custom vehicle management system for FiveM with garage, insurance, and dealership features.",
    tags: ["Lua", "FiveM", "SQL"],
    gradient: "from-[#00E5FF]/20 to-[#A855F7]/10",
    accent: "#00E5FF",
  },
  {
    title: "Discord Ticket Bot",
    category: "Discord Bots",
    description:
      "Advanced ticket system bot with categories, transcripts, and staff management features.",
    tags: ["JavaScript", "Discord.js", "SQLite"],
    gradient: "from-[#A855F7]/20 to-[#6C63FF]/10",
    accent: "#A855F7",
  },
];

export const SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "Building modern, responsive websites with clean code and stunning visuals.",
    icon: "globe",
  },
  {
    title: "FiveM Development",
    description:
      "Custom FiveM server development with Lua scripting and optimization.",
    icon: "gamepad",
  },
  {
    title: "Discord Bot Development",
    description:
      "Creating powerful Discord bots for automation and server management.",
    icon: "bot",
  },
  {
    title: "WordPress Development",
    description:
      "Professional WordPress websites with custom themes and plugins.",
    icon: "layout",
  },
  {
    title: "UI Design",
    description:
      "Designing beautiful, user-friendly interfaces with modern aesthetics.",
    icon: "figma",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing website support, updates, security, and performance optimization.",
    icon: "shield",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Web Applications",
  "FiveM Servers",
  "Discord Bots",
  "WordPress Websites",
];
