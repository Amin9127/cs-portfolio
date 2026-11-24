import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amin-cs.vercel.app";

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date("2026-11-24"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
