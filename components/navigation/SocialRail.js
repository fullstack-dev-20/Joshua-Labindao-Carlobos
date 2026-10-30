import { Icon } from "@/components/ui/Icon";
import { profile } from "@/data/profile";

// Vertical icon rail on the left edge (large screens only). Shows email plus
// any profile links added to data/profile.js; hidden until there is at least
// one profile link, since email alone is already in the nav and contact section.
export function SocialRail() {
  if (profile.socials.length === 0) return null;

  const links = [
    ...profile.socials.map((social) => ({ ...social, icon: "link", external: true })),
    { label: `Email ${profile.email}`, href: `mailto:${profile.email}`, icon: "mail" },
  ];

  return (
    <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block" aria-label="Contact links">
      <ul className="flex flex-col gap-1 rounded-full border border-line bg-black/70 p-2 backdrop-blur-xl">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface-3 hover:text-accent"
            >
              <Icon name={link.icon} size={18} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
