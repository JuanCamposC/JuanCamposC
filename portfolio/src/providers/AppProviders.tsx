"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { portfolio, type Locale, type PortfolioData } from "@/data/portfolio";

/* ── Idioma ─────────────────────────────────────────────────────── */
interface LanguageValue {
  locale: Locale;
  t: PortfolioData;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

/* ── Tema ───────────────────────────────────────────────────────── */
type Theme = "dark" | "light";

interface ThemeValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

const LANG_KEY = "portfolio-lang";
const THEME_KEY = "portfolio-theme";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [theme, setTheme] = useState<Theme>("dark");

  // Hidratar preferencias guardadas tras el montaje. Se hace en un efecto (no
  // en el inicializador de useState) para no romper la hidratación: el HTML del
  // servidor siempre se renderiza con los valores por defecto y aquí se ajusta
  // en el cliente. El parpadeo de tema ya lo evita el script inline de <head>.
  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_KEY);
    const storedTheme = localStorage.getItem(THEME_KEY);
    /* eslint-disable react-hooks/set-state-in-effect -- lectura de store externo (localStorage) al montar */
    if (storedLang === "es" || storedLang === "en") setLocaleState(storedLang);
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Reflejar idioma en el atributo <html lang>.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Reflejar tema en la clase de <html> y persistir.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(LANG_KEY, l);
  }, []);

  const toggleLocale = useCallback(
    () => setLocale(locale === "es" ? "en" : "es"),
    [locale, setLocale],
  );

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const languageValue = useMemo<LanguageValue>(
    () => ({ locale, t: portfolio[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  const themeValue = useMemo<ThemeValue>(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <ThemeContext.Provider value={themeValue}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de AppProviders");
  return ctx;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de AppProviders");
  return ctx;
}
