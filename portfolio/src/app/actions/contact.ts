"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { SITE } from "@/data/portfolio";
import { LIMITS, RATE } from "@/lib/contacto";

export type ContactState = {
  ok: boolean;
  /**
   * Clave de resultado; el cliente la traduce.
   * - "invalid" → lo que escribió la persona no sirve (su culpa, corregible)
   * - "rate"    → demasiados envíos seguidos
   * - "error"   → falló el envío de nuestro lado
   */
  status: "" | "success" | "invalid" | "rate" | "error";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Límite de tasa en memoria, por instancia. No es un candado perfecto —en
 * serverless hay varias instancias y se reciclan—, pero sube el costo de
 * agotar la cuota de Resend (100 correos/día en el plan gratuito) de "un bucle
 * de tres líneas" a algo que hay que trabajar. Para un portafolio es la
 * relación esfuerzo/beneficio correcta; si alguna vez hace falta algo serio,
 * el reemplazo es un contador en Upstash o Vercel KV.
 */
const envios = new Map<string, number[]>();

function demasiados(ip: string): boolean {
  const ahora = Date.now();
  const recientes = (envios.get(ip) ?? []).filter(
    (t) => ahora - t < RATE.windowMs,
  );

  if (recientes.length >= RATE.maxPerWindow) {
    envios.set(ip, recientes);
    return true;
  }

  recientes.push(ahora);
  envios.set(ip, recientes);

  // Poda perezosa para que el Map no crezca sin fin.
  if (envios.size > 500) {
    for (const [clave, marcas] of envios) {
      if (marcas.every((t) => ahora - t >= RATE.windowMs)) envios.delete(clave);
    }
  }

  return false;
}

async function ipDeLaPeticion(): Promise<string> {
  const h = await headers();
  const reenviada = h.get("x-forwarded-for");
  if (reenviada) return reenviada.split(",")[0].trim();
  return h.get("x-real-ip") ?? "desconocida";
}

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot anti-spam: si viene relleno, es un bot.
  const honeypot = String(formData.get("company") ?? "").trim();

  // Al bot se le responde "éxito" para que no reintente con otra variante.
  if (honeypot) return { ok: true, status: "success" };

  const valido =
    name.length > 0 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_RE.test(email) &&
    message.length > 0 &&
    message.length <= LIMITS.message;

  if (!valido) return { ok: false, status: "invalid" };

  if (demasiados(await ipDeLaPeticion())) {
    return { ok: false, status: "rate" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sin credenciales configuradas no se puede enviar; el cliente
    // ofrece el fallback de correo directo.
    console.warn("RESEND_API_KEY no configurada; no se envió el correo.");
    return { ok: false, status: "error" };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      // Cambiar por un dominio verificado en Resend cuando esté disponible.
      from: process.env.CONTACT_FROM ?? "Portafolio <onboarding@resend.dev>",
      to: SITE.email,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portafolio`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { ok: false, status: "error" };
    }
    return { ok: true, status: "success" };
  } catch (err) {
    console.error("sendContact error:", err);
    return { ok: false, status: "error" };
  }
}
