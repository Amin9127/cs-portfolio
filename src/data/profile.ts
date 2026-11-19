import { CandidateProfile } from "@/types/portfolio";

export const candidateProfile: CandidateProfile = {
  name: "Amin Ali",
  title: "MSci Computer Science Student & Software Engineer",
  tagline: "Full-stack developer and 3D game builder based in London.",
  location: "London, United Kingdom",
  email: "aminali656565@gmail.com",
  universityEmail: "amin.ali@city.ac.uk",
  github: "https://github.com/Amin9127",
  availability: "Available up to 40 hours/week (Immediate / Full-Time Graduate & Junior Roles)",
  degree: {
    institution: "City St George's, University of London",
    program: "MSci Computer Science (Integrated Master's)",
    level: "4-Year Integrated Master's Degree",
    status: "Final-Year Student (Expected completion 2027)",
    gradeAverage: "First-Class Honours Track (72.5% overall grade average)",
    modules: [
      {
        code: "INM422",
        title: "Algorithms & Advanced Data Structures",
        focus: "Asymptotic complexity analysis, red-black tree balancing, heaps, Prim and Kruskal minimum spanning trees, and graph algorithms."
      },
      {
        code: "INM450",
        title: "MSci Individual Engineering Thesis",
        focus: "Individual research project on offline geospatial mobile architecture, local caching, and optical projection math."
      }
    ]
  },
  experience: [
    {
      role: "Technical QA Evaluator & AI Code Reviewer",
      organization: "Outlier AI",
      project: "Project Aether",
      period: "2024 - Present",
      highlights: [
        "Audit and stress-test LLM-generated code in Python and Java, catching runtime exceptions, memory leaks, and edge-case logic bugs.",
        "Evaluate multi-turn reasoning steps, prompt constraints, and output correctness on frontier reasoning models.",
        "Run comparative ELO evaluations on frontier speech synthesis (TTS) and multimodal vision models.",
        "Analyze failure modes in LLM code generation to improve prompt evaluation benchmarks."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python (3.11/3.12)", "TypeScript", "JavaScript (ES6+)", "Java (JDK)", "SQL", "C++ / Blueprints", "HTML5 & Modern CSS"]
    },
    {
      category: "Web & Full-Stack",
      items: ["Next.js 16 (App Router)", "React 19", "FastAPI (Python)", "Tailwind CSS v4", "Node.js", "Server Components", "RESTful APIs"]
    },
    {
      category: "3D & Game Systems",
      items: ["Unreal Engine 5.7 / 5.4", "Gameplay State Trees", "UMG UI Framework", "Lumen & Nanite", "Pygame", "Vector Math & Transforms"]
    },
    {
      category: "Databases & Systems",
      items: ["PostgreSQL", "Supabase", "TCP/IP Sockets", "Offline-First Sync", "Git & GitHub", "Linux Shell", "Pytest"]
    }
  ]
};
