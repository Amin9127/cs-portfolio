"use client";

import { useState, useMemo } from "react";
import { 
  Layers, 
  Box, 
  Cpu, 
  ExternalLink, 
  ArrowUpRight, 
  Terminal, 
  SlidersHorizontal,
  Code2,
  Activity,
  Layers3,
  Search
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
        return { label: "Systems & AI Evaluation", color: "text-purple-400 bg-purple-500/10 border-purple-500/30" };
      default:
        return { label: "Engineering", color: "text-slate-300 bg-white/5 border-white/10" };
    }
  };

  // Dedicated architectural telemetry for the active project
  const renderProjectTelemetry = (projectId: string) => {
    switch (projectId) {
      case "nette-game":
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5" />
                GAMEPLAY STATE TREE // TICK 60HZ
              </span>
              <span className="text-emerald-400 text-[11px]">&bull; Lumen Active</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>[State 01] Idle Player Exploration</span>
                <span className="text-emerald-400 text-[11px]">&check; Running</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>[Trace 02] Crosshair Raycast &rarr; BP_Beer</span>
                <span className="text-blue-400 text-[11px]">Hit Detected</span>
              </div>
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 flex items-center justify-between">
                <span>[Trigger 03] WBP_SpellingChallenge</span>
                <span className="text-amber-400 text-[11px]">UMG Modal Up</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>[Event 04] Score Dispatched &rarr; BP_GameMode</span>
                <span className="text-emerald-400 text-[11px]">&check; Synchronized</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>Subsystem: Unreal Engine 5.7</span>
              <span>Level: Historic_Saloon.umap</span>
            </div>
          </div>
        );

      case "galactic-crafters":
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                2D INERTIAL PHYSICS &amp; CULLING
              </span>
              <span className="text-emerald-400 text-[11px]">60 FPS Lock</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Velocity Vector: (142.8, -38.4) px/s</span>
                <span className="text-white text-[11px]">Newtonian Drag 0.98</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Viewport Culling: 84 / 120 Asteroids</span>
                <span className="text-emerald-400 text-[11px]">Optimized</span>
              </div>
              <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 flex items-center justify-between">
                <span>Packaging: PyInstaller Single-Binary</span>
                <span className="text-emerald-400 text-[11px]">&check; Zero Dependencies</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>Engines: Python 3.12 / Pygame &bull; UE 5.4</span>
              <span>Collisions: Circle-Sweep</span>
            </div>
          </div>
        );

      case "starter-factory":
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                TCP SOCKET IPC &amp; TELEMETRY STREAM
              </span>
              <span className="text-emerald-400 text-[11px]">Connected</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Host Endpoint: 127.0.0.1 : 8080</span>
                <span className="text-blue-400 text-[11px]">TCP Handshake OK</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Java Client: TCPClient.java</span>
                <span className="text-emerald-400 text-[11px]">Buffered Writer Active</span>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-between">
                <span>Actor Sync: BP_FactoryConveyor</span>
                <span className="text-emerald-400 text-[11px]">&check; State Synchronized</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>Protocol: Raw TCP Socket Streams</span>
              <span>Runtime: Multithreaded Java 17</span>
            </div>
          </div>
        );

      case "outlier-ai":
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                TECHNICAL QA &amp; REASONING EVALUATION
              </span>
              <span className="text-emerald-400 text-[11px]">Production Audit</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Algorithmic Correctness &amp; Proofs</span>
                <span className="text-emerald-400 text-[11px]">100% Pass Required</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Runtime Bounds: O(n log n) Verification</span>
                <span className="text-blue-400 text-[11px]">Audited</span>
              </div>
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-between">
                <span>Edge Case Fuzzing &amp; Concurrency Checks</span>
                <span className="text-emerald-400 text-[11px]">&check; Rigorous Evaluation</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>Focus: Python 3.12, Java 17, Data Structures</span>
              <span>Team: Outlier AI / Project Aether</span>
            </div>
          </div>
        );

      case "photography-portfolio":
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                OPTICAL EXIF PARSER &amp; PIPELINE
              </span>
              <span className="text-emerald-400 text-[11px]">98+ Lighthouse</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Server-Side Optics: ExifReader</span>
                <span className="text-emerald-400 text-[11px]">&check; Zero Client Lag</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Asset Verification: verify_raw_pairs.py</span>
                <span className="text-blue-400 text-[11px]">Checksums Valid</span>
              </div>
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-between">
                <span>Host: amin-photography.vercel.app</span>
                <span className="text-emerald-400 text-[11px]">&check; Live Production</span>
              </div>
            </div>
            <div className="pt-1 text-[11px] text-slate-500 flex justify-between">
              <span>Framework: Next.js 16.4 &bull; React 19</span>
              <span>Hardware: Canon Mirrorless</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span className="text-blue-400 font-semibold">ENGINEERING ARCHITECTURE</span>
              <span className="text-emerald-400 text-[11px]">Verified</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Component Modularity</span>
                <span className="text-emerald-400 text-[11px]">Clean Architecture</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between">
                <span>Version Control &amp; Git History</span>
                <span className="text-blue-400 text-[11px]">Main Branch Tested</span>
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
              Explore projects across 3D game development in Unreal Engine 5.7, network socket IPC, and full-stack web applications.
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
            <span>Systems &amp; AI QA</span>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
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
                    <div className="mt-2 text-[10px] font-mono text-blue-400">
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

                  {/* The Problem & Architecture Brief */}
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

                {/* Right Side: Visual Telemetry Inspector (5 cols) */}
                <div className="lg:col-span-5">
                  {renderProjectTelemetry(activeProject.id)}
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
