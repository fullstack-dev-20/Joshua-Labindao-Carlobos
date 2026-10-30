import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/profile";
import { mailto } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
      <div className="reveal card relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_100%,rgb(16_185_129/0.28),transparent_70%)]"
        />
        <div aria-hidden="true" className="grid-texture pointer-events-none absolute inset-0" />

        <div className="relative">
          <p className="status-pill">Open to new projects</p>
          <h2 id="contact-title" className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl">
            Let&apos;s work <span className="text-accent">together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-soft sm:text-lg">
            Open to full-time roles, freelance projects and collaborations in web, mobile and AI automation. Tell me
            what you&apos;re building and I&apos;ll reply by email.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={mailto({ subject: "Project inquiry" })} className="btn btn-primary">
              <Icon name="mail" size={18} />
              Get in touch
            </a>
            <a href="#projects" className="btn btn-ghost">
              <Icon name="layers" size={18} />
              Explore projects
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn-ghost" download>
                <Icon name="file" size={18} />
                Download resume
              </a>
            )}
          </div>
          <div className="mt-12 border-t border-line pt-8">
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-display text-lg font-black text-fg underline-offset-8 transition-colors hover:text-accent hover:underline sm:text-2xl"
            >
              {profile.email}
            </a>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-subtle">
              <Icon name="pin" size={14} className="text-accent" />
              {profile.location.city}, {profile.location.region}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
