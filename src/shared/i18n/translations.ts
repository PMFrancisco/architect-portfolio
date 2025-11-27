export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Consultoría Arquitectónica',
    'hero.subtitle': 'Estrategia de Diseño & Gestión de Proyectos',
    'hero.cta': 'Ver Servicios',

    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Experiencia a tu disposición',

    // Projects
    'projects.title': 'Proyectos Seleccionados',
    'projects.subtitle': 'Soluciones arquitectónicas con impacto',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.viewProject': 'Ver proyecto',

    // About / Bio
    'about.title': 'Sobre Mí',
    'about.experience': 'años de experiencia',

    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos de tu proyecto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',

    // Footer
    'footer.rights': 'Todos los derechos reservados',

    // Theme
    'theme.light': 'Modo claro',
    'theme.dark': 'Modo oscuro',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Architectural Consulting',
    'hero.subtitle': 'Design Strategy & Project Management',
    'hero.cta': 'View Services',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'Expertise at your disposal',

    // Projects
    'projects.title': 'Selected Projects',
    'projects.subtitle': 'Architectural solutions with impact',
    'projects.viewAll': 'View all projects',
    'projects.viewProject': 'View project',

    // About / Bio
    'about.title': 'About Me',
    'about.experience': 'years of experience',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's discuss your project",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',

    // Footer
    'footer.rights': 'All rights reserved',

    // Theme
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Always include the language prefix since we use [lang] dynamic routes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

