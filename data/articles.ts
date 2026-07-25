export interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'React 19.2 Series' | 'Open Source' | 'Node.js & Backend' | 'Architecture';
  seriesDay?: string;
  date: string;
  readTime: string;
  teaser: string;
  highlights: string[];
  tags: string[];
  linkedInUrl: string;
  featured?: boolean;
  color: string;
  iconName: string;
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "react-19-2-roadmap",
    title: "React 19.2 Deep-Dive Series: Implementation Roadmap",
    subtitle: "7 Days, 6 Game-Changing Features, 1 Complete Execution Strategy",
    category: "React 19.2 Series",
    seriesDay: "Day 7 of 7",
    date: "Feb 2026",
    readTime: "6 min read",
    teaser: "The final roadmap tying Activity, useEffectEvent, PPR, cacheSignal, and Suspense batching into a cohesive production execution strategy for high-performance React applications.",
    highlights: [
      "Cohesive multi-feature production execution",
      "Monthly milestones and architectural checkpoints",
      "Real-world business ROI & performance metrics"
    ],
    tags: ["React 19.2", "Architecture", "Performance", "Roadmap"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-webdevelopment-activity-7407630809739722752-7_NX",
    featured: true,
    color: "#38bdf8", // Sky Blue
    iconName: "Rocket"
  },
  {
    id: "react-19-2-devtools",
    title: "React 19.2 DevTools: Performance Tracks Unveiled",
    subtitle: "Component-Level Render Profiling & Precise Bottleneck Debugging",
    category: "React 19.2 Series",
    seriesDay: "Day 6 of 7",
    date: "Feb 2026",
    readTime: "5 min read",
    teaser: "React finally fixed performance debugging! Inspect exact component names, render triggers, reconciliation timing, and background work directly in Chrome DevTools.",
    highlights: [
      "Went 67% faster in real dashboard optimization",
      "Component-level render & reconciliation timing",
      "Urgent vs. background work breakdown"
    ],
    tags: ["React 19.2", "DevTools", "Debugging", "Performance"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-performance-activity-7407268378593337344-gACc",
    featured: true,
    color: "#818cf8", // Indigo
    iconName: "Gauge"
  },
  {
    id: "react-19-2-suspense-batching",
    title: "Batching Suspense Boundaries: Eliminating UI Flicker",
    subtitle: "How React 19.2 Replaces Jittery Reveals with Smooth Transitions",
    category: "React 19.2 Series",
    seriesDay: "Day 5 of 7",
    date: "Feb 2026",
    readTime: "4 min read",
    teaser: "Stop page blinking during load! Learn how React 19.2 automatically batches multiple Suspense boundary resolutions into smooth, intentional UI updates.",
    highlights: [
      "Eliminating multiple jittery UI updates",
      "Coordinated profile + sidebar loading states",
      "Polished, professional user experience"
    ],
    tags: ["React 19.2", "Suspense", "UX Design", "Frontend"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-frontend-activity-7406543649586581505-vNzR",
    featured: false,
    color: "#a855f7", // Purple
    iconName: "Layers"
  },
  {
    id: "react-19-2-cachesignal",
    title: "React 19.2 cacheSignal API: Slashing Server Costs",
    subtitle: "Automated Data Fetch Cancellation on User Navigation",
    category: "React 19.2 Series",
    seriesDay: "Day 4 of 7",
    date: "Feb 2026",
    readTime: "5 min read",
    teaser: "Stop burning server bandwidth on abandoned page fetches. The new cacheSignal API enables data fetches to automatically cancel themselves when users navigate away.",
    highlights: [
      "Uber-cancellation analogy for API calls",
      "Drastic reduction in server CPU & bandwidth costs",
      "Preventing spinning request background leaks"
    ],
    tags: ["React 19.2", "cacheSignal", "DevOps", "WebPerformance"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-cachesignal-activity-7404376844529065986-vnp2",
    featured: true,
    color: "#34d399", // Emerald
    iconName: "Zap"
  },
  {
    id: "react-19-2-ppr",
    title: "Partial Pre-Rendering (PPR): Making Websites 10x Faster",
    subtitle: "Instant 0.3s First Paint with Dynamic Streaming",
    category: "React 19.2 Series",
    seriesDay: "Day 3 of 7",
    date: "Feb 2026",
    readTime: "6 min read",
    teaser: "Transform page load experience from 3.2s down to 0.3s! Serve static shell content instantly from CDN while dynamic reviews and recommendations stream in.",
    highlights: [
      "First paint: 3.2s → 0.3s (90% faster)",
      "+28% conversion rate boost in production",
      "-64% bounce rate reduction (no blank screens)"
    ],
    tags: ["React 19.2", "PPR", "Next.js", "Performance"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-performance-activity-7401840117117816832-tfZb",
    featured: true,
    color: "#f59e0b", // Amber
    iconName: "Sparkles"
  },
  {
    id: "react-19-2-useeffectevent",
    title: "React 19.2 useEffectEvent: Eliminating Dependency Array Bloat",
    subtitle: "Solving Stale Closure Problems Permanently",
    category: "React 19.2 Series",
    seriesDay: "Day 2 of 7",
    date: "Jan 2026",
    readTime: "5 min read",
    teaser: "Say goodbye to 7-item bloated dependency arrays! Discover how useEffectEvent isolates reactive values from side-effects without fragile useRef workarounds.",
    highlights: [
      "Stale closure elimination explained",
      "Eliminating bloated dependency arrays",
      "5 real production refactoring benchmarks"
    ],
    tags: ["React 19.2", "React Hooks", "useEffectEvent", "Clean Code"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-javascript-activity-7396057022586085377-YRCE",
    featured: false,
    color: "#ec4899", // Pink
    iconName: "Code2"
  },
  {
    id: "react-19-2-activity",
    title: "React 19.2 Activity Component: Preserving Component State",
    subtitle: "TV Remote Analogy & Perceived Performance Gains",
    category: "React 19.2 Series",
    seriesDay: "Day 1 of 7",
    date: "Jan 2026",
    readTime: "5 min read",
    teaser: "Never lose user form data when switching tabs or components. Learn how React 19.2's Activity Component preserves state and improves perceived speed by 40%+.",
    highlights: [
      "State preservation across tab switches",
      "TV remote analogy breakdown",
      "40%+ perceived speed boost"
    ],
    tags: ["React 19.2", "Activity Component", "Frontend", "State"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_react-react192-activitycomponent-activity-7395332233139642369-xTX_",
    featured: false,
    color: "#06b6d4", // Cyan
    iconName: "Tv"
  },
  {
    id: "sunsetting-cra",
    title: "Sunsetting Create React App: The Modern Framework Standard",
    subtitle: "Why CRA Is Being Deprecated & What Developers Should Use",
    category: "Architecture",
    date: "Feb 2025",
    readTime: "5 min read",
    teaser: "Create React App simplified setup in 2016, but modern apps require SSR, parallel routing, and zero-waterfall data fetching. Explore Next.js, Vite, and Remix migration paths.",
    highlights: [
      "Why CRA is officially deprecated by React team",
      "Eliminating network waterfalls in useEffect",
      "Next.js, Vite & React Router migration patterns"
    ],
    tags: ["React", "Create React App", "Next.js", "Vite"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_sunsetting-create-react-app-react-activity-7297339556809359360-iISZ",
    featured: false,
    color: "#f43f5e", // Rose
    iconName: "Compass"
  },
  {
    id: "nodejs-fs-guide",
    title: "Node.js File System (`fs`) Operations: Comprehensive Guide",
    subtitle: "Cheat Sheet for File Operations, Buffers & Error Handling",
    category: "Node.js & Backend",
    date: "Dec 2024",
    readTime: "6 min read",
    teaser: "A complete reference guide for Node.js file reading/writing, async streams, buffer management, error boundaries, and production performance best practices.",
    highlights: [
      "Comprehensive file system cheat sheet",
      "Error handling & stream performance",
      "Real-world backend code walkthroughs"
    ],
    tags: ["Node.js", "FileSystem", "Backend", "JavaScript"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_node-js-guide-nodejs-fs-guidemd-at-main-activity-7264722333016166400-v36h",
    featured: false,
    color: "#10b981", // Emerald
    iconName: "FileCode"
  },
  {
    id: "use-kioskmode-npm",
    title: "Introducing `use-kioskmode`: React Kiosk Management Package",
    subtitle: "Open Source NPM Release & 100xDevs Cohort 3.0 Spotlight",
    category: "Open Source",
    date: "Oct 2024",
    readTime: "3 min read",
    teaser: "Released `use-kioskmode` on NPM! A React custom hook simplifying kiosk mode management, fullscreen triggers, and exit event handlers with 0 boilerplate.",
    highlights: [
      "Published open-source NPM package",
      "Special mention to 100xDevs & Harkirat Singh",
      "Zero-dependency React custom hook API"
    ],
    tags: ["OpenSource", "NPM Package", "React", "100xDevs"],
    linkedInUrl: "https://www.linkedin.com/posts/surazraaz1998_use-kioskmode-activity-7250856954099589120-_rCa",
    featured: false,
    color: "#6366f1", // Indigo
    iconName: "Package"
  }
];
