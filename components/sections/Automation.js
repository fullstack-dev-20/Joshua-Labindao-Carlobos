import Link from "next/link";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { ProjectThumb } from "@/components/projects/ProjectThumb";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProject } from "@/data/projects";
import { getService } from "@/data/services";

// Generic lead follow-up run, shown as decoration. Illustrative, not live data.
const runLog = [
  ["09:02:11", "WEBHOOK", "contact.created from website form"],
  ["09:02:11", "VALIDATE", "email + phone format OK"],
  ["09:02:12", "DEDUPE", "no matching contact"],
  ["09:02:12", "CLASSIFY", "intent: quote request"],
  ["09:02:12", "SCORE", "lead score updated"],
  ["09:02:13", "DRAFT", "follow-up email ready for review"],
  ["09:02:13", "ROUTE", "assigned to sales owner"],
  ["09:02:13", "LOG", "run complete, 0 retries"],
];

const aiService = getService("ai");
const aiRole = (project) => project.roles.find((role) => role.category === "ai");
const featured = getProject("hubspot");
const supporting = ["corellium", "superlist"].map(getProject);

function CardBody({ project, size = "md" }) {
  const role = aiRole(project);
  return (
    <div className="relative">
      <div className="flex items-start justify-between gap-4">
        <span className="icon-badge">
          <Icon name={aiService.icon} size={24} />
        </span>
        <span
          aria-hidden="true"
          className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-black"
        >
          <Icon name="arrow-up-right" size={18} />
        </span>
      </div>
      <p className="eyebrow mt-6 text-accent">{role.title}</p>
      <h3 className={`mt-2 font-display font-black ${size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
        <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.work}</p>
    </div>
  );
}

export function Automation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-title"
      className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36"
    >
      <SectionHeading
        id="automation-title"
        eyebrow="AI & workflow systems"
        title="AI automation"
        highlight="systems"
        intro="CRM workflows, lead follow-ups, webhook processing and AI-assisted support: the repetitive work taken off a team's plate."
      />

      <article className="reveal group card relative mt-14 grid overflow-hidden lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col bg-[radial-gradient(70%_70%_at_0%_100%,rgb(16_185_129/0.2),transparent_70%)] p-7 sm:p-10">
          <CardBody project={featured} size="lg" />
          <p className="mt-10 font-display text-3xl font-black leading-[1.05] tracking-tight text-soft sm:text-4xl lg:mt-auto lg:pt-10">
            Your workflows,
            <br />
            <span className="text-accent">already running.</span>
          </p>
        </div>

        <figure
          aria-label="Example lead follow-up run log (illustrative)"
          className="relative flex flex-col border-t border-line bg-[#060707] lg:border-l lg:border-t-0"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-5 py-3" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-subtle">lead-follow-up.run</span>
            <span className="ml-auto inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
              Example run
            </span>
          </div>
          <ol className="flex-1 space-y-1.5 p-5 font-mono text-xs leading-6 sm:p-7 sm:text-[0.8rem]">
            {runLog.map(([time, step, message]) => (
              <li key={step} className="grid grid-cols-[5rem_1fr] gap-x-3 sm:grid-cols-[4.5rem_5.5rem_1fr]">
                <span className="hidden text-subtle sm:inline">{time}</span>
                <span className="text-accent">{step}</span>
                <span className="text-soft">{message}</span>
              </li>
            ))}
            <li aria-hidden="true" className="pt-1 text-accent">
              <span className="animate-pulse">▍</span>
            </li>
          </ol>
          <figcaption className="border-t border-line px-5 py-3 text-xs text-subtle sm:px-7">
            Illustrative lead follow-up run.
          </figcaption>
        </figure>
      </article>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {supporting.map((project) => (
          <article key={project.slug} className="reveal group card relative overflow-hidden">
            <BrowserFrame url={project.url} className="border-b border-line">
              <ProjectThumb
                project={project}
                sizes="(min-width: 768px) 540px, 100vw"
                className="transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </BrowserFrame>
            <div className="bg-[radial-gradient(60%_120%_at_50%_100%,rgb(16_185_129/0.14),transparent_70%)] p-7 sm:p-8">
              <CardBody project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
