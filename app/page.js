import { SiteShell } from "@/components/layout/SiteShell";
import { Automation } from "@/components/sections/Automation";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { profile } from "@/data/profile";
import { siteDescription, siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  description: siteDescription,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location.city,
    addressRegion: "Pampanga",
    addressCountry: "PH",
  },
  ...(profile.socials.length > 0 && { sameAs: profile.socials.map((social) => social.href) }),
};

export default function Home() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <FeaturedProjects />
      <Automation />
      <Services />
      <Skills />
      <Certificates />
      <Experience />
      <Contact />
    </SiteShell>
  );
}
