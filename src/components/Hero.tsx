import { ArrowRight, Gamepad2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { candidateProfile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Final-Year MSci Computer Science &bull; London, UK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.14] text-center max-w-4xl">
            I build Python ML systems,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              3D Unreal Engine mechanics
            </span>
            , and optical web tools.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl text-center">
            I am <span className="text-white font-medium">{candidateProfile.name}</span>, a final-year MSci Computer Science student at{" "}
            <span className="text-white font-medium">{candidateProfile.degree.institution}</span> and a model evaluator at Outlier AI. My core code spans Python, Java, PyTorch computer vision, and Unreal Engine 5, paired with AI-assisted Next.js web delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={candidateProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm transition-all transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repositories</span>
            </a>

            <a
              href={candidateProfile.itchIo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all"
            >
              <Gamepad2 className="w-4 h-4 text-indigo-400" />
              <span>itch.io Builds</span>
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400 w-full max-w-3xl">
            <span>Python &bull; Java &bull; SQL</span>
            <span className="text-white/20">&bull;</span>
            <span>PyTorch &bull; OpenCV &bull; Pygame</span>
            <span className="text-white/20">&bull;</span>
            <span>Unreal Engine 5</span>
            <span className="text-white/20">&bull;</span>
            <span>Outlier AI Evaluator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
