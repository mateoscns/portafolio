'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      positionKey: 'exp.1.position',
      companyKey: 'exp.1.company',
      companyUrl: 'https://github.com/113927-Mateo-Nielsen-Scienza/CompraXapp',
      location: 'UTN Córdoba',
      periodKey: 'exp.1.period',
      typeKey: 'exp.1.type',
      descKey: 'exp.1.desc',
      responsibilities: [
        'exp.1.resp1',
        'exp.1.resp2',
        'exp.1.resp3',
        'exp.1.resp4',
        'exp.1.resp5',
        'exp.1.resp6',
      ],
      technologies: ['Angular 19', 'Spring Boot 3.3', 'Java 17', 'SQL Server', 'JWT', 'Docker', 'MercadoPago'],
    },
    {
      id: 2,
      positionKey: 'exp.2.position',
      companyKey: 'exp.2.company',
      companyUrl: '',
      location: 'UTN Córdoba',
      periodKey: 'exp.2.period',
      typeKey: 'exp.2.type',
      descKey: 'exp.2.desc',
      responsibilities: [
        'exp.2.resp1',
        'exp.2.resp2',
        'exp.2.resp3',
        'exp.2.resp4',
        'exp.2.resp5',
        'exp.2.resp6',
        'exp.2.resp7',
        'exp.2.resp8',
      ],
      technologies: ['Java Spring Boot', 'RabbitMQ', 'Angular 18', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'GitHub Actions'],
    },
    {
      id: 3,
      positionKey: 'exp.3.position',
      companyKey: 'exp.3.company',
      companyUrl: '',
      location: 'Córdoba, Argentina',
      periodKey: 'exp.3.period',
      typeKey: 'exp.3.type',
      descKey: 'exp.3.desc',
      responsibilities: [
        'exp.3.resp1',
        'exp.3.resp2',
        'exp.3.resp3',
        'exp.3.resp4',
        'exp.3.resp5',
        'exp.3.resp6',
      ],
      technologies: ['C#', '.NET', 'Windows Forms', 'SQL Server', 'T-SQL'],
    },
    {
      id: 4,
      positionKey: 'exp.4.position',
      companyKey: 'exp.4.company',
      companyUrl: '',
      location: 'Córdoba, Argentina',
      periodKey: 'exp.4.period',
      typeKey: 'exp.4.type',
      descKey: 'exp.4.desc',
      responsibilities: [
        'exp.4.resp1',
        'exp.4.resp2',
        'exp.4.resp3',
        'exp.4.resp4',
        'exp.4.resp5',
      ],
      technologies: [],
    },
  ]

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
              <span>{t('experience.badge')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('experience.title')} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t('experience.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('experience.subtitle')}
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
                    {t(exp.periodKey)}
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
                        {t(exp.positionKey)}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 font-semibold hover:underline flex items-center gap-1"
                          >
                            {t(exp.companyKey)}
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <span className="text-primary-400 font-semibold">{t(exp.companyKey)}</span>
                        )}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 border border-primary-500/20 text-primary-400">
                      {t(exp.typeKey)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="hidden md:flex items-center gap-1">
                      <Calendar size={14} />
                      {t(exp.periodKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {t(exp.descKey)}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-300 mb-2">
                      {t('experience.responsibilities')}
                    </p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((respKey, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-primary-400 mt-1">•</span>
                          {t(respKey)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies.length > 0 && (
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
                  )}
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
                  {t('experience.openTo')}
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                {t('experience.openToText')}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              >
                <span>{t('experience.contactMe')}</span>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
