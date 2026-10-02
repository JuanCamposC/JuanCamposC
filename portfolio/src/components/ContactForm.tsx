"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";
import type { PortfolioData } from "@/data/portfolio";
import { LIMITS } from "@/lib/contacto";

type FormStrings = PortfolioData["ui"]["form"];

const initialState: ContactState = { ok: false, status: "" };

function SubmitButton({ labels }: { labels: FormStrings }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? labels.sending : labels.send}
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

  return (
    <form
      action={formAction}
      className="mx-auto mt-10 max-w-xl space-y-4 text-left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          name="name"
          label={f.name}
          type="text"
          autoComplete="name"
          maxLength={LIMITS.name}
        />
        <Field
          name="email"
          label={f.email}
          type="email"
          autoComplete="email"
          maxLength={LIMITS.email}
        />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-faint">
          {f.message}
        </span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={LIMITS.message}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
        />
      </label>

      {/* Honeypot — oculto para humanos, señuelo para bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {state.status === "success" && (
        <p role="status" className="text-sm text-accent">
          {f.success}
        </p>
      )}
      {state.status === "invalid" && (
        <p role="alert" className="text-sm text-red-400">
          {f.invalid}
        </p>
      )}
      {state.status === "rate" && (
        <p role="alert" className="text-sm text-red-400">
          {f.rate}
        </p>
      )}
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {f.error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <SubmitButton labels={f} />
        <span className="text-xs text-faint">{f.or}</span>
        <a
          href={`mailto:${email}`}
          className="text-sm font-medium text-accent transition hover:opacity-80"
        >
          {f.directEmail} →
        </a>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  autoComplete,
  maxLength,
}: {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-faint">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
      />
    </label>
  );
}
