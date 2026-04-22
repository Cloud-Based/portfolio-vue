import type { Project, Experience, Skill, SocialLink } from "@/types";

// Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Modern admin dashboard with real-time analytics, inventory management, and user management system.",
    technologies: [
      "Vue 3",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "Pinia",
      "Chart.js",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "https://ecommerce-admin.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow - Project Management",
    description:
      "Collaborative task management app with drag & drop, real-time collaboration, and AI-powered insights.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Framer Motion",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    liveUrl: "https://taskflow-app.vercel.app",
    githubUrl: "https://github.com/username/taskflow",
    featured: true,
  },
  {
    id: 3,
    title: "AI Chatbot Interface",
    description:
      "Conversational AI interface with voice input, real-time typing indicators, and smart suggestions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "WebSockets",
      "Shadcn/ui",
    ],
    image:
      "https://images.unsplash.com/photo-1687004492235-e73afe8a8d2c?w=800&h=600&fit=crop",
    liveUrl: "https://ai-chatbot.vercel.app",
    githubUrl: "https://github.com/username/ai-chatbot",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This very portfolio! Built with Vue 3, TypeScript, and Tailwind CSS with smooth animations.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/username/portfolio-vue",
    featured: false,
  },
];

// Experiences
export const experiences: Experience[] = [
  {
    id: 1,
    company: "TechNova Solutions",
    position: "Senior Full Stack Developer",
    duration: "2023 - Present",
    description: [
      "Led development of 5+ production applications serving 100K+ monthly users",
      "Implemented microservices architecture reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["Vue 3", "Node.js", "PostgreSQL", "AWS", "Docker"],
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    company: "DigitalCraft Agency",
    position: "Full Stack Developer",
    duration: "2021 - 2023",
    description: [
      "Built 15+ client websites and web applications from scratch",
      "Optimized Core Web Vitals achieving 95+ Lighthouse scores",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: ["React", "Next.js", "TypeScript", "MongoDB", "Vercel"],
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    company: "Freelance",
    position: "Freelance Developer",
    duration: "2020 - 2021",
    description: [
      "Delivered 20+ projects for various clients worldwide",
      "Specialized in custom web applications and e-commerce solutions",
      "100% client satisfaction rate with 5-star reviews",
    ],
    technologies: ["Vue.js", "Laravel", "WordPress", "Shopify"],
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
  },
];

// Skills
export const skills: Skill[] = [
  {
    name: "Vue.js",
    category: "Frontend",
    icon: "bxl-vuejs",
    color: "#42b883",
  },
  {
    name: "Laravel",
    category: "Framework",
    icon: "bx-code-alt",
    color: "#ef533f",
  },
  {
    name: "VPS",
    category: "Tools",
    icon: "bxl-tux",
    color: "#bebebe",
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: "bxl-typescript",
    color: "#2563eb",
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: "bxl-javascript",
    color: "#facc15",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "bxl-tailwind-css",
    color: "#38bdf8",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "bxl-nodejs",
    color: "#22c55e",
  },
  {
    name: "WordPress CMS",
    category: "CMS",
    icon: "bxl-wordpress",
    color: "#1e40af",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "bxl-mongodb",
    color: "#22c55e",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "bx-data",
    color: "#0284c7",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "bxl-git",
    color: "#f97316",
  },
  {
    name: "Figma",
    category: "Design",
    icon: "bxl-figma",
    color: "#a855f7",
  },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/username",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/username",
    icon: "https://cdn-icons-png.flaticon.com/512/1248/1248497.png",
  },
];
