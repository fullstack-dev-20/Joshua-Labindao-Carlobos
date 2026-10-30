import { experience } from "@/data/experience";

// Hidden until data/experience.js has confirmed entries.
export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36">
      <div className="reveal card p-6 sm:p-10">
        <h2 id="experience-title" className="font-display text-3xl font-black uppercase tracking-wide sm:text-4xl">
          Professional experience
        </h2>
        <ol className="mt-8 space-y-6">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="rounded-[var(--radius-card)] border border-line bg-surface-2/70 p-6">
              <h3 className="font-display text-2xl font-black">{job.role}</h3>
              <p className="mt-1 text-sm uppercase tracking-wide text-muted">
                {[job.company, job.period, job.location].filter(Boolean).join(" • ")}
              </p>
              {job.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-soft">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent" aria-hidden="true">
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {job.stack?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
