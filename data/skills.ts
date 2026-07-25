import { SkillCategory, SkillRadarItem } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering & Rendering",
    description: "Building reactive, accessible UI with SSR, CSR, SSG & ISR.",
    skills: [
      { name: "React.js / Next.js 14 (App Router)", level: 98, highlight: true },
      { name: "TypeScript & JavaScript (ES6+)", level: 96, highlight: true },
      { name: "Redux / Redux Toolkit / React Query", level: 92 },
      { name: "Tailwind CSS / Material UI / Ant Design", level: 95, highlight: true },
      { name: "SSR (App Router), CSR, SSG & ISR", level: 94 },
      { name: "Vite, Webpack & Module Federation", level: 90 },
      { name: "Three.js & React Three Fiber", level: 88 }
    ]
  },
  {
    title: "Backend & Databases",
    description: "Sub-100ms APIs, Pydantic v2 schemas, and relational/NoSQL databases.",
    skills: [
      { name: "Python FastAPI (Pydantic v2)", level: 94, highlight: true },
      { name: "Node.js & Express.js", level: 88 },
      { name: "REST APIs & GraphQL (basic)", level: 96, highlight: true },
      { name: "PostgreSQL, MongoDB, MySQL & Redis", level: 90 },
      { name: "WebSockets & Long Polling", level: 86 }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "CI/CD automation pipelines, containerization, and cloud deployment.",
    skills: [
      { name: "Docker & Docker Compose", level: 90, highlight: true },
      { name: "GitHub Actions (CI/CD) & Jenkins", level: 92, highlight: true },
      { name: "AWS (EC2, S3, Lambda)", level: 84 },
      { name: "Vercel & Netlify Deployment", level: 95 },
      { name: "Kubernetes & Nginx (basic)", level: 80 }
    ]
  },
  {
    title: "Quality, Security & Dev Tools",
    description: "Rigorous testing, CERT-IN security compliance, and dev tooling.",
    skills: [
      { name: "Jest & React Testing Library (85%+ Coverage)", level: 94, highlight: true },
      { name: "SonarQube, Checkmarx & Snyk", level: 88 },
      { name: "CryptoJS (AES) & CERT-IN Audit Compliance", level: 92, highlight: true },
      { name: "WCAG 2.1 Accessibility (NVDA Verified)", level: 90 },
      { name: "VS Code, Git, JIRA, Figma, Postman, Storybook", level: 95 }
    ]
  }
];

export const SKILL_RADAR_DATA: SkillRadarItem[] = [
  { subject: 'React & Next.js 14', A: 98, fullMark: 100 },
  { subject: 'TypeScript', A: 96, fullMark: 100 },
  { subject: 'Python FastAPI', A: 94, fullMark: 100 },
  { subject: 'Security & CERT-IN', A: 92, fullMark: 100 },
  { subject: 'Jest/RTL (85%+)', A: 94, fullMark: 100 },
  { subject: 'Docker & DevOps', A: 90, fullMark: 100 },
  { subject: 'UI Systems & WCAG', A: 95, fullMark: 100 },
];
