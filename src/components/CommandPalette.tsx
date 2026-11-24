"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowUpRight, Cpu, Box, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { projectsData } from "@/data/projects";
import { candidateProfile } from "@/data/profile";
import { ProjectItem } from "@/types/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter projects
  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return projectsData;
    return projectsData.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        (p.stageFooterTag && p.stageFooterTag.toLowerCase().includes(q))
      );
    });
  }, [query]);

  // Clamped index for safe keyboard navigation
  const activeIndex = Math.min(
    selectedIndex,
    Math.max(0, filteredProjects.length - 1)
  );

  const handleClose = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Handle navigation
  const handleSelect = useCallback(
    (project: ProjectItem) => {
      handleClose();
      router.push(`/projects/${project.id}`);
    },
    [handleClose, router]
  );

  // Keyboard navigation inside palette
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredProjects.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredProjects.length - 1
        );
      } else if (e.key === "Enter" && filteredProjects[activeIndex]) {
        e.preventDefault();
        handleSelect(filteredProjects[activeIndex]);
      }
    },
    [filteredProjects, activeIndex, handleSelect, handleClose]
  );

  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0f1219] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            aria-label="Command search"
            placeholder="Type to search projects, modules, or tech (e.g. IN2011, PyTorch, Java)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-mono"
          />
          {query ? (
            <button
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
              }}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results list */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No matching projects or technologies found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={project.id}
                  onClick={() => handleSelect(project)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`group px-3.5 py-2.5 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-blue-600/20 border border-blue-500/40 text-white"
                      : "hover:bg-white/5 border border-transparent text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        project.category === "systems-ai"
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : project.category === "game-3d"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {project.category === "systems-ai" ? (
                        <Cpu className="w-4 h-4" />
                      ) : project.category === "game-3d" ? (
                        <Box className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white truncate">
                          {project.title}
                        </span>
                        {project.badge ? (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 shrink-0">
                            {project.badge}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-white/10 transition-colors"
                        title="Open Live Website"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : null}

                    <span className="hidden sm:inline-flex text-[11px] font-mono text-slate-400">
                      {isSelected ? "↵ Open" : ""}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↵</kbd> Select
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">esc</kbd> Close
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={candidateProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={candidateProfile.itchIo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              itch.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
