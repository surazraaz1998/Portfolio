import { SkillCategory, SkillRadarItem } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering & Rendering",
    description: "Building reactive, accessible UI with SSR, CSR, SSG & ISR.",
    skills: [
      { name: "React.js / Next.js (App Router)", level: 98, highlight: true },
      { name: "TypeScript", level: 96, highlight: true },
      { name: "Redux / Redux Toolkit / React Query", level: 92 },
      { name: "Tailwind CSS / Material UI / Ant Design", level: 95, highlight: true },
      { name: "SSR, CSR, SSG & ISR Rendering", level: 94 },
      { name: "Vite & Webpack (Code-Splitting, Tree-Shaking)", level: 90 },
      { name: "Module Federation & Micro-Frontends", level: 85 }
    ]
  },
  {
    title: "Backend & Databases",
    description: "Designing sub-100ms APIs, OpenAPI specs, and async task streams.",
    skills: [
      { name: "Python FastAPI (Pydantic v2)", level: 94, highlight: true },
      { name: "Node.js / Express.js", level: 88 },
      { name: "REST APIs & OpenAPI / Swagger", level: 96, highlight: true },
      { name: "PostgreSQL & MySQL & MongoDB", level: 90 },
      { name: "WebSockets & Long Polling", level: 86 },
      { name: "Redis Caching", level: 82 }
    ]
  },
  {
    title: "DevOps, Cloud & Infrastructure",
    description: "CI/CD pipelines, containerization, and cloud hosting.",
    skills: [
      { name: "Docker Containerization", level: 88, highlight: true },
      { name: "GitHub Actions (CI/CD) & Jenkins", level: 90, highlight: true },
      { name: "AWS (EC2, S3, Lambda)", level: 84 },
      { name: "Vercel & Netlify Deployment", level: 95 },
      { name: "Kubernetes & Nginx Basics", level: 78 }
    ]
  },
  {
    title: "Quality, Security & Tooling",
    description: "Rigorous testing, CERT-IN audits, accessibility, and dev tools.",
    skills: [
      { name: "Jest & React Testing Library (85%+ Coverage)", level: 94, highlight: true },
      { name: "CryptoJS (AES Encryption)", level: 90, highlight: true },
      { name: "SonarQube & Checkmarx & Snyk", level: 88 },
      { name: "CERT-IN Security & WCAG 2.1 Compliance", level: 92 },
      { name: "VS Code, Git, JIRA, Postman, Lighthouse, Storybook", level: 95 }
    ]
  }
];

export const SKILL_RADAR_DATA: SkillRadarItem[] = [
  { subject: 'React & Next.js', A: 98, fullMark: 100 },
  { subject: 'TypeScript', A: 96, fullMark: 100 },
  { subject: 'Python FastAPI', A: 94, fullMark: 100 },
  { subject: 'Security & CERT-IN', A: 90, fullMark: 100 },
  { subject: 'Jest/RTL (85%+)', A: 94, fullMark: 100 },
  { subject: 'Webpack & DevOps', A: 88, fullMark: 100 },
  { subject: 'UI Systems & WCAG', A: 95, fullMark: 100 },
];
