"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { candidateProfile } from "@/data/profile";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Ambitious
          </h2>

          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I am actively seeking <strong className="text-white">Junior Software Engineer</strong>, <strong className="text-white">Full-Stack Developer</strong>, or <strong className="text-white">3D Systems</strong> opportunities across London or remote. If you value fast execution, verifiable code, and high autonomy, I would love to connect.
          </p>

          {/* Contact Action Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Primary Email */}
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-slate-400">Direct Application Email</span>
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-sm font-semibold text-white font-mono break-all">
                {candidateProfile.email}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${candidateProfile.email}?subject=Software%20Engineering%20Opportunity`}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-medium"
                >
                  Launch Client
                </a>
              </div>
            </div>

            {/* GitHub & University */}
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-slate-400">Code Repositories</span>
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  github.com/Amin9127
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Explore open-source implementations, hackathons, and games.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={candidateProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold transition-all"
                >
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500 font-mono">
            University Affiliation: <span className="text-slate-400">{candidateProfile.universityEmail}</span> &bull; Location: <span className="text-slate-400">Central London, UK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
