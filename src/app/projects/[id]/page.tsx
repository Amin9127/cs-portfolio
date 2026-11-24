import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ExternalLink, Gamepad2, Play } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Footer } from "@/components/Footer";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Amin Ali`,
      description: project.tagline,
      url: `https://amin-cs.vercel.app/projects/${project.id}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#090a0f]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <BackButton fallbackHref="/#projects" label="Back to Portfolio" />

          <div className="flex items-center gap-2">
            {project.itchUrl ? (
              <a
                href={project.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>itch.io</span>
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition-colors"
              >
                <span>{project.youtubeId ? "Watch Demo" : "Visit Live"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                {project.status}
              </span>
              {project.badge ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
                  {project.badge}
                </span>
              ) : null}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs font-mono text-slate-400">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-slate-500 uppercase mr-1.5">{m.label}:</span>
                  <strong className="text-white font-medium">{m.value}</strong>
                </div>
              ))}
            </div>
          </div>

          {project.id === "photography-portfolio" ? (
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-[#0f1219] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src="/images/demo/arch-and-doors.jpg"
                    alt="Canon EOS M3 photograph of Victorian Gothic pointed terracotta archway and courtyard doors from amin-photography.vercel.app"
                    fill
                    sizes="128px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                    Live Photography Archive
                  </span>
                  <p className="text-sm text-slate-300">
                    Visit the live site to browse the full gallery, real EXIF telemetry, and interactive RAW proofing.
                  </p>
                </div>
              </div>
              <a
                href={project.liveUrl || "https://amin-photography.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold shrink-0 transition-colors"
              >
                <span>Check Out Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : null}

          {project.youtubeId ? (
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f1219] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                  Recorded Demo &amp; Playable Build
                </span>
                <p className="text-sm text-slate-300">
                  Watch the full gameplay demonstration on YouTube or download the playable build on itch.io.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Watch YouTube Demo</span>
                </a>
                {project.itchUrl ? (
                  <a
                    href={project.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                  >
                    <Gamepad2 className="w-3.5 h-3.5" />
                    <span>Play on itch.io</span>
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-8">
              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">Overview</h2>
                <p className="text-slate-200 leading-relaxed">{project.caseStudy.overview}</p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">The Problem</h2>
                <p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-white/20">
                  {project.caseStudy.problem}
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Architecture &amp; Implementation
                </h2>
                <p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-blue-500/40">
                  {project.caseStudy.architecture}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Challenges Solved
                </h2>
                <ul className="space-y-2.5">
                  {project.caseStudy.technicalChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Outcomes &amp; Verification
                </h2>
                <ul className="space-y-2.5">
                  {project.caseStudy.keyOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#0f1219] border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-blue-400 uppercase tracking-wider font-semibold">
                    {project.stageHeaderLabel}
                  </span>
                </div>
                <div className="space-y-3.5 text-xs">
                  {project.engineeringHighlights.map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5 text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-white block font-medium">{item.title}</strong>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  {project.stageFooterTag}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0f1219] border border-white/10 space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
