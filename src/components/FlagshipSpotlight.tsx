"use client";

import { Camera, Sliders, Eye, FileCode2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";

interface FlagshipSpotlightProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export function FlagshipSpotlight({ project, onOpenCaseStudy }: FlagshipSpotlightProps) {
  return (
    <section id="flagship" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Featured Project</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Photography Portfolio &amp; Optical Archive
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-base">
              A photography portfolio that surfaces the technical camera data behind each shot: focal length, aperture, shutter speed, ISO, and an interactive RAW-to-color grading comparison.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-sm font-semibold transition-all"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Spotlight Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Mockup & Telemetry Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#11131a] border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
              {/* Telemetry Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>OPTICAL_TELEMETRY // LIVE READOUT</span>
                </div>
                <div className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400">
                  EXIF_PARSER_ACTIVE
                </div>
              </div>

              {/* Telemetry HUD */}
              <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] uppercase text-slate-500">Focal Length</div>
                  <div className="text-base font-bold text-white mt-0.5">35.0 mm</div>
                  <div className="text-[10px] text-amber-400">Prime Lens</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] uppercase text-slate-500">Aperture</div>
                  <div className="text-base font-bold text-white mt-0.5">f / 2.8</div>
                  <div className="text-[10px] text-amber-400">Moderate Depth</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] uppercase text-slate-500">Shutter Speed</div>
                  <div className="text-base font-bold text-white mt-0.5">1 / 250 s</div>
                  <div className="text-[10px] text-slate-400">Handheld</div>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] uppercase text-slate-500">Sensor ISO</div>
                  <div className="text-base font-bold text-white mt-0.5">ISO 400</div>
                  <div className="text-[10px] text-emerald-400">Base Noise Level</div>
                </div>
              </div>

              {/* Graphic Representation of Before/After & AI Tagging */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900/80 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 font-medium text-slate-200">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    RAW vs Finished Color Grade
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">ExifReader + Next.js App Router</span>
                </div>

                <div className="h-40 rounded-lg bg-gradient-to-r from-slate-800 to-indigo-950/60 p-4 flex flex-col justify-between border border-white/5 relative">
                  <div className="flex justify-between items-start text-xs font-mono">
                    <span className="px-2 py-1 rounded bg-black/60 text-slate-300 border border-white/10">
                      LEFT: Raw Sensor Data (.CR3 / .NEF)
                    </span>
                    <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      RIGHT: Color Graded
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[11px] font-mono flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Tag: Golden Hour
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-mono flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                      Dynamic Range: 12.4 EV
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Tech Strip */}
              <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-white/5">
                <span className="font-mono">Stack: Next.js 16.4, React 19.3, Tailwind CSS v4, TypeScript 5</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 98+ Lighthouse Score
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Technical Points (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Camera className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-base">Direct EXIF Telemetry</h3>
              </div>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Reads focal length, aperture, shutter speed, ISO, and camera lens profiles directly from image metadata, mapping tags consistently across different camera brands.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-base">RAW vs Color-Graded Slider</h3>
              </div>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                A touch and mouse slider (<code className="text-blue-300 font-mono text-xs">BeforeAfterSlider.tsx</code>) that lets visitors slide between unedited camera captures and post-processed final images.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-base">Automated Scene Tagging</h3>
              </div>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                A background script (<code className="text-purple-300 font-mono text-xs">aiVision.ts</code>) that sends images to multimodal vision models to generate lighting, composition, and subject tags automatically.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FileCode2 className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-white text-base">Python Batch Verification</h3>
              </div>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Python scripts (<code className="text-emerald-300 font-mono text-xs">process_photos.py</code>, <code className="text-emerald-300 font-mono text-xs">verify_raw_pairs.py</code>) that confirm every JPEG has its matching RAW file and valid metadata before build time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
