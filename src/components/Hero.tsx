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
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

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
              <span>View Featured Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>View Master Dossier / CV</span>
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

          {/* Proof-of-Work Metrics Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">72.5%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">First-Class Standing</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">UE 5.7</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Unreal Engine Active</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight">Next.js 16</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">React 19 App Router</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">40 hrs/wk</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">UK Immediate Avail.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
