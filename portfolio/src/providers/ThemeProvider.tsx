"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light";

interface ThemeValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

const THEME_KEY = "portfolio-theme";

/**
 * El idioma ya no vive aquí: lo decide la ruta (/es, /en). Este provider solo
 * guarda el tema, que necesita localStorage y por tanto cliente.
 *
 * Importante: el script inline de <head> ya eligió y aplicó la clase antes de
 * la hidratación (guardada, o `prefers-color-scheme` si no hay nada guardado).
 * El estado arranca en "dark" para que el HTML del cliente coincida con el del
 * servidor, y solo después del montaje se lee la verdad desde el DOM. El efecto
 * que escribe la clase está protegido por `mounted` justamente para no pisar lo
 * que puso el script con el valor inicial, que era el origen del parpadeo.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- lectura de store externo (clase del DOM puesta por el script inline) al montar */
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Modo privado o almacenamiento bloqueado: el tema sigue funcionando en
      // esta visita, solo no se recuerda.
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo<ThemeValue>(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}
