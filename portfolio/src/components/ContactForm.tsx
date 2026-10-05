"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";
import type { PortfolioData } from "@/data/portfolio";
import { LIMITS } from "@/lib/contacto";

type FormStrings = PortfolioData["ui"]["form"];

const initialState: ContactState = { ok: false, status: "" };

function Boton({ labels }: { labels: FormStrings }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="etiqueta border border-signal px-5 py-2.5 !text-signal transition-colors hover:bg-signal hover:!text-bg disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? labels.sending : labels.send} →
    </button>
  );
}

export default function ContactForm({
  form: f,
  email,
}: {
  form: FormStrings;
  email: string;
}) {
  const [state, formAction] = useActionState(sendContact, initialState);

  const aviso =
    state.status === "success"
      ? { texto: f.success, alerta: false }
      : state.status === "invalid"
        ? { texto: f.invalid, alerta: true }
        : state.status === "rate"
          ? { texto: f.rate, alerta: true }
          : state.status === "error"
            ? { texto: f.error, alerta: true }
            : null;

  return (
    <form action={formAction} className="max-w-xl">
      {/* Un solo recuadro con divisiones internas: el formulario se lee como
          una pieza del panel y no como tres cajas sueltas de distinto estilo. */}
      <div className="border border-rule">
        <div className="grid sm:grid-cols-2">
          <Campo
            name="name"
            label={f.name}
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            className="border-b border-rule sm:border-r"
          />
          <Campo
            name="email"
            label={f.email}
            type="email"
            autoComplete="email"
            maxLength={LIMITS.email}
            className="border-b border-rule"
          />
        </div>

        <label className="block">
          <span className="etiqueta block px-4 pb-2 pt-3">{f.message}</span>
          <textarea
            name="message"
            required
            rows={5}
            maxLength={LIMITS.message}
            className="prosa w-full resize-y bg-transparent px-4 pb-3 text-[0.875rem] text-text outline-none"
          />
        </label>
      </div>

      {/* Honeypot — oculto para humanos, señuelo para bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {aviso && (
        <p
          role={aviso.alerta ? "alert" : "status"}
          className={`mt-4 flex items-start gap-2 text-[0.8125rem] ${
            aviso.alerta ? "text-alert" : "text-signal"
          }`}
        >
          <span className="mt-[0.45rem] h-px w-3 flex-none bg-current" />
          {aviso.texto}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Boton labels={f} />
        <span className="etiqueta">{f.or}</span>
        <a
          href={`mailto:${email}`}
          className="etiqueta border-b border-signal/40 pb-0.5 !text-signal transition-colors hover:border-signal"
        >
          {f.directEmail} ↗
        </a>
      </div>
    </form>
  );
}

function Campo({
  name,
  label,
  type,
  autoComplete,
  maxLength,
  className = "",
}: {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  maxLength?: number;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="etiqueta block px-4 pb-2 pt-3">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full bg-transparent px-4 pb-3 text-[0.875rem] text-text outline-none"
      />
    </label>
  );
}
