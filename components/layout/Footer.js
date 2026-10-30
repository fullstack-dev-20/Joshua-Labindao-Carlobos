import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="font-display text-lg font-black tracking-tight">
          {profile.initials}
          <span className="text-accent">.</span>
          <span className="ml-3 align-middle text-xs font-extrabold uppercase tracking-[0.24em] text-subtle">
            © {profile.fullName}
          </span>
        </p>
        <a href={`mailto:${profile.email}`} className="text-sm text-muted transition-colors hover:text-accent">
          {profile.email}
        </a>
      </div>
      <a
        href="#main"
        aria-label="Back to top"
        className="scroll-reveal fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong text-white shadow-[0_10px_30px_-8px_rgb(16_185_129/0.8)] transition-[translate] hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:size-14"
      >
        <Icon name="arrow-up" size={22} />
      </a>
    </footer>
  );
}
