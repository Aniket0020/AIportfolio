export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'cloud' | 'ai';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'cloud' | 'ai';
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  metrics?: string;
  highlights: string[];
  challenges: string;
  solution: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'Languages' | 'Frontend' | 'Backend' | 'Cloud & Tools';
  experienceYears: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface UserProfile {
  name: string;
  roleTitle: string;
  secondaryTitle: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  availableForHire: boolean;
  availabilityNote: string;
  stats: {
    yearsExp: number;
    projectsCompleted: number;
    githubCommits: number;
    happyClients: number;
  };
}
