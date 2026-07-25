export interface CareerZone {
  id: number;
  company: string;
  role: string;
  period: string;
  theme: string;
  description: string;
  color: string;
  iconName: string;
  achievements: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  unlockedSkills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Full Stack' | 'Frontend' | 'Backend / AI';
}

export interface SkillRadarItem {
  subject: string;
  A: number;
  fullMark: number;
}
