// Single source of truth for personal details. Leave a field as null to hide
// the UI that depends on it (e.g. no resume button until resumeUrl is set).

export const profile = {
  firstName: "Joshua",
  middleName: "Labindao",
  lastName: "Carlobos",
  fullName: "Joshua Labindao Carlobos",
  shortName: "Joshua Carlobos",
  initials: "JC",
  title: "Senior Full-Stack Developer",
  roles: ["Senior Full-Stack Developer", "Mobile App Developer", "AI Automation Engineer"],
  positioning:
    "I build scalable web and mobile applications, AI-powered products, and automated workflows that help businesses operate more efficiently.",
  email: "joshualabcarlos@gmail.com",
  location: {
    city: "Angeles City",
    region: "Pampanga, Philippines",
    // Approximate city-centre coordinates, shown as a design detail.
    coordinates: "15.1450°N, 120.5887°E",
  },
  resumeUrl: null,
  // Add only real profile URLs, e.g. { label: "GitHub", href: "https://github.com/..." }.
  socials: [],
  quote: ["Ship it working.", "Then make it better."],
  about: [
    "I work across the whole product: the database schema, the API, the web or mobile UI, and the automations that run when nobody is watching.",
    "Most of my recent work combines a conventional app with an AI or workflow layer, built so that the deterministic parts stay in code and the AI only does what it is good at.",
  ],
  focusTags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AI automation"],
};
