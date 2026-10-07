import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/url";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteUrl();
  return { rules: { userAgent: "*", allow: "/" }, sitemap: origin ? new URL("/sitemap.xml", origin).href : undefined };
}
