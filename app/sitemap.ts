import type { MetadataRoute } from "next";
import { siteConfigTemplate } from "../config/site.config";
import { routePages } from "./rotas/routeData";
import { servicePages } from "./servicos/serviceData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = siteConfigTemplate.siteUrl.replace(/\/$/, "");

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/servicos/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicos/${service.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    {
      url: `${siteUrl}/rotas/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...routePages.map((route) => ({
      url: `${siteUrl}/rotas/${route.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.86
    }))
  ];
}
