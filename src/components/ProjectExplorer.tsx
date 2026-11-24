"use client";

import { useState } from "react";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectItem } from "@/types/portfolio";

interface ProjectExplorerProps {
  projects: ProjectItem[];
}

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <>
      <ProjectGrid
        projects={projects}
        onOpenCaseStudy={(project) => setSelectedProject(project)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
