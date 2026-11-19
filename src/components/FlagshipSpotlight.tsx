"use client";

import { ExternalLink, ArrowUpRight, Camera, CheckCircle2, SlidersHorizontal, FileCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem } from "@/types/portfolio";

interface FlagshipSpotlightProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export function FlagshipSpotlight({ project, onOpenCaseStudy }: FlagshipSpotlightProps) {
  const liveUrl = project.liveUrl || "https://amin-photography.vercel.app";
  const githubUrl = project.githubUrl || "https://github.com/Amin9127/Photography-portfolio";

  return (
    <section id="flagship" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Featured Web Project &bull; Live Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Photography Portfolio &amp; Visual Archive
            </h2>
            <p className="mt-2 text-slate-300 max-w-2xl text-base leading-relaxed">
              A photography portfolio and visual archive built with Next.js 16. Displays camera optical data directly from image headers, featuring architectural, street, and nature photography.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              <span>Read Case Study</span>
            </button>
          </div>
        </div>

        {/* Clean, Unboxed Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Direct EXIF Extraction</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reads camera focal length, aperture, shutter speed, and ISO directly from image file headers on the fly using ExifReader.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>High-Performance Gallery</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Built with Next.js 16 App Router and React 19 Server Components for fast page hydration and clean, responsive image layouts.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <FileCheck className="w-4 h-4 text-blue-400" />
              <span>Python Verification Pipeline</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated pre-build scripts verify metadata validity, check file checksums, and validate asset pairing before deployment.
            </p>
          </div>
        </div>

        {/* Subtle Tech Strip */}
        <div className="mt-8 pt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-white/5 font-mono">
          <span>Production Domain: <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">amin-photography.vercel.app</a></span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> 98+ Lighthouse Score &bull; Next.js 16.4 &bull; React 19
          </span>
        </div>

      </div>
    </section>
  );
}
