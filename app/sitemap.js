import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap() {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, priority: 0.7 })),
  ];
}
