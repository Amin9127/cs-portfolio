"use client";

import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, AlertTriangle, Cpu, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem } from "@/types/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#11131a] border border-white/10 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-slate-900/40">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
                {project.status}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-sm leading-relaxed">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/5 font-mono">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-[10px] uppercase text-slate-500 tracking-wider">{m.label}</div>
                <div className="text-sm font-semibold text-blue-400 mt-0.5 truncate">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Problem Statement */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Problem
            </h3>
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-300">
              {project.caseStudy.problem}
            </div>
          </div>

          {/* Architecture Solution */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              How It&apos;s Built
            </h3>
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-slate-300">
              {project.caseStudy.architecture}
            </div>
          </div>

          {/* Technical Challenges */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Key Challenges Solved
            </h3>
            <ul className="space-y-2">
              {project.caseStudy.technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <span className="text-slate-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes & Verification */}
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Outcomes &amp; Results
            </h3>
            <ul className="space-y-2">
              {project.caseStudy.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-emerald-200">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack List */}
          <div>
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 bg-slate-900/40">
          <div className="text-xs font-mono text-slate-400">
            {project.localPath && <span>Local Path: <code className="text-slate-300">{project.localPath}</code></span>}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
