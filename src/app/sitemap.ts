import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/url";
import { locales } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin) return [];
  return locales.map((lang) => ({ url: new URL(`/${lang}`, origin).href, changeFrequency: "monthly", priority: 1, alternates: { languages: Object.fromEntries(locales.map((code) => [code, new URL(`/${code}`, origin).href])) } }));
}
