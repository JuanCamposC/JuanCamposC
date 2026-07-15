import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import { SITE } from "@/data/portfolio";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Juan Campos — Portafolio | Ingeniero en Computación e Informática",
    template: "%s | Juan Campos",
  },
  description:
    "Portafolio de Juan Benjamín Campos Castro, Ingeniero en Computación e Informática. Desarrollo Full-Stack, IoT y Machine Learning.",
  keywords: [
    "Juan Campos",
    "portafolio",
    "desarrollador full-stack",
    "software engineer",
    "IoT",
    "Machine Learning",
    "React",
    "NestJS",
    "Next.js",
    "Chile",
  ],
  authors: [{ name: SITE.fullName, url: siteUrl }],
  creator: SITE.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Juan Campos — Portafolio",
    title: "Juan Campos — Ingeniero en Computación e Informática",
    description:
      "Desarrollo de software Full-Stack, IoT y Machine Learning. Proyectos, experiencia y contacto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Campos — Portafolio",
    description:
      "Ingeniero en Computación e Informática. Full-Stack, IoT y Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  url: siteUrl,
  jobTitle: "Ingeniero en Computación e Informática",
  worksFor: { "@type": "Organization", name: "CliVox" },
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Bernardo",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: [SITE.linkedin, SITE.github],
  knowsAbout: [
    "Full-Stack Development",
    "Internet of Things",
    "Machine Learning",
    "React",
    "NestJS",
    "FastAPI",
  ],
};

// Evita el parpadeo de tema aplicando la clase antes de la hidratación.
const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.classList.add(t);
    var l = localStorage.getItem('portfolio-lang');
    if (l === 'es' || l === 'en') document.documentElement.lang = l;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg text-text`}
      >
        <AppProviders>{children}</AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
