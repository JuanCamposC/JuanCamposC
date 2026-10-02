import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SITE, portfolio } from "@/data/portfolio";
import { LOCALES, isLocale, languageAlternates, type Locale } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juancamposc.vercel.app";

/** Solo existen dos idiomas; cualquier otro segmento es 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const META: Record<
  Locale,
  { title: string; description: string; ogTitle: string; ogDescription: string }
> = {
  es: {
    title:
      "Juan Campos — Portafolio | Ingeniero en Computación e Informática",
    description:
      "Portafolio de Juan Benjamín Campos Castro, Ingeniero en Computación e Informática. Desarrollo Full-Stack, IoT y Machine Learning.",
    ogTitle: "Juan Campos — Ingeniero en Computación e Informática",
    ogDescription:
      "Desarrollo de software Full-Stack, IoT y Machine Learning. Proyectos, experiencia y contacto.",
  },
  en: {
    title: "Juan Campos — Portfolio | Computer & Information Engineer",
    description:
      "Portfolio of Juan Benjamín Campos Castro, Computer & Information Engineer. Full-Stack development, IoT and Machine Learning.",
    ogTitle: "Juan Campos — Computer & Information Engineer",
    ogDescription:
      "Full-Stack software development, IoT and Machine Learning. Projects, experience and contact.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const m = META[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: { default: m.title, template: "%s | Juan Campos" },
    description: m.description,
    keywords:
      locale === "es"
        ? [
            "Juan Campos",
            "portafolio",
            "desarrollador full-stack",
            "Laravel",
            "IoT",
            "Machine Learning",
            "React",
            "Next.js",
            "Chile",
          ]
        : [
            "Juan Campos",
            "portfolio",
            "full-stack developer",
            "Laravel",
            "IoT",
            "Machine Learning",
            "React",
            "Next.js",
            "Chile",
          ],
    authors: [{ name: SITE.fullName, url: siteUrl }],
    creator: SITE.fullName,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CL",
      url: `${siteUrl}/${locale}`,
      siteName: "Juan Campos — Portafolio",
      title: m.ogTitle,
      description: m.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: m.ogTitle,
      description: m.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

function jsonLdFor(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.fullName,
    url: `${siteUrl}/${locale}`,
    jobTitle: portfolio[locale].ui.role,
    worksFor: { "@type": "Organization", name: SITE.company },
    email: `mailto:${SITE.email}`,
    // El teléfono se deja fuera a propósito: en el JSON-LD es invisible para
    // una persona y trivial de cosechar para spam. Sigue visible en la tarjeta
    // de contacto y en el CV.
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Bernardo",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    sameAs: [SITE.linkedin, SITE.github],
    knowsAbout: [
      "Full-Stack Development",
      "Laravel",
      "PHP",
      "Internet of Things",
      "Machine Learning",
      "React",
      "NestJS",
      "Cloudflare Workers",
    ],
  };
}

// Evita el parpadeo de tema aplicando la clase antes de la hidratación.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.classList.add(t);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

// Sin JavaScript el IntersectionObserver nunca añade `is-visible`, y la página
// entera se quedaría en opacity:0. Esto la deja visible de inmediato.
const noScriptStyles = `.reveal{opacity:1 !important;transform:none !important}`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFor(locale)),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-text`}
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          {portfolio[locale].ui.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
