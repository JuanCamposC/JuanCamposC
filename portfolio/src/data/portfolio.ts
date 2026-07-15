/**
 * Contenido del portafolio en español e inglés.
 * Separado del JSX para poder actualizar el CV sin tocar componentes.
 */

export type Locale = "es" | "en";

export interface SkillItem {
  name: string;
  /** Nombre exacto del ícono en react-icons/si (ej. "SiPython") */
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
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
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
  [
    { name: "Python", icon: "SiPython" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss" },
    { name: "PHP", icon: "SiPhp" },
  ],
  [
    { name: "Laravel", icon: "SiLaravel" },
    { name: "Angular", icon: "SiAngular" },
    { name: "React", icon: "SiReact" },
    { name: "NestJS", icon: "SiNestjs" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "Astro", icon: "SiAstro" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
  ],
  [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Docker", icon: "SiDocker" },
    { name: "Vercel", icon: "SiVercel" },
  ],
  [
    { name: "OpenCV", icon: "SiOpencv" },
    { name: "MediaPipe", icon: "SiMediapipe" },
    { name: "Arduino", icon: "SiArduino" },
    { name: "ESP8266", icon: "SiEspressif" },
  ],
  [{ name: "WordPress", icon: "SiWordpress" }],
];

export const SITE = {
  ...LINKS,
  fullName: "Juan Benjamín Campos Castro",
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
      form: {
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "¡Mensaje enviado! Te responderé pronto.",
        error: "No se pudo enviar. Escríbeme directamente por correo.",
        or: "o",
        directEmail: "Enviar correo directo",
      },
      footerMade: "Hecho con Next.js y Tailwind CSS",
      footerQuote:
        "Aprendizaje continuo, trabajo en equipo y disponibilidad inmediata",
      toggleTheme: "Cambiar tema",
      toggleLang: "Switch to English",
      openMenu: "Abrir menú",
    },
    hero: { name: "Juan Benjamín", lastName: "Campos Castro" },
    about: [
      "Ingeniero en Computación e Informática de la Universidad Andrés Bello, apasionado por el desarrollo de software full-stack, IoT y Machine Learning. Con experiencia construyendo soluciones tecnológicas completas desde el frontend hasta la infraestructura.",
      "Actualmente me desempeño como Desarrollador Full-Stack en CliVox, trabajando con PHP, Laravel y Blade. Ubicado en San Bernardo, Región Metropolitana, Chile.",
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
      "Disponibilidad inmediata",
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
        degree:
          "Ingeniería Informática (No finalizada por cambio de domicilio)",
        location: "Santiago, Chile",
        period: "2018 – 2019",
      },
    ],
    experience: [
      {
        company: "CliVox",
        role: "Desarrollador Full-Stack",
        period: "Junio 2026 – Actualidad",
        items: [
          "Desarrollo de funcionalidades full-stack con PHP, Laravel y el motor de plantillas Blade.",
          "Participación en el ciclo de desarrollo del producto, desde la implementación hasta la integración de vistas y lógica de negocio.",
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
        company:
          "Agencia de Aduanas Agensa / Juan Sanhueza y Alex Avsolomovich Ltda.",
        role: "Empleado de Soporte (Reemplazo)",
        period: "Diciembre 2025",
        items: [
          "Brindé soporte técnico y administrativo durante período de reemplazo en agencia de aduanas.",
        ],
      },
    ],
    skills: [
      { category: "Lenguajes de Programación", items: SKILLS[0] },
      { category: "Frameworks y Librerías", items: SKILLS[1] },
      { category: "Bases de Datos y DevOps", items: SKILLS[2] },
      { category: "IoT y Machine Learning", items: SKILLS[3] },
      { category: "Otros", items: SKILLS[4] },
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
      contactLead:
        "Have a project in mind or a job opportunity? Let's talk!",
      repoLink: "Repository",
      liveLink: "Live site",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        sending: "Sending…",
        success: "Message sent! I'll get back to you soon.",
        error: "Could not send. Please email me directly.",
        or: "or",
        directEmail: "Send direct email",
      },
      footerMade: "Built with Next.js and Tailwind CSS",
      footerQuote:
        "Continuous learning, teamwork and immediate availability",
      toggleTheme: "Toggle theme",
      toggleLang: "Cambiar a español",
      openMenu: "Open menu",
    },
    hero: { name: "Juan Benjamín", lastName: "Campos Castro" },
    about: [
      "Computer & Information Engineer from Universidad Andrés Bello, passionate about full-stack software development, IoT and Machine Learning. Experienced in building complete technology solutions from the frontend to the infrastructure.",
      "Currently working as a Full-Stack Developer at CliVox, using PHP, Laravel and Blade. Based in San Bernardo, Metropolitan Region, Chile.",
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
      "Immediate availability",
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
        emoji: "🤖",
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
      {
        emoji: "⛪",
        title: "La Casa de Dios – Institutional Website",
        description:
          "Development and administration of the institutional website for La Casa de Dios church.",
        stack: ["WordPress"],
        highlights: [
          "Content, publications and community communication management",
          "Site structure setup and SEO optimization",
        ],
        live: "https://lacasadedios.cl",
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
        company: "CliVox",
        role: "Full-Stack Developer",
        period: "June 2026 – Present",
        items: [
          "Full-stack feature development with PHP, Laravel and the Blade templating engine.",
          "Involved in the product development cycle, from implementation to integrating views and business logic.",
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
      {
        company:
          "Agencia de Aduanas Agensa / Juan Sanhueza y Alex Avsolomovich Ltda.",
        role: "Support Staff (Temporary)",
        period: "December 2025",
        items: [
          "Provided technical and administrative support during a temporary replacement period at a customs agency.",
        ],
      },
    ],
    skills: [
      { category: "Programming Languages", items: SKILLS[0] },
      { category: "Frameworks & Libraries", items: SKILLS[1] },
      { category: "Databases & DevOps", items: SKILLS[2] },
      { category: "IoT & Machine Learning", items: SKILLS[3] },
      { category: "Other", items: SKILLS[4] },
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
