export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
}

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface Hobby {
  title: string;
  description: string;
  emoji?: string;
}
