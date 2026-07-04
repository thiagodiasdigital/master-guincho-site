import type { MetadataRoute } from "next";
import { siteConfigTemplate } from "../config/site.config";
import { seoConfigTemplate } from "../config/seo.config";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteConfigTemplate.siteUrl.replace(/\/$/, "");

  return {
    rules: seoConfigTemplate.indexable
      ? {
          userAgent: "*",
          allow: "/"
        }
      : {
          userAgent: "*",
          disallow: "/"
        },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
