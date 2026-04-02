import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://atha-docs.pages.dev/sitemap.xml",
    host: "https://atha-docs.pages.dev",
  };
}