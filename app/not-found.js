import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

export default function NotFound() {
  return (
    <SiteShell basePath="/">
      <section className="mx-auto grid min-h-[70vh] max-w-xl place-content-center px-4 text-center">
        <p className="eyebrow text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-black">Page not found</h1>
        <p className="mt-4 text-muted">That page doesn&apos;t exist. The projects are still where you left them.</p>
        <Link href="/" className="btn btn-primary mx-auto mt-8">
          Back to home
        </Link>
      </section>
    </SiteShell>
  );
}
