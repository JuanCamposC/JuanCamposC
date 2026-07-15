"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { useLanguage } from "@/providers/AppProviders";
import { SITE } from "@/data/portfolio";

const initialState: ContactState = { ok: false, status: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? t.ui.form.sending : t.ui.form.send}
    </button>
  );
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, formAction] = useActionState(sendContact, initialState);
  const f = t.ui.form;

  return (
    <form
      action={formAction}
      className="mx-auto mt-10 max-w-xl space-y-4 text-left"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={f.name} type="text" autoComplete="name" />
        <Field
          name="email"
          label={f.email}
          type="email"
          autoComplete="email"
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
      {state.status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {f.error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <SubmitButton />
        <span className="text-xs text-faint">{f.or}</span>
        <a
          href={`mailto:${SITE.email}`}
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
}: {
  name: string;
  label: string;
  type: string;
  autoComplete?: string;
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
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
      />
    </label>
  );
}
