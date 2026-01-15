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
    'projects.badge': 'Projects',
    'projects.title': 'My',
    'projects.titleHighlight': 'Projects',
    'projects.subtitle': 'A selection of projects that demonstrate my skills and experience',
    'projects.featured': 'Featured',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewMore': 'View more on GitHub',
    
    // Project descriptions
    'project.1.title': 'CompraXApp - E-Commerce',
    'project.1.desc': 'Modern platform with SSR (Server Side Rendering). JWT security implementation, MercadoPago gateway, WhatsApp Business API and Docker deployment. 2025 Thesis Project.',
    'project.2.title': 'ERP Villa del Cóndor',
    'project.2.desc': 'High availability distributed system developed by a 30-person team. Architecture of 15+ microservices with RabbitMQ. My role: multichannel async messaging service (Telegram, SMS, Email).',
    'project.3.title': 'Cinema System',
    'project.3.desc': 'Interactive customer service system for cinema with ticket booking, seat selection, show management and billboard. Developed with Java and Spring Boot.',
    
    // Education
    'education.badge': 'Education',
    'education.title': 'Academic',
    'education.titleHighlight': 'Education',
    'education.subtitle': 'My educational journey and professional training',
    'education.section': 'Academic Background',
    'education.achievements': 'Key achievements:',
    'education.learning': 'Continuous learning:',
    'education.learningText': 'Currently exploring container orchestration with Kubernetes and cloud solutions with AWS.',
    
    // Education items
    'edu.1.degree': 'Higher Technician in Programming',
    'edu.1.institution': 'National Technological University (UTN Córdoba)',
    'edu.1.period': '2022 - 2025',
    'edu.1.desc': 'Specialized in Backend (Java/Spring, .NET) and Distributed Architectures. Expert in integrating complex business logic with modern interfaces and working in complete development cycles (SDLC) under agile methodologies in large-scale teams (+30 devs).',
    'edu.1.achievement1': 'Thesis: CompraXApp - E-Commerce Platform with MercadoPago',
    'edu.1.achievement2': 'ERP development in a 30-person team',
    'edu.1.achievement3': 'SCRUM agile methodologies',
    'edu.2.degree': 'Advanced English Course',
    'edu.2.institution': 'National University of Córdoba',
    'edu.2.period': 'In progress',
    'edu.2.desc': 'Advanced English training for professional and technical communication.',
    'edu.3.degree': 'High School Diploma in Natural Sciences',
    'edu.3.institution': 'Don Orione School',
    'edu.3.period': 'Completed 2021',
    'edu.3.desc': 'Secondary education with a focus on natural sciences.',
    
    // Experience
    'experience.badge': 'Experience',
    'experience.title': 'Work',
    'experience.titleHighlight': 'Experience',
    'experience.subtitle': 'My professional journey',
    'experience.responsibilities': 'Key responsibilities:',
    'experience.technologies': 'Technologies:',
    'experience.openTo': 'Open to new opportunities',
    'experience.openToText': 'I am actively looking for new job opportunities where I can contribute my knowledge and continue growing professionally.',
    'experience.contactMe': 'Contact Me',
    
    // Experience items
    'exp.1.position': 'Full Stack Developer - Thesis Project',
    'exp.1.company': 'CompraXApp - E-commerce Platform',
    'exp.1.period': '2025',
    'exp.1.type': 'Thesis',
    'exp.1.desc': 'Modern Full Stack: Angular 19 SPA with SSR and Material. RESTful Java 17 Spring Boot 3.3 API backend, layered architecture with JPA/Hibernate (SQL Server) and Lombok.',
    'exp.1.resp1': 'Stateless authentication with JWT/Spring Security',
    'exp.1.resp2': 'Swagger documentation and Testing (JUnit 5, Jasmine)',
    'exp.1.resp3': 'Containerized deployment with Docker',
    'exp.1.resp4': 'MercadoPago payment gateway integration',
    'exp.1.resp5': 'WhatsApp Business API for notifications',
    'exp.1.resp6': 'SMTP notifications and PDF reports (jsPDF)',
    
    'exp.2.position': 'Backend Developer - Messaging Service',
    'exp.2.company': 'ERP Villa del Cóndor - Private Neighborhood',
    'exp.2.period': '2024 (6 months)',
    'exp.2.type': 'Enterprise Development',
    'exp.2.desc': 'Corporate environment with collaborative development in a 30-developer team, organized in agile cells and coordinated through strict GitFlow (Code Reviews, Pull Requests).',
    'exp.2.resp1': 'Microservices Architecture: Distributed system of 15+ services (Java Spring Boot)',
    'exp.2.resp2': 'Async communication via RabbitMQ (Event-Driven) for high availability',
    'exp.2.resp3': 'API Gateway implementation with Nginx and load balancing with ProxySQL',
    'exp.2.resp4': 'Container orchestration with Docker Compose and CI/CD with GitHub Actions',
    'exp.2.resp5': 'Angular 18 Frontend (RxJS, Lazy Loading)',
    'exp.2.resp6': 'Real-time monitoring with Prometheus + Grafana stack',
    'exp.2.resp7': 'Messaging and Notifications Service development with RabbitMQ',
    'exp.2.resp8': 'JSON contract definition and multichannel distribution (Email, Telegram, SMS, Web)',
    
    'exp.3.position': 'Full Stack Developer',
    'exp.3.company': 'Pizzería Formaggio - Management System',
    'exp.3.period': '08/2022 – 12/2022',
    'exp.3.type': 'Custom Software',
    'exp.3.desc': 'Comprehensive development: Creation of sales, inventory and billing management system using C# .NET and Windows Forms.',
    'exp.3.resp1': 'Database design and normalization in SQL Server',
    'exp.3.resp2': 'Performance optimization through complex Joins',
    'exp.3.resp3': 'Referential integrity control',
    'exp.3.resp4': 'Cash report modules',
    'exp.3.resp5': 'Role-based user management',
    'exp.3.resp6': 'Critical stock alert system',
    
    'exp.4.position': 'Customer Service and Stock Management',
    'exp.4.company': 'Bazar De Todo Un Poco',
    'exp.4.period': '07/2019 - 08/2021',
    'exp.4.type': 'Part-time',
    'exp.4.desc': 'Personalized customer service, cash handling and stock control. Development of organization, teamwork and attention to detail skills.',
    'exp.4.resp1': 'Personalized customer service',
    'exp.4.resp2': 'Cash handling and stock control',
    'exp.4.resp3': 'Shortage recording and product organization',
    'exp.4.resp4': 'Price calculation and updating',
    'exp.4.resp5': 'Teamwork to maintain efficient sales environment',
    
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
    'contact.form.send': 'Send via WhatsApp',
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
    'projects.badge': 'Proyectos',
    'projects.title': 'Mis',
    'projects.titleHighlight': 'Proyectos',
    'projects.subtitle': 'Una selección de proyectos que demuestran mis habilidades y experiencia',
    'projects.featured': 'Destacado',
    'projects.viewGithub': 'Ver en GitHub',
    'projects.viewMore': 'Ver más en GitHub',
    
    // Project descriptions
    'project.1.title': 'CompraXApp - E-Commerce',
    'project.1.desc': 'Plataforma moderna con SSR (Server Side Rendering). Implementación de seguridad con JWT, pasarela de Mercado Pago, WhatsApp Business API y despliegue en Docker. Proyecto de Tesis 2025.',
    'project.2.title': 'ERP Villa del Cóndor',
    'project.2.desc': 'Sistema distribuido de alta disponibilidad desarrollado en equipo de 30 personas. Arquitectura de 15+ microservicios con RabbitMQ. Mi rol: servicio de mensajería asíncrona multicanal (Telegram, SMS, Email).',
    'project.3.title': 'Sistema de Cine',
    'project.3.desc': 'Sistema interactivo de atención al cliente para cine con reserva de entradas, selección de asientos, gestión de funciones y cartelera. Desarrollado con Java y Spring Boot.',
    
    // Education
    'education.badge': 'Educación',
    'education.title': 'Formación',
    'education.titleHighlight': 'Académica',
    'education.subtitle': 'Mi trayectoria educativa y formación profesional',
    'education.section': 'Formación Académica',
    'education.achievements': 'Logros destacados:',
    'education.learning': 'En constante aprendizaje:',
    'education.learningText': 'Actualmente explorando orquestación de contenedores con Kubernetes y soluciones cloud con AWS.',
    
    // Education items
    'edu.1.degree': 'Técnico Superior en Programación',
    'edu.1.institution': 'Universidad Tecnológica Nacional (UTN Córdoba)',
    'edu.1.period': '2022 - 2025',
    'edu.1.desc': 'Especializado en Backend (Java/Spring, .NET) y Arquitecturas Distribuidas. Experto en integrar lógica de negocio compleja con interfaces modernas y trabajar en ciclos completos de desarrollo (SDLC) bajo metodologías ágiles en equipos de gran escala (+30 devs).',
    'edu.1.achievement1': 'Tesis: CompraXApp - Plataforma E-Commerce con MercadoPago',
    'edu.1.achievement2': 'Desarrollo de ERP en equipo de 30 personas',
    'edu.1.achievement3': 'Metodologías ágiles SCRUM',
    'edu.2.degree': 'Curso de Inglés Avanzado',
    'edu.2.institution': 'Universidad Nacional de Córdoba',
    'edu.2.period': 'En proceso',
    'edu.2.desc': 'Formación en inglés avanzado para comunicación profesional y técnica.',
    'edu.3.degree': 'Bachiller en Ciencias Naturales',
    'edu.3.institution': 'Escuela Don Orione',
    'edu.3.period': 'Finalizado 2021',
    'edu.3.desc': 'Formación secundaria con orientación en ciencias naturales.',
    
    // Experience
    'experience.badge': 'Experiencia',
    'experience.title': 'Experiencia',
    'experience.titleHighlight': 'Laboral',
    'experience.subtitle': 'Mi trayectoria profesional',
    'experience.responsibilities': 'Responsabilidades clave:',
    'experience.technologies': 'Tecnologías:',
    'experience.openTo': 'Abierto a nuevas oportunidades',
    'experience.openToText': 'Estoy buscando activamente nuevas oportunidades laborales donde pueda aportar mis conocimientos y seguir creciendo profesionalmente.',
    'experience.contactMe': 'Contáctame',
    
    // Experience items
    'exp.1.position': 'Desarrollador Full Stack - Proyecto de Tesis',
    'exp.1.company': 'CompraXApp - Plataforma E-commerce',
    'exp.1.period': '2025',
    'exp.1.type': 'Tesis',
    'exp.1.desc': 'Full Stack Moderno: SPA en Angular 19 con SSR y Material. Backend API RESTful Java 17 Spring Boot 3.3, arquitectura en capas con JPA/Hibernate (SQL Server) y Lombok.',
    'exp.1.resp1': 'Autenticación Stateless con JWT/Spring Security',
    'exp.1.resp2': 'Documentación Swagger y Testing (JUnit 5, Jasmine)',
    'exp.1.resp3': 'Despliegue containerizado con Docker',
    'exp.1.resp4': 'Integración pasarela Mercado Pago',
    'exp.1.resp5': 'WhatsApp Business API para notificaciones',
    'exp.1.resp6': 'Notificaciones SMTP y reportes PDF (jsPDF)',
    
    'exp.2.position': 'Desarrollador Backend - Servicio de Mensajería',
    'exp.2.company': 'ERP Villa del Cóndor - Barrio Privado',
    'exp.2.period': '2024 (6 meses)',
    'exp.2.type': 'Desarrollo Enterprise',
    'exp.2.desc': 'Entorno corporativo con desarrollo colaborativo en equipo de 30 desarrolladores, organizados en células ágiles y coordinados mediante GitFlow estricto (Code Reviews, Pull Requests).',
    'exp.2.resp1': 'Arquitectura de Microservicios: Sistema distribuido de 15+ servicios (Java Spring Boot)',
    'exp.2.resp2': 'Comunicación asíncrona mediante RabbitMQ (Event-Driven) para alta disponibilidad',
    'exp.2.resp3': 'Implementación de API Gateway con Nginx y balanceo de carga con ProxySQL',
    'exp.2.resp4': 'Orquestación de contenedores con Docker Compose y CI/CD con GitHub Actions',
    'exp.2.resp5': 'Frontend en Angular 18 (RxJS, Lazy Loading)',
    'exp.2.resp6': 'Monitoreo en tiempo real con stack Prometheus + Grafana',
    'exp.2.resp7': 'Desarrollo del Servicio de Mensajería y Notificaciones con RabbitMQ',
    'exp.2.resp8': 'Definición de contratos JSON y distribución multicanal (Email, Telegram, SMS, Web)',
    
    'exp.3.position': 'Desarrollador Full Stack',
    'exp.3.company': 'Pizzería Formaggio - Sistema de Gestión',
    'exp.3.period': '08/2022 – 12/2022',
    'exp.3.type': 'Software a Medida',
    'exp.3.desc': 'Desarrollo integral: Creación de sistema de gestión de ventas, stock y facturación utilizando C# .NET y Windows Forms.',
    'exp.3.resp1': 'Diseño y normalización de base de datos en SQL Server',
    'exp.3.resp2': 'Optimización de rendimiento mediante Joins complejos',
    'exp.3.resp3': 'Control de integridad referencial',
    'exp.3.resp4': 'Módulos de reporte de caja',
    'exp.3.resp5': 'Gestión de usuarios por roles',
    'exp.3.resp6': 'Sistema de alertas de stock crítico',
    
    'exp.4.position': 'Atención al Cliente y Gestión de Stock',
    'exp.4.company': 'Bazar De Todo Un Poco',
    'exp.4.period': '07/2019 - 08/2021',
    'exp.4.type': 'Part-time',
    'exp.4.desc': 'Atención personalizada a clientes, manejo de caja y control de stock. Desarrollo de habilidades de organización, trabajo en equipo y atención al detalle.',
    'exp.4.resp1': 'Atención personalizada a clientes',
    'exp.4.resp2': 'Manejo de caja y control de stock',
    'exp.4.resp3': 'Registro de faltantes y organización de productos',
    'exp.4.resp4': 'Cálculo y actualización de precios',
    'exp.4.resp5': 'Trabajo en equipo para mantener entorno de venta eficiente',
    
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
    'contact.form.send': 'Enviar por WhatsApp',
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
