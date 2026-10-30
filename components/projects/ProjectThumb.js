import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { getService } from "@/data/services";

// Project image, or a neutral placeholder (service icon on a glow) when no
// screenshot has been added yet.
export function ProjectThumb({ project, sizes, preload = false, className = "" }) {
  const image = project.images[0];

  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover object-top ${className}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 grid place-items-center bg-[radial-gradient(60%_50%_at_50%_40%,rgb(16_185_129/0.28),transparent_70%),linear-gradient(160deg,#0f1f19,#060707)] ${className}`}
    >
      <span className="relative grid size-24 place-items-center rounded-3xl border border-accent/30 bg-black/50 text-accent shadow-[0_0_60px_-10px_rgb(16_185_129/0.6)]">
        <Icon name={getService(project.roles[0].category)?.icon} size={40} strokeWidth={1.5} />
      </span>
    </div>
  );
}
