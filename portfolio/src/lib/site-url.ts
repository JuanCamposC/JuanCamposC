/**
 * URL pública del sitio, en un solo lugar.
 *
 * Estaba duplicada en layout.tsx, sitemap.ts y robots.ts, y el respaldo de las
 * tres decía "juancamposc" en vez de "juancampos". Como NEXT_PUBLIC_SITE_URL
 * tampoco estaba configurada en Vercel, producción sirvió durante meses una
 * canónica, un sitemap y un robots apuntando a un dominio que responde 404:
 * Google seguía la canónica y se encontraba con nada. El fallo no se veía
 * desde el sitio, solo en el HTML.
 *
 * De ahí que esto viva aquí y no repetido: un dominio mal escrito es un error
 * que hay que poder cometer una sola vez.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancampos.vercel.app";
