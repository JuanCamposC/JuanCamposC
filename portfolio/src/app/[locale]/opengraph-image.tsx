import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
import { LOCALES, isLocale, DEFAULT_LOCALE } from "@/i18n";

export const alt = "Juan Campos — Portafolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const NEGRO = "#0a0a0b";
const AMBAR = "#ffb000";
const HUESO = "#e8e4dc";
const TENUE = "#6b6560";
const REGLA = "#2a2724";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = portfolio[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: NEGRO,
          color: HUESO,
          fontFamily: "monospace",
          padding: 64,
          justifyContent: "space-between",
        }}
      >
        {/* Cabecera: piloto + rol, como la barra del sitio */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 11, height: 11, background: AMBAR }} />
          <div
            style={{
              fontSize: 21,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: TENUE,
            }}
          >
            {t.ui.role}
          </div>
        </div>

        {/* Nombre */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 600, lineHeight: 1 }}>
            {t.hero.nombre}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.1,
              color: TENUE,
            }}
          >
            {t.hero.apellidos}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 27, color: AMBAR }}>
            {t.ui.tagline}
          </div>
        </div>

        {/* Fila de lecturas, igual que en la página */}
        <div
          style={{
            display: "flex",
            borderTop: `1px solid ${REGLA}`,
            paddingTop: 26,
          }}
        >
          {t.lecturas.map((l, i) => (
            <div
              key={l.etiqueta}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                paddingLeft: i === 0 ? 0 : 26,
                borderLeft: i === 0 ? "none" : `1px solid ${REGLA}`,
              }}
            >
              <div style={{ display: "flex", fontSize: 42, fontWeight: 600, color: AMBAR }}>
                {l.valor}
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                  fontSize: 16,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: TENUE,
                }}
              >
                {l.etiqueta}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
