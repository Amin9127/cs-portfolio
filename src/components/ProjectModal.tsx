"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, ExternalLink, CheckCircle2, Gamepad2, ArrowUpRight } from "lucide-react";
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0f1219] border border-white/10 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                {project.status}
              </span>
              {project.badge ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-blue-400">
                  {project.badge}
                </span>
              ) : null}
            </div>
            <h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
              {project.caseStudy.overview}
            </p>

            <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
              {project.metrics.map((m) => (
                <span key={m.label} className="flex items-center gap-1.5">
                  <span className="text-slate-500 uppercase">{m.label}:</span>
                  <strong className="text-white font-medium">{m.value}</strong>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 text-sm leading-relaxed">
          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              The Problem
            </h3>
            <p className="text-slate-300 leading-relaxed pl-3 border-l-2 border-white/20">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              Architecture &amp; Implementation
            </h3>
            <p className="text-slate-300 leading-relaxed pl-3 border-l-2 border-blue-500/40">
              {project.caseStudy.architecture}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              Key Challenges Solved
            </h3>
            <ul className="space-y-2 pl-1">
              {project.caseStudy.technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400 mb-2">
              Outcomes &amp; Verification
            </h3>
            <ul className="space-y-2 pl-1">
              {project.caseStudy.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold shadow-md transition-all"
              >
                <span>{project.youtubeId ? "Watch Demo Video" : "Visit Live Website"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
            {project.itchUrl ? (
              <a
                href={project.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>Play on itch.io</span>
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            ) : null}
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <span>Full Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
