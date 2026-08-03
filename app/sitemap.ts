import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://adonixdigital.com"; return ["ar", "en"].flatMap((locale) => [{ url: `${base}/${locale}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 }, ...projects.map((p) => ({ url: `${base}/${locale}/work/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))]); }
