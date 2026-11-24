import { Terminal } from "lucide-react";
import { BackToTopButton } from "@/components/BackToTopButton";
import { candidateProfile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#07080c] text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-4 h-4 text-blue-400" />
          <span>{candidateProfile.name} &bull; {candidateProfile.location}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={candidateProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={candidateProfile.itchIo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            itch.io
          </a>
          <a
            href={candidateProfile.photographyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            Photography
          </a>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
