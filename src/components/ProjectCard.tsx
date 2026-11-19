"use client";

import { ExternalLink, ArrowUpRight, Cpu, Layers, Box, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fullstack":
        return <Layers className="w-4 h-4 text-amber-400" />;
      case "game-3d":
        return <Box className="w-4 h-4 text-blue-400" />;
      case "systems-ai":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Terminal className="w-4 h-4 text-slate-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "fullstack":
        return "Full-Stack Web";
      case "game-3d":
        return "3D Spatial & Game Dev";
      case "systems-ai":
        return "Systems & AI Engineering";
      default:
        return category;
    }
  };

  return (
    <div className="glow-card rounded-2xl p-6 flex flex-col justify-between h-full group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
            {getCategoryIcon(project.category)}
            <span>{getCategoryLabel(project.category)}</span>
          </span>

          {project.badge && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-slate-300 text-sm leading-relaxed">
          {project.tagline}
        </p>

        {/* Metrics Row */}
        <div className="mt-5 grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-black/40 border border-white/5 font-mono">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Architecture &amp; Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
