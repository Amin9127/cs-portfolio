"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight, Gamepad2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { candidateProfile } from "@/data/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(candidateProfile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${candidateProfile.email}`;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>

          <p className="mt-3 text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
            Open to Junior Software Engineer, Python / ML Engineer, and 3D Systems roles in London or remote. Reach out or browse the source repositories below.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-slate-400">Email</span>
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm font-semibold text-white font-mono break-all">
                  {candidateProfile.email}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${candidateProfile.email}?subject=Software%20Engineering%20Role`}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium"
                >
                  Mail
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-slate-400">GitHub</span>
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  github.com/Amin9127
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Python codebases, Java coursework, and hackathon repos.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={candidateProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <span>Visit GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-slate-400">Game Builds</span>
                  <Gamepad2 className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  amin9127.itch.io
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Playable builds and demos including Galactic Crafters.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={candidateProfile.itchIo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <span>Visit itch.io</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
