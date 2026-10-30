import { certificates, experience } from "@/data/experience";

// Sections in page order (the logo links to #home). Optional sections only
// appear once they have content. "contact" renders as the nav's call to action.
export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "automation", label: "Automation" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  certificates.length > 0 && { id: "certificates", label: "Certificates" },
  experience.length > 0 && { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
].filter(Boolean);
