import { notFound } from "next/navigation";
import BarraSuperior from "@/components/BarraSuperior";
import ContactForm from "@/components/ContactForm";
import Diagrama from "@/components/Diagrama";
import Retrato from "@/components/Retrato";
import {
  SITE,
  portfolio,
  type Lectura,
  type Paso,
  type PortfolioData,
  type Proyecto,
} from "@/data/portfolio";

type Ui = PortfolioData["ui"];
import { isLocale } from "@/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = portfolio[locale];

  return (
    <>
      <BarraSuperior nav={t.nav} ui={t.ui} locale={locale} />

      <main id="contenido">
        {/* ── 01 Identidad ──────────────────────────────────────────── */}
        <section className="border-b border-rule">
          <Marco>
            <div className="grid items-start gap-10 py-14 sm:py-20 md:grid-cols-[1fr_auto] md:gap-16">
              <div>
                <p className="etiqueta flex items-center gap-2">
                  <span className="piloto piloto--vivo" aria-hidden />
                  {t.ui.estado}
                </p>

                <h1 className="mt-6 text-[clamp(2.25rem,7vw,4.25rem)] font-semibold leading-[0.95] tracking-tight">
                  {t.hero.nombre}
                  <br />
                  <span className="text-muted">{t.hero.apellidos}</span>
                </h1>

                <p className="mt-5 text-signal">{t.ui.role}</p>

                <p className="prosa mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                  {t.ui.tagline} {t.resumen}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="/CV_JuanCampos.pdf"
                    download
                    className="etiqueta border border-signal px-4 py-2 text-signal transition-colors hover:bg-signal hover:text-bg"
                  >
                    {t.ui.ctaCv} ↓
                  </a>
                  <a
                    href="#contacto"
                    className="etiqueta border border-rule px-4 py-2 transition-colors hover:border-signal hover:text-signal"
                  >
                    {t.ui.ctaContacto} →
                  </a>
                  <span className="etiqueta ml-1 hidden sm:inline">
                    {t.idiomas.join(" · ")}
                  </span>
                </div>
              </div>

              <div className="justify-self-start md:justify-self-end md:pt-14">
                <Retrato
                  alt={t.ui.retratoAlt}
                  sinSenal={t.ui.sinRetrato}
                  etiqueta={t.ui.retratoPie}
                />
              </div>
            </div>
          </Marco>
        </section>

        {/* ── Lecturas ──────────────────────────────────────────────── */}
        <section className="border-b border-rule bg-surface/40">
          <Marco sinPadding>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {t.lecturas.map((l, i) => (
                <Reading key={l.etiqueta} lectura={l} indice={i} />
              ))}
            </dl>
          </Marco>
        </section>

        {/* ── 02 Trabajo ────────────────────────────────────────────── */}
        <section id="trabajo" className="border-b border-rule">
          <Marco>
            <Rotulo numero="02" titulo={t.ui.secTrabajo} />
            <div className="border-t border-rule">
              {t.proyectos.map((p) => (
                <FilaProyecto key={p.nombre} p={p} ui={t.ui} />
              ))}
            </div>
          </Marco>
        </section>

        {/* ── 03 Trayectoria ────────────────────────────────────────── */}
        <section id="trayectoria" className="border-b border-rule">
          <Marco>
            <Rotulo numero="03" titulo={t.ui.secTrayectoria} />
            <div className="border-t border-rule">
              {t.trayectoria.map((p) => (
                <FilaPaso key={p.rol + p.periodo} p={p} ui={t.ui} />
              ))}
            </div>
          </Marco>
        </section>

        {/* ── 04 Instrumental ───────────────────────────────────────── */}
        <section id="instrumental" className="border-b border-rule">
          <Marco>
            <Rotulo numero="04" titulo={t.ui.secInstrumental} />
            <div className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
              {t.banco.map((g) => (
                <div key={g.grupo} className="bg-bg px-5 py-6">
                  <h3 className="etiqueta text-signal">{g.grupo}</h3>
                  <ul className="mt-3 space-y-1.5 text-[0.8125rem] text-muted">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Marco>
        </section>

        {/* ── 05 Contacto ───────────────────────────────────────────── */}
        <section id="contacto">
          <Marco>
            <Rotulo numero="05" titulo={t.ui.secContacto} />
            <div className="grid gap-12 border-t border-rule pt-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
              <dl className="space-y-0">
                {t.contacto.map((c) => (
                  <div
                    key={c.etiqueta}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-3"
                  >
                    <dt className="etiqueta">{c.etiqueta}</dt>
                    <dd className="text-right text-[0.8125rem]">
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-signal transition-opacity hover:opacity-70"
                        >
                          {c.valor}
                        </a>
                      ) : (
                        <span className="text-muted">{c.valor}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <ContactForm form={t.ui.form} email={SITE.email} />
            </div>
          </Marco>
        </section>
      </main>

      <footer className="border-t border-rule">
        <Marco>
          <div className="flex flex-wrap items-center justify-between gap-3 py-6">
            <p className="etiqueta">
              © {new Date().getFullYear()} {SITE.fullName}
            </p>
            <p className="etiqueta">{t.ui.pie}</p>
          </div>
        </Marco>
      </footer>
    </>
  );
}

/* ── Piezas del panel ──────────────────────────────────────────────── */

function Marco({
  children,
  sinPadding = false,
}: {
  children: React.ReactNode;
  sinPadding?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-6xl ${sinPadding ? "" : "px-5 sm:px-8"}`}
    >
      {children}
    </div>
  );
}

function Rotulo({ numero, titulo }: { numero: string; titulo: string }) {
  return (
    <div className="flex items-baseline gap-3 pb-4 pt-14 sm:pt-20">
      <span className="lectura text-sm opacity-60">{numero}</span>
      <h2 className="etiqueta !text-[0.8125rem] !text-text">{titulo}</h2>
    </div>
  );
}

function Reading({ lectura, indice }: { lectura: Lectura; indice: number }) {
  return (
    <div
      className={`border-rule px-5 py-7 sm:px-8 ${
        indice % 2 === 1 ? "border-l" : ""
      } ${indice >= 2 ? "border-t lg:border-t-0" : ""} ${
        indice >= 1 ? "lg:border-l" : ""
      }`}
    >
      <dd className="lectura text-[clamp(2rem,5vw,2.75rem)]">
        {lectura.valor}
      </dd>
      <dt className="etiqueta mt-2 !text-muted">{lectura.etiqueta}</dt>
      {lectura.nota && (
        <p className="mt-1 text-[0.6875rem] text-faint">{lectura.nota}</p>
      )}
    </div>
  );
}

function FilaProyecto({ p, ui }: { p: Proyecto; ui: Ui }) {
  return (
    <details className="fila group border-b border-rule">
      <summary className="flex items-start gap-4 py-5 transition-colors hover:bg-surface/50">
        <Chevron />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight">
              {p.nombre}
            </h3>
            <span className="etiqueta flex items-center gap-1.5">
              <span
                className={`piloto ${p.vivo ? "piloto--vivo" : "opacity-40"}`}
                aria-hidden
              />
              {p.estado}
            </span>
          </div>
          <p className="prosa mt-2 max-w-2xl text-[0.875rem] leading-relaxed text-muted">
            {p.linea}
          </p>
          <p className="mt-2.5 text-[0.6875rem] text-faint">
            {p.stack.join("  ·  ")}
          </p>
        </div>
      </summary>

      <div className="cuerpo grid gap-8 pb-8 pl-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div>
          <ul className="prosa space-y-2.5 text-[0.875rem] leading-relaxed text-muted">
            {p.detalle.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-[0.4rem] h-px w-3 flex-none bg-signal" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-5">
            {p.live && <Enlace href={p.live}>{ui.liveLink}</Enlace>}
            {p.repo && <Enlace href={p.repo}>{ui.repoLink}</Enlace>}
            {p.extra && <Enlace href={p.extra.url}>{p.extra.label}</Enlace>}
          </div>
        </div>

        <div className="lg:pt-1">
          <Diagrama clave={p.clave} />
        </div>
      </div>
    </details>
  );
}

function FilaPaso({ p, ui }: { p: Paso; ui: Ui }) {
  const conDetalle = p.detalle.length > 0;

  const encabezado = (
    <div className="flex items-start gap-4">
      {conDetalle ? <Chevron /> : <span className="w-3 flex-none" />}
      <div className="grid min-w-0 flex-1 gap-x-6 gap-y-1 md:grid-cols-[9.5rem_1fr]">
        <p
          className={`etiqueta ${p.tipo === "estudio" ? "!text-faint" : "!text-signal"}`}
        >
          {p.periodo}
        </p>
        <div className="min-w-0">
          <h3 className="text-[0.9375rem] font-semibold tracking-tight">
            {p.rol}
          </h3>
          <p className="etiqueta mt-0.5">{p.donde}</p>
          <p className="prosa mt-2 max-w-2xl text-[0.875rem] leading-relaxed text-muted">
            {p.linea}
          </p>
        </div>
      </div>
    </div>
  );

  if (!conDetalle) {
    return <div className="border-b border-rule py-5">{encabezado}</div>;
  }

  return (
    <details className="fila border-b border-rule">
      <summary className="py-5 transition-colors hover:bg-surface/50">
        {encabezado}
      </summary>
      <div className="cuerpo pb-7 pl-8 md:pl-[10.4rem]">
        <ul className="prosa space-y-2.5 text-[0.875rem] leading-relaxed text-muted">
          {p.detalle.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-[0.4rem] h-px w-3 flex-none bg-signal" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <span className="sr-only">{ui.verDetalle}</span>
      </div>
    </details>
  );
}

function Chevron() {
  return (
    <svg
      className="chevron mt-1.5 h-3 w-3 flex-none text-signal"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path d="M4 2.5 L8 6 L4 9.5" />
    </svg>
  );
}

function Enlace({
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
      className="etiqueta border-b border-signal/40 pb-0.5 !text-signal transition-colors hover:border-signal"
    >
      {children} ↗
    </a>
  );
}
