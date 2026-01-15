'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const education = [
  {
    id: 1,
    degree: 'Técnico Superior en Programación',
    institution: 'Universidad Tecnológica Nacional (UTN Córdoba)',
    location: 'Córdoba, Argentina',
    period: '2022 - 2025',
    description: 'Especializado en Backend (Java/Spring, .NET) y Arquitecturas Distribuidas. Experto en integrar lógica de negocio compleja con interfaces modernas y trabajar en ciclos completos de desarrollo (SDLC) bajo metodologías ágiles en equipos de gran escala (+30 devs).',
    achievements: [
      'Tesis: CompraXApp - Plataforma E-Commerce con MercadoPago',
      'Desarrollo de ERP en equipo de 30 personas',
      'Metodologías ágiles SCRUM',
    ],
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Curso de Inglés Avanzado',
    institution: 'Universidad Nacional de Córdoba',
    location: 'Córdoba, Argentina',
    period: 'En proceso',
    description: 'Formación en inglés avanzado para comunicación profesional y técnica.',
    achievements: [],
    icon: GraduationCap,
  },
  {
    id: 3,
    degree: 'Bachiller en Ciencias Naturales',
    institution: 'Escuela Don Orione',
    location: 'Córdoba, Argentina',
    period: 'Finalizado 2021',
    description: 'Formación secundaria con orientación en ciencias naturales.',
    achievements: [],
    icon: GraduationCap,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <GraduationCap size={16} />
              <span>Educación</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Formación</span> Académica
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Mi trayectoria educativa y formación profesional
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                <BookOpen className="text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Formación Académica
              </h3>
            </div>
          </AnimatedSection>

          {education.map((edu, index) => (
            <AnimatedSection key={edu.id} delay={0.3 + index * 0.1}>
              <div className="relative mb-6">
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 opacity-30" />
                )}
                
                <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50">
                  {/* Icon */}
                  <div className="absolute -left-3 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <edu.icon size={24} className="text-white" />
                  </div>

                  <div className="ml-12">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                    </div>
                    
                    <p className="text-primary-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    {edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-300">
                          Logros destacados:
                        </p>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <span className="text-primary-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Additional note */}
          <AnimatedSection delay={0.6}>
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20">
              <p className="text-sm text-gray-300">
                💡 <span className="font-medium text-white">En constante aprendizaje:</span> Actualmente 
                profundizando en arquitectura de microservicios y desarrollo cloud-native.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
