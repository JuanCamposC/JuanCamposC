"use client";

import Link from "next/link";
import { useTheme } from "@/providers/ThemeProvider";
import type { PortfolioData } from "@/data/portfolio";
import { otherLocale, type Locale } from "@/i18n";

/**
 * Única isla de cliente del sitio. Antes la barra además seguía la sección
 * visible con un IntersectionObserver; se quitó porque costaba JavaScript para
 * un adorno, y la cifra de peso del panel tiene que ser honesta.
 */
export default function BarraSuperior({
  nav,
  ui,
  locale,
}: {
  nav: PortfolioData["nav"];
  ui: PortfolioData["ui"];
  locale: Locale;
}) {
  const { theme, toggleTheme } = useTheme();
  const otro = otherLocale(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/92 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="piloto piloto--vivo" aria-hidden />
          <span>JC</span>
        </a>

        <nav className="hidden flex-1 items-center gap-6 md:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="etiqueta transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <a
            href="/CV_JuanCampos.pdf"
            download
            className="etiqueta mr-2 hidden border border-rule px-3 py-1.5 transition-colors hover:border-signal hover:text-signal sm:block"
          >
            {ui.ctaCv}
          </a>

          <Link
            href={`/${otro}`}
            hrefLang={otro}
            aria-label={ui.toggleLang}
            className="etiqueta border border-rule px-2.5 py-1.5 transition-colors hover:border-signal hover:text-signal"
          >
            {otro}
          </Link>

          <button
            onClick={toggleTheme}
            aria-label={ui.toggleTheme}
            className="border border-rule px-2.5 py-1.5 text-muted transition-colors hover:border-signal hover:text-signal"
          >
            {theme === "dark" ? <Sol /> : <Luna />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Sol() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  );
}

function Luna() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
    </svg>
  );
}
