import { hostname } from "@/lib/site";

// Minimal browser window around a site screenshot: traffic-light dots and the
// site's host in an address bar. Children fill the 16:10 viewport below.
export function BrowserFrame({ url, children, className = "" }) {
  return (
    <div className={`overflow-hidden bg-surface-2 ${className}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 min-w-0 truncate rounded-md bg-black/40 px-3 py-0.5 font-mono text-[0.68rem] text-subtle">
          {hostname(url)}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}
