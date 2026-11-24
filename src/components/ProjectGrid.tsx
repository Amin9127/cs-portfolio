"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Layers,
  Box,
  Cpu,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Search,
  Gamepad2,
  Play,
  RotateCcw,
  LayoutGrid,
  Columns3,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem, ProjectCategory } from "@/types/portfolio";

interface ProjectGridProps {
  projects: ProjectItem[];
  onOpenCaseStudy: (project: ProjectItem) => void;
}

function getCategoryBadge(category: ProjectItem["category"]) {
  switch (category) {
    case "fullstack":
      return {
        label: "Web & Optics",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      };
    case "game-3d":
      return {
        label: "Games & 3D Systems",
        color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      };
    case "systems-ai":
      return {
        label: "AI, ML & Systems",
        color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      };
  }
}

export function ProjectGrid({ projects, onOpenCaseStudy }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeProjectId, setActiveProjectId] = useState<string>(
    projects.find((p) => p.id === "galactic-crafters")?.id || projects[0]?.id || ""
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"bento" | "stage">("bento");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search with '/' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q)) ||
        (project.badge && project.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const activeProject = useMemo(() => {
    if (filteredProjects.length === 0) return null;
    return filteredProjects.find((p) => p.id === activeProjectId) ?? filteredProjects[0];
  }, [filteredProjects, activeProjectId]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Explore verified work across Python computer vision, Pygame logistics, Java systems, Unreal Engine 5, and optical web tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="w-full sm:w-64 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                aria-label="Search projects or technologies"
                placeholder="Search projects or tech... (/)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500/50 transition-all font-mono"
              />
              <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400 font-mono pointer-events-none">
                /
              </kbd>
            </div>

            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-medium">
              <button
                onClick={() => setViewMode("bento")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "bento"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Bento Grid</span>
              </button>
              <button
                onClick={() => setViewMode("stage")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === "stage"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span>Deep Dive Stage</span>
              </button>
            </div>
          </div>
        </div>

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
            onClick={() => setSelectedCategory("systems-ai")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
              selectedCategory === "systems-ai"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/20"
                : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI, ML &amp; Systems</span>
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
            <span>Games &amp; 3D Systems</span>
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
            <span>Web &amp; Optics</span>
          </button>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl bg-[#0f1219] border border-white/10 p-10 text-center space-y-4">
            <p className="text-slate-300 text-sm">
              No projects match &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          </div>
        ) : null}

        {viewMode === "stage" && activeProject ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
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
                    <div className="font-semibold text-xs text-white line-clamp-1">
                      {p.title.split(":")[0]}
                    </div>
                    <div className="mt-1.5 text-[10px] font-mono text-blue-400 truncate">
                      {p.badge || "Verified"}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl bg-[#0f1219] border border-white/10 p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                        getCategoryBadge(activeProject.category).color
                      }`}
                    >
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

                  <div className="space-y-3 pt-2 text-sm text-slate-300">
                    <div className="pl-3 border-l-2 border-white/20">
                      <strong className="text-white block text-xs font-mono uppercase tracking-wider mb-0.5">
                        The Problem
                      </strong>
                      <span className="leading-relaxed">{activeProject.caseStudy.problem}</span>
                    </div>

                    <div className="pl-3 border-l-2 border-blue-500/40">
                      <strong className="text-blue-400 block text-xs font-mono uppercase tracking-wider mb-0.5">
                        The Solution &amp; Architecture
                      </strong>
                      <span className="leading-relaxed">{activeProject.caseStudy.architecture}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    {activeProject.liveUrl ? (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs shadow-md transition-all"
                      >
                        {activeProject.youtubeId ? (
                          <Play className="w-3.5 h-3.5" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                        <span>{activeProject.youtubeId ? "Watch Demo Video" : "Visit Live Site"}</span>
                      </a>
                    ) : null}

                    {activeProject.itchUrl ? (
                      <a
                        href={activeProject.itchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all"
                      >
                        <Gamepad2 className="w-3.5 h-3.5" />
                        <span>Play on itch.io</span>
                      </a>
                    ) : null}

                    {activeProject.githubUrl ? (
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
                    ) : null}

                    <button
                      onClick={() => onOpenCaseStudy(activeProject)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      href={`/projects/${activeProject.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
                    >
                      <span>Direct Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 text-xs space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 font-mono gap-2">
                      <span className="text-blue-400 font-semibold uppercase tracking-wider">
                        {activeProject.stageHeaderLabel}
                      </span>
                      <span className="text-emerald-400 font-medium shrink-0">
                        {activeProject.badge}
                      </span>
                    </div>

                    <div className="space-y-3 text-slate-300 leading-relaxed">
                      {activeProject.engineeringHighlights.map((item) => (
                        <div key={item.title} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <div>
                            <strong className="text-white block font-medium">{item.title}</strong>
                            <span>{item.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                      <span>{activeProject.stageFooterTag}</span>
                      <span className="text-blue-400">{activeProject.metrics[0]?.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {viewMode === "bento" && filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => {
              const badge = getCategoryBadge(project.category);
              return (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-[#0f1219] border border-white/10 hover:border-blue-500/40 hover:bg-[#121622] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/5 relative overflow-hidden"
                >
                  <div className="space-y-3.5">
                    {/* Top badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${badge.color}`}
                      >
                        {badge.label}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {project.badge || project.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Metric pill */}
                    {project.metrics && project.metrics[0] ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                        <span className="text-slate-400">{project.metrics[0].label}:</span>
                        <span className="text-white font-medium">{project.metrics[0].value}</span>
                      </div>
                    ) : null}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 ? (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{project.techStack.length - 4}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      ) : null}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 hover:text-amber-200 transition-colors"
                          title="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}

                      {project.itchUrl ? (
                        <a
                          href={project.itchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-300 hover:text-indigo-200 transition-colors"
                          title="Play on itch.io"
                        >
                          <Gamepad2 className="w-3.5 h-3.5" />
                        </a>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>

                      <Link
                        href={`/projects/${project.id}`}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs transition-colors"
                        title="View Full Project Page"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
