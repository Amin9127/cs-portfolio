import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "photography-portfolio",
    title: "Photography Portfolio & Optical Archive",
    tagline: "High-performance photographic exhibition engine featuring live optical EXIF telemetry, interactive RAW-to-color grading slider, and AI Vision categorization.",
    category: "fullstack",
    featured: true,
    status: "Live Production",
    badge: "Flagship Production Platform",
    techStack: ["Next.js 16.4", "React 19.3", "Tailwind CSS v4", "TypeScript 5", "ExifReader", "Jose", "Python Batch Automation"],
    localPath: "C:\\Users\\amina\\Desktop\\AI projects\\photography_portfolio",
    metrics: [
      { label: "Lighthouse Performance", value: "98+" },
      { label: "Telemetry Render Latency", value: "< 50ms" },
      { label: "Architecture", value: "Server Components" }
    ],
    highlights: [
      "Dynamic Optical EXIF extraction reading camera focal length, f-stop, shutter duration, ISO, and lens profile.",
      "High-performance GPU-accelerated Before/After slider (BeforeAfterSlider.tsx) comparing raw digital sensor captures against graded finals.",
      "Automated scene categorization and lighting classification driven by multimodal AI Vision (aiVision.ts).",
      "Automated Python batch scripts verifying RAW-pair integrity, metadata normalization, and web asset optimization."
    ],
    caseStudy: {
      overview: "A custom-engineered visual exhibition platform built to treat photography as an optical science rather than flattened static pixels.",
      problem: "Standard web portfolios compress photographs into generic web images, discarding the technical decisions (aperture, shutter speed, ISO, focal length) and developmental color-grading craftsmanship executed by the photographer.",
      architecture: "Architected around Next.js 16 App Router and React 19 Server Components for instant initial paint and zero-bundle static text delivery. The client-side interactive telemetry engine parses EXIF arrays using ExifReader, while an isolated Python processing pipeline handles batch metadata verification and RAW/JPEG asset pairing.",
      technicalChallenges: [
        "Eliminating touch/drag latency on the dual-layer canvas comparison slider across mobile and high-DPI screens without layout shifts.",
        "Parsing heterogeneous EXIF structures across different camera manufacturers while normalizing proprietary lens model tags.",
        "Ensuring bulletproof photo protection against casual drag-and-drop and context menus without sacrificing user accessibility."
      ],
      keyOutcomes: [
        "98+ Lighthouse performance score with instantaneous client hydration.",
        "Production-tested image ingestion pipeline with automated checksum and pair validation.",
        "Seamless responsive experience from 375px mobile screens to 4K displays."
      ]
    }
  },
  {
    id: "nette-game",
    title: "Nette's Game: 3D First-Person Saloon Experience",
    tagline: "Immersive first-person 3D interactive narrative built in Unreal Engine 5.7 with Gameplay State Trees, custom UMG spelling challenges, and realistic PBR scene rendering.",
    category: "game-3d",
    featured: true,
    status: "Active Project",
    badge: "Unreal Engine 5.7 Project",
    techStack: ["Unreal Engine 5.7", "Gameplay State Trees", "Blueprints", "UMG UI Framework", "Lumen & Nanite", "Cinematic Sequences"],
    localPath: "C:\\Users\\amina\\Documents\\Unreal Projects\\nette",
    metrics: [
      { label: "Engine Target", value: "UE 5.7 (Early Access)" },
      { label: "Rendering Tech", value: "Lumen & Nanite" },
      { label: "State Architecture", value: "Gameplay State Tree" }
    ],
    highlights: [
      "Built with cutting-edge Unreal Engine 5.7 leveraging modern Gameplay State Trees for stateful AI and environmental interactions.",
      "Custom in-world gamified spelling and trivia challenges (WBP_SpellingChallenge) with dynamic HUD feedback.",
      "Interactive first-person crosshair system (WBP_Crosshair) for seamless object inspection and world interaction.",
      "Detailed Historic Saloon environment (Historic_Saloon.umap) featuring real-time lighting, water puddle shaders, and sequenced cinematics."
    ],
    caseStudy: {
      overview: "A rich first-person narrative and gamified 3D experience designed to blend atmospheric world-building with reactive educational challenge mechanics.",
      problem: "Traditional 3D interactive educational games frequently suffer from rigid scripted events, clumsy UI overlays that break player immersion, and monolithic game mode architectures that are difficult to extend.",
      architecture: "Utilizes Unreal Engine 5.7's Gameplay State Tree architecture to cleanly decouple gameplay logic, player state, and challenge evaluation from individual actors. UI widgets are built in UMG with event dispatchers communicating directly with BP_GameMode and BP_Game_state.",
      technicalChallenges: [
        "Coordinating dynamic UMG spelling challenge widgets with first-person player controls without locking player movement improperly.",
        "Tuning Lumen global illumination and custom water reflection shaders inside the Historic Saloon map to maintain smooth frame rates.",
        "Setting up custom collision channels and trace interactions for picking up and examining saloon items (BP_Beer, BP_Violation)."
      ],
      keyOutcomes: [
        "Fully playable first-person loop with intuitive inspection and interactive challenge sequences.",
        "Clean, decoupled Blueprint architecture that scales to additional mini-games and rooms.",
        "High-fidelity visual polish with custom puddle materials, lighting, and camera sequences."
      ]
    }
  },
  {
    id: "galactic-crafters",
    title: "Galactic Crafters: Procedural Space Mining Sandbox",
    tagline: "Cross-engine space exploration and crafting game featuring procedural asteroid field generation, resource harvesting, and Newtonian flight mechanics.",
    category: "game-3d",
    featured: true,
    status: "Completed",
    badge: "Python / Pygame + Unreal Engine 5.4",
    techStack: ["Python 3.12", "Pygame", "Unreal Engine 5.4", "PyInstaller", "Vector Physics"],
    githubUrl: "https://github.com/Amin9127/Galactic-crafters",
    localPath: "A:\\epic games\\ue projects\\Galactic_Crafters",
    metrics: [
      { label: "Frame Rate", value: "60 FPS Constant" },
      { label: "Engines", value: "Pygame + UE 5.4" },
      { label: "Physics", value: "Inertial Newtonian" }
    ],
    highlights: [
      "Dual-engine architecture: conceived and published as a 2D Python game, then expanded into 3D within Unreal Engine 5.4.",
      "Procedural asteroid distribution algorithm balancing rare mineral spawns and collision hazards.",
      "Multi-tier inventory and crafting tree with component state serialization.",
      "Deterministic 60 FPS game loop with custom pixel art sprites and standalone PyInstaller executable packaging."
    ],
    caseStudy: {
      overview: "A space sandbox game challenging players to navigate treacherous asteroid fields, harvest minerals, and craft upgrades to survive deep-space expeditions.",
      problem: "Balancing endless procedural resource scattering with performant collision checking and an intuitive crafting progression curve without causing garbage-collection stutter.",
      architecture: "Engineered with a clean modular entity-component pattern in Python (data/classes.py, main.py). Asteroids and space debris are culled outside the active viewport to maintain deterministic update cycles. Later ported core mechanics into Unreal Engine 5.4 to explore 3D mesh modeling and vector spatial physics.",
      technicalChallenges: [
        "Implementing realistic 2D Newtonian thrust, inertia, and rotational drag that feel responsive on keyboard controls.",
        "Optimizing broad-phase and narrow-phase collision detection between the player ship, mining lasers, and dozens of active asteroids.",
        "Packaging Python dependencies, fonts, and sound assets into a zero-dependency standalone Windows executable."
      ],
      keyOutcomes: [
        "Successful standalone release on GitHub with zero external installation requirements.",
        "Smooth, steady 60 FPS performance across low-end and high-end hardware alike.",
        "Seamless conceptual bridge from 2D game loops to Unreal Engine 3D world geometry."
      ]
    }
  },
  {
    id: "starter-factory",
    title: "StarterFactory: Networked 3D Factory Simulation",
    tagline: "Distributed simulation architecture interfacing an Unreal Engine 3D factory visualization with a custom Java TCP/IP socket client for real-time telemetry and control.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "Unreal Engine + Java TCP Socket",
    techStack: ["Unreal Engine", "Java (JDK)", "TCP/IP Sockets", "Inter-Process Communication", "Win64"],
    localPath: "A:\\epic games\\ue projects\\StarterFactory_Build",
    metrics: [
      { label: "Protocol", value: "TCP/IP Stream" },
      { label: "IPC Latency", value: "< 10ms" },
      { label: "Executable", value: "Native Win64" }
    ],
    highlights: [
      "Custom Java socket client (TCPClient.java) managing high-throughput asynchronous communication with native binaries.",
      "Simulates real-time factory floor machinery states and automated assembly line operations in Unreal Engine.",
      "Packet framing and heartbeat verification ensuring zero connection drops during heavy simulation payloads.",
      "Clean demonstration of bridging managed JVM backends with compiled native 3D engine processes."
    ],
    caseStudy: {
      overview: "A networked systems prototype bridging external industrial simulation controllers written in Java with real-time 3D Unreal Engine visualizations.",
      problem: "High-level enterprise controllers and data pipelines often run on managed platforms (Java/Python), while high-fidelity spatial visualizations require native C++ game engines. Direct IPC requires reliable, low-overhead socket handling.",
      architecture: "Implements a custom TCP client/server protocol. The Java TCPClient connects to a dedicated listening socket within the Unreal Engine process, transmitting framed binary commands and receiving telemetry updates at sub-10ms latency.",
      technicalChallenges: [
        "Preventing socket blocking on the Unreal Engine main rendering thread by managing network packets asynchronously.",
        "Handling network disconnects and reconnects gracefully without crashing the running 3D visualization.",
        "Ensuring cross-platform endianness and byte-order compatibility between Java streams and native Windows C++ datatypes."
      ],
      keyOutcomes: [
        "Reliable bidirectional socket communication between Java and compiled Unreal Engine binaries.",
        "Zero frame drops in Unreal Engine during continuous high-frequency telemetry streaming.",
        "Extensible socket architecture suitable for robotics and digital twin simulations."
      ]
    }
  },
  {
    id: "outlier-ai-eval",
    title: "AI Code Review & Reasoning Evaluation Pipeline",
    tagline: "High-trust technical evaluation auditing LLM-generated production code across Python and Java, catching silent runtime edge cases and benchmarking frontier multimodal models.",
    category: "systems-ai",
    featured: false,
    status: "Active Project",
    badge: "Outlier AI / Project Aether",
    techStack: ["Python", "Java", "LLM Evaluation", "Prompt Engineering", "RLHF Auditing", "Multimodal / TTS Benchmarks"],
    metrics: [
      { label: "Audit Focus", value: "Python & Java" },
      { label: "Model Families", value: "Reasoning & Multimodal" },
      { label: "Role Level", value: "High-Trust Evaluator" }
    ],
    highlights: [
      "Audited thousands of multi-turn code generation prompts across Python and Java, catching silent runtime bugs and logic gaps.",
      "Rigorous evaluation of model alignment, token economy, and reasoning chain coherence on frontier models.",
      "Performed qualitative and comparative ELO rating assessments across frontier TTS voice synthesis and multimodal vision models.",
      "Deep daily intuition for where modern LLMs shine, where prompt chains break down, and how to build resilient AI systems."
    ],
    caseStudy: {
      overview: "Active industry contribution as a high-trust Technical QA Evaluator and AI Code Reviewer for Outlier AI on Project Aether.",
      problem: "Modern LLMs frequently generate superficially plausible code that conceals catastrophic runtime bugs, off-by-one errors, memory leaks, and subtle algorithmic degradations under adversarial input.",
      architecture: "Applies rigorous manual code review, automated static analysis, and multi-turn adversarial stress testing to evaluate whether model reasoning paths are sound, aligned with user constraints, and safe for production execution.",
      technicalChallenges: [
        "Detecting insidious non-deterministic errors in complex asynchronous Python code and Java concurrent collections.",
        "Evaluating boundary cases where prompt instructions contain conflicting constraints, scoring how gracefully models prioritize safety and correctness.",
        "Benchmarking subjective and objective quality in next-generation speech synthesis (TTS) models under varying acoustic conditions."
      ],
      keyOutcomes: [
        "Consistently recognized as a high-trust contributor on complex reasoning pipelines.",
        "Direct contribution to the alignment and safety benchmarks of frontier generative models.",
        "Mastery of prompt engineering nuances, failure modes, and defensive AI system design."
      ]
    }
  },
  {
    id: "hack-a-health",
    title: "Hack-A-Health Hackathon Platform",
    tagline: "Rapidly prototyped collaborative healthcare web application developed under competitive hackathon constraints to streamline patient health tracking.",
    category: "fullstack",
    featured: false,
    status: "Hackathon Project",
    badge: "Hackathon Project",
    techStack: ["JavaScript", "Full-Stack Web", "Health Data APIs", "Rapid Prototyping", "Git Collaboration"],
    githubUrl: "https://github.com/Amin9127/Hack-A-Health-hackathon",
    metrics: [
      { label: "Sprint Duration", value: "Hackathon Sprint" },
      { label: "Source Code", value: "Open Source" },
      { label: "Platform", value: "Web Application" }
    ],
    highlights: [
      "Built collaboratively during a time-constrained competitive healthcare hackathon.",
      "Streamlines health metric inputs and patient monitoring through an accessible, high-contrast user interface.",
      "Demonstrates rapid agile development, Git teamwork, and rapid feature prioritization under strict deadlines."
    ],
    caseStudy: {
      overview: "An intensive hackathon sprint project focused on lowering barriers for patients to record, track, and share critical daily health telemetry.",
      problem: "Healthcare tracking tools are often cluttered with unintuitive medical jargon and complex input flows that discourage consistent daily patient compliance.",
      architecture: "Engineered with a lightweight, accessible web frontend designed for clarity and speed, connecting to simulated health telemetry endpoints.",
      technicalChallenges: [
        "Delivering a functional, testable MVP within strict hackathon countdown constraints.",
        "Resolving concurrent merge conflicts and feature branches across a multi-member hackathon team.",
        "Designing high-contrast UI components accessible for users with varying visual capabilities."
      ],
      keyOutcomes: [
        "Successfully delivered and demonstrated a working health prototype at the Hack-A-Health hackathon.",
        "Open-source codebase preserved on GitHub showcasing collaborative velocity.",
        "Hands-on experience in rapid feature triage, MVP scoping, and team Git workflows."
      ]
    }
  }
];
