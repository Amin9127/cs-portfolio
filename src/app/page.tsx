import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FlagshipSpotlight } from "@/components/FlagshipSpotlight";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { projectsData } from "@/data/projects";

export default function Home() {
  const flagshipProject =
    projectsData.find((p) => p.id === "photography-portfolio") ?? projectsData[0];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <FlagshipSpotlight project={flagshipProject} />
        <ProjectExplorer projects={projectsData} />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
