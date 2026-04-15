export const skills = {
  mobile: [
    { name: "Flutter", level: "Expert" as const, primary: true },
  ],
  frontend: [
    { name: "React", level: "Intermediate" as const, primary: false },
    { name: "Next.js", level: "Intermediate" as const, primary: false },
    { name: "TypeScript", level: "Intermediate" as const, primary: false },
    { name: "HTML/CSS", level: "Expert" as const, primary: false },
  ],
  backend: [
    { name: "Python", level: "Intermediate" as const, primary: false },
    { name: "Node.js", level: "Intermediate" as const, primary: false },
    { name: "API Integration", level: "Expert" as const, primary: false },
  ],
  ai: [
    { name: "Machine Learning", level: "Intermediate" as const, primary: false },
    { name: "NLP", level: "Intermediate" as const, primary: false },
  ],
  tools: [
    { name: "Git", level: "Expert" as const, primary: false },
    { name: "Firebase", level: "Intermediate" as const, primary: false },
    { name: "ClickUp", level: "Expert" as const, primary: false },
  ],
};

export interface Skill {
  name: string;
  level: "Expert" | "Intermediate";
  primary: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Persona-Based AI Video Script Agent",
    description:
      "AI system that generates personalized video scripts using NLP and knowledge graphs for healthcare sales professionals.",
    techStack: ["Flutter", "Python", "NLP", "GPT API", "Knowledge Graphs"],
    featured: true,
  },
  {
    id: 2,
    title: "AI Smart Notes",
    description:
      "GPT-powered note-taking app with intelligent organization and writing assistance.",
    techStack: ["Flutter", "GPT API", "NLP"],
    featured: true,
  },
  {
    id: 3,
    title: "AI Therapist",
    description:
      "Conversational AI assistant for mental health support.",
    techStack: ["Flutter", "GPT API", "Conversational AI"],
    featured: true,
  },
  {
    id: 4,
    title: "MindChat",
    description:
      "AI therapy app with multiple counselor personalities.",
    techStack: ["Flutter", "AI Agents", "Persona Design"],
    featured: true,
  },
  {
    id: 5,
    title: "Heedy App",
    description:
      "Elderly care mobile app with chatbot, emergency features, and weather updates.",
    techStack: ["Flutter", "Firebase", "Chatbot API"],
  },
  {
    id: 6,
    title: "Environmental Air Platform",
    description:
      "Helps users improve indoor environments using structured, science-backed insights.",
    techStack: ["Flutter", "API Integration", "Data Visualization"],
  },
];

export const experience = [
  {
    id: 1,
    role: "Associate Software Engineer",
    company: "Grayhat",
    period: "Nov 2022 – Dec 2025",
    description: [],
  },
  {
    id: 2,
    role: "Freelance Flutter Developer",
    company: "Self-Employed",
    period: "2021 – 2026",
    description: [],
  },
];

export const education = [
  {
    id: 1,
    degree: "PhD Computer Science",
    institution: "NUTECH",
    period: "2025 – Present",
    description: "Focus on AI, NLP, and Machine Learning",
  },
  {
    id: 2,
    degree: "MS Computer Science",
    institution: "NUTECH",
    period: "2024",
    description: "",
  },
  {
    id: 3,
    degree: "BS Computer Science",
    institution: "NUTECH",
    period: "2022",
    description: "",
  },
];

export const researchFocus =
  "Small-scale person detection in drone footage using deep learning (VGG-16 architecture with multi-scale feature fusion).";

export const socialLinks = {
  email: "wasifsadiq71@gmail.com",
  linkedin: "https://linkedin.com/in/wasif-sadiq",
  github: "https://github.com/wasif-sadiq",
};