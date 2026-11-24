import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, Camera, CheckCircle2, SlidersHorizontal, FileCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectItem } from "@/types/portfolio";

interface FlagshipSpotlightProps {
  project: ProjectItem;
}

export function FlagshipSpotlight({ project }: FlagshipSpotlightProps) {
  const liveUrl = project.liveUrl || "https://amin-photography.vercel.app";
  const githubUrl = project.githubUrl || "https://github.com/Amin9127/Photography-portfolio";

  return (
    <section id="flagship" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-3">
                <Camera className="w-3.5 h-3.5" />
                <span>Featured Live Website</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-3 text-slate-300 max-w-2xl text-base leading-relaxed">
                {project.tagline} Visit the live photography website to browse the full gallery, inspect real EXIF camera settings, and try the interactive RAW comparison there.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Check Out amin-photography.vercel.app</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/50 bg-[#0f1219] shadow-xl transition-all max-w-md mx-auto lg:max-w-none"
            >
              <div className="relative aspect-[4/5] max-h-[520px] w-full">
                <Image
                  src="/images/demo/arch-and-doors.jpg"
                  alt="Canon EOS M3 photograph of Victorian Gothic pointed terracotta archway, tiled corridor, and inner courtyard doors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-end justify-between gap-3">
                  <div className="font-mono text-[11px] text-slate-200 space-y-0.5">
                    <div className="text-amber-300 font-semibold">Canon EOS M3 &bull; EF-M 18-55mm IS STM</div>
                    <div className="text-slate-300">18mm &bull; f/3.5 &bull; 1/60s &bull; ISO 500</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-semibold shadow-md shrink-0">
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Direct EXIF Extraction</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reads camera focal length, aperture, shutter speed, and ISO directly from image file headers on the server using ExifReader.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>AI-Assisted Web UI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Steered Next.js 16 and React 19 components from structured technical specs for fast gallery layouts and live EXIF overlays.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-base">
              <FileCheck className="w-4 h-4 text-blue-400" />
              <span>Python Verification Pipeline</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automated pre-build Python scripts verify RAW-to-edited file pairs, image dimensions, and normalized metadata before deployment.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-white/5 font-mono gap-2">
          <span>
            Live Archive:{" "}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              https://amin-photography.vercel.app
            </a>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Server-Side EXIF &bull; Python Pair QA &bull; Next.js 16
          </span>
        </div>
      </div>
    </section>
  );
}
