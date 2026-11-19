"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlagshipSpotlight } from "@/components/FlagshipSpotlight";
import { ProjectGrid } from "@/components/ProjectGrid";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { DossierModal } from "@/components/DossierModal";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const flagshipProject = projectsData.find((p) => p.id === "photography-portfolio") || projectsData[0];

  return (
    <>
      <Navbar onOpenDossier={() => setIsDossierOpen(true)} />

      <main className="flex-1">
        <Hero onOpenDossier={() => setIsDossierOpen(true)} />

        <FlagshipSpotlight
          project={flagshipProject}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        <ProjectGrid
          projects={projectsData}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        <InteractivePlayground />

        <SkillsSection />

        <ExperienceTimeline />

        <ContactSection />
      </main>

      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Candidate Dossier / Resume Modal */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </>
  );
}
