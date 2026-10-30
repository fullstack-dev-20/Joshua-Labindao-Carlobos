import { ProjectCard } from "@/components/projects/ProjectCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, projectsForCategory } from "@/data/projects";
import { services } from "@/data/services";

const filters = [
  { id: "all", short: "All", icon: "layers", count: projects.length },
  ...services.map((service) => ({ ...service, count: projectsForCategory(service.id).length })),
];

// The filter needs no JavaScript: each button is a radio input, and these
// rules (one set per service area) use :has() to hide projects without a role
// in the checked area, show that area's role title and highlight its pill.
const filterCss = services
  .map(({ id }) => {
    const checked = `#projects:has(input[value="${id}"]:checked)`;
    return [
      `${checked} [data-areas]:not([data-areas~="${id}"]) { display: none; }`,
      `${checked} .role-title { display: none; }`,
      `${checked} .role-title[data-area="${id}"] { display: block; }`,
      `${checked} .role-pill[data-area="${id}"] { border-color: rgb(31 201 138 / 0.5); color: var(--color-fg); }`,
    ].join("\n");
  })
  .join("\n");

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <style href="project-filter" precedence="medium">
        {filterCss}
      </style>

      <SectionHeading
        id="projects-title"
        eyebrow="Portfolio"
        title="Featured"
        highlight="projects"
        intro="Products I've worked on across mobile, web, AI automation, backend, e-commerce and payments. Filter by area to see my role in each."
      />

      <fieldset className="mt-10 min-w-0">
        <legend className="sr-only">Filter projects by service area</legend>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
          {filters.map((filter) => (
            <label
              key={filter.id}
              className="group relative inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-muted transition-colors select-none hover:border-accent/50 hover:text-fg has-checked:border-accent has-checked:bg-accent has-checked:text-black has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
            >
              <input
                type="radio"
                name="project-filter"
                value={filter.id}
                defaultChecked={filter.id === "all"}
                className="sr-only"
              />
              <Icon name={filter.icon} size={16} className="text-accent group-has-checked:text-black" />
              {filter.short}
              <span className="rounded-full bg-white/10 px-1.5 text-xs tabular-nums group-has-checked:bg-black/15">
                {filter.count}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} data-areas={project.roles.map((role) => role.category).join(" ")} className="reveal">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
