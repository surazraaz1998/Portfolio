import { ProjectItem } from '../types/portfolio';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "pulseboard",
    title: "PulseBoard",
    tagline: "Full-Stack Public Data Dashboard (Next.js, React, TypeScript, FastAPI, Recharts, Tailwind CSS, Vercel)",
    description: "Full-stack public data dashboard for Indian datasets (economic, air-quality, IPL). SSR via Next.js App Router for fast first paint (LCP < 1.5s); chart views use CSR for interactivity. Webpack dynamic imports cut bundle size 35%. GitHub Actions CI/CD to Vercel.",
    longDescription: "PulseBoard is a production full-stack analytics platform delivering real-time telemetry and datasets across India. Features Next.js App Router SSR for rapid first paint (LCP < 1.5s), CSR for interactive Recharts visualizations, Webpack dynamic imports cutting bundle size by 35%, and automated GitHub Actions CI/CD to Vercel.",
    metrics: ["LCP < 1.5s", "35% Bundle Size Cut", "GitHub Actions CI/CD", "SSR + CSR Hybrid"],
    techStack: ["Next.js", "React", "TypeScript", "Python FastAPI", "Recharts", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/surazraaz1998",
    liveUrl: "https://surajraj.dev",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "algotrack",
    title: "AlgoTrack",
    tagline: "Full-Stack DSA & SDE Interview Prep Platform (React, TypeScript, FastAPI, PostgreSQL, Docker, Vercel)",
    description: "Full-stack DSA & SDE interview prep platform covering 15 patterns (Two Pointer → DP) with tiered problem sets, dual JS/Python walkthroughs, and Frontend Machine Coding prep. FastAPI + PostgreSQL backend; Docker Compose locally; 200+ LeetCode & GFG problems seeded.",
    longDescription: "AlgoTrack is a comprehensive interview preparation environment covering 15 essential algorithm patterns with tiered difficulty levels. Features interactive dual JS/Python code walkthroughs, frontend machine coding challenges, Python FastAPI backend backed by PostgreSQL, Docker Compose orchestration, and 200+ curated problems.",
    metrics: ["15 DSA Patterns", "200+ Seeded Problems", "FastAPI + PostgreSQL", "Docker Orchestrated"],
    techStack: ["React", "TypeScript", "Python FastAPI", "PostgreSQL", "Docker", "Vercel"],
    githubUrl: "https://github.com/surazraaz1998",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio & 2D Game",
    tagline: "Interactive Developer Portfolio (Next.js 14, React, TypeScript, Three.js, React Three Fiber, Tailwind CSS, Vercel)",
    description: "Interactive developer portfolio with a Three.js 2D career-journey game (React Three Fiber + Zustand, 60fps). SSR + CSR hybrid via Next.js 14 App Router; automated Vercel CI/CD; recruiter-focused UX with live project demos.",
    longDescription: "Engineered to deliver an interactive recruiter experience while maintaining 100 Lighthouse performance metrics. Features a Three.js side-scrolling 2D career journey mini-game with custom procedural 3D cartoon avatar, responsive glassmorphism UI, dedicated interactive PDF resume viewer (`/resume`), and automated Vercel deployments.",
    metrics: ["60 FPS R3F Game", "SSR + CSR Next.js 14", "1-Click Resume PDF", "Vercel CI/CD"],
    techStack: ["Next.js 14", "React", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Zustand", "Vercel"],
    githubUrl: "https://github.com/surazraaz1998/Portfolio",
    liveUrl: "https://surajraj.dev",
    featured: true,
    category: "Frontend"
  },
  {
    id: "opex360",
    title: "Opex360 (Warner Bros. Discovery)",
    tagline: "Cost Analytics Platform for $M-Scale Operational Expenditure",
    description: "Building Opex360 cost analytics platform for Warner Bros. Discovery to monitor $M-scale operational expenditure in real time — React + TypeScript frontend, Python FastAPI backend with Pydantic v2 models.",
    longDescription: "Architected for Warner Bros. Discovery at Gramener, Opex360 provides real-time visibility into $M-scale operational expenditure. Built with React + TypeScript frontend and Python FastAPI backend featuring Pydantic v2 models and auto-generated OpenAPI documentation. Includes a reusable TypeScript component library reducing UI development time by 30% across squads.",
    metrics: ["30% Faster UI Dev", "Warner Bros. Discovery", "Python FastAPI + Pydantic v2", "WCAG 2.1 Compliant"],
    techStack: ["React.js", "TypeScript", "Python FastAPI", "Pydantic v2", "Tailwind CSS", "OpenAPI"],
    githubUrl: "https://github.com/surazraaz1998",
    featured: false,
    category: "Full Stack"
  },
  {
    id: "bam-security-suite",
    title: "Business Activity Monitor (BAM) & AES Security",
    tagline: "Enterprise KPI Monitoring & CERT-IN Audit Compliance Suite",
    description: "Architected Business Activity Monitor (BAM) for real-time KPI tracking and led AES encryption (CryptoJS), cutting page load time by 25% and vulnerabilities by 30% for CERT-IN audits.",
    longDescription: "Engineered at Newgen Software Technologies. Architected Business Activity Monitor (BAM) for real-time KPI tracking with dynamic theming, multi-session support, and role-based access control (RBAC). Implemented client-side CryptoJS AES encryption, reducing vulnerabilities by 30% via SonarQube & Checkmarx for CERT-IN audit compliance, along with NVDA-verified WCAG compliance.",
    metrics: ["25% Faster Page Load", "~20% Initial JS Bundle Cut", "30% Vulnerabilities Cut", "CERT-IN Audit Passed"],
    techStack: ["React.js", "Redux", "TypeScript", "Webpack", "CryptoJS (AES)", "SonarQube", "Checkmarx"],
    githubUrl: "https://github.com/surazraaz1998",
    featured: false,
    category: "Frontend"
  }
];
