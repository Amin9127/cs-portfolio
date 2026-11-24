"use client";

import { useState, useMemo } from "react";
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
  const [viewMode, setViewMode] = useState<"stage" | "list">("stage");

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
                type="text"
                aria-label="Search projects or technologies"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500/50 transition-all font-mono"
              />
            </div>

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

        {viewMode === "list" && filteredProjects.length > 0 ? (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-[#0f1219] border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                        getCategoryBadge(project.category).color
                      }`}
                    >
                      {getCategoryBadge(project.category).label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{project.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.tagline}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold flex items-center gap-1.5"
                    >
                      <span>{project.youtubeId ? "Watch Demo" : "Live Site"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}

                  {project.itchUrl ? (
                    <a
                      href={project.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Gamepad2 className="w-3.5 h-3.5" />
                      <span>itch.io</span>
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : null}

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
        ) : null}
      </div>
    </section>
  );
}
