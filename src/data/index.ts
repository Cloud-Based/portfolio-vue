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
    company: "PT Bintang Media Visual",
    position: "Freelance",
    duration: "2021 - 2021",
    description: [
      "Responsible for developing and managing a news portal website using WordPress CMS",
      "Implemented page structure, news categories, and publishing workflows to ensure organized and efficient content management",
      "Monitored website performance to prevent errors, downtime, and technical issues affecting users",
      "Identified and resolved bugs, system errors, and plugin or theme conflicts in WordPress-based websites",
      "Optimized website speed, responsiveness, and overall user experience",
    ],
    technologies: ["WordPress", "MySQL", "Elementor"],
    logo: "assets/logos/bintangsatu.png",
  },
  {
    id: 2,
    company: "HotTails and CockTails",
    position: "Freelance",
    duration: "2023 - 2023",
    description: [
      "Built responsive website pages using Elementor in WordPress based on Figma/Adobe XD designs",
      "Customized themes and Elementor widgets using HTML, CSS, and basic JavaScript for advanced functionality",
      "Optimized page performance, responsiveness, and cross-browser compatibility",
      "Collaborated with clients to refine layouts and ensure alignment with business requirements",
      "Managed content structure and ensured consistency across pages using WordPress CMS",
    ],
    technologies: ["WordPress", "Elementor"],
    logo: "assets/logos/hottails.svg",
  },
  {
    id: 3,
    company: "GZM Intimate Spray",
    position: "Freelance",
    duration: "2024 - 2024",
    description: [
      "Responsible for implementing provided UI/UX designs into websites using WordPress CMS",
      "Adjusted layout, styling, and page structure to match design specifications and responsive standards (desktop & mobile)",
      "Ensured each website page functioned properly, performed optimally, and met defined requirements",
      "Performed maintenance, content updates, and design adjustments based on team requirements or revisions",
      "Optimized website performance and visual consistency to maintain a user-friendly experience",
    ],
    technologies: ["WordPress", "Elementor"],
    logo: "assets/logos/gzm.png",
  },
  {
    id: 4,
    company: "PT PJI PuncakJaya Indonesia",
    position: "Full-Stack Web Developer",
    duration: "Oct 2023 - Present",
    description: [
      "Develop web-based applications and websites using the Laravel and Vue.JS frameworks with a structured architecture",
      "Implement REST APIs and integrate frontend and backend systems to ensure optimal performance",
      "Integrate Payment Gateway APIs for websites with payment systems",
      "Perform debugging, troubleshooting, and application performance optimization",
      "Handle deployment and system maintenance to ensure application stability and security",
    ],
    technologies: ["Vue 3", "Laravel", "MySQL", "TypeScript", "Tailwind"],
    logo: "assets/logos/pji.png",
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
    url: "https://github.com/Cloud-Based",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sya-akrq",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sya.akrq",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  },
  // {
  //   name: "Dribbble",
  //   url: "https://dribbble.com/username",
  //   icon: "https://cdn-icons-png.flaticon.com/512/1248/1248497.png",
  // },
];
