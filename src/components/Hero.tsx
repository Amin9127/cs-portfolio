"use client";

import { useState } from "react";
import { ArrowRight, Copy, Check, Download } from "lucide-react";
import { candidateProfile } from "@/data/profile";

interface HeroProps {
  onOpenDossier: () => void;
}

export function Hero({ onOpenDossier }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Final-Year MSci Computer Science (72.5% First-Class Track) &bull; London, UK</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
            I build web applications,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              3D games in Unreal Engine
            </span>
            , and systems tools.
          </h1>

          {/* Narrative Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            I am <span className="text-white font-medium">Amin Ali</span>, a final-year MSci Computer Science student at{" "}
            <span className="text-white font-medium">City St George&apos;s, University of London</span> and an AI code reviewer at Outlier AI. I focus on practical software development: modern Next.js 16 frontends, Unreal Engine 5.7 gameplay, and socket communication.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#flagship"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Master Dossier / CV</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>aminali656565@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Clean Credentials Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            <span>MSci Computer Science <strong className="text-white">(72.5% First-Class Track)</strong></span>
            <span className="text-white/20">&bull;</span>
            <span>Unreal Engine 5.7 &bull; C++ &bull; Blueprints</span>
            <span className="text-white/20">&bull;</span>
            <span>Next.js 16 &bull; React 19 &bull; TypeScript</span>
            <span className="text-white/20">&bull;</span>
            <span>AI Code Reviewer @ Outlier AI</span>
          </div>

        </div>
      </div>
    </section>
  );
}
