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
      { label: "Performance", value: "98+ Lighthouse" },
      { label: "Rendering", value: "React 19 Server Components" },
      { label: "Telemetry", value: "Server-Side ExifReader" }
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
      { label: "Architecture", value: "Gameplay State Trees" },
      { label: "Graphics Pipeline", value: "Lumen & Nanite PBR" },
      { label: "UI Dispatcher", value: "Asynchronous UMG" }
    ],
    highlights: [
      "Built with Unreal Engine 5.7 using Gameplay State Trees to manage gameplay rules, player states, and transition conditions.",
      "Asynchronous UMG challenge interfaces communicating with GameMode and GameState through custom event dispatchers.",
      "First-person modular line-trace interaction system for dynamic object evaluation in 3D space.",
      "Tuned Lumen dynamic global illumination and Nanite virtualized geometry to sustain locked 60 FPS performance."
    ],
    caseStudy: {
      overview: "A first-person interactive 3D game focusing on decoupled gameplay architecture and real-time environment rendering.",
      problem: "Traditional game loops often couple gameplay rules and interactive challenge logic directly into level actors, creating brittle, monolithic scripts that are difficult to debug and extend.",
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
    id: "lancaster-box-office",
    title: "Lancaster's Music Hall: Box Office & Seating System",
    tagline: "An enterprise venue management desktop application built in Java 17 and Swing with SQLite, featuring dynamic seating modifications, financial statistics, and role-based marketing interfaces.",
    category: "systems-ai",
    featured: true,
    status: "Completed",
    badge: "City Team Project (Java 17 / SQLite)",
    techStack: ["Java 17", "Java Swing UI", "SQLite", "JDBC", "Desktop MVC", "JavaDoc Documentation"],
    githubUrl: "https://github.com/cityuniwaj/Team-43-Innovator-Box-Office-Marketing-Interface",
    metrics: [
      { label: "Architecture", value: "Desktop MVC Pattern" },
      { label: "Data Layer", value: "Transactional SQLite JDBC" },
      { label: "Documentation", value: "Comprehensive JavaDoc" }
    ],
    highlights: [
      "Engineered desktop Model-View-Controller architecture separating custom Swing presentation from business logic.",
      "Built transactional SQLite schemas handling seating modifications, ticket tier pricing, and customer refund audits.",
      "Designed reusable custom Swing UI suite (RoundedPanel, RoundedButton, dynamic venue seating grid).",
      "Integrated multi-package systems: Calendar event scheduling, TicketDetails, Statistics reporting, and Admin database."
    ],
    caseStudy: {
      overview: "A comprehensive venue management and ticketing system developed for Lancaster's Music Hall as part of the City, University of London Team Project module, verified by over 1,700 lines of formal JavaDoc documentation.",
      problem: "Venues require reliable offline desktop management tools to handle live seating adjustments, complex tiered pricing, ticket cancellations, and revenue auditing without relying on fragile external web services.",
      architecture: "Engineered in Java 17 using a strict Model-View-Controller (MVC) architecture. Separated into functional packages: ContentPages (Calendar, ModifySeats, Refunds, Statistics, TicketDetails), Database DAO layer (AdminDatabase, MarketingSalesInfo, OperationsInterface), and ElementsUI (custom styled Swing components).",
      technicalChallenges: [
        "Ensuring ACID compliance and transaction rollback during concurrent seat modifications and ticket cancellations.",
        "Developing custom Swing components (RoundedPanel, RoundedButton) with custom paintComponent overrides for high-DPI displays.",
        "Managing multi-developer Git merge workflows across distinct functional subsystems (marketing, admin, ticketing, reports)."
      ],
      keyOutcomes: [
        "Full desktop deployment featuring interactive seating configuration, live sales metrics, and refund workflows.",
        "Comprehensive JavaDoc technical documentation covering every package, method contract, and interface.",
        "Successfully delivered and evaluated as part of Team 43 in the university software engineering curriculum."
      ]
    }
  },
  {
    id: "deep-learning-cnn",
    title: "Deep Learning Convolutional Neural Network Pipeline",
    tagline: "Computer vision deep learning pipeline built in Python and PyTorch for image classification, comparing baseline vs improved convolutional architectures.",
    category: "systems-ai",
    featured: true,
    status: "Completed",
    badge: "Team Coursework (PyTorch CNN)",
    techStack: ["Python 3.12", "PyTorch 2.x", "Torchvision", "NumPy", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/RaheemKhan0/Python_NeuralNetwork",
    metrics: [
      { label: "Framework", value: "PyTorch 2.x" },
      { label: "Benchmark", value: "CIFAR-10 Dataset" },
      { label: "Optimization", value: "LR Scheduler & BatchNorm" }
    ],
    highlights: [
      "Engineered convolutional neural network architectures in PyTorch with Batch Normalization, ReLU activations, and dropout regularization.",
      "Implemented learning rate scheduling and data augmentation pipelines to prevent overfitting during training.",
      "Benchmarked accuracy and loss convergence across comparative models, generating training curves and validation metrics."
    ],
    caseStudy: {
      overview: "A machine learning and computer vision coursework project developed for the IN3063 Programming and Mathematics in AI module.",
      problem: "Standard feedforward neural networks suffer from spatial information loss and parameter explosion when handling high-dimensional image data, requiring specialized convolutional feature extractors.",
      architecture: "Built with PyTorch using custom nn.Module architectures. Features a comparative benchmark pipeline contrasting a baseline CNN against an improved deep architecture with residual connections, dynamic learning rate decay, and data augmentation transforms.",
      technicalChallenges: [
        "Tuning hyperparameter grids (batch size, learning rate schedules, dropout probabilities) to prevent early training divergence.",
        "Handling GPU tensor memory allocation and batch loading efficiency using PyTorch DataLoader workers.",
        "Visualizing validation loss plateaus and analyzing confusion matrices across multi-class predictions."
      ],
      keyOutcomes: [
        "Trained models achieving high accuracy convergence on standard image classification benchmarks.",
        "Comparative loss and accuracy history analysis documenting the impact of normalization layers.",
        "Preserved codebase on GitHub demonstrating deep learning proficiency and collaborative Git workflows."
      ]
    }
  },
  {
    id: "concurrency-systems",
    title: "Concurrent Multithreaded Systems & Formal Verification",
    tagline: "High-performance concurrent Java systems featuring thread-safe packet dispatching, parallel matrix multiplication, and formal LTSA deadlock verification.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "City Coursework (Java Concurrency)",
    techStack: ["Java 17", "Multithreading", "LTSA Formal Modeling", "Thread Safety", "Concurrency Locks"],
    metrics: [
      { label: "Verification", value: "LTSA State Machine" },
      { label: "Concurrency", value: "Thread-Safe Bounded Buffer" },
      { label: "Module", value: "IN3042 / IN2026 Concurrency" }
    ],
    highlights: [
      "Engineered PacketDispatcher with port coordination, rendezvous semantics, and thread-safe bounded buffers.",
      "Parallel MatrixMultiplier engine partitioning 2D matrix computations across CPU worker threads for near-linear speedup.",
      "StewPuzzle synchronization system coordinating multi-threaded producers and consumers with condition variables.",
      "Formally verified mutual exclusion, liveness, and deadlock-freedom using Finite State Processes (FSP) in LTSA."
    ],
    caseStudy: {
      overview: "A suite of concurrent multi-threaded systems developed for the advanced concurrency coursework, pairing practical Java implementations with formal mathematical verification.",
      problem: "Multithreaded applications frequently suffer from silent race conditions, resource contention, and deadlocks that are difficult to reproduce and debug without formal model verification.",
      architecture: "Combines multithreaded Java implementations using intrinsic locks, synchronized blocks, and atomic primitives with formal process models defined in Finite State Processes (FSP) and analyzed using LTSA.",
      technicalChallenges: [
        "Designing thread-safe packet dispatching queues without thread starvation or buffer overflow under high producer throughput.",
        "Partitioning 2D matrix multiplication across available CPU worker threads while minimizing synchronization overhead.",
        "Formally modeling shared resource contention in LTSA to prove deadlock-freedom mathematically."
      ],
      keyOutcomes: [
        "Provably thread-safe concurrent components verified against formal safety and liveness properties.",
        "Parallel computational speedups achieved across multi-core CPU architectures.",
        "Demonstrated deep academic and practical understanding of concurrent systems engineering."
      ]
    }
  },
  {
    id: "galactic-crafters",
    title: "Galactic Crafters: Automated Logistics & Assembly Grid Simulation",
    tagline: "A 2D automated manufacturing and resource logistics simulation built in Python and Pygame with custom binary state persistence, featuring directional transport grids, multi-tier assembly chains, and market economy models.",
    category: "game-3d",
    featured: true,
    status: "Completed",
    badge: "Python & Pygame Simulation",
    techStack: ["Python 3.12", "Pygame Engine", "Directional Grid Logistics", "Binary Serialization (Pickle)", "Economic Modeling", "Unreal Engine 5.4"],
    githubUrl: "https://github.com/Amin9127/Galactic-crafters",
    metrics: [
      { label: "Architecture", value: "OOP Machine Hierarchy" },
      { label: "Persistence", value: "Binary Protocol Serialization" },
      { label: "Production", value: "Multi-Tier Assembly Graph" }
    ],
    highlights: [
      "Object-oriented machine hierarchy (Producer, Conveyor, Smelter, Crafter, Seller) with 4-way rotational grid coordinate vectors.",
      "Recursive assembly graph: raw ores (Copper, Iron, Gold, Coal, Lead) through smelters into circuits, CPUs, GPUs, RAM, and full PCs.",
      "Dynamic market economy calculating real-time resource supplies, selling values, and continuous revenue per minute.",
      "Full binary serialization via Python pickle protocol saving complete factory layouts, machine tiers, and financial states."
    ],
    caseStudy: {
      overview: "An automated factory simulation game developed as an extensive Computer Science coursework project, modeling industrial supply chains, directional transport logistics, and dynamic markets.",
      problem: "Simulating dozens of interconnected production machines and continuous item movement on a 40x40 pixel grid requires strict spatial coordinate management to avoid conveyor jams, item duplication, or state desynchronization.",
      architecture: "Engineered using an object-oriented sprite architecture in Pygame (classes.py, main.py). The grid coordinate system maps machine orientations, movement vectors, and item handoffs across directional conveyors. Factory layouts and upgrade states are persisted via Python binary serialization (Galactic_Crafters.txt). Mechanics were subsequently prototyped in Unreal Engine 5.4 to explore 3D spatial grids.",
      technicalChallenges: [
        "Designing a collision and handoff protocol between 4-way rotating conveyors to prevent item stacking and transfer drops.",
        "Implementing recursive crafting dependency trees where higher-tier items require synchronized inputs from multiple upstream smelters and assemblers.",
        "Building resilient save/load routines that serialize multi-tier object dictionaries and time-stamped revenue histories cleanly."
      ],
      keyOutcomes: [
        "Fully playable manufacturing simulation with complex multi-tier assembly trees and balanced market mechanics.",
        "Standalone executable packaged via PyInstaller bundling all sprites, fonts, and logic.",
        "Foundation in spatial coordinate math and decoupled state simulation that translated directly into Unreal Engine development."
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
      { label: "Protocol", value: "Bidirectional TCP/IP" },
      { label: "Latency", value: "Sub-10ms Stream" },
      { label: "Synchronization", value: "Digital Twin Telemetry" }
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
    id: "hack-a-health",
    title: "Hack-A-Health Hackathon Platform",
    tagline: "A healthcare tracking prototype built with a team during a timed hackathon, focused on fast patient data logging.",
    category: "fullstack",
    featured: false,
    status: "Hackathon Project",
    badge: "Hackathon Team Project",
    techStack: ["JavaScript", "Full-Stack Web", "Health Data APIs", "Prototyping", "Team Git"],
    githubUrl: "https://github.com/Amin9127/Hack-A-Health-hackathon",
    metrics: [
      { label: "Collaboration", value: "Multi-Developer Team" },
      { label: "Architecture", value: "High-Contrast Web UI" },
      { label: "Delivery", value: "Timed Sprint Prototype" }
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
