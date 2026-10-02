import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE } from "@/i18n";

/**
 * La raíz no sirve contenido: redirige al idioma por defecto. Así cada idioma
 * tiene su propia URL compartible y el atributo `lang` de <html> se decide en
 * el servidor, no por JavaScript después de hidratar.
 *
 * Se mantiene como redirección temporal (307) y no permanente a propósito: si
 * algún día la raíz negocia el idioma con `Accept-Language`, no queremos que
 * los navegadores tengan cacheado un 308 hacia /es para siempre.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/",
};
