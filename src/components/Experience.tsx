'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    id: 1,
    position: 'Desarrollador Full Stack - Proyecto de Tesis',
    company: 'CompraXApp - Plataforma E-commerce',
    companyUrl: 'https://github.com/113927-Mateo-Nielsen-Scienza/CompraXapp',
    location: 'UTN Córdoba',
    period: '2025',
    type: 'Tesis',
    description: 'Full Stack Moderno: SPA en Angular 19 con SSR y Material. Backend API RESTful Java 17 Spring Boot 3.3, arquitectura en capas con JPA/Hibernate (SQL Server) y Lombok.',
    responsibilities: [
      'Autenticación Stateless con JWT/Spring Security',
      'Documentación Swagger y Testing (JUnit 5, Jasmine)',
      'Despliegue containerizado con Docker',
      'Integración pasarela Mercado Pago',
      'WhatsApp Business API para notificaciones',
      'Notificaciones SMTP y reportes PDF (jsPDF)',
    ],
    technologies: ['Angular 19', 'Spring Boot 3.3', 'Java 17', 'SQL Server', 'JWT', 'Docker', 'MercadoPago'],
  },
  {
    id: 2,
    position: 'Desarrollador Backend - Servicio de Mensajería',
    company: 'ERP Villa del Cóndor - Barrio Privado',
    companyUrl: '',
    location: 'UTN Córdoba',
    period: '2024 (6 meses)',
    type: 'Desarrollo Enterprise',
    description: 'Entorno corporativo con desarrollo colaborativo en equipo de 30 desarrolladores, organizados en células ágiles y coordinados mediante GitFlow estricto (Code Reviews, Pull Requests).',
    responsibilities: [
      'Arquitectura de Microservicios: Sistema distribuido de 15+ servicios (Java Spring Boot)',
      'Comunicación asíncrona mediante RabbitMQ (Event-Driven) para alta disponibilidad',
      'Implementación de API Gateway con Nginx y balanceo de carga con ProxySQL',
      'Orquestación de contenedores con Docker Compose y CI/CD con GitHub Actions',
      'Frontend en Angular 18 (RxJS, Lazy Loading)',
      'Monitoreo en tiempo real con stack Prometheus + Grafana',
      'Desarrollo del Servicio de Mensajería y Notificaciones con RabbitMQ',
      'Definición de contratos JSON y distribución multicanal (Email, Telegram, SMS, Web)',
    ],
    technologies: ['Java Spring Boot', 'RabbitMQ', 'Angular 18', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'GitHub Actions'],
  },
  {
    id: 3,
    position: 'Desarrollador Full Stack',
    company: 'Pizzería Formaggio - Sistema de Gestión',
    companyUrl: '',
    location: 'Córdoba, Argentina',
    period: '08/2022 – 12/2022',
    type: 'Software a Medida',
    description: 'Desarrollo integral: Creación de sistema de gestión de ventas, stock y facturación utilizando C# .NET y Windows Forms.',
    responsibilities: [
      'Diseño y normalización de base de datos en SQL Server',
      'Optimización de rendimiento mediante Joins complejos',
      'Control de integridad referencial',
      'Módulos de reporte de caja',
      'Gestión de usuarios por roles',
      'Sistema de alertas de stock crítico',
    ],
    technologies: ['C#', '.NET', 'Windows Forms', 'SQL Server', 'T-SQL'],
  },
  {
    id: 4,
    position: 'Atención al Cliente y Gestión de Stock',
    company: 'Bazar De Todo Un Poco',
    companyUrl: '',
    location: 'Córdoba, Argentina',
    period: '07/2019 - 08/2021',
    type: 'Part-time',
    description: 'Atención personalizada a clientes, manejo de caja y control de stock. Desarrollo de habilidades de organización, trabajo en equipo y atención al detalle.',
    responsibilities: [
      'Atención personalizada a clientes',
      'Manejo de caja y control de stock',
      'Registro de faltantes y organización de productos',
      'Cálculo y actualización de precios',
      'Trabajo en equipo para mantener entorno de venta eficiente',
    ],
    technologies: ['Gestión de Inventario', 'Atención al Cliente', 'Trabajo en Equipo'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <Briefcase size={16} />
              <span>Experiencia</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Experiencia <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Laboral</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Mi trayectoria profesional en el desarrollo de software
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 opacity-50 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={0.2 + index * 0.1}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 transform -translate-x-1.5 md:-translate-x-1/2 mt-8 z-10 shadow-lg shadow-primary-500/50" />

                {/* Date badge (mobile) */}
                <div className="md:hidden ml-6 mb-2">
                  <span className="inline-flex items-center gap-1 text-sm text-primary-400 font-medium">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-primary-500/30 transition-all flex-1 ml-6 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 font-semibold hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span className="text-primary-400 font-semibold">{exp.company}</span>
                        )}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 border border-primary-500/20 text-primary-400">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="hidden md:flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-300 mb-2">
                      Responsabilidades:
                    </p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-primary-400 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-gray-800/80 border border-gray-700/50 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Open to opportunities */}
        <AnimatedSection delay={0.5}>
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800/50">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Briefcase className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Abierto a nuevas oportunidades
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Estoy buscando activamente nuevas oportunidades laborales donde pueda 
                aportar mis conocimientos y seguir creciendo profesionalmente.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              >
                <span>Contáctame</span>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
