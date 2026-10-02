import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
import { LOCALES, isLocale, DEFAULT_LOCALE } from "@/i18n";

export const alt = "Juan Campos — Portafolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.25), #030712)",
          color: "#f3f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#22d3ee",
          }}
        >
          {t.ui.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 92,
            fontWeight: 800,
          }}
        >
          {t.hero.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            color: "#22d3ee",
            lineHeight: 1,
          }}
        >
          {t.hero.lastName}
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#9ca3af" }}>
          Full-Stack · IoT · Machine Learning
        </div>
      </div>
    ),
    { ...size },
  );
}
