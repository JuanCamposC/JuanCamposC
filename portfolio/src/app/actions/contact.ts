"use server";

import { Resend } from "resend";
import { SITE } from "@/data/portfolio";

export type ContactState = {
  ok: boolean;
  /** Clave de resultado; el cliente la traduce ("", "success", "error"). */
  status: "" | "success" | "error";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot anti-spam: si viene relleno, es un bot.
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) return { ok: true, status: "success" };

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return { ok: false, status: "error" };
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
