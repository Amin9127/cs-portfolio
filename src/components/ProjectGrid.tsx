"use client";

import { useState, useMemo } from "react";
import { 
  Layers, 
  Box, 
  Cpu, 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2,
  Terminal, 
  SlidersHorizontal,
  Activity,
  Layers3,
  Search,
  Zap,
  ShieldCheck,
  BrainCircuit,
  Database
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem, ProjectCategory } from "@/types/portfolio";

interface ProjectGridProps {
  projects: ProjectItem[];
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export function ProjectGrid({ projects, onOpenCaseStudy }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeProjectId, setActiveProjectId] = useState<string>(
    projects.find(p => p.id !== "photography-portfolio")?.id || projects[0]?.id
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"stage" | "list">("stage");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q)) ||
        (project.badge && project.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Active project for Stage view
  const activeProject = useMemo(() => {
    return projects.find((p) => p.id === activeProjectId) || filteredProjects[0] || projects[0];
  }, [projects, activeProjectId, filteredProjects]);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "fullstack":
        return { label: "Full-Stack Web", color: "text-amber-400 bg-amber-500/10 border-amber-500/30" };
      case "game-3d":
        return { label: "3D Spatial & Unreal Engine", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" };
      case "systems-ai":
        return { label: "Systems & AI Engineering", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" };
      default:
        return { label: "Engineering", color: "text-slate-300 bg-white/5 border-white/10" };
    }
  };

  // High-impact architectural highlights for the active project
  const renderProjectHighlights = (projectId: string) => {
    switch (projectId) {
      case "nette-game":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Box className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">UE 5.7 &bull; 60 FPS</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Gameplay State Tree Architecture</strong>
                  <span>Decouples player exploration, puzzle triggers, and transition logic from monolithic world actor scripts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Asynchronous UI Event Dispatchers</strong>
                  <span>UMG challenge interfaces communicate with GameMode and GameState through decoupled event dispatchers without hitching the main thread.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Lumen &amp; Nanite PBR Optimization</strong>
                  <span>Virtualized geometry and dynamic global illumination shaders tuned for steady frame pacing at a locked 60 FPS.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Modular Raycast Interaction Subsystem</strong>
                  <span>Extensible first-person line-trace subsystem enabling dynamic evaluation of in-world interactable objects.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Subsystem: Unreal Engine 5.7 Architecture</span>
              <span className="text-blue-400">Decoupled State Machine</span>
            </div>
          </div>
        );

      case "galactic-crafters":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">60 FPS Locked</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Newtonian Inertial Flight Physics</strong>
                  <span>Custom continuous simulation handling 2D thrust vectors, momentum conservation, and realistic rotational drag.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Spatial Viewport Entity Culling</strong>
                  <span>Dynamic off-screen culling algorithm that minimizes collision check overhead and prevents memory spikes during dense asteroid clusters.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Procedural Seed-Based Generation</strong>
                  <span>Algorithmic distribution controlling asteroid trajectory drifts, cluster density, and mineral resource drop rates.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Zero-Dependency Standalone Build</strong>
                  <span>Compiled via PyInstaller into a standalone Windows binary bundling game logic, C-extensions, pixel art, and audio.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Python 3.12 / Pygame &bull; UE 5.4</span>
              <span className="text-indigo-400">Kinematic Simulation</span>
            </div>
          </div>
        );

      case "lancaster-box-office":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Database className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">City Team Project</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Desktop Model-View-Controller (MVC) Architecture</strong>
                  <span>Strict decoupling of custom Swing presentation components, controller event dispatchers, and database models.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Relational SQLite Transaction Management</strong>
                  <span>Engineered schemas and JDBC Data Access Object (DAO) layers managing ticket booking, seating adjustments, and audit reports.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Reusable Custom Swing Component Suite</strong>
                  <span>Developed modular, custom-styled UI elements (RoundedPanel, dynamic seat layout selectors) for consistent desktop usability.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Multi-Developer Team Integration</strong>
                  <span>Coordinated Git feature branches, package documentation (JavaDoc), and code reviews across a university engineering group.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Java 17 &bull; SQLite &bull; Swing MVC</span>
              <span className="text-purple-400">Team 43 Contributed Repo</span>
            </div>
          </div>
        );

      case "deep-learning-cnn":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">PyTorch 2.x</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Deep Convolutional Feature Extractors</strong>
                  <span>Multi-layer CNN architecture with Batch Normalization, ReLU activations, and dropout to stabilize backpropagation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Dynamic Learning Rate Scheduling</strong>
                  <span>Implemented adaptive learning rate decay with Adam optimization to escape saddle points and reach optimal loss convergence.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Data Augmentation &amp; Regularization</strong>
                  <span>Applied random cropping, horizontal flipping, and normalization transforms to prevent model overfitting on CIFAR-10.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Empirical Baseline Benchmarking</strong>
                  <span>Evaluated baseline vs improved architectures with training loss curves, validation accuracy trajectories, and confusion matrices.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Python 3.12 &bull; PyTorch &bull; CIFAR-10</span>
              <span className="text-purple-400">IN3063 Contributed Repo</span>
            </div>
          </div>
        );

      case "concurrency-systems":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">LTSA Verified</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Thread-Safe Bounded Buffer Packet Dispatcher</strong>
                  <span>Engineered synchronized producer-consumer queue with monitor locks and condition variables, preventing thread starvation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Parallel Matrix Multiplication Engine</strong>
                  <span>Partitioned 2D matrix computations across CPU worker threads to achieve near-linear parallel speedup.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Formal LTSA Deadlock Verification</strong>
                  <span>Modeled thread interactions and shared resource contention in Finite State Processes (FSP) to mathematically verify deadlock-freedom.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Elimination of Race Conditions</strong>
                  <span>Protected shared mutable state through strict monitor semantics, atomic variable primitives, and defensive copying.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Java 17 &bull; Multithreading &bull; LTSA</span>
              <span className="text-blue-400">IN2026 Concurrency Module</span>
            </div>
          </div>
        );

      case "starter-factory":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">Sub-10ms IPC</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Bidirectional TCP Socket IPC Bridge</strong>
                  <span>Low-latency socket layer connecting an external Java 17 backend client directly to an Unreal Engine 3D simulation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Non-Blocking Telemetry Streaming</strong>
                  <span>Asynchronous multithreaded socket buffer processing that prevents network operations from stalling the Unreal Engine render loop.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Digital Twin State Synchronization</strong>
                  <span>Real-time data ingestion translating external machine telemetry payloads directly into 3D actor animations and machine states.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Resilient Packet Framing Protocol</strong>
                  <span>Structured message framing, keep-alive checks, and error recovery to maintain continuous communication during simulation runs.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Java 17 &bull; Unreal Engine &bull; TCP/IP</span>
              <span className="text-amber-400">Digital Twin Pipeline</span>
            </div>
          </div>
        );

      case "photography-portfolio":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <SlidersHorizontal className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">98+ Lighthouse</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Server-Side Optical EXIF Extraction</strong>
                  <span>Extracts camera focal length, aperture, shutter speed, and ISO directly from file headers using ExifReader with zero client overhead.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Next.js 16 App Router &amp; React 19</strong>
                  <span>Full Server Component architecture providing instant page hydration, zero-bundle static text delivery, and responsive layouts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Automated Pre-Build Python Pipeline</strong>
                  <span>Pre-build scripts verify RAW and JPEG asset pairing, check file checksums, and optimize image delivery before deployment.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Worldwide Production Delivery</strong>
                  <span>Live worldwide at amin-photography.vercel.app with verified 98+ Lighthouse score.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: Next.js 16.4 &bull; React 19 &bull; ExifReader</span>
              <span className="text-amber-400">amin-photography.vercel.app</span>
            </div>
          </div>
        );

      case "hack-a-health":
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">Hackathon Sprint</span>
            </div>

            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Rapid Full-Stack Prototyping</strong>
                  <span>Completed full development cycle from concept to tested web application under strict hackathon countdown constraints.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Clinical Workflow Architecture</strong>
                  <span>Streamlined patient daily health logging interface paired with high-contrast layouts and responsive telemetry endpoints.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Collaborative Git Delivery</strong>
                  <span>Demonstrated fast feature scoping, multi-developer branch management, and rapid integration under tight deadlines.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span>Stack: JavaScript &bull; Full-Stack Web &bull; Team Git</span>
              <span className="text-blue-400">Hack-A-Health Sprint</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Key Engineering Achievements
              </span>
              <span className="text-emerald-400 font-medium">Production Verified</span>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Modular Architecture</strong>
                  <span>Clean separation of concerns with tested domain logic and modern build pipelines.</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-base">
              Explore projects across 3D game development in Unreal Engine 5.7, concurrent Java systems, machine learning pipelines, and full-stack web applications.
            </p>
          </div>

          {/* Search & View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500/50 transition-all font-mono"
              />
            </div>

            {/* Toggle View Mode */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-medium">
              <button
                onClick={() => setViewMode("stage")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "stage"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Interactive Stage
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Case Studies Feed
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setSelectedCategory("game-3d")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              selectedCategory === "game-3d"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Spatial &amp; Unreal Engine</span>
          </button>
          <button
            onClick={() => setSelectedCategory("systems-ai")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              selectedCategory === "systems-ai"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems &amp; AI Engineering</span>
          </button>
          <button
            onClick={() => setSelectedCategory("fullstack")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              selectedCategory === "fullstack"
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Stack Web</span>
          </button>
        </div>

        {/* VIEW MODE 1: INTERACTIVE ENGINEERING STAGE */}
        {viewMode === "stage" && (
          <div className="space-y-6">
            {/* Project Selector Rail */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {filteredProjects.map((p) => {
                const isActive = p.id === activeProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveProjectId(p.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? "bg-blue-600/15 border-blue-500/50 text-white shadow-lg shadow-blue-500/10"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-400 hover:text-white"
                    }`}
                  >
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                      {p.category}
                    </div>
                    <div className="font-semibold text-xs mt-1 text-white line-clamp-1">
                      {p.title.split(":")[0]}
                    </div>
                    <div className="mt-2 text-[10px] font-mono text-blue-400 truncate">
                      {p.badge || "Verified"}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Display (Wide 2-column layout) */}
            <div className="rounded-2xl bg-[#0f1219] border border-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Case Study Narrative (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getCategoryBadge(activeProject.category).color}`}>
                      {getCategoryBadge(activeProject.category).label}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                      {activeProject.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeProject.tagline}
                  </p>

                  {/* The Problem Brief */}
                  <div className="space-y-2 pt-2 text-sm text-slate-300">
                    <div className="pl-3 border-l-2 border-white/20">
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider mb-0.5">The Problem:</strong>
                      <span>{activeProject.caseStudy.problem}</span>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs shadow-md transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}

                    <button
                      onClick={() => onOpenCaseStudy(activeProject)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <span>Read Full Architecture Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Key Engineering Achievements Panel (5 cols) */}
                <div className="lg:col-span-5">
                  {renderProjectHighlights(activeProject.id)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: CASE STUDIES FEED (Wide Alternating Rows) */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-[#0f1219] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getCategoryBadge(project.category).color}`}>
                      {getCategoryBadge(project.category).label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
