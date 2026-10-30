// The six service areas. Projects in data/projects.js reference these ids.
// `short` labels the project filter buttons on the home page.

export const services = [
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile development",
    short: "Mobile",
    stack: ["React Native", "Flutter", "Kotlin", "Android", "iOS"],
    summary:
      "Cross-platform apps with authentication, notifications, REST API integration and user settings.",
  },
  {
    id: "web",
    icon: "layout",
    title: "Frontend & full-stack web",
    short: "Web",
    stack: ["React", "Next.js", "JavaScript", "Node.js", "REST APIs"],
    summary: "SaaS dashboards with login, CRUD, search, filters, user roles and database-backed APIs.",
  },
  {
    id: "ai",
    icon: "bot",
    title: "AI applications & automation",
    short: "AI & automation",
    stack: ["OpenAI", "LangChain", "pgvector", "Pinecone", "n8n", "GoHighLevel"],
    summary:
      "AI-assisted workflows, CRM automation, lead follow-ups and AI-assisted customer support.",
  },
  {
    id: "backend",
    icon: "database",
    title: "Backend & database engineering",
    short: "Backend",
    stack: ["Node.js", "Python", "FastAPI", "Django", "PostgreSQL", "Supabase"],
    summary:
      "REST APIs with authentication, schema design, query optimization, background processing, logging and tests.",
  },
  {
    id: "commerce",
    icon: "bag",
    title: "E-commerce & marketplace integrations",
    short: "E-commerce",
    stack: ["Shopify", "WordPress", "REST APIs", "Webhooks"],
    summary:
      "Product catalogs, carts, checkout integrations, inventory synchronization and order management.",
  },
  {
    id: "payments",
    icon: "card",
    title: "Payments & third-party integrations",
    short: "Payments",
    stack: ["Stripe", "Webhooks", "OAuth", "REST APIs"],
    summary:
      "Checkout workflows, payment-status handling, booking flows, order records and webhook processing.",
  },
];

export function getService(id) {
  return services.find((service) => service.id === id);
}
