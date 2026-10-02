/**
 * Idiomas del sitio. Vive aparte de los datos del portafolio porque lo
 * consumen el middleware y la configuración de rutas, que no deben arrastrar
 * todo el contenido.
 */

export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** El otro idioma, para el enlace de cambio en la barra de navegación. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

/**
 * Mapa de alternativas para `alternates.languages` de Next. Incluye
 * `x-default` apuntando al español, que es el idioma al que redirige la raíz.
 */
export function languageAlternates(): Record<string, string> {
  return {
    es: "/es",
    en: "/en",
    "x-default": "/es",
  };
}
