import { CareerZone } from '../types/portfolio';

export const CAREER_ZONES: CareerZone[] = [
  {
    id: 1,
    company: "Capgemini",
    role: "Software Developer",
    period: "Jun 2021 – Sep 2022",
    theme: "jQuery → React.js Migration & CI/CD Pipelines",
    description: "Led jQuery → React.js migration for a legacy enterprise portal with Jenkins CI/CD pipelines, cutting release overhead by 40% and improving performance benchmarks by 15%.",
    color: "#38bdf8", // Electric Blue
    iconName: "Code2",
    achievements: [
      "Led jQuery → React.js migration for a legacy enterprise portal with Jenkins CI/CD pipelines.",
      "Cut release overhead by 40% and improved performance benchmarks by 15%.",
      "Reduced code smells by 20% via SonarQube refactoring; integrated Spring Boot REST APIs with robust error handling."
    ],
    metrics: [
      { label: "Release Overhead Cut", value: "40%", description: "Eliminated release overhead via Jenkins CI/CD" },
      { label: "Performance Gain", value: "15%", description: "Improved benchmark scores post-React migration" },
      { label: "Code Smells Cut", value: "20%", description: "Refactored legacy code via SonarQube" }
    ],
    unlockedSkills: ["React.js", "JavaScript (ES6+)", "jQuery Migration", "Jenkins CI/CD", "Spring Boot REST", "SonarQube"]
  },
  {
    id: 2,
    company: "Newgen Software",
    role: "Software Design Engineer (Frontend)",
    period: "Sep 2022 – Aug 2024",
    theme: "Enterprise Architecture, AES Security & BAM",
    description: "Integrated Redux and configured Webpack, cutting page load time by 25%. Architected Business Activity Monitor (BAM) and led AES payload encryption for CERT-IN audits.",
    color: "#818cf8", // Violet / Indigo
    iconName: "ShieldCheck",
    achievements: [
      "Configured Webpack (code-splitting, tree-shaking, dynamic imports), cutting page load time by 25% and initial JS bundle size by ~20%.",
      "Architected Business Activity Monitor (BAM) for real-time KPI tracking with dynamic theming, multi-session support, and RBAC.",
      "Led AES encryption (CryptoJS) for data in transit/at rest; reduced vulnerabilities by 30% via SonarQube + Checkmarx for CERT-IN audits; shipped RTL/LTR i18n with NVDA-verified WCAG compliance."
    ],
    metrics: [
      { label: "Page Load Reduction", value: "25%", description: "Optimized bundle via Webpack code-splitting & tree-shaking" },
      { label: "Initial Bundle Cut", value: "~20%", description: "Reduced JS initial payload size" },
      { label: "Vulnerabilities Cut", value: "30%", description: "CERT-IN audit compliance via SonarQube & Checkmarx" }
    ],
    unlockedSkills: ["TypeScript", "Redux", "Webpack Optimization", "BAM Architecture", "CryptoJS (AES)", "CERT-IN Audits", "WCAG 2.1"]
  },
  {
    id: 3,
    company: "GetMyParking",
    role: "Software Development Engineer (Frontend)",
    period: "Aug 2024 – Oct 2025",
    theme: "High-Traffic Scale (500K+ MAU) & SSR Optimization",
    description: "Delivered production React features for a platform processing millions of transactions/month across 500K+ monthly active users in 50+ cities; implemented SSR with Next.js.",
    color: "#34d399", // Emerald Green
    iconName: "Zap",
    achievements: [
      "Delivered production React features processing millions of transactions/month across 500K+ MAU in 50+ cities.",
      "Implemented SSR with Next.js, improving Lighthouse performance scores by 18%.",
      "Achieved 85%+ unit test coverage with Jest and React Testing Library, cutting regression defects; enforced design consistency via Material UI custom theming."
    ],
    metrics: [
      { label: "Monthly Active Users", value: "500K+", description: "Millions of transactions/month across 50+ cities" },
      { label: "Test Coverage", value: "85%+", description: "Jest & React Testing Library regression-free releases" },
      { label: "Lighthouse Boost", value: "+18%", description: "Server-side rendering optimization with Next.js" }
    ],
    unlockedSkills: ["Next.js (SSR)", "React.js", "Material UI", "Jest & RTL", "85%+ Test Coverage", "High-Traffic Scale"]
  },
  {
    id: 4,
    company: "Gramener — A Straive Company",
    role: "Senior Software Development Engineer (Full Stack)",
    period: "Nov 2025 – Present",
    theme: "Warner Bros. Discovery Cost Analytics (Opex360)",
    description: "Building Opex360 for Warner Bros. Discovery to monitor $M-scale operational expenditure in real time — React + TypeScript frontend, Python FastAPI backend with Pydantic v2 models.",
    color: "#fbbf24", // Amber Gold
    iconName: "BarChart3",
    achievements: [
      "Building Opex360 cost analytics platform for Warner Bros. Discovery using React + TypeScript & Python FastAPI with Pydantic v2 models.",
      "Architected a reusable TypeScript component library reducing UI development time by 30% across squads.",
      "Built WCAG 2.1-compliant dashboards with Tailwind CSS and mentored junior engineers."
    ],
    metrics: [
      { label: "UI Dev Speedup", value: "30%", description: "Accelerated development cadence via custom TypeScript UI library" },
      { label: "Enterprise Client", value: "WBD", description: "Warner Bros. Discovery $M-scale cost analytics" },
      { label: "Backend Stack", value: "FastAPI", description: "Python FastAPI with Pydantic v2 models & auto OpenAPI docs" }
    ],
    unlockedSkills: ["Python FastAPI", "Pydantic v2", "React & TypeScript", "Component Library", "Tailwind CSS", "WCAG 2.1", "OpenAPI"]
  }
];

