'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.thesis': 'Thesis',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Full Stack Developer / Backend Specialist',
    'hero.description': 'Higher Technician in Programming specialized in Backend (Java/Spring, .NET) and Distributed Architectures. Expert in integrating complex business logic with modern interfaces and working in complete development cycles (SDLC) under agile methodologies in large-scale teams (+30 devs).',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Contact Me',
    'hero.available': 'Available for work',
    'hero.terminal.role': 'Full Stack / Backend Specialist',
    'hero.terminal.location': 'Córdoba, Argentina',
    'hero.terminal.stack': 'Java 17 • Spring Boot 3 • Angular • .NET',
    'hero.terminal.status': 'Ready to build amazing things',
    
    // About
    'about.title': 'About',
    'about.titleHighlight': 'Me',
    'about.badge': 'Full Stack / Backend Specialist',
    'about.intro': 'Hello! I\'m Leandro, a programming enthusiast recently graduated as',
    'about.degree': 'Higher Technician in Programming',
    'about.from': 'from',
    'about.utn': 'UTN Córdoba',
    'about.p1': 'Specialized in Backend (Java/Spring, .NET) and Distributed Architectures. I have experience working in large-scale teams (+30 developers) following agile methodologies and complete SDLC cycles.',
    'about.p2': 'I enjoy tackling complex problems and turning them into simple, elegant solutions. I focus especially on code quality, performance, and integrating complex business logic with modern user interfaces.',
    'about.stat.experience': 'Years Experience',
    'about.stat.projects': 'Projects Completed',
    'about.stat.education': 'Technical Degree',
    
    // Skills
    'skills.title': 'Technical',
    'skills.titleHighlight': 'Stack',
    'skills.subtitle': 'Technologies I work with daily to build robust and scalable solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.soft.teamwork': 'Teamwork',
    'skills.soft.teamwork.desc': 'Effective collaboration in multidisciplinary teams',
    'skills.soft.communication': 'Communication',
    'skills.soft.communication.desc': 'Clear documentation and technical presentations',
    'skills.soft.problem': 'Problem Solving',
    'skills.soft.problem.desc': 'Analytical approach to complex challenges',
    'skills.soft.adaptability': 'Adaptability',
    'skills.soft.adaptability.desc': 'Quick learning of new technologies',
    
    // Projects
    'projects.title': 'Featured',
    'projects.titleHighlight': 'Projects',
    'projects.subtitle': 'A selection of projects that demonstrate my skills and experience',
    'projects.all': 'All',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    'projects.inDev': 'In Development',
    
    // Project descriptions
    'project.compraxapp.title': 'CompraXApp - E-Commerce',
    'project.compraxapp.desc': 'Complete e-commerce platform with MercadoPago integration, admin panel, real-time notifications and promotions module. Final thesis project.',
    'project.cinehoyts.title': 'CineHoyts Clone',
    'project.cinehoyts.desc': 'Cinema ticket reservation system. User-friendly interface for seat selection and movie showtimes. Academic group project.',
    'project.banki.title': 'Banki - Digital Banking',
    'project.banki.desc': 'Digital banking application developed at NoCountry. Intuitive interface for account and transaction management with modern design.',
    'project.discord.title': 'REMATCHMIX Discord Bot',
    'project.discord.desc': 'Bot for gaming community management. Automatic team assignment system based on skill level for balanced matches.',
    'project.pizzeria.title': 'Pizzeria Formaggio',
    'project.pizzeria.desc': 'Comprehensive system for pizzeria management: digital menu, online ordering, delivery tracking and stock control.',
    
    // Education
    'education.title': 'Education &',
    'education.titleHighlight': 'Certifications',
    'education.subtitle': 'My academic background and continuous learning',
    'education.academic': 'Academic Education',
    'education.certifications': 'Certifications',
    'education.degree': 'Higher Technician in Programming',
    'education.university': 'UTN - Regional Córdoba',
    'education.period': '2022 - 2025',
    'education.thesis': 'Final Thesis: CompraXApp - E-commerce platform with payment integration',
    
    // Experience
    'experience.title': 'Work',
    'experience.titleHighlight': 'Experience',
    'experience.subtitle': 'My professional journey',
    'experience.cta': 'Looking for new opportunities',
    'experience.ctaText': "I'm looking for my first opportunity as a developer to apply my technical skills and continue growing professionally.",
    'experience.ctaButton': 'Contact Me',
    
    // Thesis
    'thesis.badge': 'Featured Project',
    'thesis.title': 'My',
    'thesis.titleHighlight': 'Thesis',
    'thesis.subtitle': 'Final career project - Higher Technician in Programming UTN Córdoba',
    'thesis.project': 'CompraXApp - E-Commerce Platform',
    'thesis.projectDesc': 'Comprehensive e-commerce system with payment integration',
    'thesis.projectFull': 'Full-stack platform that allows users to explore products, manage carts, place orders and process payments with MercadoPago. Includes complete admin panel, real-time notification system and promotions module.',
    'thesis.tech': 'Technologies used',
    'thesis.viewRepo': 'View Repository',
    'thesis.videoTitle': 'Thesis presentation video',
    'thesis.videoPlaceholder': 'Place your YouTube video here by editing the Thesis.tsx component',
    
    // Contact
    'contact.title': "Let's",
    'contact.titleHighlight': 'Talk',
    'contact.subtitle': 'Have a project in mind or want to discuss an opportunity? I\'d love to hear from you.',
    'contact.info': 'Contact Info',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.social': 'Social Networks',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with',
    'footer.and': 'and',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.thesis': 'Tesis',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Full Stack / Backend Specialist',
    'hero.description': 'Técnico Superior en Programación especializado en Backend (Java/Spring, .NET) y Arquitecturas Distribuidas. Experto en integrar lógica de negocio compleja con interfaces modernas y trabajar en ciclos completos de desarrollo (SDLC) bajo metodologías ágiles en equipos de gran escala (+30 devs).',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.contact': 'Contáctame',
    'hero.available': 'Disponible para trabajar',
    'hero.terminal.role': 'Full Stack / Backend Specialist',
    'hero.terminal.location': 'Córdoba, Argentina',
    'hero.terminal.stack': 'Java 17 • Spring Boot 3 • Angular • .NET',
    'hero.terminal.status': 'Listo para crear cosas increíbles',
    
    // About
    'about.title': 'Sobre',
    'about.titleHighlight': 'Mí',
    'about.badge': 'Full Stack / Backend Specialist',
    'about.intro': '¡Hola! Soy Leandro, un entusiasta de la programación recientemente graduado como',
    'about.degree': 'Técnico Superior en Programación',
    'about.from': 'de la',
    'about.utn': 'UTN Córdoba',
    'about.p1': 'Especializado en Backend (Java/Spring, .NET) y Arquitecturas Distribuidas. Tengo experiencia trabajando en equipos de gran escala (+30 desarrolladores) siguiendo metodologías ágiles y ciclos completos de SDLC.',
    'about.p2': 'Disfruto enfrentar problemas complejos y convertirlos en soluciones simples y elegantes. Me enfoco especialmente en la calidad del código, el rendimiento y la integración de lógica de negocio compleja con interfaces de usuario modernas.',
    'about.stat.experience': 'Años Experiencia',
    'about.stat.projects': 'Proyectos Completados',
    'about.stat.education': 'Título Técnico',
    
    // Skills
    'skills.title': 'Stack',
    'skills.titleHighlight': 'Técnico',
    'skills.subtitle': 'Tecnologías con las que trabajo diariamente para construir soluciones robustas y escalables',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    'skills.soft': 'Habilidades Blandas',
    'skills.soft.teamwork': 'Trabajo en Equipo',
    'skills.soft.teamwork.desc': 'Colaboración efectiva en equipos multidisciplinarios',
    'skills.soft.communication': 'Comunicación',
    'skills.soft.communication.desc': 'Documentación clara y presentaciones técnicas',
    'skills.soft.problem': 'Resolución de Problemas',
    'skills.soft.problem.desc': 'Enfoque analítico ante desafíos complejos',
    'skills.soft.adaptability': 'Adaptabilidad',
    'skills.soft.adaptability.desc': 'Aprendizaje rápido de nuevas tecnologías',
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.titleHighlight': 'Destacados',
    'projects.subtitle': 'Una selección de proyectos que demuestran mis habilidades y experiencia',
    'projects.all': 'Todos',
    'projects.viewCode': 'Ver Código',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.inDev': 'En Desarrollo',
    
    // Project descriptions
    'project.compraxapp.title': 'CompraXApp - E-Commerce',
    'project.compraxapp.desc': 'Plataforma completa de comercio electrónico con integración MercadoPago, panel admin, notificaciones en tiempo real y módulo de promociones. Proyecto de tesis final.',
    'project.cinehoyts.title': 'Clon CineHoyts',
    'project.cinehoyts.desc': 'Sistema de reserva de entradas de cine. Interfaz amigable para selección de asientos y horarios de películas. Proyecto grupal académico.',
    'project.banki.title': 'Banki - Banca Digital',
    'project.banki.desc': 'Aplicación de banca digital desarrollada en NoCountry. Interfaz intuitiva para gestión de cuentas y transacciones con diseño moderno.',
    'project.discord.title': 'Bot Discord REMATCHMIX',
    'project.discord.desc': 'Bot para gestión de comunidades gaming. Sistema de asignación automática de equipos según nivel de habilidad para partidas equilibradas.',
    'project.pizzeria.title': 'Pizzería Formaggio',
    'project.pizzeria.desc': 'Sistema integral para gestión de pizzería: menú digital, pedidos online, seguimiento de delivery y control de stock.',
    
    // Education
    'education.title': 'Educación y',
    'education.titleHighlight': 'Certificaciones',
    'education.subtitle': 'Mi formación académica y aprendizaje continuo',
    'education.academic': 'Formación Académica',
    'education.certifications': 'Certificaciones',
    'education.degree': 'Técnico Superior en Programación',
    'education.university': 'UTN - Regional Córdoba',
    'education.period': '2022 - 2025',
    'education.thesis': 'Tesis Final: CompraXApp - Plataforma e-commerce con integración de pagos',
    
    // Experience
    'experience.title': 'Experiencia',
    'experience.titleHighlight': 'Laboral',
    'experience.subtitle': 'Mi trayectoria profesional',
    'experience.cta': 'En búsqueda de nuevas oportunidades',
    'experience.ctaText': 'Estoy buscando mi primera oportunidad como desarrollador para aplicar mis habilidades técnicas y seguir creciendo profesionalmente.',
    'experience.ctaButton': 'Contáctame',
    
    // Thesis
    'thesis.badge': 'Proyecto Destacado',
    'thesis.title': 'Mi',
    'thesis.titleHighlight': 'Tesis',
    'thesis.subtitle': 'Proyecto final de carrera - Tecnicatura Superior en Programación UTN Córdoba',
    'thesis.project': 'CompraXApp - Plataforma E-Commerce',
    'thesis.projectDesc': 'Sistema integral de comercio electrónico con integración de pagos',
    'thesis.projectFull': 'Plataforma full-stack que permite a usuarios explorar productos, gestionar carritos, realizar pedidos y procesar pagos con MercadoPago. Incluye panel de administración completo, sistema de notificaciones en tiempo real y módulo de promociones.',
    'thesis.tech': 'Tecnologías utilizadas',
    'thesis.viewRepo': 'Ver Repositorio',
    'thesis.videoTitle': 'Video de presentación de tesis',
    'thesis.videoPlaceholder': 'Coloca tu video de YouTube aquí editando el componente Thesis.tsx',
    
    // Contact
    'contact.title': 'Hablemos',
    'contact.titleHighlight': '',
    'contact.subtitle': '¿Tienes un proyecto en mente o quieres discutir una oportunidad? Me encantaría escucharte.',
    'contact.info': 'Información de Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.social': 'Redes Sociales',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con',
    'footer.and': 'y',
  }
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
