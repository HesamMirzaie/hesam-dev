export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  href: string;
};
export type Education = {
  period: string;
  degree: string;
  institution: string;
  summary: string;
};

export const siteConfig = {
  name: "Hesam Mirzaee",
  role: "Frontend Engineer",
  description:
    "Frontend Engineer with 3+ years of experience building and scaling production web applications with React and TypeScript. Experienced in frontend architecture, monorepo design, reusable component systems, complex API integrations, and real-time applications.",
  location: "Tehran, Iran",
  email: "Mirzaeeh08@gmail.com",
  phone: "09911461779",
  social: {
    github: "https://github.com/HesamMirzaie",
    linkedin: "https://www.linkedin.com/in/hesammirzaee",
  },
};

export const skills = [
  "React & modern frontend development",
  "JavaScript (ES6+) & TypeScript",
  "Monorepo architecture & dependency management",
  "Clean Code, SOLID & code review",
  "CI/CD & deployment workflows",
  "SSR & SEO",
  "Frontend architecture & component design",
  "Performance optimization & debugging",
  "Responsive & semantic web development",
  "REST API & real-time communication",
  "Accessibility & automated testing",
  "Problem solving & technical ownership",
];
export const projects: Project[] = [
  {
    title: "Enterprise CRM modules",
    description:
      "Core CRM workflows with multi-step, validated forms and real-time interface updates for an enterprise-scale platform.",
    technologies: ["React", "TypeScript", "Vite", "React Query", "WebSocket"],
    status: "PayamGostar",
    href: "/projects",
  },
  {
    title: "Plannerium frontend platform",
    description:
      "A pnpm and Turborepo monorepo with a shared UI library, authentication flows, Storybook, Docker, and CI/CD support.",
    technologies: ["React", "Turborepo", "Tailwind CSS", "Storybook", "Docker"],
    status: "Plannerium",
    href: "/projects",
  },
  {
    title: "Realtime seat reservation",
    description: "A realtime application for reserve seat in cinema.",
    technologies: ["Svelte", "TypeScript", "Go"],
    status: "Open source",
    href: "https://github.com/HesamMirzaie/realtime-seat-booking",
  },
  {
    title: "Go todo app",
    description:
      "A basic todo app with go for learn Fiber http library and vuejs as a ui library.",
    technologies: ["Go", "TypeScript", "Fiber", "Vue3"],
    status: "Open source",
    href: "https://github.com/HesamMirzaie/go-todo-app",
  },
  {
    title: "A multi-tenant booking system",
    description:
      "A multi-tenant booking system: users belong to organizations, book resources (rooms/equipment), with recurring bookings, approvals, waitlists, notifications, and audit logs.",
    technologies: [
      "Next.js",
      "React 19",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Zod",
    ],
    status: "Open source",
    href: "https://github.com/HesamMirzaie/team-booking-app",
  },
];
export const experience = [
  {
    period: "2024 - Present",
    role: "Frontend Engineer",
    company: "PayamGostar",
    summary:
      "Develop and maintain enterprise CRM and fintech products, led the migration of 10+ frontend applications to Turborepo, built an AI platform dashboard, and improved delivery reliability through Azure DevOps pipelines and automated quality checks.",
  },
  {
    period: "2025 - Present",
    role: "Frontend Engineer (Part-time)",
    company: "Plannerium",
    summary:
      "Own frontend architecture and engineering standards; built a Turborepo monorepo, reusable component system, end-to-end authentication, automated tests, Docker deployment, Storybook, and CI/CD workflows.",
  },
];
export const education: Education[] = [
  {
    period: "2025 - Present",
    degree: "MSc, Software Engineering",
    institution: "Khatam University",
    summary:
      "Studying machine learning concepts and algorithms while building practical Python skills.",
  },
  {
    period: "2020 - 2024",
    degree: "BSc, Computer Science",
    institution: "Islamic Azad University, Science and Research Branch",
    summary:
      "Studied graph algorithms, linear algebra, Python, design systems, and SOLID principles.",
  },
];
