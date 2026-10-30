import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";

const disciplines = [
  { icon: "layout", label: "Web applications", detail: "Next.js, React, Node.js" },
  { icon: "smartphone", label: "Mobile apps", detail: "React Native, Flutter, Kotlin" },
  { icon: "workflow", label: "AI & automation", detail: "OpenAI, LangChain, n8n" },
];

// Counted from data/, so they stay true as content changes.
const stats = [
  { value: projects.length, label: "Projects" },
  { value: services.length, label: "Service areas" },
  { value: skillGroups.reduce((total, group) => total + group.skills.length, 0), label: "Technologies" },
];

// Bento grid hero: intro (name, positioning, calls to action), location,
// approach, disciplines and a motto + numbers card.
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-name" className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:[grid-template-areas:'intro_intro'_'place_about'_'craft_quote'] lg:grid-cols-3 lg:[grid-template-areas:'intro_intro_place'_'about_craft_quote']">
        {/* Intro */}
        <div className="card relative overflow-hidden p-7 animate-rise sm:p-10 md:[grid-area:intro]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(16_185_129/0.22),transparent)]"
          />
          <div className="relative">
            <p className="status-pill">Open to new projects</p>
            <h1 id="hero-name" className="mt-6 font-display text-[3.25rem] font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="sr-only">{profile.fullName}</span>
              <span aria-hidden="true" className="block text-fg">
                {profile.firstName}
              </span>
              <span aria-hidden="true" className="block bg-gradient-to-r from-[#9ca3af] to-[#6b7280] bg-clip-text text-transparent">
                {profile.lastName}
              </span>
            </h1>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs font-extrabold uppercase tracking-[0.16em] text-accent" aria-label="Roles">
              {profile.roles.map((role, index) => (
                <li key={role} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-accent/50" />}
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I build <strong className="font-semibold text-fg">scalable web and mobile applications</strong>,{" "}
              <strong className="font-semibold text-fg">AI-powered products</strong> and{" "}
              <strong className="font-semibold text-fg">automated workflows</strong> that help businesses operate
              more efficiently, from the database schema to the deployed app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View my work
                <Icon name="arrow-up-right" size={18} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Icon name="mail" size={18} />
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Location: a stylised map pin on the grid */}
        <div className="card relative flex flex-col overflow-hidden p-7 animate-rise [animation-delay:80ms] sm:p-8 md:[grid-area:place]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_48%,rgb(16_185_129/0.22),transparent_70%)]"
          />
          <div aria-hidden="true" className="grid-texture pointer-events-none absolute inset-0" />
          <p className="eyebrow relative flex items-center gap-2 text-accent">
            <Icon name="pin" size={14} />
            Based in
          </p>
          <div aria-hidden="true" className="relative my-6 grid min-h-40 flex-1 place-items-center">
            <span className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent" />
            <span className="absolute size-44 rounded-full border border-accent/10" />
            <span className="absolute size-28 rounded-full border border-accent/20" />
            <span className="absolute size-28 rounded-full bg-accent/10 animate-ripple" />
            <span className="relative grid size-12 place-items-center rounded-full bg-accent text-black shadow-[0_0_40px_rgb(31_201_138/0.6)]">
              <Icon name="pin" size={22} strokeWidth={2.25} />
            </span>
          </div>
          <div className="relative">
            <p className="font-display text-3xl font-black uppercase leading-none">{profile.location.city}</p>
            <p className="mt-2 text-muted">{profile.location.region}</p>
            <p className="mt-3 font-mono text-[0.68rem] tracking-[0.18em] text-subtle">{profile.location.coordinates}</p>
          </div>
        </div>

        {/* Approach */}
        <div className="card p-7 animate-rise [animation-delay:160ms] sm:p-8 md:[grid-area:about]">
          <h2 className="flex items-center gap-3 font-display text-lg font-black uppercase">
            <Icon name="layers" className="text-accent" />
            Approach
          </h2>
          <div className="mt-4 space-y-3 leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Disciplines */}
        <div className="card flex flex-col p-7 animate-rise [animation-delay:240ms] sm:p-8 md:[grid-area:craft]">
          <h2 className="flex items-center gap-3 font-display text-lg font-black uppercase">
            <Icon name="code" className="text-accent" />
            What I build
          </h2>
          <ul className="mt-5 space-y-2">
            {disciplines.map((item) => (
              <li key={item.label} className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={item.icon} size={18} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-fg">{item.label}</span>
                  <span className="block text-xs text-subtle">{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Core technologies">
            {profile.focusTags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Motto + numbers */}
        <div className="card flex flex-col p-7 animate-rise [animation-delay:320ms] sm:p-8 md:[grid-area:quote]">
          <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent">
            <Icon name="quote" size={20} />
          </span>
          <blockquote className="mt-4 font-display text-2xl font-black leading-tight">
            <p>
              {profile.quote[0]}
              <br />
              <span className="text-accent">{profile.quote[1]}</span>
            </p>
          </blockquote>
          <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-6 max-md:mt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-[0.68rem] font-bold uppercase leading-tight tracking-[0.12em] text-subtle">
                  {stat.label}
                </dt>
                <dd className="font-display text-3xl font-black text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
