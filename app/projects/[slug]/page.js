import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { ProjectThumb } from "@/components/projects/ProjectThumb";
import { ServiceBadge } from "@/components/projects/ServiceBadge";
import { Icon } from "@/components/ui/Icon";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { hostname, mailto } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const roles = project.roles.map((role) => role.title).join(", ");
  return {
    title: project.title,
    description: `${roles}. ${project.summary}`,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <SiteShell basePath="/">
      <article className="mx-auto max-w-5xl px-4 pt-28 sm:px-6 sm:pt-36">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-accent"
        >
          <Icon name="arrow-left" size={16} />
          All projects
        </Link>

        <header className="mt-8">
          <ul className="flex flex-wrap gap-2" aria-label="Service areas">
            {project.roles.map((role) => (
              <li key={role.category}>
                <ServiceBadge id={role.category} />
              </li>
            ))}
          </ul>
          <h1 className="mt-5 font-display text-5xl font-black tracking-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-8">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit {hostname(project.url)} <Icon name="arrow-up-right" size={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </header>

        <BrowserFrame
          url={project.url}
          className="mt-10 rounded-[var(--radius-card)] border border-line shadow-[0_40px_120px_-40px_rgb(16_185_129/0.45)]"
        >
          <ProjectThumb project={project} preload sizes="(min-width: 1024px) 1024px, 100vw" />
        </BrowserFrame>

        <section aria-labelledby="role-title" className="mt-10">
          <h2 id="role-title" className="font-display text-3xl font-black">
            My role
          </h2>
          <div className="mt-5 grid gap-5">
            {project.roles.map((role) => (
              <div key={role.category} className="reveal card p-6 sm:p-8">
                <p className="eyebrow text-accent">{getService(role.category)?.title}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{role.title}</h3>
                <p className="mt-3 leading-relaxed text-soft">{role.work}</p>
              </div>
            ))}
          </div>
        </section>

        <nav aria-label="More projects" className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <a href={mailto({ subject: `About ${project.title}` })} className="btn btn-ghost">
            <Icon name="mail" size={18} />
            Ask about this project
          </a>
          <Link href={`/projects/${next.slug}`} className="btn btn-primary">
            Next: {next.title}
            <Icon name="arrow-up-right" size={18} />
          </Link>
        </nav>
      </article>
      <div className="h-28" />
    </SiteShell>
  );
}
