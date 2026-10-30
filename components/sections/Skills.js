import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <SectionHeading id="skills-title" eyebrow="Toolbox" title="Technical" highlight="skills" />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.title} aria-label={group.title} className="reveal card p-7">
            <h3 className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.1em]">
              <span className="grid size-9 place-items-center rounded-lg bg-accent-soft text-accent">
                <Icon name={group.icon} size={18} />
              </span>
              {group.title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium text-soft transition-colors hover:border-accent/40 hover:text-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
