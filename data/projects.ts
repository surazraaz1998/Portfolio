import { ProjectItem } from '../types/portfolio';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pulseboard",
    title: "PulseBoard Analytics",
    tagline: "Full-Stack Public Data Dashboard (Next.js, FastAPI, Recharts)",
    description: "Full-stack public data dashboard for Indian datasets (economic, air-quality, IPL). SSR via Next.js App Router for fast first paint (LCP < 1.5s); chart views use CSR for interactivity.",
    longDescription: "PulseBoard is a production full-stack analytics platform delivering real-time telemetry and datasets across India. Features Next.js App Router SSR for rapid first paint, CSR for interactive Recharts visualizations, Webpack dynamic imports cutting bundle size by 35%, and GitHub Actions automated CI/CD to Vercel.",
    metrics: ["LCP < 1.5s", "35% Bundle Size Cut", "GitHub Actions CI/CD", "100% Type-Safe"],
    techStack: ["Next.js", "React", "TypeScript", "Python FastAPI", "Recharts", "Tailwind CSS", "Webpack", "Vercel"],
    githubUrl: "https://github.com/surazraaz1998/pulseboard",
    liveUrl: "https://pulseboard-demo.vercel.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "opex360",
    title: "Opex360 (Warner Bros. Discovery)",
    tagline: "Cost Analytics Platform for $M-Scale Operational Expenditure",
    description: "Building Opex360 cost analytics platform for Warner Bros. Discovery to monitor $M-scale operational expenditure in real time — React + TypeScript frontend, Python FastAPI backend.",
    longDescription: "Architected for Warner Bros. Discovery at Gramener, Opex360 provides real-time visibility into $M-scale operational expenditure. Built with React + TypeScript frontend and Python FastAPI backend featuring Pydantic v2 models and auto-generated OpenAPI documentation. Includes a reusable TypeScript component library reducing UI development time by 30% across squads.",
    metrics: ["30% Faster UI Dev", "Warner Bros. Discovery", "Python FastAPI + Pydantic v2", "WCAG 2.1 Compliant"],
    techStack: ["React.js", "TypeScript", "Python FastAPI", "Pydantic v2", "Tailwind CSS", "OpenAPI"],
    githubUrl: "https://github.com/surazraaz1998",
    liveUrl: "https://www.linkedin.com/in/surazraaz1998/",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "portfolio-game",
    title: "Personal Portfolio & 2D Game",
    tagline: "Interactive Developer Portfolio & Three.js 2D Career Journey",
    description: "Interactive developer portfolio with live project demos and recruiter-focused UX. Built with React, TypeScript, Next.js 14, Three.js 2D game engine, and automated CI/CD.",
    longDescription: "Designed to showcase full-stack engineering proficiency and interactive motion design. Features a custom 2D side-scrolling Three.js mini-game built with React Three Fiber, Framer Motion, and Zustand, guiding recruiters through Suraj Raj's career journey across Capgemini, Newgen, GetMyParking, and Gramener.",
    metrics: ["CSR & SSR Optimized", "60 FPS R3F Game Engine", "Recruiter-Focused UX", "Automated CI/CD"],
    techStack: ["React", "TypeScript", "Next.js", "Three.js", "React Three Fiber", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/surazraaz1998/Portfolio",
    liveUrl: "https://www.linkedin.com/in/surazraaz1998/",
    featured: true,
    category: "Frontend"
  },
  {
    id: "bam-security-suite",
    title: "Business Activity Monitor (BAM) & AES Security",
    tagline: "Enterprise KPI Monitoring & CERT-IN Audit Compliance Suite",
    description: "Architected enterprise workflow-visibility tool (BAM) and led AES encryption for data in transit/at rest, reducing vulnerabilities by 30% for CERT-IN audits.",
    longDescription: "Engineered at Newgen Software Technologies. Architected Business Activity Monitor (BAM) for real-time KPI tracking with dynamic theming, multi-session support, and role-based access control (RBAC). Implemented client-side CryptoJS AES encryption, reducing vulnerabilities by 30% via SonarQube & Checkmarx for CERT-IN audit compliance, along with NVDA-verified WCAG compliance.",
    metrics: ["25% Faster Page Load", "~20% Initial JS Bundle Cut", "30% Vulnerabilities Cut", "CERT-IN Audit Passed"],
    techStack: ["React.js", "Redux", "TypeScript", "Webpack", "CryptoJS (AES)", "SonarQube", "Checkmarx"],
    githubUrl: "https://github.com/surazraaz1998",
    featured: false,
    category: "Frontend"
  }
];
