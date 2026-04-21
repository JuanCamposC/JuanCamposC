import Navbar from "@/components/Navbar";

/* ── Datos ── */
const skills: Record<string, { name: string; icon: string }[]> = {
  "Lenguajes de Programación": [
    { name: "Python", icon: "python" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "PHP", icon: "php" },
  ],
  "Frameworks y Librerías": [
    { name: "Angular", icon: "angularjs" },
    { name: "React", icon: "react" },
    { name: "NestJS", icon: "nestjs" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Astro", icon: "astro" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  "Bases de Datos y DevOps": [
    { name: "MongoDB", icon: "mongodb" },
    { name: "Docker", icon: "docker" },
    { name: "Vercel", icon: "vercel" },
  ],
  "IoT y Machine Learning": [
    { name: "OpenCV", icon: "opencv" },
    { name: "MediaPipe", icon: "mediapipe" },
    { name: "Arduino", icon: "arduino" },
    { name: "ESP8266", icon: "esphome" },
  ],
  Otros: [{ name: "WordPress", icon: "wordpress" }],
};

const education = [
  {
    institution: "Universidad Andrés Bello, Sede Viña del Mar",
    degree: "Ingeniería en Computación e Informática",
    location: "Viña del Mar, Chile",
    period: "2020 – 2026",
  },
  {
    institution: "Universidad Bernardo O'Higgins",
    degree: "Ingeniería Informática (No finalizada por cambio de domicilio)",
    location: "Santiago, Chile",
    period: "2018 – 2019",
  },
];

const experience = [
  {
    company: "Universidad Andrés Bello, Facultad de Ingeniería",
    role: "Desarrollador de Software Junior",
    period: "Enero 2026 – Febrero 2026",
    items: [
      "Participé en el desarrollo e implementación de nuevas funcionalidades para la plataforma Edurun en su fase piloto institucional.",
      "Desarrollé el frontend construyendo vistas y flujos funcionales con buenas prácticas en estructura de componentes, consumo de APIs y manejo de estado.",
      "Implementé buenas prácticas de seguridad alineadas con OWASP Top 10, fortaleciendo validación de datos y control de exposición de información sensible.",
      "Trabajé bajo supervisión del PM y Tech Lead, contribuyendo al ciclo de desarrollo con foco en calidad y mejora continua.",
    ],
  },
  {
    company: "Universidad Andrés Bello, Facultad de Ingeniería",
    role: "Practicante Universitario",
    period: "Febrero 2025 – Mayo 2025",
    items: [
      "Desarrollé proyectos tecnológicos aplicados para fortalecer la infraestructura digital de distintas unidades institucionales.",
      "Utilicé Python, HTML, CSS, PHP e integré WordPress para desarrollo y mantenimiento de sitios web institucionales.",
      "Brindé apoyo en logística y ejecución de talleres educativos de robótica dirigidos a niños.",
      "Combiné conocimientos técnicos con iniciativas de vinculación con el medio, fomentando la educación tecnológica temprana.",
    ],
  },
  {
    company: "Agencia de Aduanas Agensa / Juan Sanhueza y Alex Avsolomovich Ltda.",
    role: "Empleado de Soporte (Reemplazo)",
    period: "Diciembre 2025",
    items: [
      "Brindé soporte técnico y administrativo durante período de reemplazo en agencia de aduanas.",
    ],
  },
];

const projects = [
  {
    emoji: "🌊",
    title: "CIMARQ Sentinel – Monitoreo IoT para Calidad del Agua",
    description:
      "Proyecto de Título — Plataforma tecnológica para monitoreo de parámetros críticos del agua en piscinas de investigación del CIMARQ (Quintay).",
    stack: ["NestJS", "React", "FastAPI", "MongoDB", "Docker"],
    highlights: [
      "Sistema IoT para recolección y análisis de datos ambientales con visualización en tiempo real",
      "API de Machine Learning con FastAPI para análisis predictivo con modelo Perceptrón",
      "Contenedorización con Docker y documentación Swagger",
    ],
    repo: "https://github.com/JuanCamposC/monitoreo-iot-agua",
    live: "https://cimarqsentinel.exposmart.cl",
    extra: { label: "ML API", url: "https://github.com/JuanCamposC/ml-monitoreo" },
  },
  {
    emoji: "🤖",
    title: "Experiencias IoT e IA",
    description:
      "Recopilación de proyectos prácticos con IoT e Inteligencia Artificial.",
    stack: ["OpenCV", "MediaPipe", "ESP8266", "DHT11", "Telegram Bot"],
    highlights: [
      "Reconocimiento Facial con OpenCV + algoritmo LBPH",
      "Reconocimiento de Gestos con MediaPipe",
      "Sensores IoT con ESP8266 e integración Telegram Bot",
    ],
    repo: "https://github.com/JuanCamposC/experiencias-iot-ai",
  },
  {
    emoji: "🤖",
    title: "BanuBot – Plataforma Educativa",
    description:
      "Sitio web del proyecto educativo BanuBot, orientado a fortalecer la comprensión lectora mediante robótica educativa.",
    stack: ["WordPress"],
    highlights: [
      "Gestión de estructura de contenidos y administración del portal",
      "Colaboración con la UNAB y programas de vinculación con el medio",
    ],
    live: "https://banubot.cl",
  },
  {
    emoji: "🔬",
    title: "LAI-UNAB – Sitio Institucional",
    description:
      "Nuevo sitio web institucional del Laboratorio de Análisis Isotópicos de la Universidad Andrés Bello.",
    stack: ["WordPress"],
    highlights: [
      "Mejora en la presentación de servicios e investigación científica",
      "Migración desde plataforma anterior a una solución más moderna",
    ],
    live: "https://www.lab-isotopos.cl",
  },
  {
    emoji: "⛪",
    title: "La Casa de Dios – Sitio Web Institucional",
    description:
      "Desarrollo y administración del sitio web institucional de la iglesia La Casa de Dios.",
    stack: ["WordPress"],
    highlights: [
      "Gestión de contenidos, publicaciones y comunicación con la comunidad",
      "Configuración de estructura del sitio y optimización SEO",
    ],
    live: "https://lacasadedios.cl",
  },
];

const interests = [
  "Desarrollo Web Full-Stack",
  "Internet de las Cosas (IoT)",
  "Machine Learning e IA"
];

const softSkills = [
  "Trabajo en equipo",
  "Proactividad",
  "Responsabilidad",
  "Aprendizaje continuo",
  "Disponibilidad inmediata",
];

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero — 2 columnas: presentación izq + sobre mí der */}
      <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,200,255,.15),transparent)]" />

        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Izquierda — Nombre y CTA */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
              Ingeniero en Computación e Informática
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Juan Benjamín
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Campos Castro
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-400">
              Apasionado por el desarrollo de software full-stack y desarrollo Web. Con experiencia en la construcción de soluciones
              tecnológicas completas desde el frontend hasta la infraestructura.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
              >
                Ver proyectos
              </a>
              <a
                href="/CV_JuanCampos.pdf"
                download
                className="rounded-full border border-cyan-500 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-gray-950"
              >
                Descargar CV
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-gray-700 px-8 py-3 text-sm font-semibold text-gray-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                Contacto
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-5">
              <SocialLink
                href="https://www.linkedin.com/in/juan-benjam%C3%ADn-ignacio-campos-castro/"
                label="LinkedIn"
                icon={
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://github.com/JuanCamposC"
                label="GitHub"
                icon={
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                }
              />
              <SocialLink
                href="mailto:jubencampos@gmail.com"
                label="Email"
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Derecha — Sobre mí */}
          <div id="sobre-mi" className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
            <h2 className="text-2xl font-bold text-white">Sobre mí</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-400">
              <p>
                Ingeniero en Computación e Informática de la{" "}
                <strong className="text-gray-200">Universidad Andrés Bello</strong>,
                apasionado por el desarrollo de software full-stack, IoT y Machine
                Learning. Con experiencia construyendo soluciones tecnológicas
                completas desde el frontend hasta la infraestructura.
              </p>
              <p>
                Actualmente me especializo en{" "}
                <strong className="text-gray-200">
                desarrollo web moderno
                </strong>
                . Ubicado en San Bernardo, Región Metropolitana, Chile.
              </p>
            </div>

            {/* Áreas de interés */}
            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-lg border border-gray-700 bg-gray-800/60 px-3 py-1.5 text-xs text-gray-300"
                >
                  {i}
                </span>
              ))}
            </div>

            {/* Competencias */}
            <div className="mt-5">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Competencias
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-gray-700 bg-gray-800/60 px-3 py-1 text-xs text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="mt-5">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Idiomas
              </h3>
              <div className="flex gap-3 text-xs text-gray-300">
                <span>Español (Nativo)</span>
                <span className="text-gray-600">|</span>
                <span>Inglés (Básico)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-24 bg-gray-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Proyectos Destacados</SectionTitle>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 transition hover:border-cyan-500/40"
              >
                <div className="mb-3 text-3xl">{p.emoji}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{p.description}</p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-800 px-2.5 py-0.5 text-xs text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-1 text-sm text-gray-400">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-cyan-500">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition hover:text-cyan-400"
                    >
                      Repositorio →
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition hover:text-cyan-400"
                    >
                      Ver en vivo →
                    </a>
                  )}
                  {p.extra && (
                    <a
                      href={p.extra.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition hover:text-cyan-400"
                    >
                      {p.extra.label} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Educación */}
      <section id="educacion" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle>Educación</SectionTitle>
          <div className="mt-12 space-y-8">
            {education.map((e) => (
              <div
                key={e.institution}
                className="relative border-l-2 border-cyan-500/40 pl-6"
              >
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-500" />
                <p className="text-sm text-cyan-400">{e.period}</p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {e.institution}
                </h3>
                <p className="text-sm text-gray-400">{e.degree}</p>
                <p className="text-xs text-gray-500">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-24 bg-gray-900/30">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle>Experiencia</SectionTitle>
          <div className="mt-12 space-y-10">
            {experience.map((exp) => (
              <div
                key={exp.role + exp.period}
                className="relative border-l-2 border-cyan-500/40 pl-6"
              >
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-500" />
                <p className="text-sm text-cyan-400">{exp.period}</p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  {exp.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-cyan-500">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle>Tecnologías y Herramientas</SectionTitle>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((s) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-500/50 hover:text-cyan-300"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.icon}/${s.icon}-original.svg`}
                        alt={s.name}
                        width={20}
                        height={20}
                        className="h-5 w-5"
                        loading="lazy"
                      />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-gray-900/30">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionTitle>Contacto</SectionTitle>
          <p className="mt-6 text-gray-400">
            ¿Tienes un proyecto en mente o una oportunidad laboral? ¡Hablemos!
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ContactCard
              icon="📧"
              label="Email"
              value="jubencampos@gmail.com"
              href="mailto:jubencampos@gmail.com"
            />
            <ContactCard
              icon="💼"
              label="LinkedIn"
              value="Juan Benjamín Campos"
              href="https://www.linkedin.com/in/juan-benjam%C3%ADn-ignacio-campos-castro/"
            />
            <ContactCard icon="📍" label="Ubicación" value="San Bernardo, Región Metropolitana, Chile" />
            <ContactCard icon="📱" label="Teléfono" value="+56 9 4486 2051" href="tel:+56944862051" />
          </div>

          <a
            href="mailto:jubencampos@gmail.com"
            className="mt-10 inline-block rounded-full bg-cyan-500 px-10 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400"
          >
            Enviar correo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Juan Benjamín Campos Castro — Hecho con
          Next.js y Tailwind CSS
        </p>
        <p className="mt-2 italic text-gray-600">
          &ldquo;Aprendizaje continuo, trabajo en equipo y disponibilidad
          inmediata&rdquo;
        </p>
      </footer>
    </>
  );
}

/* ── Componentes auxiliares ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition hover:border-cyan-500 hover:text-cyan-400"
    >
      {icon}
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
    <div className="flex flex-col items-center gap-2 rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-6 transition hover:border-cyan-500/40">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </span>
      <span className="text-sm text-gray-300">{value}</span>
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
