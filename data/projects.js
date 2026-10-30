// Project showcase data. Every card and case-study page is generated from
// this list, so adding a project means adding an object here.
//
// categories / roles[].category use the ids in data/services.js.
// roles: Joshua's role on the project, one entry per service area.
// images: paths under /public, first one is the card thumbnail
// (homepage screenshots captured October 2026).

const shot = (file, name) => ({ src: `/images/projects/sites/${file}.webp`, alt: `${name} website homepage` });

export const projects = [
  {
    slug: "tend",
    title: "Tend",
    url: "https://www.hellotend.com/",
    summary: "Mobile-friendly booking and customer experience.",
    roles: [
      {
        category: "mobile",
        title: "Mobile Application Developer",
        work: "Build cross-platform booking interfaces, authentication, appointment management, notifications, and REST API integrations.",
      },
    ],
    images: [shot("tend", "Tend")],
  },
  {
    slug: "sunsama",
    title: "Sunsama",
    url: "https://www.sunsama.com/",
    summary: "Productivity workflows, daily planning, and task management.",
    roles: [
      {
        category: "mobile",
        title: "Mobile and Full-Stack Developer",
        work: "Implement task management, scheduling, progress tracking, user settings, and backend synchronization.",
      },
    ],
    images: [shot("sunsama", "Sunsama")],
  },
  {
    slug: "superlist",
    title: "Superlist",
    url: "https://www.superlist.com/",
    summary: "Modern productivity interfaces, task organization, and collaboration.",
    roles: [
      {
        category: "mobile",
        title: "Mobile Application Developer",
        work: "Develop responsive task interfaces, user authentication, collaborative features, and synchronized application data.",
      },
      {
        category: "ai",
        title: "AI Automation Engineer",
        work: "Implement intelligent task workflows, automated updates, API integrations, and AI-assisted productivity features.",
      },
      {
        category: "backend",
        title: "Backend Developer",
        work: "Implement data synchronization, task-management APIs, database operations, and background processing.",
      },
    ],
    images: [shot("superlist", "Superlist")],
  },
  {
    slug: "corellium",
    title: "Corellium",
    url: "https://www.corellium.com/",
    summary: "B2B software messaging, technical product pages, dashboards, and complex software workflows.",
    roles: [
      {
        category: "web",
        title: "Frontend Developer",
        work: "Build reusable React components, responsive product pages, interactive dashboards, and API-connected interfaces.",
      },
      {
        category: "ai",
        title: "AI Application Developer",
        work: "Build AI-assisted workflows, connect backend services, and develop interfaces for complex technical operations.",
      },
    ],
    images: [shot("corellium", "Corellium")],
  },
  {
    slug: "ujet",
    title: "UJET",
    url: "https://www.ujet.cx/",
    summary: "Enterprise SaaS for customer experience: product features, platform functionality, and CX workflows.",
    roles: [
      {
        category: "web",
        title: "Full-Stack Developer",
        work: "Develop frontend features, backend API integrations, user management, and data-driven dashboards.",
      },
      {
        category: "backend",
        title: "Backend Developer",
        work: "Develop API endpoints, data processing services, authentication, logging, and integrations between application services.",
      },
    ],
    images: [shot("ujet", "UJET")],
  },
  {
    slug: "canopas",
    title: "Canopas",
    url: "https://canopas.com/",
    summary: "Software engineering, application development, and technical product experiences.",
    roles: [
      {
        category: "web",
        title: "Full-Stack Developer",
        work: "Implement web interfaces, REST APIs, database-backed features, authentication, and application integrations.",
      },
      {
        category: "backend",
        title: "Backend Developer",
        work: "Build REST APIs, design database schemas, implement authentication, optimize SQL queries, and write automated tests.",
      },
    ],
    images: [shot("canopas", "Canopas")],
  },
  {
    slug: "hubspot",
    title: "HubSpot",
    url: "https://www.hubspot.com/",
    summary: "CRM, lead management, marketing automation, and customer communication.",
    roles: [
      {
        category: "ai",
        title: "AI Automation Engineer",
        work: "Integrate CRM workflows, automate lead follow-ups, process webhook events, and develop AI-assisted customer support workflows.",
      },
    ],
    images: [shot("hubspot", "HubSpot")],
  },
  {
    slug: "gymshark",
    title: "Gymshark",
    url: "https://www.gymshark.com/",
    summary: "E-commerce purchase journey, product discovery, apparel catalog, and checkout experience.",
    roles: [
      {
        category: "commerce",
        title: "E-Commerce Developer",
        work: "Implement product listings, shopping cart functionality, checkout integrations, inventory synchronization, and order management.",
      },
      {
        category: "payments",
        title: "Payment Integration Developer",
        work: "Implement checkout workflows, payment-status handling, order records, and webhook processing.",
      },
    ],
    images: [shot("gymshark", "Gymshark")],
  },
  {
    slug: "peets-coffee",
    title: "Peet's Coffee",
    url: "https://www.peets.com/",
    summary: "Product pages, online shopping, and customer purchasing workflows.",
    roles: [
      {
        category: "commerce",
        title: "Full-Stack E-Commerce Developer",
        work: "Develop product catalog features, customer account workflows, order processing, and third-party integrations.",
      },
    ],
    images: [shot("peets", "Peet's Coffee")],
  },
  {
    slug: "que-coffee",
    title: "Que Coffee UAE",
    url: "https://quecoffee.ae/",
    summary: "Specialty coffee equipment catalog and online retail experience.",
    roles: [
      {
        category: "commerce",
        title: "E-Commerce Developer",
        work: "Build product pages, catalog filtering, shopping cart features, payment integrations, and inventory-related workflows.",
      },
    ],
    images: [{ src: "/images/projects/sites/que-coffee.webp", alt: "Que Coffee UAE website, shop-by-category section" }],
  },
  {
    slug: "pack-up-go",
    title: "Pack Up + Go",
    url: "https://www.packupgo.com/",
    summary: "Travel planning, trip booking, and customer-facing service workflows.",
    roles: [
      {
        category: "payments",
        title: "Full-Stack Developer",
        work: "Develop booking interfaces, integrate external APIs, manage booking data, and automate customer notifications.",
      },
    ],
    images: [shot("pack-up-go", "Pack Up + Go")],
  },
  {
    slug: "bellhop",
    title: "Bellhop",
    url: "https://www.getbellhops.com/",
    summary: "Moving-service selection, booking flows, and service management.",
    roles: [
      {
        category: "payments",
        title: "Full-Stack Developer",
        work: "Build service selection interfaces, booking workflows, payment integrations, and backend order management.",
      },
    ],
    images: [shot("bellhop", "Bellhop")],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function projectsForCategory(id) {
  return projects.filter((project) => project.roles.some((role) => role.category === id));
}
