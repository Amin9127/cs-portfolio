import { CandidateProfile } from "@/types/portfolio";

export const candidateProfile: CandidateProfile = {
  name: "Amin Ali",
  title: "MSci Computer Science Student & Software Engineer",
  tagline: "Python, Java, PyTorch computer vision, and Unreal Engine 5 systems builder based in London.",
  location: "London, United Kingdom",
  email: "aminali656565@gmail.com",
  github: "https://github.com/Amin9127",
  itchIo: "https://amin9127.itch.io",
  photographyUrl: "https://amin-photography.vercel.app",
  degree: {
    institution: "City St George's, University of London",
    program: "MSci Computer Science (Integrated Master's)",
    status: "Final-Year Student",
    modules: [
      {
        title: "Computer Vision & Deep Learning",
        focus: "Custom PyTorch convolutional networks, dynamic image augmentations, frequency-weighted loss functions, and HOG with SVM/MLP baselines.",
      },
      {
        title: "Principles of AI & Pattern Recognition",
        focus: "OpenCV grid segmentation, feature scaling, multinomial classification, and probability calibration analysis.",
      },
      {
        title: "Algorithms, Data Structures & Concurrency",
        focus: "Asymptotic complexity bounds, red-black trees, minimum spanning trees, multithreaded Java synchronization, and formal LTSA verification.",
      },
    ],
  },
  experience: [
    {
      role: "Technical QA Evaluator & Model Assessor",
      organization: "Outlier AI",
      project: "Project Aether",
      period: "Oct 2026 - Present",
      highlights: [
        "Evaluate multi-turn conversation quality, instruction adherence, and reasoning chains across frontier LLMs.",
        "Rate comparative ELO performance on frontier text-to-speech (TTS) and multimodal vision-language models.",
        "Audit generated code and prompt logic to catch silent edge cases, incorrect assumptions, and alignment drift.",
        "Document repeatable failure modes in multi-step prompts to improve evaluation benchmarks.",
      ],
    },
  ],
  skills: [
    {
      category: "Core Languages",
      items: ["Python (3.11 / 3.12)", "Java (JDK 17)", "SQL (SQLite)"],
    },
    {
      category: "ML & Computer Vision",
      items: ["PyTorch", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    },
    {
      category: "3D & Game Systems",
      items: ["Unreal Engine 5", "Blueprints", "Gameplay State Trees", "UMG UI", "Pygame", "3D Vector Math"],
    },
    {
      category: "Web & Engineering Tools",
      items: ["AI-Assisted Full-Stack (Next.js / React / Tailwind)", "ExifReader", "PyInstaller", "Git & GitHub", "Linux Shell"],
    },
  ],
};
