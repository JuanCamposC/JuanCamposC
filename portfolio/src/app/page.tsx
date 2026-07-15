"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/providers/AppProviders";
import { SITE } from "@/data/portfolio";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--glow),transparent)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Izquierda */}
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              {t.ui.role}
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.name}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.hero.lastName}
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">{t.ui.heroLead}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                {t.ui.ctaProjects}
              </a>
              <a
                href="/CV_JuanCampos.pdf"
                download
                className="rounded-full border border-accent px-8 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-bg"
              >
                {t.ui.ctaCv}
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
              >
                {t.ui.ctaContact}
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-5">
              <SocialLink href={SITE.linkedin} label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href={SITE.github} label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </SocialLink>
              <SocialLink href={`mailto:${SITE.email}`} label="Email">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </SocialLink>
            </div>
          </Reveal>

          {/* Derecha — Sobre mí */}
          <Reveal delay={120}>
            <div
              id="sobre-mi"
              className="rounded-2xl border border-border bg-surface-2/50 p-8"
            >
              <h2 className="text-2xl font-bold text-text">{t.ui.aboutTitle}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {t.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {t.ui.interestsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {t.ui.skillsSoftTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.softSkills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {t.ui.languagesTitle}
                </h3>
                <div className="flex gap-3 text-xs text-muted">
                  {t.languages.map((l, i) => (
                    <span key={l} className="flex items-center gap-3">
                      {i > 0 && <span className="text-faint">|</span>}
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="bg-surface-2/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>{t.ui.sectionProjects}</SectionTitle>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {t.projects.map((p, idx) => (
              <Reveal key={p.title} delay={(idx % 3) * 80} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-surface-2/40 p-6 transition hover:border-accent/40">
                  <div className="mb-3 text-3xl">{p.emoji}</div>
                  <h3 className="text-xl font-bold text-text transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface px-2.5 py-0.5 text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-1 text-sm text-muted">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-accent">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                    {p.repo && (
                      <ProjectLink href={p.repo}>{t.ui.repoLink} →</ProjectLink>
                    )}
                    {p.live && (
                      <ProjectLink href={p.live}>{t.ui.liveLink} →</ProjectLink>
                    )}
                    {p.extra && (
                      <ProjectLink href={p.extra.url}>
                        {p.extra.label} →
                      </ProjectLink>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle>{t.ui.sectionEducation}</SectionTitle>
          <div className="mt-12 space-y-8">
            {t.education.map((e) => (
              <Reveal key={e.institution}>
                <div className="relative border-l-2 border-accent/40 pl-6">
                  <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                  <p className="text-sm text-accent">{e.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-text">
                    {e.institution}
                  </h3>
                  <p className="text-sm text-muted">{e.degree}</p>
                  <p className="text-xs text-faint">{e.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="bg-surface-2/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle>{t.ui.sectionExperience}</SectionTitle>
          <div className="mt-12 space-y-10">
            {t.experience.map((exp) => (
              <Reveal key={exp.role + exp.period}>
                <div className="relative border-l-2 border-accent/40 pl-6">
                  <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent" />
                  <p className="text-sm text-accent">{exp.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-text">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted">{exp.company}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {exp.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 text-accent">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>{t.ui.sectionTech}</SectionTitle>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {t.skills.map((group) => (
              <Reveal key={group.category}>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition hover:border-accent/50 hover:text-accent"
                      >
                        <TechIcon icon={s.icon} className="h-5 w-5" />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-surface-2/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionTitle>{t.ui.sectionContact}</SectionTitle>
          <p className="mt-6 text-muted">{t.ui.contactLead}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.contact.map((c) => (
              <ContactCard key={c.label} {...c} />
            ))}
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-faint">
        <p>
          © {new Date().getFullYear()} {SITE.fullName} — {t.ui.footerMade}
        </p>
        <p className="mt-2 italic text-faint">&ldquo;{t.ui.footerQuote}&rdquo;</p>
      </footer>
    </>
  );
}

/* ── Auxiliares ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Reveal as="h2" className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {children}
      </span>
    </Reveal>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted transition hover:text-accent"
    >
      {children}
    </a>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-surface-2/50 px-6 py-6 transition hover:border-accent/40">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-faint">
        {label}
      </span>
      <span className="text-sm text-muted">{value}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
