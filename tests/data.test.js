import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { certificates, experience } from "@/data/experience";
import { getProject, projects, projectsForCategory } from "@/data/projects";
import { profile } from "@/data/profile";
import { getService, services } from "@/data/services";
import { skillGroups } from "@/data/skills";

describe("projects", () => {
  it("have unique slugs that are URL safe", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/));
  });

  it("link to an https site and have a summary", () => {
    projects.forEach((project) => {
      expect(project.url, project.slug).toMatch(/^https:\/\//);
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
    });
  });

  it("have at least one role, each in a known service area and listed once", () => {
    projects.forEach((project) => {
      expect(project.roles.length, project.slug).toBeGreaterThan(0);
      const areas = project.roles.map((role) => role.category);
      expect(new Set(areas).size, project.slug).toBe(areas.length);
      project.roles.forEach((role) => {
        expect(getService(role.category), `${project.slug}: ${role.category}`).toBeDefined();
        expect(role.title).toBeTruthy();
        expect(role.work).toBeTruthy();
      });
    });
  });

  it("reference screenshots that exist in /public with alt text", () => {
    projects.forEach((project) => {
      expect(project.images.length, project.slug).toBeGreaterThan(0);
      project.images.forEach((image) => {
        expect(image.alt, `${project.slug} image alt`).toBeTruthy();
        expect(existsSync(join(process.cwd(), "public", image.src)), image.src).toBe(true);
      });
    });
  });

  it("include the projects the automation section features", () => {
    for (const slug of ["hubspot", "corellium", "superlist"]) {
      expect(getProject(slug)?.roles.some((role) => role.category === "ai"), slug).toBe(true);
    }
  });
});

describe("services", () => {
  it("each have at least one project", () => {
    services.forEach((service) => expect(projectsForCategory(service.id).length, service.id).toBeGreaterThan(0));
  });

  it("have unique ids and a stack", () => {
    const ids = services.map((service) => service.id);
    expect(new Set(ids).size).toBe(ids.length);
    services.forEach((service) => expect(service.stack.length).toBeGreaterThan(0));
  });
});

describe("profile and lists", () => {
  it("has the contact details the site depends on", () => {
    expect(profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
    expect(profile.fullName).toBe("Joshua Labindao Carlobos");
    profile.socials.forEach((social) => expect(social.href).toMatch(/^https:\/\//));
  });

  it("has unique skill names per group", () => {
    skillGroups.forEach((group) => {
      expect(new Set(group.skills).size).toBe(group.skills.length);
      expect(group.icon, group.title).toBeTruthy();
    });
  });

  it("keeps optional sections well formed", () => {
    experience.forEach((job) => expect(job.role && job.company && job.period).toBeTruthy());
    certificates.forEach((certificate) => expect(certificate.title).toBeTruthy());
  });
});
