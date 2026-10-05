/**
 * Contenido del portafolio en español e inglés.
 *
 * Reestructurado para el rediseño «panel de instrumentos»: cada proyecto y cada
 * puesto se reduce a UNA línea (`linea`), y lo que antes era una lista de
 * viñetas a la vista pasa a `detalle`, que solo se ve al desplegar la fila. El
 * contenido no se perdió; dejó de gritar.
 */

import type { Locale } from "@/i18n";

export type { Locale };

/** Una cifra del panel. `nota` dice de dónde sale, para que sea comprobable. */
export interface Lectura {
  valor: string;
  etiqueta: string;
  nota?: string;
}

export interface Proyecto {
  /** Clave del diagrama en components/Diagrama.tsx */
  clave: "cimarq" | "iglesia" | "iot" | "banubot" | "lai";
  nombre: string;
  linea: string;
  stack: string[];
  estado: string;
  /** true dibuja el piloto latiendo: está corriendo ahora mismo. */
  vivo: boolean;
  detalle: string[];
  repo?: string;
  live?: string;
  extra?: { label: string; url: string };
}

export interface Paso {
  periodo: string;
  rol: string;
  donde: string;
  linea: string;
  detalle: string[];
  tipo: "trabajo" | "estudio";
}

export interface BancoGrupo {
  grupo: string;
  items: string[];
}

export interface ContactoItem {
  etiqueta: string;
  valor: string;
  href?: string;
}

export interface PortfolioData {
  nav: { href: string; label: string }[];
  ui: {
    role: string;
    tagline: string;
    estado: string;
    ctaCv: string;
    ctaContacto: string;
    secIdentidad: string;
    secTrabajo: string;
    secTrayectoria: string;
    secInstrumental: string;
    secContacto: string;
    verDetalle: string;
    repoLink: string;
    liveLink: string;
    skipToContent: string;
    idiomasTitulo: string;
    retratoAlt: string;
    sinRetrato: string;
    retratoPie: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      invalid: string;
      rate: string;
      or: string;
      directEmail: string;
    };
    pie: string;
    toggleTheme: string;
    toggleLang: string;
  };
  hero: { nombre: string; apellidos: string };
  resumen: string;
  lecturas: Lectura[];
  idiomas: string[];
  proyectos: Proyecto[];
  trayectoria: Paso[];
  banco: BancoGrupo[];
  contacto: ContactoItem[];
}

const LINKS = {
  linkedin:
    "https://www.linkedin.com/in/juan-benjam%C3%ADn-ignacio-campos-castro/",
  github: "https://github.com/JuanCamposC",
  email: "jubencampos@gmail.com",
  phone: "+56 9 4486 2051",
  phoneHref: "tel:+56944862051",
};

/**
 * Peso del HTML que sirve esta página, comprimido, medido sobre el build de
 * producción. Antes del rediseño eran 50 KB; el recorte sale de que cada
 * proyecto y cada puesto ahora entran con UNA línea y el detalle vive dentro de
 * un <details> que no se expande hasta que alguien lo pide.
 *
 * Es el HTML, no el JavaScript: los ~136 KB de React y Next son el suelo del
 * framework y no bajan por rediseñar. Poner aquí una cifra de JS más bonita
 * sería justo lo que un panel que presume de medir no puede hacer.
 *
 * Medido el 2026-10-05 con el build de producción. Si cambia de forma
 * apreciable, se actualiza a mano.
 */
export const HTML_KB = 18;

export const SITE = {
  ...LINKS,
  fullName: "Juan Benjamín Campos Castro",
  company: "Clivox",
  location: {
    es: "San Bernardo, Región Metropolitana, Chile",
    en: "San Bernardo, Metropolitan Region, Chile",
  },
};

