import { profile } from "@/data/profile";

// Set NEXT_PUBLIC_SITE_URL to the deployed URL so Open Graph and the sitemap
// use absolute links. Falls back to localhost for local development.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const siteTitle = `${profile.fullName} | ${profile.roles.join(" · ")}`;

export const siteDescription = profile.positioning;

// "https://www.hellotend.com/" -> "hellotend.com"
export function hostname(url) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function mailto({ subject, body } = {}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${profile.email}${query ? `?${query}` : ""}`;
}
