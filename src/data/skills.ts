export interface SkillCategory {
  title: string;
  skills: { name: string; description: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "JavaScript", description: "Primary language for web development" },
      { name: "TypeScript", description: "Type-safe production applications" },
      { name: "Python", description: "Backend systems and automation" },
      { name: "PHP", description: "Server-side web applications" },
      { name: "Lua", description: "Game scripting and FiveM development" },
      { name: "SQL", description: "Database design and queries" },
    ],
  },
  {
    title: "FRAMEWORKS",
    skills: [
      { name: "React", description: "Component-driven user interfaces" },
      { name: "Next.js", description: "Full-stack React applications" },
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "Express", description: "Minimal backend framework" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "FastAPI", description: "High-performance Python APIs" },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", description: "Version control and collaboration" },
      { name: "GitHub", description: "Code hosting and CI/CD" },
      { name: "Docker", description: "Containerized deployments" },
      { name: "Vercel", description: "Frontend deployment platform" },
      { name: "Figma", description: "Design and prototyping" },
      { name: "REST APIs", description: "Service integration and design" },
    ],
  },
  {
    title: "SPECIALIZED",
    skills: [
      { name: "FiveM", description: "Game server development" },
      { name: "Discord.py", description: "Discord bot framework" },
      { name: "QBCore", description: "FiveM roleplay framework" },
      { name: "QBX", description: "Next-gen QBCore framework" },
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "PostgreSQL", description: "Relational database systems" },
    ],
  },
];
