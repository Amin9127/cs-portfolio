import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "photography-portfolio",
    title: "Photography Portfolio & Visual Archive",
    tagline: "A custom photography portfolio and archive built with Next.js 16 and React 19. It reads camera optical settings directly from image file headers on the server.",
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
      problem: "Most photo sharing platforms strip away camera metadata and heavily compress images. That hides the shooting settings (focal length, f-stop, shutter speed, and ISO) that show how each shot was captured.",
      architecture: "Built with Next.js 16 and React 19. It uses ExifReader on the server to read EXIF headers directly from high-resolution files before rendering, while automated Python scripts run before builds to verify files, check asset pairs, and normalize camera and lens labels.",
      technicalChallenges: [
        "Normalizing lens model and camera names across different manufacturer tags.",
        "Keeping image aspect ratios steady during page loads to stop layout jumps on mobile.",
        "Writing Python scripts to check that every web image has a valid full-res source file before deploying."
      ],
      keyOutcomes: [
        "Fast page loads and a 98+ Lighthouse score.",
        "A pre-build Python check that catches missing files or corrupt tags before build time.",
        "Live in production at amin-photography.vercel.app."
      ]
    }
  },
  {
    id: "nette-game",
    title: "Nette's Game: First-Person 3D Systems",
    tagline: "A first-person 3D exploration and puzzle demo built in Unreal Engine 5.7. Uses Gameplay State Trees for quest and player state, UMG widgets for UI challenges, and line traces for object interaction.",
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
      "Configured Lumen dynamic global illumination and Nanite virtualized geometry for real-time scene rendering."
    ],
    caseStudy: {
      overview: "A first-person interactive 3D game demo focusing on decoupled gameplay architecture and clean state management.",
      problem: "In Unreal projects, it is easy to dump puzzle triggers, player state, and UI dialogs directly into level blueprints or world actors. That makes quests hard to debug, breaks easily when moving actors around, and causes messy spaghetti logic.",
      architecture: "I used Unreal Engine 5.7 Gameplay State Trees to separate player state, puzzle conditions, and objectives from individual level actors. UMG puzzle widgets talk back to the GameMode using custom event dispatchers, and lighting uses Lumen dynamic illumination and Nanite meshes.",
      technicalChallenges: [
        "Pausing and releasing first-person camera and movement controls cleanly when opening interactive spelling challenge widgets.",
        "Balancing interior lighting with Lumen so indoor rooms stay well-lit without blowing out shadows or overworking the GPU.",
        "Building a modular line-trace system from the camera center to detect and interact with different scene objects."
      ],
      keyOutcomes: [
        "Clean separation between player progress and individual level objects, making it easy to add new rooms and puzzles.",
        "Responsive first-person movement, clean line-trace object interaction, and stable dynamic lighting.",
        "Decoupled UI dialogs that update game state through clear event dispatchers."
      ]
    }
  },
  {
    id: "lancaster-box-office",
    title: "Lancaster's Music Hall: Box Office & Seating System",
    tagline: "A desktop ticketing and venue management app built in Java 17 and Swing with SQLite for a university team project. Handles seat reservations, pricing tiers, ticket cancellations, and sales stats.",
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
      overview: "A comprehensive venue management and ticketing desktop system developed for Lancaster's Music Hall as part of the City, University of London software engineering team module.",
      problem: "Venues need a simple, reliable desktop tool to manage events across a calendar, let staff modify tiered seating plans on the fly, handle ticket cancellations with refunds, and view sales numbers without relying on web connections.",
      architecture: "Built in Java 17 using an MVC pattern across distinct packages. Split between UI pages (Calendar, ModifySeats, Refunds, Statistics), a JDBC data access layer with SQLite for transactions, and custom Swing UI components for buttons, panels, and an interactive seating grid.",
      technicalChallenges: [
        "Handling database rollbacks in SQLite when a booking or cancellation fails mid-transaction so seats do not get double-booked.",
        "Overriding paintComponent in Swing to build custom rounded panels and buttons that render sharply on high-resolution screens.",
        "Coordinating code changes and resolving Git merges across a four-person team working on different parts of the app."
      ],
      keyOutcomes: [
        "Working desktop app with an interactive seating grid, sales reports, and cancellation workflows.",
        "Clear JavaDoc comments documenting every class, method, and database query.",
        "Completed and assessed as part of Team 43 for our second-year software engineering module."
      ]
    }
  },
  {
    id: "deep-learning-cnn",
    title: "Deep Learning Convolutional Neural Network Pipeline",
    tagline: "A PyTorch image classification project comparing baseline and improved convolutional neural networks on the CIFAR-10 dataset for university coursework.",
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
      problem: "Basic feedforward networks do not understand 2D spatial relationships in images, and simple CNNs quickly overfit or plateau when trained on diverse image datasets like CIFAR-10.",
      architecture: "Built in PyTorch 2.x. Started with a baseline CNN, then built an improved network adding batch normalization after convolutional layers, dropout before fully connected layers, and a StepLR learning rate scheduler with Adam optimization. Compared training loss and validation accuracy with Matplotlib curves.",
      technicalChallenges: [
        "Tuning learning rates, batch sizes, and dropout rates so the deeper model learned steadily without diverging.",
        "Configuring PyTorch DataLoaders with multiprocessing workers to keep the GPU fed without running out of memory.",
        "Generating confusion matrices to see which animal and vehicle classes were frequently confused."
      ],
      keyOutcomes: [
        "Achieved significantly higher validation accuracy on CIFAR-10 with the improved architecture over the baseline.",
        "Documented how batch normalization and learning rate decay smoothed out loss curves and reduced overfitting.",
        "Saved code, notebooks, and training plots on GitHub for coursework evaluation."
      ]
    }
  },
  {
    id: "concurrency-systems",
    title: "Concurrent Multithreaded Systems & Formal Verification",
    tagline: "A set of multithreaded Java systems built for advanced concurrency coursework. Includes a thread-safe packet dispatcher, a parallel matrix multiplier, and formal deadlock verification in LTSA.",
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
      "Parallel MatrixMultiplier engine partitioning 2D matrix computations across CPU worker threads for clear speedups.",
      "StewPuzzle synchronization system coordinating multi-threaded producers and consumers with condition variables.",
      "Formally verified mutual exclusion, liveness, and deadlock-freedom using Finite State Processes (FSP) in LTSA."
    ],
    caseStudy: {
      overview: "A suite of concurrent multi-threaded systems developed for advanced university concurrency coursework, pairing practical Java implementations with formal state-machine verification.",
      problem: "Multithreaded code that shares memory easily runs into race conditions, buffer overruns, and deadlocks. These bugs are notoriously hard to catch through normal testing because they depend on unpredictable thread timing.",
      architecture: "Built in Java 17 across three core problems: a PacketDispatcher with rendezvous ports and bounded buffers, a MatrixMultiplier that splits rows across a thread pool, and a synchronized monitor puzzle. I also modeled the thread states mathematically in Finite State Processes (FSP) and checked them in LTSA to prove they were deadlock-free.",
      technicalChallenges: [
        "Designing thread-safe packet queues so slow consumers do not starve and fast producers do not overflow buffers.",
        "Splitting matrix row calculations cleanly across CPU cores without threads fighting over shared variables.",
        "Writing Finite State Process models that accurately reflect Java thread synchronization and checking for deadlock states in LTSA."
      ],
      keyOutcomes: [
        "Verified thread safety and deadlock freedom both in Java tests and through formal LTSA state analysis.",
        "Achieved clear execution speedups on large matrix multiplications when running across multiple CPU cores.",
        "Completed all coursework requirements for the IN3042 and IN2026 concurrency modules."
      ]
    }
  },
  {
    id: "galactic-crafters",
    title: "Galactic Crafters: Automated Logistics & Assembly Grid Simulation",
    tagline: "A 2D factory automation game built in Python and Pygame for my A-Level Computer Science NEA. Players place conveyors, smelters, and crafters on a grid to automate computer manufacturing and trade on a market.",
    category: "game-3d",
    featured: true,
    status: "Completed",
    badge: "Python & Pygame Simulation",
    techStack: ["Python 3.12", "Pygame Engine", "Directional Grid Logistics", "Binary Serialization (Pickle)", "Economic Modeling", "Unreal Engine 5.4"],
    githubUrl: "https://github.com/Amin9127/Galactic-crafters",
    liveUrl: "https://www.youtube.com/watch?v=Mv0J8NKr4F8",
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
      overview: "An automated factory simulation game developed as an A-Level Computer Science NEA project, documented in a formal 190,000-character specification and demonstrated on YouTube.",
      problem: "I wanted to build a strategy and puzzle game focused on logistics and problem solving. Most casual games are passive, so the goal was to create an engaging simulation where players design manufacturing pipelines, optimize spatial layouts, and manage production economics.",
      architecture: "Built in Python 3.12 with Pygame. Players build on a 40x40 grid, placing machines like extractors, directional conveyor belts, smelters, and crafters. Raw materials (copper, iron, gold, coal) are smelted and routed into crafting trees to assemble circuits, CPUs, GPUs, RAM, and full PCs. Completed items are sold to earn money, with game state saved to disk using Python binary serialization.",
      technicalChallenges: [
        "Writing conveyor handoff logic so items pass smoothly around 90-degree corners without piling up, clipping, or disappearing.",
        "Managing multi-step crafting recipes where high-tier parts need several machines feeding intermediate items in sync.",
        "Saving and loading full game states (grid layouts, machine states, inventories, and player cash) using Python's pickle protocol without corrupting files.",
        "Optimizing sprite rendering and updates so the game runs smoothly even with hundreds of machines and moving items on the grid."
      ],
      keyOutcomes: [
        "Packaged as a standalone Windows application using PyInstaller so it runs without needing Python installed.",
        "Recorded and published a full gameplay demonstration video on YouTube.",
        "Extensively documented across a 190,000-character coursework specification covering requirements, design, code, and testing."
      ]
    }
  },
  {
    id: "starter-factory",
    title: "StarterFactory: Networked 3D Factory Simulation",
    tagline: "A real-time prototype connecting a Java multithreaded TCP socket client to an Unreal Engine 3D simulation to stream machine data and update world actors.",
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
      problem: "When connecting external backend code (like Java services) to a 3D engine like Unreal Engine, network calls cannot run on the main game thread or the 3D view will stutter and freeze.",
      architecture: "Built with a Java 17 TCP client communicating with Unreal Engine over local sockets. The Java side handles telemetry formatting and runs on a background worker thread. Unreal reads incoming packets asynchronously and maps telemetry fields to actor positions, rotation speeds, and machine states in the 3D scene.",
      technicalChallenges: [
        "Keeping socket listening and packet parsing off the main Unreal Engine thread so gameplay and rendering stay smooth.",
        "Handling connection drops gracefully so the 3D simulation keeps running while attempting to reconnect.",
        "Structuring clear message delimiters and string payloads so Java and Unreal parse the exact same data without byte alignment errors."
      ],
      keyOutcomes: [
        "Reliable real-time message exchange between Java and compiled Unreal Engine builds.",
        "Fast updates with sub-10ms packet exchange over local loopback sockets.",
        "A reusable socket bridge pattern for pairing backend Java logic with Unreal Engine visualizations."
      ]
    }
  },
  {
    id: "hack-a-health",
    title: "Hack-A-Health Hackathon Platform",
    tagline: "A web prototype built with a team during a timed healthcare hackathon, designed to make daily health logging fast and easy for patients.",
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
      problem: "Many health tracking apps have cluttered interfaces and long forms, which discourages patients from logging their daily readings regularly.",
      architecture: "We built a clean web interface with high-contrast form fields for quick daily inputs, connected to mock health telemetry endpoints so judges could test logging blood pressure, glucose, and symptoms in real time.",
      technicalChallenges: [
        "Scoping features down to what could realistically be built, tested, and styled before the final demo deadline.",
        "Helping team members coordinate branches and resolve merge conflicts during rapid sprint commits.",
        "Keeping the interface clear and simple so elderly patients or non-technical users could log data with minimal taps."
      ],
      keyOutcomes: [
        "Presented a live, working demo to the hackathon judges on schedule.",
        "Codebase published on GitHub showing our team commits and sprint history.",
        "Gained great experience scoping features and collaborating under strict time limits."
      ]
    }
  }
];
