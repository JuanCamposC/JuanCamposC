/**
 * Límites del formulario de contacto. Van en su propio módulo porque los
 * necesitan el cliente (atributos `maxLength`) y el servidor (validación), y
 * un archivo con "use server" solo puede exportar funciones asíncronas.
 */
export const LIMITS = {
  name: 80,
  email: 160,
  message: 4000,
} as const;

/** Ventana y tope del límite de tasa por IP. */
export const RATE = {
  windowMs: 10 * 60 * 1000,
  maxPerWindow: 3,
} as const;
