/**
 * Contenido del portafolio en español e inglés.
 * Separado del JSX para poder actualizar el CV sin tocar componentes.
 */

import type { Locale } from "@/i18n";

export type { Locale };

export interface SkillItem {
  name: string;
  /** Clave del ícono registrada en components/TechIcon.tsx (ej. "SiPython") */
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Project {
  emoji: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  repo?: string;
  live?: string;
  extra?: { label: string; url: string };
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  items: string[];
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface PortfolioData {
  nav: { href: string; label: string }[];
  ui: {
    role: string;
    heroLead: string;
    ctaProjects: string;
    ctaCv: string;
    ctaContact: string;
    aboutTitle: string;
    interestsTitle: string;
    skillsSoftTitle: string;
    languagesTitle: string;
    sectionProjects: string;
    sectionEducation: string;
    sectionExperience: string;
    sectionTech: string;
    sectionContact: string;
    contactLead: string;
    repoLink: string;
    liveLink: string;
    skipToContent: string;
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
    footerMade: string;
    footerQuote: string;
    toggleTheme: string;
    toggleLang: string;
    openMenu: string;
  };
  hero: { name: string; lastName: string };
  about: string[];
  interests: string[];
  softSkills: string[];
  languages: string[];
  projects: Project[];
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  contact: ContactItem[];
}

/* Datos compartidos que no cambian entre idiomas */
const LINKS = {
  linkedin:
    "https://www.linkedin.com/in/juan-benjam%C3%ADn-ignacio-campos-castro/",
  github: "https://github.com/JuanCamposC",
  email: "jubencampos@gmail.com",
  phone: "+56 9 4486 2051",
  phoneHref: "tel:+56944862051",
};

const SKILLS: SkillItem[][] = [
  // 0 — Lenguajes
  [
    { name: "PHP", icon: "SiPhp" },
    { name: "Python", icon: "SiPython" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss" },
  ],
  // 1 — Frameworks, librerías y herramientas de build
  [
    { name: "Laravel", icon: "SiLaravel" },
    { name: "Angular", icon: "SiAngular" },
    { name: "React", icon: "SiReact" },
    { name: "NestJS", icon: "SiNestjs" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "Astro", icon: "SiAstro" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Vite", icon: "SiVite" },
  ],
  // 2 — Bases de datos
  [
    { name: "MySQL", icon: "SiMysql" },
    { name: "MongoDB", icon: "SiMongodb" },
  ],
  // 3 — DevOps e infraestructura
  [
    { name: "Docker", icon: "SiDocker" },
    { name: "AWS (EC2, RDS)", icon: "FaAws" },
    { name: "Redis", icon: "SiRedis" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
    { name: "Git", icon: "SiGit" },
    { name: "Cloudflare", icon: "SiCloudflare" },
    { name: "Vercel", icon: "SiVercel" },
  ],
  // 4 — IoT y ML
  [
    { name: "OpenCV", icon: "SiOpencv" },
    { name: "MediaPipe", icon: "SiMediapipe" },
    { name: "Arduino", icon: "SiArduino" },
    { name: "ESP8266", icon: "SiEspressif" },
  ],
  // 5 — Otros
  [{ name: "WordPress", icon: "SiWordpress" }],
];

export const SITE = {
  ...LINKS,
  fullName: "Juan Benjamín Campos Castro",
  company: "Clivox",
  location: {
    es: "San Bernardo, Región Metropolitana, Chile",
    en: "San Bernardo, Metropolitan Region, Chile",
  },
};

export const portfolio: Record<Locale, PortfolioData> = {
  es: {
    nav: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#educacion", label: "Educación" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#tecnologias", label: "Tecnologías" },
      { href: "#contacto", label: "Contacto" },
    ],
    ui: {
      role: "Ingeniero en Computación e Informática",
      heroLead:
        "Apasionado por el desarrollo de software full-stack y desarrollo web. Con experiencia en la construcción de soluciones tecnológicas completas desde el frontend hasta la infraestructura.",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      ctaContact: "Contacto",
      aboutTitle: "Sobre mí",
      interestsTitle: "Áreas de interés",
      skillsSoftTitle: "Competencias",
      languagesTitle: "Idiomas",
      sectionProjects: "Proyectos Destacados",
      sectionEducation: "Educación",
      sectionExperience: "Experiencia",
      sectionTech: "Tecnologías y Herramientas",
      sectionContact: "Contacto",
      contactLead:
        "¿Tienes un proyecto en mente o una oportunidad laboral? ¡Hablemos!",
      repoLink: "Repositorio",
      liveLink: "Ver en vivo",
      skipToContent: "Saltar al contenido",
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "¡Mensaje enviado! Te responderé pronto.",
        error: "No se pudo enviar. Escríbeme directamente por correo.",
        invalid: "Revisa tu nombre, tu correo y el mensaje antes de enviar.",
        rate: "Demasiados envíos seguidos. Intenta de nuevo en unos minutos.",
        or: "o",
        directEmail: "Enviar correo directo",
      },
      footerMade: "Hecho con Next.js y Tailwind CSS",
      footerQuote:
        "Aprendizaje continuo, trabajo en equipo y foco en la calidad",
      toggleTheme: "Cambiar tema",
      toggleLang: "Switch to English",
      openMenu: "Abrir menú",
    },
    hero: { name: "Juan Benjamín", lastName: "Campos Castro" },
    about: [
      "Ingeniero en Computación e Informática de la Universidad Andrés Bello, apasionado por el desarrollo de software full-stack, IoT y Machine Learning. Con experiencia construyendo soluciones tecnológicas completas desde el frontend hasta la infraestructura.",
      "Actualmente me desempeño como Desarrollador Full-Stack en Clivox, sobre Laravel y PHP, en una plataforma en producción con clientes activos. Ubicado en San Bernardo, Región Metropolitana, Chile.",
    ],
    interests: [
      "Desarrollo Web Full-Stack",
      "Internet de las Cosas (IoT)",
      "Machine Learning e IA",
    ],
    softSkills: [
      "Trabajo en equipo",
      "Proactividad",
      "Responsabilidad",
      "Aprendizaje continuo",
    ],
    languages: ["Español (Nativo)", "Inglés (Básico)"],
    projects: [
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
        extra: {
          label: "ML API",
          url: "https://github.com/JuanCamposC/ml-monitoreo",
        },
      },
      {
        emoji: "⛪",
        title: "La Casa de Dios – Sitio Web y Panel de Gestión",
        description:
          "Sitio institucional y panel de administración para una iglesia con cuatro templos. Desarrollado y operado de extremo a extremo sobre la red de Cloudflare.",
        stack: [
          "Astro",
          "TypeScript",
          "Cloudflare Workers",
          "D1",
          "R2",
          "Tailwind CSS",
        ],
        highlights: [
          "Renderizado en el borde con Astro sobre Cloudflare Workers: datos en D1, sesiones en KV y medios en R2 servidos desde su propio subdominio",
          "Panel de administración protegido con Cloudflare Access y validación de JWT, para publicar noticias, eventos, horarios, videos y transmisiones sin tocar código",
          "Boletín por correo con alta, confirmación y baja, plantillas propias, API de contacto y exportación de eventos a calendario (.ics)",
          "Cabeceras de seguridad y CSP calculadas en compilación, datos estructurados JSON-LD y sitemap de los cuatro templos",
          "18 módulos de pruebas con Vitest y utilidades propias de operación: procesado de imágenes con sharp, auditoría de DNS y respaldos",
          "Sin costo de infraestructura: opera dentro del plan gratuito de Cloudflare",
        ],
        repo: "https://github.com/JuanCamposC/web-lacasadedios",
        live: "https://lacasadedios.cl",
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
        emoji: "🧩",
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
    ],
    education: [
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
    ],
    experience: [
      {
        company: "Clivox",
        role: "Desarrollador Full-Stack",
        period: "Junio 2026 – Actualidad",
        items: [
          "Me incorporé al equipo de una plataforma de atención por videollamada con transcripción en vivo, ya en producción y con clientes activos, para extenderla y mejorarla: Laravel 12 y PHP 8.3 sobre MySQL, Redis y Docker, tocando desde el modelo de datos y los trabajos en cola hasta la vista que usa el ejecutivo mientras atiende.",
          "Mejoré el motor de detección de protocolos de atención: reconocimiento de variantes y raíces de cada palabra, tolerancia a palabras intermedias y a frases que el transcriptor parte en dos, además de reglas para que cada protocolo aplique según el canal, la sucursal, el perfil o el ejecutivo.",
          "Llevé el análisis de conversaciones con modelos de lenguaje a una arquitectura de módulos que se habilitan por institución, con reintentos en cola y registro de cada ejecución y su costo.",
          "Sumé redundancia entre dos proveedores de transcripción con conmutación automática, y participo en la operación: migraciones de datos sobre base en uso, despliegues con respaldo y plan de vuelta atrás, y una suite de ~1.250 pruebas que debe estar verde antes de cada entrega.",
        ],
      },
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
        company:
          "Agencia de Aduanas Agensa / Juan Sanhueza y Alex Avsolomovich Ltda.",
        role: "Empleado de Soporte (Reemplazo)",
        period: "Diciembre 2025",
        items: [
          "Brindé soporte técnico y administrativo durante período de reemplazo en agencia de aduanas.",
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
    ],
    skills: [
      { category: "Lenguajes de Programación", items: SKILLS[0] },
      { category: "Frameworks y Librerías", items: SKILLS[1] },
      { category: "Bases de Datos", items: SKILLS[2] },
      { category: "DevOps e Infraestructura", items: SKILLS[3] },
      { category: "IoT y Machine Learning", items: SKILLS[4] },
      { category: "Otros", items: SKILLS[5] },
    ],
    contact: [
      {
        icon: "📧",
        label: "Email",
        value: LINKS.email,
        href: `mailto:${LINKS.email}`,
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "Juan Benjamín Campos",
        href: LINKS.linkedin,
      },
      {
        icon: "📍",
        label: "Ubicación",
        value: SITE.location.es,
      },
      {
        icon: "📱",
        label: "Teléfono",
        value: LINKS.phone,
        href: LINKS.phoneHref,
      },
    ],
  },

  en: {
    nav: [
      { href: "#sobre-mi", label: "About" },
      { href: "#proyectos", label: "Projects" },
      { href: "#educacion", label: "Education" },
      { href: "#experiencia", label: "Experience" },
      { href: "#tecnologias", label: "Tech" },
      { href: "#contacto", label: "Contact" },
    ],
    ui: {
      role: "Computer & Information Engineer",
      heroLead:
        "Passionate about full-stack software and web development. Experienced in building complete technology solutions from the frontend to the infrastructure.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      ctaContact: "Contact",
      aboutTitle: "About me",
      interestsTitle: "Areas of interest",
      skillsSoftTitle: "Soft skills",
      languagesTitle: "Languages",
      sectionProjects: "Featured Projects",
      sectionEducation: "Education",
      sectionExperience: "Experience",
      sectionTech: "Technologies & Tools",
      sectionContact: "Contact",
      contactLead: "Have a project in mind or a job opportunity? Let's talk!",
      repoLink: "Repository",
      liveLink: "Live site",
      skipToContent: "Skip to content",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        sending: "Sending…",
        success: "Message sent! I'll get back to you soon.",
        error: "Could not send. Please email me directly.",
        invalid: "Please check your name, email and message before sending.",
        rate: "Too many submissions in a row. Please try again in a few minutes.",
        or: "or",
        directEmail: "Send direct email",
      },
      footerMade: "Built with Next.js and Tailwind CSS",
      footerQuote: "Continuous learning, teamwork and a focus on quality",
      toggleTheme: "Toggle theme",
      toggleLang: "Cambiar a español",
      openMenu: "Open menu",
    },
    hero: { name: "Juan Benjamín", lastName: "Campos Castro" },
    about: [
      "Computer & Information Engineer from Universidad Andrés Bello, passionate about full-stack software development, IoT and Machine Learning. Experienced in building complete technology solutions from the frontend to the infrastructure.",
      "Currently working as a Full-Stack Developer at Clivox, on Laravel and PHP, for a platform in production with active clients. Based in San Bernardo, Metropolitan Region, Chile.",
    ],
    interests: [
      "Full-Stack Web Development",
      "Internet of Things (IoT)",
      "Machine Learning & AI",
    ],
    softSkills: [
      "Teamwork",
      "Proactivity",
      "Responsibility",
      "Continuous learning",
    ],
    languages: ["Spanish (Native)", "English (Basic)"],
    projects: [
      {
        emoji: "🌊",
        title: "CIMARQ Sentinel – IoT Water Quality Monitoring",
        description:
          "Capstone project — technology platform to monitor critical water parameters in CIMARQ research pools (Quintay).",
        stack: ["NestJS", "React", "FastAPI", "MongoDB", "Docker"],
        highlights: [
          "IoT system for collecting and analyzing environmental data with real-time visualization",
          "Machine Learning API with FastAPI for predictive analysis using a Perceptron model",
          "Containerization with Docker and Swagger documentation",
        ],
        repo: "https://github.com/JuanCamposC/monitoreo-iot-agua",
        live: "https://cimarqsentinel.exposmart.cl",
        extra: {
          label: "ML API",
          url: "https://github.com/JuanCamposC/ml-monitoreo",
        },
      },
      {
        emoji: "⛪",
        title: "La Casa de Dios – Website & Admin Panel",
        description:
          "Institutional website and admin panel for a church with four locations. Built and operated end to end on Cloudflare's network.",
        stack: [
          "Astro",
          "TypeScript",
          "Cloudflare Workers",
          "D1",
          "R2",
          "Tailwind CSS",
        ],
        highlights: [
          "Edge-rendered with Astro on Cloudflare Workers: data in D1, sessions in KV and media in R2 served from its own subdomain",
          "Admin panel protected by Cloudflare Access with JWT validation, so news, events, schedules, videos and live streams are published without touching code",
          "Email newsletter with sign-up, confirmation and unsubscribe, custom templates, a contact API and calendar export for events (.ics)",
          "Security headers and CSP computed at build time, JSON-LD structured data and a sitemap covering all four locations",
          "18 test modules with Vitest plus custom operations tooling: image processing with sharp, DNS auditing and backups",
          "Zero infrastructure cost: it runs within Cloudflare's free plan",
        ],
        repo: "https://github.com/JuanCamposC/web-lacasadedios",
        live: "https://lacasadedios.cl",
      },
      {
        emoji: "🤖",
        title: "IoT & AI Experiences",
        description:
          "A collection of hands-on projects with IoT and Artificial Intelligence.",
        stack: ["OpenCV", "MediaPipe", "ESP8266", "DHT11", "Telegram Bot"],
        highlights: [
          "Facial recognition with OpenCV + LBPH algorithm",
          "Gesture recognition with MediaPipe",
          "IoT sensors with ESP8266 and Telegram Bot integration",
        ],
        repo: "https://github.com/JuanCamposC/experiencias-iot-ai",
      },
      {
        emoji: "🧩",
        title: "BanuBot – Educational Platform",
        description:
          "Website for the BanuBot educational project, aimed at improving reading comprehension through educational robotics.",
        stack: ["WordPress"],
        highlights: [
          "Content structure management and portal administration",
          "Collaboration with UNAB and community outreach programs",
        ],
        live: "https://banubot.cl",
      },
      {
        emoji: "🔬",
        title: "LAI-UNAB – Institutional Website",
        description:
          "New institutional website for the Isotope Analysis Laboratory at Universidad Andrés Bello.",
        stack: ["WordPress"],
        highlights: [
          "Improved presentation of services and scientific research",
          "Migration from the previous platform to a more modern solution",
        ],
        live: "https://www.lab-isotopos.cl",
      },
    ],
    education: [
      {
        institution: "Universidad Andrés Bello, Viña del Mar Campus",
        degree: "Computer & Information Engineering",
        location: "Viña del Mar, Chile",
        period: "2020 – 2026",
      },
      {
        institution: "Universidad Bernardo O'Higgins",
        degree: "Computer Engineering (not completed — relocation)",
        location: "Santiago, Chile",
        period: "2018 – 2019",
      },
    ],
    experience: [
      {
        company: "Clivox",
        role: "Full-Stack Developer",
        period: "June 2026 – Present",
        items: [
          "Joined the team behind a video-call customer service platform with live transcription — already in production with active clients — to extend and improve it: Laravel 12 and PHP 8.3 on MySQL, Redis and Docker, working from the data model and queued jobs through to the view the agent uses while handling a call.",
          "Improved the service-protocol detection engine: recognition of word variants and stems, tolerance for intervening words and for phrases the transcriber splits in two, plus rules so each protocol applies by channel, branch, role or agent.",
          "Moved LLM-based conversation analysis to a module architecture enabled per institution, with queued retries and a log of every run and its cost.",
          "Added redundancy across two transcription providers with automatic failover, and I take part in operations: data migrations against a live database, deploys with backup and a rollback plan, and a suite of ~1,250 tests that must be green before every release.",
        ],
      },
      {
        company: "Universidad Andrés Bello, School of Engineering",
        role: "Junior Software Developer",
        period: "January 2026 – February 2026",
        items: [
          "Contributed to the development and rollout of new features for the Edurun platform during its institutional pilot phase.",
          "Built the frontend, creating functional views and flows with good practices in component structure, API consumption and state management.",
          "Implemented security best practices aligned with the OWASP Top 10, strengthening data validation and control of sensitive information exposure.",
          "Worked under the supervision of the PM and Tech Lead, contributing to the development cycle with a focus on quality and continuous improvement.",
        ],
      },
      {
        company:
          "Agencia de Aduanas Agensa / Juan Sanhueza y Alex Avsolomovich Ltda.",
        role: "Support Staff (Temporary)",
        period: "December 2025",
        items: [
          "Provided technical and administrative support during a temporary replacement period at a customs agency.",
        ],
      },
      {
        company: "Universidad Andrés Bello, School of Engineering",
        role: "University Intern",
        period: "February 2025 – May 2025",
        items: [
          "Developed applied technology projects to strengthen the digital infrastructure of several institutional units.",
          "Used Python, HTML, CSS, PHP and integrated WordPress to build and maintain institutional websites.",
          "Supported logistics and delivery of educational robotics workshops for children.",
          "Combined technical knowledge with community outreach initiatives, fostering early technology education.",
        ],
      },
    ],
    skills: [
      { category: "Programming Languages", items: SKILLS[0] },
      { category: "Frameworks & Libraries", items: SKILLS[1] },
      { category: "Databases", items: SKILLS[2] },
      { category: "DevOps & Infrastructure", items: SKILLS[3] },
      { category: "IoT & Machine Learning", items: SKILLS[4] },
      { category: "Other", items: SKILLS[5] },
    ],
    contact: [
      {
        icon: "📧",
        label: "Email",
        value: LINKS.email,
        href: `mailto:${LINKS.email}`,
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "Juan Benjamín Campos",
        href: LINKS.linkedin,
      },
      {
        icon: "📍",
        label: "Location",
        value: SITE.location.en,
      },
      {
        icon: "📱",
        label: "Phone",
        value: LINKS.phone,
        href: LINKS.phoneHref,
      },
    ],
  },
};
