'use client'

import { motion } from 'framer-motion'
import { Github, Star, Code } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

const projects = [
  {
    id: 1,
    titleKey: 'project.1.title',
    emoji: '🛒',
    descKey: 'project.1.desc',
    tags: ['Angular 19', 'Java 17', 'Spring Boot 3.3', 'SQL Server', 'JWT', 'Docker'],
    github: 'https://github.com/113927-Mateo-Nielsen-Scienza/CompraXapp',
    demo: '',
    featured: true,
  },
  {
    id: 2,
    titleKey: 'project.2.title',
    emoji: '🏘️',
    descKey: 'project.2.desc',
    tags: ['Angular 18', 'Microservicios', 'RabbitMQ', 'Prometheus', 'Grafana'],
    github: 'https://github.com/TUP-FRC-UTN/tpi-dabd-integration-app-2w1',
    demo: '',
    featured: true,
  },
  {
    id: 3,
    titleKey: 'project.3.title',
    emoji: '🎬',
    descKey: 'project.3.desc',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/mateoscns/cine',
    demo: '',
    featured: true,
  }
]

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <Code size={16} />
              <span>{t('projects.badge')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('projects.title')} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t('projects.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('projects.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-primary-500/30 transition-all duration-300 hover:bg-gray-900/80"
            >
              {/* Header with emoji and badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{project.emoji}</div>
                {project.featured && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
                    <Star size={12} fill="currentColor" />
                    <span>{t('projects.featured')}</span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {t(project.titleKey)}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {t(project.descKey)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-gray-800/80 border border-gray-700/50 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-primary-400 hover:border-primary-500/30 transition-all text-sm font-medium"
                >
                  <Github size={18} />
                  <span>{t('projects.viewGithub')}</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
        {/* View More Button */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/mateoscns"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-400 transition-all duration-300"
            >
              <Github size={20} />
              <span>{t('projects.viewMore')}</span>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
