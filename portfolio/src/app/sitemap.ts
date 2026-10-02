import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Un registro por idioma, cada uno declarando al otro como alternativa.
  // Sin esto Google solo indexaba la versión en español.
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `${SITE_URL}/${l}`]),
      ),
    },
  }));
}
