"use client";

import { GraduationCap, Briefcase, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { candidateProfile } from "@/data/profile";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Industry Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Experience
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-base">
            Academic foundation at City St George&apos;s paired with commercial AI code auditing and QA evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education Card */}
          <div className="glow-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg sm:text-xl">
                    {candidateProfile.degree.institution}
                  </h3>
                  <p className="text-xs font-mono text-blue-400 mt-0.5">
                    {candidateProfile.degree.program}
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 whitespace-nowrap">
                72.5% First Class Average
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {candidateProfile.degree.status}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                London, UK
              </span>
            </div>

            <h4 className="text-xs uppercase font-mono font-semibold text-slate-400 tracking-wider mb-3">
              Key Academic Modules &amp; Focus
            </h4>

            <div className="space-y-3">
              {candidateProfile.degree.modules.map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-300">
                      {mod.code}: {mod.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mod.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div className="glow-card rounded-2xl p-6 sm:p-8">
            {candidateProfile.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg sm:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-purple-400 mt-0.5">
                        {exp.organization} &bull; {exp.project}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Remote High-Trust Contributor
                  </span>
                </div>

                <h4 className="text-xs uppercase font-mono font-semibold text-slate-400 tracking-wider mb-3">
                  Key Technical Responsibilities
                </h4>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
