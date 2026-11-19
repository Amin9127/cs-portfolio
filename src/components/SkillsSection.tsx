"use client";

import { Code2, Globe, Box, Database, Sparkles, Check } from "lucide-react";
import { candidateProfile } from "@/data/profile";

export function SkillsSection() {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case "Web & Full-Stack":
        return <Globe className="w-4 h-4 text-blue-400" />;
      case "3D & Game Systems":
        return <Box className="w-4 h-4 text-purple-400" />;
      case "Databases & Systems":
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Skill Matrix
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-base">
            Verified technical proficiencies backed by production repositories, academic coursework, and industry AI auditing experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidateProfile.skills.map((group, idx) => (
            <div key={idx} className="glow-card rounded-2xl p-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-5">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {getIconForCategory(group.category)}
                </div>
                <h3 className="font-semibold text-white text-base">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2 text-sm text-slate-300 font-medium"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
