import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "photography-portfolio",
    title: "Photography Portfolio & Visual Archive",
    tagline: "A photography archive and web portfolio built with Next.js 16 and React 19. Displays camera optical data directly from image headers, featuring architectural, street, and nature photography.",
    category: "fullstack",
    featured: true,
    status: "Live Production",
    badge: "Web & Photography",
    techStack: ["Next.js 16.4", "React 19.3", "Tailwind CSS v4", "TypeScript 5", "ExifReader", "Python Scripts"],
    liveUrl: "https://amin-photography.vercel.app",
    githubUrl: "https://github.com/Amin9127/Photography-portfolio",
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Rendering", value: "Server Components" },
      { label: "Host", value: "Vercel" }
    ],
    highlights: [
      "Direct EXIF extraction reading camera focal length, f-stop, shutter speed, ISO, and lens model from image headers.",
      "Fast page loads and responsive image delivery built with Next.js 16 App Router and React 19.",
      "Python batch scripts to verify image integrity, normalize metadata, and check asset pairs before build time."
    ],
    caseStudy: {
      overview: "A custom photography portfolio built to preserve technical shooting data alongside finished photographs.",
      problem: "Most photo portfolio platforms compress images and discard the camera settings (aperture, shutter speed, ISO, focal length) that give context to how a shot was captured.",
      architecture: "Built with Next.js 16 App Router and React 19 Server Components for fast initial page loads and zero-bundle static text delivery. The site extracts EXIF tags directly with ExifReader, while Python scripts handle batch metadata verification and asset pairing.",
      technicalChallenges: [
        "Parsing varied EXIF formats across camera brands while normalizing lens model names.",
        "Preventing image layout shifts during responsive hydration across phone, tablet, and desktop viewports.",
        "Automating checksum and pairing verification between high-resolution files and web assets before deployment."
      ],
      keyOutcomes: [
        "98+ Lighthouse score with fast page hydration.",
        "Automated pre-build image verification pipeline.",
        "Live in production at amin-photography.vercel.app."
      ]
    }
  },
  {
    id: "nette-game",
    title: "Nette's Game: First-Person 3D Systems (Unreal Engine 5.7)",
    tagline: "A first-person 3D game built in Unreal Engine 5.7. Uses Gameplay State Trees for decoupled logic, asynchronous UMG event dispatchers, and Lumen real-time global illumination.",
    category: "game-3d",
    featured: true,
    status: "Active Project",
    badge: "Unreal Engine 5.7",
    techStack: ["Unreal Engine 5.7", "Gameplay State Trees", "Blueprints", "UMG UI Framework", "Lumen & Nanite", "Sequencer"],
    metrics: [
      { label: "Engine Target", value: "UE 5.7" },
      { label: "Lighting Tech", value: "Lumen & Nanite" },
      { label: "State Architecture", value: "Gameplay State Tree" }
    ],
    highlights: [
      "Built with Unreal Engine 5.7 using Gameplay State Trees to manage gameplay rules, player states, and transition conditions.",
      "Asynchronous UMG challenge interfaces communicating with GameMode and GameState through custom event dispatchers.",
      "First-person modular line-trace interaction system for dynamic object evaluation in 3D space.",
      "Tuned Lumen dynamic global illumination and Nanite virtualized geometry to sustain locked 60 FPS performance."
    ],
    caseStudy: {
      overview: "A first-person interactive 3D game focusing on decoupled gameplay architecture and real-time environment rendering.",
      problem: "Traditional game loops often couple gameplay rules and interactive challenge logic directly into level actors, creating brittle, monolithic scripts that are painful to debug and extend.",
      architecture: "Uses Unreal Engine 5.7 Gameplay State Trees to separate player states, transition conditions, and challenge logic from individual world actors. UI widgets are built in UMG and communicate asynchronously with GameMode and GameState through event dispatchers.",
      technicalChallenges: [
        "Coordinating asynchronous UMG challenge dialogs with first-person character movement so player controls remain responsive.",
        "Tuning dynamic Lumen global illumination and Nanite geometry to keep frame pacing smooth without GPU hitches.",
        "Building an extensible line-trace interaction subsystem to inspect and manipulate arbitrary world actors dynamically."
      ],
      keyOutcomes: [
        "Decoupled, modular gameplay state architecture that scales to new mechanics without script bloat.",
        "Stable 60 FPS performance with dynamic lighting and high-fidelity PBR surface rendering.",
        "Fully asynchronous UI and game state synchronization via clean event dispatchers."
      ]
    }
  },
  {
    id: "galactic-crafters",
    title: "Galactic Crafters: Procedural Space Mining Sandbox",
    tagline: "A 2D procedural space game built in Python and Pygame, later expanded into Unreal Engine 5.4. Features asteroid mining, crafting trees, and inertial flight physics.",
    category: "game-3d",
    featured: true,
    status: "Completed",
    badge: "Python / Pygame + UE 5.4",
    techStack: ["Python 3.12", "Pygame", "Unreal Engine 5.4", "PyInstaller", "2D Physics"],
    githubUrl: "https://github.com/Amin9127/Galactic-crafters",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Engines", value: "Pygame + UE 5.4" },
      { label: "Physics", value: "Newtonian Inertia" }
    ],
    highlights: [
      "Originally built as a 2D game in Python, then expanded into 3D in Unreal Engine 5.4.",
      "Procedural asteroid distribution algorithm that controls resource drops and flight hazards.",
      "Multi-tier crafting tree with saved inventory state.",
      "Runs at 60 FPS with custom pixel art sprites and packages into a standalone Windows executable."
    ],
    caseStudy: {
      overview: "A space sandbox game where players fly through asteroid fields, gather minerals, and craft upgrades for their ship.",
      problem: "Handling continuous procedural asteroid spawning while maintaining accurate collision checks and steady frame rates without memory hiccups.",
      architecture: "Built with a modular entity-component structure in Python (data/classes.py, main.py). Objects outside the player view are culled to keep updates fast. Later recreated key mechanics in Unreal Engine 5.4 to test 3D meshes and spatial physics.",
      technicalChallenges: [
        "Tuning 2D inertial physics (thrust, momentum, rotational drag) so ship movement feels responsive on a keyboard.",
        "Optimizing collision checks between the player ship, mining lasers, and dozens of active asteroids.",
        "Packaging Python code, sprites, and audio into a single standalone executable using PyInstaller."
      ],
      keyOutcomes: [
        "Published release on GitHub that runs without needing Python installed.",
        "Consistent 60 FPS performance during busy asteroid sequences.",
        "Practical experience moving from 2D game loops into Unreal Engine 3D coordinate space."
      ]
    }
  },
  {
    id: "starter-factory",
    title: "StarterFactory: Networked 3D Factory Simulation",
    tagline: "A factory simulation in Unreal Engine connected to a custom Java TCP socket client for real-time telemetry and command exchange.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "Unreal Engine + Java TCP",
    techStack: ["Unreal Engine", "Java (JDK)", "TCP/IP Sockets", "IPC", "Win64"],
    metrics: [
      { label: "Protocol", value: "TCP/IP Stream" },
      { label: "IPC Latency", value: "< 10ms" },
      { label: "Executable", value: "Native Win64" }
    ],
    highlights: [
      "Custom multithreaded Java 17 TCP socket client handling bidirectional communication with native Unreal Engine binaries.",
      "Asynchronous buffer processing that prevents network operations from stalling the Unreal Engine render loop.",
      "Custom packet framing and keep-alive protocol handling network reconnects and payload serialization.",
      "Real-time state mapping binding external machine telemetry directly to 3D simulation actors."
    ],
    caseStudy: {
      overview: "A networked prototype connecting external simulation controllers written in Java with a 3D Unreal Engine factory visualization.",
      problem: "Factory logic often lives in backend Java or Python environments, while high-detail visualizations run in native C++ game engines. Connecting the two requires dependable, low-latency socket communication.",
      architecture: "Uses a custom TCP client and server setup. The Java TCPClient connects to a socket opened by the Unreal Engine binary, sending framed control commands and receiving real-time state updates at sub-10ms latency.",
      technicalChallenges: [
        "Preventing socket operations from blocking the Unreal Engine main render thread.",
        "Handling socket disconnects and reconnects cleanly without crashing the running 3D view.",
        "Aligning byte orders and data formats between Java streams and native Windows C++ types."
      ],
      keyOutcomes: [
        "Dependable bidirectional communication between Java and compiled Unreal Engine builds.",
        "Zero frame drops in Unreal Engine during high-frequency message streams.",
        "A socket pattern that can be reused for digital twin and robotics experiments."
      ]
    }
  },
  {
    id: "outlier-ai-eval",
    title: "AI Code Review & Reasoning Evaluation Pipeline",
    tagline: "Evaluating and stress-testing LLM-generated code in Python and Java at Outlier AI, catching runtime bugs, logic gaps, and assessing multimodal models.",
    category: "systems-ai",
    featured: false,
    status: "Active Project",
    badge: "Outlier AI / Project Aether",
    techStack: ["Python", "Java", "LLM Evaluation", "Prompt Engineering", "RLHF Auditing", "Multimodal / TTS Benchmarks"],
    metrics: [
      { label: "Language Focus", value: "Python & Java" },
      { label: "Model Types", value: "Reasoning & Multimodal" },
      { label: "Role", value: "Technical QA Reviewer" }
    ],
    highlights: [
      "Audited thousands of code generation turns in Python and Java, catching silent runtime errors and logic flaws.",
      "Evaluated model alignment, constraint following, and reasoning steps across frontier models.",
      "Conducted comparative ELO evaluations on speech synthesis (TTS) and multimodal vision models.",
      "Developed a clear understanding of common failure patterns in LLM code generation and prompt designs."
    ],
    caseStudy: {
      overview: "Working as a Technical QA Evaluator and AI Code Reviewer for Outlier AI on Project Aether.",
      problem: "Language models often produce code that looks correct at first glance but contains edge-case failures, off-by-one errors, resource leaks, or broken assumptions under unexpected inputs.",
      architecture: "Applies code inspection, static checks, and manual stress-testing across multi-turn sessions to evaluate whether a model's reasoning holds up and follows all given constraints safely.",
      technicalChallenges: [
        "Identifying subtle concurrency bugs and race conditions in asynchronous Python and Java code.",
        "Testing models on conflicting instructions to see how they resolve ambiguities and prioritize safety.",
        "Evaluating naturalness, cadence, and clarity in speech synthesis models across diverse acoustic inputs."
      ],
      keyOutcomes: [
        "Consistent contributor on reasoning and code evaluation pipelines.",
        "Helped validate alignment and accuracy benchmarks on frontier generative models.",
        "Hands-on experience identifying where AI code tools fail and how to write better prompts and guardrails."
      ]
    }
  },
  {
    id: "hack-a-health",
    title: "Hack-A-Health Hackathon Platform",
    tagline: "A healthcare tracking prototype built with a team during a timed hackathon, focused on fast patient data logging.",
    category: "fullstack",
    featured: false,
    status: "Hackathon Project",
    badge: "Hackathon Sprint",
    techStack: ["JavaScript", "Full-Stack Web", "Health Data APIs", "Prototyping", "Team Git"],
    githubUrl: "https://github.com/Amin9127/Hack-A-Health-hackathon",
    metrics: [
      { label: "Sprint", value: "Hackathon" },
      { label: "Codebase", value: "Open Source" },
      { label: "Platform", value: "Web Application" }
    ],
    highlights: [
      "Built collaboratively with a team during a time-constrained healthcare hackathon.",
      "Helps patients log daily health numbers through a clear, high-contrast interface.",
      "Demonstrated rapid feature scoping, Git collaboration, and shipping a working demo under a deadline."
    ],
    caseStudy: {
      overview: "A hackathon project created to make recording daily health metrics simpler and faster for patients.",
      problem: "Many health tracking tools have dense layouts and complicated forms that make daily logging tedious.",
      architecture: "Built with a clean web frontend designed for fast input, wired up to mock health telemetry endpoints for live testing.",
      technicalChallenges: [
        "Delivering a working, testable demo within the hackathon countdown.",
        "Managing merge conflicts and parallel branches across teammates with varying Git experience.",
        "Keeping the UI readable and easy to use for people with different levels of technical comfort."
      ],
      keyOutcomes: [
        "Demonstrated a working prototype to judges at the Hack-A-Health event.",
        "Codebase preserved on GitHub showing team progress during the sprint.",
        "Valuable practice in quick decision-making and shipping working software under time pressure."
      ]
    }
  }
];
