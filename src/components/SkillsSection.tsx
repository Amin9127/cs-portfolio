import { Code2, Cpu, Box, Globe, Sparkles, Check } from "lucide-react";
import { candidateProfile } from "@/data/profile";

function getIconForCategory(category: string) {
  switch (category) {
    case "Core Languages":
      return <Code2 className="w-4 h-4 text-amber-400" />;
    case "ML & Computer Vision":
      return <Cpu className="w-4 h-4 text-purple-400" />;
    case "3D & Game Systems":
      return <Box className="w-4 h-4 text-blue-400" />;
    case "Web & Engineering Tools":
      return <Globe className="w-4 h-4 text-emerald-400" />;
    default:
      return <Sparkles className="w-4 h-4 text-slate-400" />;
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Skill Matrix
          </h2>
          <p className="mt-2 text-slate-400 max-w-2xl text-base">
            Core hands-on languages and ML libraries backed by codebases, paired with AI-assisted frontend workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidateProfile.skills.map((group) => (
            <div key={group.category} className="glow-card rounded-2xl p-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-5">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {getIconForCategory(group.category)}
                </div>
                <h3 className="font-semibold text-white text-base">{group.category}</h3>
              </div>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
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
