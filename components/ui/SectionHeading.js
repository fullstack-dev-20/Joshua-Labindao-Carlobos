// Centered section title: spaced eyebrow, then a heading whose last word can
// be highlighted in the accent color ("Featured projects").
export function SectionHeading({ id, eyebrow, title, highlight, intro, className = "" }) {
  return (
    <header className={`reveal mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && <p className="eyebrow mb-4 text-muted">{eyebrow}</p>}
      <h2 id={id} className="font-display text-4xl font-black tracking-tight text-fg sm:text-5xl md:text-6xl">
        {title}
        {highlight && <span className="text-accent"> {highlight}</span>}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </header>
  );
}
