import { Icon } from "@/components/ui/Icon";
import { getService } from "@/data/services";

// Pill showing a service area (icon + name), e.g. "Mobile development".
export function ServiceBadge({ id, className = "" }) {
  const service = getService(id);
  if (!service) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-black/75 px-3 py-1.5 text-[0.6875rem] font-extrabold uppercase tracking-[0.12em] text-fg backdrop-blur ${className}`}
    >
      <span className="grid size-5 place-items-center rounded-full bg-accent-soft text-accent">
        <Icon name={service.icon} size={12} strokeWidth={2.25} />
      </span>
      {service.title}
    </span>
  );
}
