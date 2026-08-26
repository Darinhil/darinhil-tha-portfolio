export type NavTab = 'home' | 'about' | 'projects' | 'experience' | 'resume' | 'contact';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Web' | 'AI' | 'Mobile' | 'Tools';
  tags: string[];
  stars: number;
  forks: number;
  featured: boolean;
  image: string;
  codeSnippet?: string;
  repoUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
}

export interface TechSkill {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'AI & Data Ops' | 'Tools & Infrastructure';
  level: number; // 0-100
  experienceYears: string;
  icon: string;
  description: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: 'Architecture' | 'AI' | 'Rust' | 'React' | 'DevOps';
  excerpt: string;
  contentMarkdown: string;
  tags: string[];
  likes: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceType?: string;
}

export interface ScheduleBooking {
  name: string;
  email: string;
  date: string;
  time: string;
  topic: string;
  notes?: string;
}
