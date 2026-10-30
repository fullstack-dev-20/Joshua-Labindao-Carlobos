import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsForCategory } from "@/data/projects";
import { services } from "@/data/services";

// One card per service area: what it covers, the stack, and the projects
// where I did that work (each links to its case study).
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading
        id="services-title"
        eyebrow="What I offer"
        title="Services"
        intro="Six areas I work in, the stack I use for each, and the projects where I did that work."
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="reveal card flex flex-col p-7 transition-colors hover:border-accent/30"
          >
            <div className="flex items-center gap-4">
              <span className="icon-badge size-12 rounded-xl">
                <Icon name={service.icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-black leading-tight">{service.title}</h3>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">{service.summary}</p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${service.title} stack`}>
              {service.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="border-t border-line pt-5">
                <p className="eyebrow text-subtle">Projects</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {projectsForCategory(service.id).map((project) => (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-fg underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {project.title}
                        <Icon name="arrow-up-right" size={14} className="text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
