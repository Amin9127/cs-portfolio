import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: "photography-portfolio",
    title: "Photography Portfolio & Visual Archive",
    tagline: "A custom photography portfolio and archive built with Next.js 16 and Python verification scripts. It extracts camera optical settings directly from image file headers on the server.",
    category: "fullstack",
    featured: true,
    status: "Live Production",
    badge: "Next.js / Python",
    stageHeaderLabel: "Optical Telemetry & Pipeline",
    stageFooterTag: "amin-photography.vercel.app",
    techStack: ["Python Scripts", "ExifReader", "Next.js 16", "React 19", "Tailwind CSS v4", "AI-Assisted UI"],
    liveUrl: "https://amin-photography.vercel.app",
    githubUrl: "https://github.com/Amin9127/Photography-portfolio",
    metrics: [
      { label: "Telemetry", value: "Server EXIF Headers" },
      { label: "Proofing", value: "RAW vs Graded Pairs" },
      { label: "QA Gate", value: "Python Pair Checks" },
    ],
    highlights: [
      "Direct EXIF extraction reading camera focal length, f-stop, shutter speed, ISO, and lens model from image headers.",
      "Interactive Before/After comparison slider pairing uncompressed RAW renders with final color grades.",
      "Python batch scripts checking RAW-to-edited asset pairing, file integrity, and normalized metadata before build time.",
    ],
    engineeringHighlights: [
      {
        title: "Server-Side EXIF Extraction",
        detail: "Reads focal length, f-stop, shutter speed, ISO, and lens model directly from image headers using ExifReader.",
      },
      {
        title: "Python Verification Pipeline",
        detail: "Automated pre-build Python scripts check file integrity, verify RAW-to-JPEG pairs, and normalize camera tags.",
      },
      {
        title: "AI-Assisted Frontend Delivery",
        detail: "Steered Next.js 16 and React 19 UI components through structured specs while maintaining strict type and asset gates.",
      },
      {
        title: "Live Production Deployment",
        detail: "Deployed and running live on Vercel at amin-photography.vercel.app with real Canon EOS M3 photo pairs.",
      },
    ],
    caseStudy: {
      overview: "A photography exhibition archive engineered to keep technical shooting telemetry paired with every finished photograph.",
      problem: "Most photo sharing platforms strip camera metadata and compress images heavily. That hides the exposure choices (focal length, aperture, shutter speed, and ISO) and removes any comparison with the flat sensor capture.",
      architecture: "Python batch scripts validate RAW-to-JPEG pairings and normalize EXIF tags before deployment, while the Next.js 16 and React 19 frontend (built through AI-assisted workflows from strict specifications) parses headers via ExifReader and renders a touch-ready Before/After slider.",
      technicalChallenges: [
        "Normalizing lens and camera body labels across inconsistent manufacturer EXIF fields.",
        "Preventing cumulative layout shift across portrait and landscape gallery cards during hydration.",
        "Automating Python pre-build verification so missing RAW pairs or corrupt tags block broken builds early.",
      ],
      keyOutcomes: [
        "Reliable automated ingestion and pair verification script suite written in Python.",
        "Interactive Before/After comparison preserving shooting telemetry alongside color grading.",
        "Live in production at amin-photography.vercel.app.",
      ],
    },
  },
  {
    id: "galactic-crafters",
    title: "Galactic Crafters: Factory Simulation & Grid Logistics",
    tagline: "Over 2,000 lines of modular Python and Pygame powering a 2D factory automation game. Players route ores across a 40x40 directional grid, assemble hardware, and trade on a dynamic market.",
    category: "game-3d",
    featured: true,
    status: "Completed",
    badge: "Python / Pygame",
    stageHeaderLabel: "Grid Logistics & Optimization",
    stageFooterTag: "Python 3.12 / Pygame • itch.io",
    techStack: ["Python 3.12", "Pygame", "PyInstaller", "40x40 Grid Routing", "Pickle Serialization", "Unreal Engine 5.4"],
    githubUrl: "https://github.com/Amin9127/Galactic-crafters",
    liveUrl: "https://www.youtube.com/watch?v=Mv0J8NKr4F8",
    itchUrl: "https://amin9127.itch.io",
    youtubeId: "Mv0J8NKr4F8",
    metrics: [
      { label: "Codebase", value: "2,000+ Lines Python" },
      { label: "Persistence", value: "Binary Pickle State" },
      { label: "Distribution", value: "itch.io & Win64 EXE" },
    ],
    highlights: [
      "Object-oriented machine hierarchy (Producer, Conveyor, Smelter, Crafter, Seller) with 4-way directional grid rotation.",
      "Multi-tier crafting graph turning raw ores into circuits, CPUs, GPUs, RAM, and complete PCs.",
      "Batch multi-select move optimizer replacing per-step drag collision scans with single final-mask validation.",
    ],
    engineeringHighlights: [
      {
        title: "Batch Drag Collision Optimization",
        detail: "Replaced redundant O(k * d) per-tile move scans and intra-group self-collisions with one final cluster destination check.",
      },
      {
        title: "Directional Grid Routing",
        detail: "Built 4-way directional conveyor handoffs on a 40x40 spatial grid without item clipping or stalls.",
      },
      {
        title: "Multi-Tier Crafting Graph",
        detail: "Engineered recursive manufacturing chains converting copper, iron, gold, and coal into CPUs, GPUs, RAM, and PCs.",
      },
      {
        title: "Binary State & Standalone Build",
        detail: "Serialized full factory layouts and finances via Python pickle and packaged standalone executables with PyInstaller.",
      },
    ],
    caseStudy: {
      overview: "An automated factory simulation built as an A-Level Computer Science NEA project, published on itch.io and demonstrated on YouTube.",
      problem: "Designing a responsive grid-based automation game requires clean directional handoffs between machines, persistent save states, and collision logic that does not stall when players drag whole machine clusters at once.",
      architecture: "Written in Python 3.12 with Pygame across modular object-oriented machine classes. A 40x40 grid stores directional vectors, machine tiers, and inventories, while binary pickle files persist full factory layouts and fluctuating market revenue metrics.",
      technicalChallenges: [
        "Fixing a multi-select drag bottleneck where moving 20 machines across 10 tiles ran 200+ collision checks and collided with group members, solved by treating the cluster as one mask checked once at landing.",
        "Handling smooth 90-degree conveyor corner transfers so items never pile up or vanish between ticks.",
        "Serializing interdependent machine inventories, upgrade levels, and revenue history cleanly with Python pickle.",
      ],
      keyOutcomes: [
        "Shipped a standalone Windows build with PyInstaller and published playable builds on amin9127.itch.io.",
        "Recorded and published a full gameplay walkthrough on YouTube.",
        "Documented full requirements, system design, and test evidence across a formal coursework specification.",
      ],
    },
  },
  {
    id: "age-group-cnn",
    title: "Facial Age Group Classifier (AgeGroupCNN)",
    tagline: "An end-to-end PyTorch computer vision pipeline classifying face photos into four age cohorts, engineered with frequency-weighted loss to stop majority-class collapse.",
    category: "systems-ai",
    featured: true,
    status: "Completed",
    badge: "PyTorch / Computer Vision",
    stageHeaderLabel: "Deep Learning & Imbalance Fix",
    stageFooterTag: "PyTorch CNN • Weighted Cross-Entropy",
    techStack: ["Python", "PyTorch", "Torchvision", "Scikit-learn", "Pillow", "Matplotlib"],
    githubUrl: "https://github.com/Amin9127/cnn-for-age-group-detection",
    metrics: [
      { label: "Architecture", value: "Custom AgeGroupCNN" },
      { label: "Loss Fix", value: "Weighted Cross-Entropy" },
      { label: "Input", value: "128x128 Grayscale" },
    ],
    highlights: [
      "Built a custom PyTorch convolutional network (AgeGroupCNN) classifying face images into Child, Young, Middle-Aged, and Senior.",
      "Eliminated majority-class bias using class weights (compute_class_weight) inside CrossEntropyLoss.",
      "Evaluated predictions with per-class precision, recall, F1 scores, and confusion matrices.",
    ],
    engineeringHighlights: [
      {
        title: "Fixing Majority-Class Collapse",
        detail: "Solved dataset skew where an unweighted model always guessed 'Young' by applying class-weighted CrossEntropyLoss.",
      },
      {
        title: "Custom PyTorch Data Pipeline",
        detail: "Implemented a custom Dataset loader resizing images to 128x128 grayscale with train/validation splitting.",
      },
      {
        title: "AgeGroupCNN Architecture",
        detail: "Trained convolutional blocks with Batch Normalization, ReLU activations, max-pooling, and dropout regularization.",
      },
      {
        title: "Per-Class Error Analysis",
        detail: "Profiled precision, recall, F1 scores, and confusion matrices across all four age cohorts.",
      },
    ],
    caseStudy: {
      overview: "A PyTorch coursework project classifying human facial images into four age brackets while handling class imbalance.",
      problem: "Because the training dataset skewed heavily toward young adults, an unweighted convolutional model learned to predict the majority class everywhere, hiding poor recall on Child and Senior cohorts.",
      architecture: "Built a custom PyTorch nn.Module (AgeGroupCNN) trained on 128x128 grayscale images with a stratified train/validation split. Inverse-frequency class weights computed via scikit-learn inside nn.CrossEntropyLoss(weight=...) penalized minority-class errors properly.",
      technicalChallenges: [
        "Diagnosing why high headline accuracy masked near-zero recall on underrepresented Child and Senior images.",
        "Balancing class loss weights and regularization so minority classes generalized cleanly on the validation split.",
        "Verifying per-class precision, recall, and confusion matrix behavior across all four cohorts.",
      ],
      keyOutcomes: [
        "Recovered balanced per-class recall and macro-F1 across Child, Young, Middle-Aged, and Senior classes.",
        "Produced clean classification reports and confusion matrix diagnostics.",
      ],
    },
  },
  {
    id: "digit-calibration",
    title: "Handwritten Digit Recognition & Calibration Engine",
    tagline: "An OpenCV and Scikit-learn pipeline that segments multi-writer handwritten numeral grids, trains multinomial classifiers, and calibrates confidence errors.",
    category: "systems-ai",
    featured: true,
    status: "Completed",
    badge: "OpenCV / Scikit-learn",
    stageHeaderLabel: "CV Ingestion & Calibration",
    stageFooterTag: "OpenCV • Multinomial L-BFGS",
    techStack: ["Python", "OpenCV (cv2)", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Amin9127/principles-of-ai-digit-recognition",
    metrics: [
      { label: "Ingestion", value: "OpenCV Grid Slicer" },
      { label: "Classifier", value: "L-BFGS Softmax" },
      { label: "Diagnostics", value: "Confidence Calibration" },
    ],
    highlights: [
      "Automated extraction, thresholding, and centering of individual digit cells from multi-contributor scan grids.",
      "Trained multinomial logistic regression with StandardScaler preprocessing and L-BFGS optimization.",
      "Generated confidence-versus-accuracy calibration curves and inspected misclassified digit pairs.",
    ],
    engineeringHighlights: [
      {
        title: "Automated Grid Extraction",
        detail: "Used OpenCV thresholding, bounding alignment, and normalization to slice scanned writer sheets into clean tensors.",
      },
      {
        title: "Multinomial Softmax Pipeline",
        detail: "Trained Scikit-learn multiclass classifiers with StandardScaler normalization and L-BFGS convergence tuning.",
      },
      {
        title: "Confidence Calibration Curves",
        detail: "Measured predicted softmax probabilities against empirical accuracy to verify reliable model uncertainty.",
      },
      {
        title: "Misclassification Profiling",
        detail: "Isolated high-confusion numeral pairs (such as 4 vs 9 and 3 vs 5) to trace handwriting variance back to preprocessing.",
      },
    ],
    caseStudy: {
      overview: "A pattern recognition pipeline built to ingest raw scanned handwritten digit sheets from multiple contributors and evaluate classifier probability calibration.",
      problem: "Raw scanned sheets suffer from uneven lighting, ink thickness variation, and off-center numerals. Uncalibrated classifiers also output overconfident probabilities on ambiguous handwriting.",
      architecture: "Used OpenCV (cv2) for adaptive thresholding, morphological cleanup, and aspect-preserving resizing into uniform feature vectors. Fed normalized arrays into a Scikit-learn multinomial logistic regression pipeline (L-BFGS solver) and evaluated confidence calibration bins.",
      technicalChallenges: [
        "Eliminating grid borders and scanning noise without clipping thin strokes on digits like 1 and 7.",
        "Maintaining centered aspect ratios when normalizing wildly varying handwriting scales.",
        "Diagnosing systematic confusion pairs through probability calibration curves and error galleries.",
      ],
      keyOutcomes: [
        "Reliable automated ingestion turning multi-writer raw sheet scans into clean training datasets.",
        "Quantified confidence calibration showing where model uncertainty aligns with human ambiguity.",
      ],
    },
  },
  {
    id: "first-person-3d-systems",
    title: "First-Person 3D Systems & Puzzle Engine",
    tagline: "A first-person 3D exploration and puzzle demo built in Unreal Engine 5.7. Uses Gameplay State Trees for quest and player state, UMG widgets for UI challenges, and line traces for interaction.",
    category: "game-3d",
    featured: true,
    status: "Active Project",
    badge: "Unreal Engine 5.7",
    stageHeaderLabel: "UE 5.7 State Tree Architecture",
    stageFooterTag: "Unreal Engine 5.7 • State Trees",
    techStack: ["Unreal Engine 5.7", "Gameplay State Trees", "Blueprints", "UMG UI", "Lumen & Nanite", "Sequencer"],
    metrics: [
      { label: "State Logic", value: "Gameplay State Trees" },
      { label: "Lighting", value: "Lumen & Nanite PBR" },
      { label: "UI Pattern", value: "Async Event Dispatch" },
    ],
    highlights: [
      "Decoupled quest logic, puzzle triggers, and player states from world actors using UE 5.7 Gameplay State Trees.",
      "Built asynchronous UMG challenge interfaces talking back to GameMode via custom event dispatchers.",
      "Implemented modular camera line-trace object inspection paired with Lumen dynamic global illumination.",
    ],
    engineeringHighlights: [
      {
        title: "Gameplay State Trees",
        detail: "Separated quest logic, puzzle triggers, and exploration states from world actors using UE 5.7 Gameplay State Trees.",
      },
      {
        title: "Decoupled UI Events",
        detail: "Used custom event dispatchers so UMG challenge widgets update GameMode without coupling UI directly to actors.",
      },
      {
        title: "Dynamic Lighting & Nanite",
        detail: "Configured Lumen global illumination and Nanite geometry for responsive indoor saloon lighting.",
      },
      {
        title: "Line-Trace Interaction",
        detail: "Built a modular first-person camera line-trace system to inspect and trigger interactive objects.",
      },
    ],
    caseStudy: {
      overview: "A first-person interactive 3D game demo focused on clean state architecture and decoupled UI interaction in Unreal Engine 5.7.",
      problem: "In Unreal projects, dumping puzzle triggers, player progress, and UI dialogs into level blueprints creates brittle dependencies whenever actors move or new rooms are added.",
      architecture: "Used Unreal Engine 5.7 Gameplay State Trees to separate progression rules from level geometry. UMG challenge widgets communicate with GameMode via event dispatchers, while center-screen line traces query interactive interfaces.",
      technicalChallenges: [
        "Switching input focus cleanly between first-person movement and interactive UMG widgets.",
        "Tuning indoor Lumen exposure and bounces so dark saloon corners remain legible without overblowing lights.",
        "Building a single reusable trace interface shared across varied world props.",
      ],
      keyOutcomes: [
        "Clean separation between world actors, state progression, and UMG challenge panels.",
        "Modular interaction subsystem ready for multi-room puzzle expansion.",
      ],
    },
  },
  {
    id: "hack-a-health",
    title: "Hack-A-Health: Conversational Health Assistant",
    tagline: "A Python conversational health assistant and symptom-logging backend built during a timed hackathon. Pairs speech/text interaction with structured patient and symptom persistence.",
    category: "systems-ai",
    featured: false,
    status: "Hackathon Project",
    badge: "Python / NLP / DB",
    stageHeaderLabel: "Conversational Health Backend",
    stageFooterTag: "Python • Speech & DB Persistence",
    techStack: ["Python", "OpenAI API", "SpeechRecognition & gTTS", "Firestore / SQL", "Team Git"],
    githubUrl: "https://github.com/Amin9127/Hack-A-Health-hackathon",
    metrics: [
      { label: "Interface", value: "Voice & Text Prompting" },
      { label: "Persistence", value: "Patient & Symptom Logs" },
      { label: "Delivery", value: "Timed Hackathon Sprint" },
    ],
    highlights: [
      "Built a conversational Python patient assistant handling text and voice input with spoken audio feedback.",
      "Separated database CRUD logic for patient profiles, symptom reports, and query logs from conversation loops.",
      "Scoped, integrated, and demoed a working prototype within strict hackathon time constraints.",
    ],
    engineeringHighlights: [
      {
        title: "Conversational Loop & Speech",
        detail: "Integrated prompt routing, microphone audio capture, and text-to-speech playback in Python for hands-free interaction.",
      },
      {
        title: "Structured Symptom Persistence",
        detail: "Isolated database helper functions to create, fetch, and update user records, symptom logs, and query histories.",
      },
      {
        title: "Fast Sprint Scoping",
        detail: "Trimmed feature scope under hackathon deadlines to deliver a reliable end-to-end patient demo.",
      },
      {
        title: "Team Git Workflow",
        detail: "Coordinated parallel branches across AI prompting and persistence modules during live sprint commits.",
      },
    ],
    caseStudy: {
      overview: "A healthcare hackathon prototype designed to let patients report symptoms conversationally by text or voice while logging structured records.",
      problem: "Standard health forms overwhelm non-technical or distressed patients with dense fields. Capturing structured symptom histories through natural conversation requires clean separation between LLM prompts and data storage.",
      architecture: "Built in Python with dedicated modules separating conversation handling (ai.py, stored safety prompts, speech capture, and gTTS playback) from structured user and symptom record persistence (database.py).",
      technicalChallenges: [
        "Handling microphone recording and audio playback transitions smoothly inside a terminal loop.",
        "Separating deterministic prompt overrides from generative responses for predictable clinical triage replies.",
        "Coordinating rapid feature integration across team members on a tight hackathon clock.",
      ],
      keyOutcomes: [
        "Delivered a working conversational health prototype with persistent symptom logging on schedule.",
        "Published team codebase and sprint history on GitHub.",
      ],
    },
  },
  {
    id: "lancaster-box-office",
    title: "Lancaster's Music Hall: Box Office & Seating System",
    tagline: "A desktop ticketing and venue management app built in Java 17 and Swing with SQLite for a university team project. Handles seat reservations, pricing tiers, cancellations, and sales stats.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "Java 17 / SQLite",
    stageHeaderLabel: "Desktop MVC & SQLite",
    stageFooterTag: "Java 17 • Swing MVC • SQLite",
    techStack: ["Java 17", "Java Swing UI", "SQLite", "JDBC", "Desktop MVC", "JavaDoc"],
    githubUrl: "https://github.com/cityuniwaj/Team-43-Innovator-Box-Office-Marketing-Interface",
    metrics: [
      { label: "Architecture", value: "Desktop MVC Pattern" },
      { label: "Data Layer", value: "Transactional SQLite" },
      { label: "Docs", value: "Full JavaDoc Suite" },
    ],
    highlights: [
      "Engineered a desktop MVC architecture isolating custom Swing screens from JDBC business logic.",
      "Built transactional SQLite schemas handling seat reservations, pricing tiers, cancellations, and refund audits.",
      "Designed custom rounded Swing components and an interactive multi-tier seating map.",
    ],
    engineeringHighlights: [
      {
        title: "Desktop MVC Separation",
        detail: "Organized distinct packages separating Calendar, Seating, Refunds, and Statistics UI views from JDBC models.",
      },
      {
        title: "Transactional SQLite Integrity",
        detail: "Handled atomic commits and rollbacks in SQLite so seat locks and cancellations never leave partial bookings.",
      },
      {
        title: "Custom Swing Graphics",
        detail: "Overrode paintComponent for crisp rounded panels, buttons, and an interactive venue seating grid.",
      },
      {
        title: "4-Developer Git Delivery",
        detail: "Coordinated feature branches, pull requests, and full JavaDoc documentation across a four-person team.",
      },
    ],
    caseStudy: {
      overview: "A desktop ticketing and venue operations tool built for Lancaster's Music Hall as part of a four-person university software engineering module.",
      problem: "Venue staff need to schedule events, adjust tiered seating layouts, process refunds, and inspect sales numbers reliably offline without relying on external web hosts.",
      architecture: "Implemented in Java 17 following MVC separation across UI views, domain models, and a SQLite JDBC persistence layer with custom Swing UI components.",
      technicalChallenges: [
        "Guaranteeing SQLite transaction rollbacks when multi-seat bookings or refunds fail mid-operation.",
        "Rendering sharp custom Swing components across high-DPI displays.",
        "Resolving schema and UI merges across four concurrent student contributors.",
      ],
      keyOutcomes: [
        "Shipped a complete desktop ticketing app with interactive seat maps, refunds, and revenue reporting.",
        "Documented every class, method, and query in JavaDoc.",
      ],
    },
  },
  {
    id: "concurrency-systems",
    title: "Concurrent Multithreaded Systems & Formal Verification",
    tagline: "A suite of multithreaded Java systems pairing thread-safe packet dispatching and parallel matrix multiplication with formal deadlock verification in LTSA.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "Java / LTSA",
    stageHeaderLabel: "Multithreading & FSP Proofs",
    stageFooterTag: "Java 17 • Formal LTSA Model",
    techStack: ["Java 17", "Multithreading", "LTSA Formal Modeling", "FSP", "Synchronized Monitors"],
    githubUrl: "https://github.com/Amin9127/in3042-concurrency-cw2",
    metrics: [
      { label: "Verification", value: "LTSA State Machine" },
      { label: "Buffers", value: "Thread-Safe Rendezvous" },
      { label: "Speedup", value: "Multi-Core Matrix" },
    ],
    highlights: [
      "Built PacketDispatcher with rendezvous semantics, bounded buffers, and consumer timeout guards in Java 17.",
      "Partitioned 2D matrix multiplication rows across worker thread pools for multi-core speedups.",
      "Formally proved mutual exclusion and deadlock freedom using Finite State Processes (FSP) in LTSA.",
    ],
    engineeringHighlights: [
      {
        title: "PacketDispatcher Rendezvous",
        detail: "Engineered port coordination and bounded thread-safe buffers preventing producer overflow and consumer starvation.",
      },
      {
        title: "Parallel Matrix Multiplier",
        detail: "Split 2D matrix row computations cleanly across CPU worker pools without lock contention.",
      },
      {
        title: "Synchronized Monitor Design",
        detail: "Used condition variables and explicit state guards to eliminate race conditions in multi-threaded queues.",
      },
      {
        title: "Formal Deadlock Verification",
        detail: "Modeled thread states in Finite State Processes (FSP) and exhaustively verified safety and liveness in LTSA.",
      },
    ],
    caseStudy: {
      overview: "Practical multithreaded Java systems paired with mathematical state-space model checking to guarantee absence of deadlocks.",
      problem: "Shared-memory concurrency defects like race conditions and deadlocks often hide from standard unit tests because execution depends on OS thread scheduling.",
      architecture: "Built three synchronized Java 17 subsystems (PacketDispatcher, MatrixMultiplier, and producer-consumer monitors) alongside matching Finite State Process (FSP) models checked exhaustively in LTSA.",
      technicalChallenges: [
        "Designing bounded queues that wake waiting producers and consumers reliably without missed signals.",
        "Keeping FSP formal state models strictly aligned with actual Java synchronized blocks.",
        "Partitioning matrix workloads to avoid false sharing across threads.",
      ],
      keyOutcomes: [
        "Mathematically verified deadlock freedom and mutual exclusion across all modeled thread interactions.",
        "Measured multi-core throughput improvements on parallel matrix multiplication workloads.",
      ],
    },
  },
  {
    id: "in2011-tcp-sockets",
    title: "TCP Socket Client & Server (IN2011)",
    tagline: "A Java TCP stream socket client and server implementing request-response handshakes, buffered character streams, and explicit buffer flushing for IN2011 Computer Networks.",
    category: "systems-ai",
    featured: false,
    status: "Completed",
    badge: "Java / TCP Sockets",
    stageHeaderLabel: "TCP Socket Architecture",
    stageFooterTag: "Java • Stream Sockets • IN2011",
    techStack: ["Java", "TCP/IP Sockets", "ServerSocket", "BufferedReader / Writer", "Network Protocols"],
    githubUrl: "https://github.com/Amin9127/in2011-tcp-sockets",
    metrics: [
      { label: "Transport", value: "TCP Stream Sockets" },
      { label: "I/O", value: "Buffered Streams" },
      { label: "Port", value: "4567 Loopback" },
    ],
    highlights: [
      "Engineered a TCP client and server in Java for the IN2011 Computer Networks lab coursework.",
      "Implemented socket creation, server-side listening with accept(), and full connection lifecycles.",
      "Configured character readers and writers with explicit buffer flushing to ensure reliable packet transmission.",
    ],
    engineeringHighlights: [
      {
        title: "Stream Socket Lifecycle",
        detail: "Configured ServerSocket listening on port 4567, accepting incoming client sockets, and closing descriptors cleanly.",
      },
      {
        title: "Buffered I/O & Flushing",
        detail: "Used BufferedReader and OutputStreamWriter with explicit flush() calls to prevent message buffering stalls.",
      },
      {
        title: "Request-Response Handshake",
        detail: "Implemented structured message exchanges between client and server across localhost and LAN interfaces.",
      },
      {
        title: "Network Diagnostics",
        detail: "Verified socket state, port availability, and exception handling for connection resets.",
      },
    ],
    caseStudy: {
      overview: "A client-server networking implementation built in Java for the IN2011 Computer Networks module, demonstrating TCP socket communication and stream I/O.",
      problem: "Understanding transport-layer abstractions requires hands-on socket programming where buffer handling, port binding, and connection teardowns must be explicitly managed in code.",
      architecture: "Built two core classes (TCPClient and TCPServer) using Java standard networking. The server binds to port 4567, blocks on accept() until a client connects, exchanges newline-delimited text payloads via character streams, and closes connection handles.",
      technicalChallenges: [
        "Preventing socket hangs by ensuring stream writers flush buffers immediately after write operations.",
        "Handling server-side port binding and connection teardown without leaving orphaned sockets.",
        "Structuring readable request-response message cycles across independent processes.",
      ],
      keyOutcomes: [
        "Demonstrated reliable point-to-point TCP communication with clean connection establishment and termination.",
        "Documented runnable lab instructions and pushed complete source code to GitHub.",
      ],
    },
  },
];
