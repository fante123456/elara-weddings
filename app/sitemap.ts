export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/packages", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/credits", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
