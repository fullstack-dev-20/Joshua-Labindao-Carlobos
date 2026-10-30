import { Background } from "@/components/layout/Background";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/navigation/NavBar";
import { SocialRail } from "@/components/navigation/SocialRail";
import { navItems } from "@/lib/nav";

// Shared chrome for every page. `basePath="/"` makes nav links point back to
// the home page sections when used outside the home page.
export function SiteShell({ children, basePath = "" }) {
  return (
    <>
      <Background />
      <NavBar items={navItems} basePath={basePath} />
      <SocialRail />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
