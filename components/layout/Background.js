// Fixed decorative backdrop: a dark field with soft green glows and vertical
// light streaks, echoing the reference design. Purely visual.
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_42%,rgb(16_185_129/0.22),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(45%_60%_at_50%_100%,rgb(16_185_129/0.14),transparent_70%)]" />
      <div className="streaks absolute left-1/2 top-[15%] h-[85%] w-[min(900px,90vw)] -translate-x-1/2 opacity-60 blur-[2px]" />
    </div>
  );
}
