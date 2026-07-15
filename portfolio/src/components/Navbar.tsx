"use client";

import { useEffect, useState } from "react";
import { useLanguage, useTheme } from "@/providers/AppProviders";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = t.nav;

  // Resaltar la sección visible.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  // Cerrar el menú móvil al hacer scroll.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-text">
          JC<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`text-sm transition-colors hover:text-accent ${
                  active === l.href ? "text-accent" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <IconButton
            onClick={toggleTheme}
            label={t.ui.toggleTheme}
            className="hidden sm:flex"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>

          <button
            onClick={toggleLocale}
            aria-label={t.ui.toggleLang}
            className="hidden h-9 min-w-9 items-center justify-center rounded-full border border-border px-2 text-xs font-semibold text-muted transition hover:border-accent hover:text-accent sm:flex"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-muted transition-colors hover:text-accent md:hidden"
            aria-label={t.ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-border bg-bg px-6 pb-4 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href} className="py-2">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.href ? "true" : undefined}
                className={`text-sm transition-colors hover:text-accent ${
                  active === l.href ? "text-accent" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-3 border-t border-border pt-3">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm text-muted transition hover:text-accent"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              {t.ui.toggleTheme}
            </button>
            <button
              onClick={toggleLocale}
              className="ml-auto rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted transition hover:border-accent hover:text-accent"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

function IconButton({
  onClick,
  label,
  className = "",
  children,
}: {
  onClick: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      className="mx-auto h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="mx-auto h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}
