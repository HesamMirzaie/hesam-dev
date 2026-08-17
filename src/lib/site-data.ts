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
  role: "Software Engineer",
  description:
    "Frontend Engineer with 3+ years of experience building scalable web applications with React, TypeScript, and modern frontend architecture.",
  location: "Tehran, Iran",
  email: "Mirzaeeh08@gmail.com",
  phone: "09911461779",
  social: {
    github: "https://github.com/HesamMirzaie",
    linkedin: "https://www.linkedin.com/in/hesammirzaee",
  },
};

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "REST APIs",
  "WebSocket",
  "Docker",
  "Azure DevOps",
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
    period: "2026 - Present",
    role: "Frontend Engineer (Part-time)",
    company: "Plannerium",
    summary:
      "Own frontend architecture and standards; built a Turborepo monorepo, shared UI library, authentication flows, Storybook, Docker configuration, and CI/CD support.",
  },
  {
    period: "2024 - Present",
    role: "Frontend Engineer",
    company: "PayamGostar",
    summary:
      "Develop and maintain enterprise CRM modules, including complex form workflows, SignalR-powered real-time updates, performance improvements, code reviews, and Azure DevOps release support.",
  },
  {
    period: "4-month bootcamp",
    role: "Frontend Intern",
    company: "Digi-Next",
    summary:
      "Completed intensive React and TypeScript training with hands-on projects focused on component architecture, state management, and frontend performance.",
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