const BANCO_ES: BancoGrupo[] = [
  {
    grupo: "Lenguajes",
    items: ["PHP 8.3", "Python", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  { grupo: "Backend", items: ["Laravel 12", "NestJS", "FastAPI"] },
  {
    grupo: "Frontend",
    items: ["React", "Angular", "Astro 7", "Next 16", "Tailwind 4", "Vite"],
  },
  { grupo: "Datos", items: ["MySQL", "MongoDB", "Cloudflare D1"] },
  {
    grupo: "Infraestructura",
    items: [
      "Docker",
      "AWS (EC2, RDS)",
      "Redis",
      "Cloudflare Workers · R2 · KV",
      "Vercel",
    ],
  },
  { grupo: "Automatización", items: ["Git", "GitHub Actions"] },
  {
    grupo: "IoT y visión",
    items: ["OpenCV", "MediaPipe", "Arduino", "ESP8266"],
  },
  { grupo: "CMS", items: ["WordPress"] },
];

const BANCO_EN: BancoGrupo[] = [
  {
    grupo: "Languages",
    items: ["PHP 8.3", "Python", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  { grupo: "Backend", items: ["Laravel 12", "NestJS", "FastAPI"] },
  {
    grupo: "Frontend",
    items: ["React", "Angular", "Astro 7", "Next 16", "Tailwind 4", "Vite"],
  },
  { grupo: "Data", items: ["MySQL", "MongoDB", "Cloudflare D1"] },
  {
    grupo: "Infrastructure",
    items: [
      "Docker",
      "AWS (EC2, RDS)",
      "Redis",
      "Cloudflare Workers · R2 · KV",
      "Vercel",
    ],
  },
  { grupo: "Automation", items: ["Git", "GitHub Actions"] },
  { grupo: "IoT & vision", items: ["OpenCV", "MediaPipe", "Arduino", "ESP8266"] },
  { grupo: "CMS", items: ["WordPress"] },
];

export const portfolio: Record<Locale, PortfolioData> = {
  es: {
    nav: [
      { href: "#trabajo", label: "Trabajo" },
      { href: "#trayectoria", label: "Trayectoria" },
      { href: "#instrumental", label: "Instrumental" },
      { href: "#contacto", label: "Contacto" },
    ],
    ui: {
      role: "Ingeniero en Computación e Informática",
      tagline: "Construyo sistemas completos: del sensor al despliegue.",
      estado: "Trabajando en Clivox · abierto a conversar",
      ctaCv: "Descargar CV",
      ctaContacto: "Escribirme",
      secIdentidad: "Identidad",
      secTrabajo: "Trabajo",
      secTrayectoria: "Trayectoria",
      secInstrumental: "Instrumental",
      secContacto: "Contacto",
      verDetalle: "Detalle",
      repoLink: "Repositorio",
      liveLink: "Ver en vivo",
      skipToContent: "Saltar al contenido",
      idiomasTitulo: "Idiomas",
      retratoAlt: "Retrato de Juan Benjamín Campos Castro",
      sinRetrato: "sin señal",
      retratoPie: "Retrato · Santiago",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando…",
        success: "Mensaje enviado. Te responderé pronto.",
        error: "No se pudo enviar. Escríbeme directamente por correo.",
        invalid: "Revisa tu nombre, tu correo y el mensaje antes de enviar.",
        rate: "Demasiados envíos seguidos. Intenta de nuevo en unos minutos.",
        or: "o",
        directEmail: "correo directo",
      },
      pie: "Hecho con Next.js y Tailwind CSS",
      toggleTheme: "Cambiar tema",
      toggleLang: "Switch to English",
    },
    hero: { nombre: "Juan Benjamín", apellidos: "Campos Castro" },
    resumen:
      "Ingeniero en Computación e Informática de la Universidad Andrés Bello. Trabajo en toda la pila: modelo de datos, trabajos en cola, interfaz y la infraestructura donde corre. Vivo en San Bernardo, Región Metropolitana.",
    lecturas: [
      {
        valor: "3",
        etiqueta: "sitios en producción",
        nota: "visitables más abajo",
      },
      { valor: "5", etiqueta: "proyectos" },
      {
        valor: "18",
        etiqueta: "módulos de prueba",
        nota: "repositorio público",
      },
      {
        valor: `${HTML_KB} KB`,
        etiqueta: "HTML de esta página",
        nota: "comprimido · medido en el build",
      },
    ],
    idiomas: ["Español nativo", "Inglés básico"],
    proyectos: [
      {
        clave: "iglesia",
        nombre: "La Casa de Dios",
        linea:
          "Sitio y panel de gestión para una iglesia de cuatro templos, construido y operado entero sobre Cloudflare.",
        stack: ["Astro 7", "TypeScript", "Workers", "D1", "R2"],
        estado: "en vivo",
        vivo: true,
        detalle: [
          "Renderizado en el borde con Astro sobre Cloudflare Workers: datos en D1, sesiones en KV y medios en R2 servidos desde su propio subdominio.",
          "Panel de administración protegido con Cloudflare Access y validación de JWT, para publicar noticias, eventos, horarios, videos y transmisiones sin tocar código.",
          "Boletín por correo con alta, confirmación y baja, plantillas propias, API de contacto y exportación de eventos a calendario (.ics).",
          "Cabeceras de seguridad y CSP calculadas en compilación, datos estructurados JSON-LD y sitemap de los cuatro templos.",
          "18 módulos de pruebas con Vitest y utilidades propias de operación: procesado de imágenes con sharp, auditoría de DNS y respaldos.",
          "Sin costo de infraestructura: opera dentro del plan gratuito de Cloudflare.",
        ],
        repo: "https://github.com/JuanCamposC/web-lacasadedios",
        live: "https://lacasadedios.cl",
      },
      {
        clave: "cimarq",
        nombre: "CIMARQ Sentinel",
        linea:
          "Monitoreo en tiempo real del agua en las piscinas de investigación del CIMARQ, con predicción por Machine Learning.",
        stack: ["NestJS", "React", "FastAPI", "MongoDB", "Docker"],
        estado: "proyecto de título",
        vivo: true,
        detalle: [
          "Sistema IoT para recolección y análisis de datos ambientales con visualización en tiempo real.",
          "API de Machine Learning con FastAPI para análisis predictivo con modelo Perceptrón, evaluado con MAE, MSE y RMSE.",
          "Contenedorización con Docker y documentación Swagger.",
        ],
        repo: "https://github.com/JuanCamposC/monitoreo-iot-agua",
        live: "https://cimarqsentinel.exposmart.cl",
        extra: {
          label: "API de ML",
          url: "https://github.com/JuanCamposC/ml-monitoreo",
        },
      },
      {
        clave: "lai",
        nombre: "LAI-UNAB",
        linea:
          "Sitio del Laboratorio de Análisis Isotópicos, migrado desde su plataforma anterior.",
        stack: ["WordPress"],
        estado: "en vivo",
        vivo: true,
        detalle: [
          "Mejora en la presentación de servicios e investigación científica.",
          "Migración desde la plataforma anterior a una solución más moderna.",
        ],
        live: "https://www.lab-isotopos.cl",
      },
      {
        clave: "iot",
        nombre: "Experiencias IoT e IA",
        linea:
          "Visión por computador y sensores: reconocimiento facial, gestos y telemetría con ESP8266.",
        stack: ["OpenCV", "MediaPipe", "ESP8266", "DHT11"],
        estado: "repositorio",
        vivo: false,
        detalle: [
          "Reconocimiento facial con OpenCV y el algoritmo LBPH.",
          "Reconocimiento de gestos con MediaPipe.",
          "Sensores con ESP8266 e integración con un bot de Telegram.",
        ],
        repo: "https://github.com/JuanCamposC/experiencias-iot-ai",
      },
      {
        clave: "banubot",
        nombre: "BanuBot",
        linea:
          "Portal del proyecto de robótica educativa de la UNAB para fortalecer la comprensión lectora.",
        stack: ["WordPress"],
        estado: "dominio caducado",
        vivo: false,
        detalle: [
          "Gestión de la estructura de contenidos y administración del portal.",
          "Colaboración con la UNAB y sus programas de vinculación con el medio.",
        ],
      },
    ],
    trayectoria: [
      {
        periodo: "Jun 2026 —",
        rol: "Desarrollador Full-Stack",
        donde: "Clivox",
        linea:
          "Extiendo una plataforma de atención por videollamada con transcripción en vivo, en producción y con clientes activos.",
        tipo: "trabajo",
        detalle: [
          "Laravel 12 y PHP 8.3 sobre MySQL, Redis y Docker, tocando desde el modelo de datos y los trabajos en cola hasta la vista que usa el ejecutivo mientras atiende.",
          "Mejoré el motor de detección de protocolos de atención: reconocimiento de variantes y raíces de cada palabra, tolerancia a palabras intermedias y a frases que el transcriptor parte en dos, además de reglas para que cada protocolo aplique según el canal, la sucursal, el perfil o el ejecutivo.",
          "Llevé el análisis de conversaciones con modelos de lenguaje a una arquitectura de módulos que se habilitan por institución, con reintentos en cola y registro de cada ejecución y su costo.",
          "Sumé redundancia entre dos proveedores de transcripción con conmutación automática, y participo en la operación: migraciones de datos sobre base en uso, despliegues con respaldo y plan de vuelta atrás, y la suite de pruebas verde como requisito antes de cada entrega.",
        ],
      },
      {
        periodo: "Ene — Feb 2026",
        rol: "Desarrollador de Software Junior",
        donde: "UNAB, Facultad de Ingeniería",
        linea:
          "Frontend y buenas prácticas de seguridad para la plataforma Edurun en su piloto institucional.",
        tipo: "trabajo",
        detalle: [
          "Participé en el desarrollo e implementación de nuevas funcionalidades durante la fase piloto.",
          "Construí vistas y flujos con buenas prácticas en estructura de componentes, consumo de APIs y manejo de estado.",
          "Implementé prácticas de seguridad alineadas con OWASP Top 10, reforzando validación de datos y control de exposición de información sensible.",
          "Trabajé bajo supervisión del PM y el Tech Lead, con foco en calidad y mejora continua.",
        ],
      },
      {
        periodo: "Dic 2025",
        rol: "Soporte (reemplazo)",
        donde: "Agencia de Aduanas Agensa",
        linea:
          "Soporte técnico y administrativo durante un período de reemplazo.",
        tipo: "trabajo",
        detalle: [],
      },
      {
        periodo: "Feb — May 2025",
        rol: "Practicante",
        donde: "UNAB, Facultad de Ingeniería",
        linea:
          "Proyectos aplicados para la infraestructura digital de la universidad, y talleres de robótica para niños.",
        tipo: "trabajo",
        detalle: [
          "Desarrollé proyectos para fortalecer la infraestructura digital de distintas unidades institucionales.",
          "Usé Python, HTML, CSS y PHP, e integré WordPress para construir y mantener sitios institucionales.",
          "Apoyé la logística y ejecución de talleres educativos de robótica dirigidos a niños.",
        ],
      },
      {
        periodo: "2020 — 2026",
        rol: "Ingeniería en Computación e Informática",
        donde: "Universidad Andrés Bello, Viña del Mar",
        linea: "Carrera completa, con CIMARQ Sentinel como proyecto de título.",
        tipo: "estudio",
        detalle: [],
      },
      {
        periodo: "2018 — 2019",
        rol: "Ingeniería Informática",
        donde: "Universidad Bernardo O'Higgins, Santiago",
        linea: "No finalizada, por cambio de domicilio.",
        tipo: "estudio",
        detalle: [],
      },
    ],
    banco: BANCO_ES,
    contacto: [
      {
        etiqueta: "Correo",
        valor: LINKS.email,
        href: `mailto:${LINKS.email}`,
      },
      { etiqueta: "LinkedIn", valor: "/in/juan-campos-castro", href: LINKS.linkedin },
      { etiqueta: "GitHub", valor: "@JuanCamposC", href: LINKS.github },
      { etiqueta: "Teléfono", valor: LINKS.phone, href: LINKS.phoneHref },
      { etiqueta: "Ubicación", valor: "San Bernardo, RM, Chile" },
    ],
  },

  en: {
    nav: [
      { href: "#trabajo", label: "Work" },
      { href: "#trayectoria", label: "Track" },
      { href: "#instrumental", label: "Stack" },
      { href: "#contacto", label: "Contact" },
    ],
    ui: {
      role: "Computer & Information Engineer",
      tagline: "I build whole systems: from the sensor to the deploy.",
      estado: "Working at Clivox · open to talk",
      ctaCv: "Download CV",
      ctaContacto: "Get in touch",
      secIdentidad: "Identity",
      secTrabajo: "Work",
      secTrayectoria: "Track record",
      secInstrumental: "Stack",
      secContacto: "Contact",
      verDetalle: "Detail",
      repoLink: "Repository",
      liveLink: "Live site",
      skipToContent: "Skip to content",
      idiomasTitulo: "Languages",
      retratoAlt: "Portrait of Juan Benjamín Campos Castro",
      sinRetrato: "no signal",
      retratoPie: "Portrait · Santiago",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending…",
        success: "Message sent. I'll get back to you soon.",
        error: "Could not send. Please email me directly.",
        invalid: "Please check your name, email and message before sending.",
        rate: "Too many submissions in a row. Please try again in a few minutes.",
        or: "or",
        directEmail: "direct email",
      },
      pie: "Built with Next.js and Tailwind CSS",
      toggleTheme: "Toggle theme",
      toggleLang: "Cambiar a español",
    },
    hero: { nombre: "Juan Benjamín", apellidos: "Campos Castro" },
    resumen:
      "Computer & Information Engineer from Universidad Andrés Bello. I work across the stack: data model, queued jobs, interface and the infrastructure it runs on. Based in San Bernardo, Metropolitan Region, Chile.",
    lecturas: [
      { valor: "3", etiqueta: "sites in production", nota: "visit them below" },
      { valor: "5", etiqueta: "projects" },
      { valor: "18", etiqueta: "test modules", nota: "public repository" },
      {
        valor: `${HTML_KB} KB`,
        etiqueta: "HTML on this page",
        nota: "gzipped · measured at build",
      },
    ],
    idiomas: ["Spanish native", "English basic"],
    proyectos: [
      {
        clave: "iglesia",
        nombre: "La Casa de Dios",
        linea:
          "Website and admin panel for a four-location church, built and operated entirely on Cloudflare.",
        stack: ["Astro 7", "TypeScript", "Workers", "D1", "R2"],
        estado: "live",
        vivo: true,
        detalle: [
          "Edge-rendered with Astro on Cloudflare Workers: data in D1, sessions in KV and media in R2 served from its own subdomain.",
          "Admin panel protected by Cloudflare Access with JWT validation, so news, events, schedules, videos and live streams are published without touching code.",
          "Email newsletter with sign-up, confirmation and unsubscribe, custom templates, a contact API and calendar export for events (.ics).",
          "Security headers and CSP computed at build time, JSON-LD structured data and a sitemap covering all four locations.",
          "18 test modules with Vitest plus custom operations tooling: image processing with sharp, DNS auditing and backups.",
          "Zero infrastructure cost: it runs within Cloudflare's free plan.",
        ],
        repo: "https://github.com/JuanCamposC/web-lacasadedios",
        live: "https://lacasadedios.cl",
      },
      {
        clave: "cimarq",
        nombre: "CIMARQ Sentinel",
        linea:
          "Real-time water monitoring for CIMARQ's research pools, with Machine Learning forecasting.",
        stack: ["NestJS", "React", "FastAPI", "MongoDB", "Docker"],
        estado: "capstone project",
        vivo: true,
        detalle: [
          "IoT system for collecting and analysing environmental data with real-time visualisation.",
          "Machine Learning API with FastAPI for predictive analysis using a Perceptron model, evaluated with MAE, MSE and RMSE.",
          "Containerisation with Docker and Swagger documentation.",
        ],
        repo: "https://github.com/JuanCamposC/monitoreo-iot-agua",
        live: "https://cimarqsentinel.exposmart.cl",
        extra: {
          label: "ML API",
          url: "https://github.com/JuanCamposC/ml-monitoreo",
        },
      },
      {
        clave: "lai",
        nombre: "LAI-UNAB",
        linea:
          "Website for the Isotope Analysis Laboratory, migrated off its previous platform.",
        stack: ["WordPress"],
        estado: "live",
        vivo: true,
        detalle: [
          "Improved presentation of services and scientific research.",
          "Migration from the previous platform to a more modern solution.",
        ],
        live: "https://www.lab-isotopos.cl",
      },
      {
        clave: "iot",
        nombre: "IoT & AI Experiments",
        linea:
          "Computer vision and sensors: face recognition, gestures and ESP8266 telemetry.",
        stack: ["OpenCV", "MediaPipe", "ESP8266", "DHT11"],
        estado: "repository",
        vivo: false,
        detalle: [
          "Face recognition with OpenCV and the LBPH algorithm.",
          "Gesture recognition with MediaPipe.",
          "Sensors with ESP8266 and Telegram bot integration.",
        ],
        repo: "https://github.com/JuanCamposC/experiencias-iot-ai",
      },
      {
        clave: "banubot",
        nombre: "BanuBot",
        linea:
          "Portal for UNAB's educational robotics project on reading comprehension.",
        stack: ["WordPress"],
        estado: "domain expired",
        vivo: false,
        detalle: [
          "Content structure management and portal administration.",
          "Collaboration with UNAB and its community outreach programmes.",
        ],
      },
    ],
    trayectoria: [
      {
        periodo: "Jun 2026 —",
        rol: "Full-Stack Developer",
        donde: "Clivox",
        linea:
          "Extending a video-call customer service platform with live transcription, in production with active clients.",
        tipo: "trabajo",
        detalle: [
          "Laravel 12 and PHP 8.3 on MySQL, Redis and Docker, working from the data model and queued jobs through to the view the agent uses while handling a call.",
          "Improved the service-protocol detection engine: recognition of word variants and stems, tolerance for intervening words and for phrases the transcriber splits in two, plus rules so each protocol applies by channel, branch, role or agent.",
          "Moved LLM-based conversation analysis to a module architecture enabled per institution, with queued retries and a log of every run and its cost.",
          "Added redundancy across two transcription providers with automatic failover, and I take part in operations: data migrations against a live database, deploys with backup and a rollback plan, and a green test suite as a requirement before every release.",
        ],
      },
      {
        periodo: "Jan — Feb 2026",
        rol: "Junior Software Developer",
        donde: "UNAB, School of Engineering",
        linea:
          "Frontend and security practices for the Edurun platform during its institutional pilot.",
        tipo: "trabajo",
        detalle: [
          "Contributed to the development and rollout of new features during the pilot phase.",
          "Built views and flows with good practices in component structure, API consumption and state management.",
          "Implemented security practices aligned with the OWASP Top 10, strengthening data validation and control of sensitive information exposure.",
          "Worked under the supervision of the PM and Tech Lead, focused on quality and continuous improvement.",
        ],
      },
      {
        periodo: "Dec 2025",
        rol: "Support (temporary)",
        donde: "Agencia de Aduanas Agensa",
        linea:
          "Technical and administrative support during a replacement period.",
        tipo: "trabajo",
        detalle: [],
      },
      {
        periodo: "Feb — May 2025",
        rol: "Intern",
        donde: "UNAB, School of Engineering",
        linea:
          "Applied projects for the university's digital infrastructure, plus robotics workshops for children.",
        tipo: "trabajo",
        detalle: [
          "Developed projects to strengthen the digital infrastructure of several institutional units.",
          "Used Python, HTML, CSS and PHP, and integrated WordPress to build and maintain institutional websites.",
          "Supported the logistics and delivery of educational robotics workshops for children.",
        ],
      },
      {
        periodo: "2020 — 2026",
        rol: "Computer & Information Engineering",
        donde: "Universidad Andrés Bello, Viña del Mar",
        linea: "Full degree, with CIMARQ Sentinel as the capstone project.",
        tipo: "estudio",
        detalle: [],
      },
      {
        periodo: "2018 — 2019",
        rol: "Computer Engineering",
        donde: "Universidad Bernardo O'Higgins, Santiago",
        linea: "Not completed, due to relocation.",
        tipo: "estudio",
        detalle: [],
      },
    ],
    banco: BANCO_EN,
    contacto: [
      {
        etiqueta: "Email",
        valor: LINKS.email,
        href: `mailto:${LINKS.email}`,
      },
      {
        etiqueta: "LinkedIn",
        valor: "/in/juan-campos-castro",
        href: LINKS.linkedin,
      },
      { etiqueta: "GitHub", valor: "@JuanCamposC", href: LINKS.github },
      { etiqueta: "Phone", valor: LINKS.phone, href: LINKS.phoneHref },
      { etiqueta: "Location", valor: "San Bernardo, RM, Chile" },
    ],
  },
};
