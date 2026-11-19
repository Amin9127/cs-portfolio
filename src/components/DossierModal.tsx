"use client";

import { useEffect, useState } from "react";
import { X, Printer, Mail, MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { candidateProfile } from "@/data/profile";

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DossierModal({ isOpen, onClose }: DossierModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#11131a] border border-white/10 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Toolbar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-slate-900/60 no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Candidate Master Dossier &bull; Amin Ali
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-sm leading-relaxed font-sans bg-[#0d0f15]">
          {/* Header Section */}
          <div className="pb-6 border-b border-white/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {candidateProfile.name}
            </h1>
            <p className="text-base text-blue-400 font-medium mt-1">
              {candidateProfile.title}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              {candidateProfile.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {candidateProfile.location}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{candidateProfile.email}</span>
                {copied && <span className="text-emerald-400">(Copied!)</span>}
              </button>
              <a
                href={candidateProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                <span>github.com/Amin9127</span>
              </a>
            </div>

            <div className="mt-3 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg inline-block">
              Status: {candidateProfile.availability}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono uppercase font-bold text-blue-400 tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              1. Education &amp; Academic Honours
            </h2>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-bold text-white text-base">
                  {candidateProfile.degree.institution}
                </div>
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  {candidateProfile.degree.gradeAverage}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-300">
                {candidateProfile.degree.program} &bull; {candidateProfile.degree.status}
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-1.5">
                {candidateProfile.degree.modules.map((m, idx) => (
                  <div key={idx} className="pl-3 border-l-2 border-blue-500/30">
                    <strong className="text-slate-200">{m.code} ({m.title}):</strong> {m.focus}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industry Work History */}
          <div>
            <h2 className="text-sm font-mono uppercase font-bold text-purple-400 tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              2. Technical Industry Experience
            </h2>

            {candidateProfile.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-white text-base">
                    {exp.role} &bull; {exp.organization}
                  </div>
                  <div className="text-xs font-mono text-purple-400">
                    {exp.period}
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  Assigned Project: <strong className="text-slate-200">{exp.project}</strong>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h2 className="text-sm font-mono uppercase font-bold text-amber-400 tracking-wider mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              3. Technical Stack &amp; Core Tooling
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {candidateProfile.skills.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    {s.category}
                  </div>
                  <div className="text-xs text-slate-300 font-mono flex flex-wrap gap-1.5">
                    {s.items.map((item, iIdx) => (
                      <span key={iIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
