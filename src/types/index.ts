export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
