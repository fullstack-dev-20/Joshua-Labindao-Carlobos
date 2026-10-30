"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/profile";

// Floating pill navigation: logo, section links and a "Let's talk" button. On
// the home page links scroll to sections and the current section is
// highlighted; elsewhere (`basePath="/"`) they link back home.
export function NavBar({ items, basePath = "" }) {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const links = items.filter((item) => item.id !== "contact");

  useEffect(() => {
    if (basePath) return;
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else if (entry.target.id === sections[0]?.id && entry.boundingClientRect.top > 0) setActive(null);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, basePath]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (id) =>
    `rounded-full px-4 py-2.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.2em] transition-colors ${
      active === id ? "bg-surface-3 text-fg shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]" : "text-muted hover:text-fg"
    }`;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-line bg-black/70 p-1.5 pl-5 backdrop-blur-xl"
      >
        <a href={`${basePath}#home`} className="font-display text-lg font-black tracking-tight" aria-label={`${profile.shortName}, home`}>
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <li key={item.id}>
              <a
                href={`${basePath}#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`${basePath}#contact`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-accent-strong px-4 text-sm font-extrabold text-white transition-colors hover:bg-accent sm:px-5"
          >
            Let&apos;s talk
            <Icon name="arrow-up-right" size={16} />
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-surface-3 text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-3xl border border-line bg-black/90 p-3 backdrop-blur-xl lg:hidden"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`${basePath}#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block ${linkClass(item.id)} py-3`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
