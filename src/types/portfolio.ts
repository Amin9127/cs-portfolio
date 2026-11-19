export type ProjectCategory = "all" | "fullstack" | "game-3d" | "systems-ai";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  architecture: string;
  technicalChallenges: string[];
  keyOutcomes: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "fullstack" | "game-3d" | "systems-ai";
  featured: boolean;
  status: "Live Production" | "Active Project" | "Completed" | "Hackathon Project";
  techStack: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  localPath?: string;
  caseStudy: CaseStudy;
  badge?: string;
}

export interface CandidateProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  universityEmail: string;
  github: string;
  availability: string;
  degree: {
    institution: string;
    program: string;
    level: string;
    status: string;
    gradeAverage: string;
    modules: {
      code: string;
      title: string;
      focus: string;
    }[];
  };
  experience: {
    role: string;
    organization: string;
    project: string;
    period: string;
    highlights: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}
