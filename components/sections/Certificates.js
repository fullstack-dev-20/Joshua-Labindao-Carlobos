import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/experience";

// Hidden until data/experience.js lists real certificates.
export function Certificates() {
  if (certificates.length === 0) return null;

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36"
    >
      <div className="reveal card p-6 sm:p-10">
        <SectionHeading id="certificates-title" eyebrow="Credentials" title="Certificates" />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate) => (
            <li key={certificate.title} className="rounded-[var(--radius-card)] border border-line bg-surface-2/70 p-5">
              <p className="eyebrow text-subtle">{[certificate.issuer, certificate.year].filter(Boolean).join(" · ")}</p>
              <h3 className="mt-3 font-bold leading-snug">{certificate.title}</h3>
              {certificate.href && (
                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-4 inline-flex items-center gap-2 text-accent hover:underline"
                >
                  View <Icon name="arrow-up-right" size={14} />
                  <span className="sr-only">{certificate.title} (opens in a new tab)</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
