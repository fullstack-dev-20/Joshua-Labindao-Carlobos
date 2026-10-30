import Link from "next/link";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { ProjectThumb } from "@/components/projects/ProjectThumb";
import { Icon } from "@/components/ui/Icon";
import { getService } from "@/data/services";

// Screenshot in a browser frame, then title, role, summary and the service
// areas the project covers. Every role title is rendered; the first shows by
// default and the project filter swaps in the one for the selected area.
// The whole card links to the case study.
export function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface transition-colors hover:border-accent/40">
      <BrowserFrame url={project.url}>
        <ProjectThumb
          project={project}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </BrowserFrame>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-black leading-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {project.title}
            </Link>
          </h3>
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-black"
          >
            <Icon name="arrow-up-right" size={16} />
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold text-accent">
          {project.roles.map((role, index) => (
            <span key={role.category} data-area={role.category} className={`role-title ${index > 0 ? "hidden" : "block"}`}>
              {role.title}
            </span>
          ))}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Service areas">
          {project.roles.map((role) => {
            const service = getService(role.category);
            return (
              <li
                key={role.category}
                data-area={role.category}
                className="role-pill inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[0.7rem] font-bold text-muted transition-colors"
              >
                <Icon name={service.icon} size={12} strokeWidth={2.25} className="text-accent" />
                {service.short}
              </li>
            );
          })}
        </ul>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] ring-2 ring-accent/0 transition group-has-[:focus-visible]:ring-accent"
      />
    </article>
  );
}
