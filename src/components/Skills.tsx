'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Server, 
  Wrench,
  Layers,
  Sparkles,
  ChevronRight
} from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

const getTechStack = (t: (key: string) => string) => ({
  frontend: {
    titleKey: 'skills.cat.frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    technologies: [
      { name: 'Angular 18/19', descKey: 'skills.tech.angular', projects: ['CompraXApp', 'ERP Villa del Cóndor'] },
      { name: 'React / Next.js', descKey: 'skills.tech.react', projects: ['Portafolio'] },
      { name: 'TypeScript', descKey: 'skills.tech.typescript', projectKeys: ['skills.tech.allProjects'] },
      { name: 'Bootstrap / Material', descKey: 'skills.tech.bootstrap', projectKeys: ['skills.tech.multipleProjects'] },
      { name: 'HTML5 / CSS3 / SASS', descKey: 'skills.tech.html', projectKeys: ['skills.tech.allProjects'] },
    ]
  },
  backend: {
    titleKey: 'skills.cat.backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    technologies: [
      { name: 'Java 17 / Spring Boot 3', descKey: 'skills.tech.java', projects: ['CompraXApp', 'ERP Villa del Cóndor'] },
      { name: 'C# / .NET Core', descKey: 'skills.tech.dotnet', projects: ['Pizzería Formaggio'] },
      { name: 'Node.js / Express', descKey: 'skills.tech.node', projects: ['Bot Discord', 'APIs'] },
      { name: 'Microservices', descKey: 'skills.tech.microservices', projects: ['ERP Villa del Cóndor'] },
      { name: 'RabbitMQ', descKey: 'skills.tech.rabbitmq', projects: ['ERP Villa del Cóndor'] },
    ]
  },
  database: {
    titleKey: 'skills.cat.database',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    technologies: [
      { name: 'SQL Server (T-SQL, SPs)', descKey: 'skills.tech.sqlserver', projects: ['CompraXApp', 'Pizzería Formaggio'] },
      { name: 'MySQL / PostgreSQL', descKey: 'skills.tech.mysql', projectKeys: ['skills.tech.variousProjects'] },
      { name: 'MongoDB', descKey: 'skills.tech.mongodb', projects: ['Bot Discord'] },
      { name: 'Hibernate / JPA', descKey: 'skills.tech.hibernate', projects: ['CompraXApp', 'ERP'] },
      { name: 'Entity Framework', descKey: 'skills.tech.ef', projects: ['Pizzería Formaggio'] },
    ]
  },
  tools: {
    titleKey: 'skills.cat.tools',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    technologies: [
      { name: 'Docker (Compose)', descKey: 'skills.tech.docker', projects: ['CompraXApp', 'ERP'] },
      { name: 'GitHub Actions (CI/CD)', descKey: 'skills.tech.github', projectKeys: ['skills.tech.recentProjects'] },
      { name: 'Nginx / Linux (Bash)', descKey: 'skills.tech.nginx', projectKeys: ['skills.tech.deployments'] },
      { name: 'GitFlow', descKey: 'skills.tech.gitflow', projectKeys: ['skills.tech.allProjects'] },
      { name: 'Testing (JUnit, Mockito, Jasmine)', descKey: 'skills.tech.testing', projects: ['CompraXApp'] },
    ]
  }
})

const softSkillsKeys = [
  { key: 'skills.teamwork', icon: '👥' },
  { key: 'skills.communication', icon: '💬' },
  { key: 'skills.problemSolving', icon: '🧩' },
  { key: 'skills.adaptability', icon: '🔄' },
  { key: 'skills.fastLearning', icon: '📚' },
  { key: 'skills.leadership', icon: '🎯' },
]

export default function Skills() {
  const { t } = useLanguage()
  const techStack = getTechStack(t)
  const [activeCategory, setActiveCategory] = useState<keyof ReturnType<typeof getTechStack>>('frontend')
  const activeStack = techStack[activeCategory]

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <Layers size={16} />
              <span>{t('skills.badge')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('skills.title')} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t('skills.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('skills.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(techStack).map(([key, category]) => {
              const Icon = category.icon
              const isActive = activeCategory === key
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof ReturnType<typeof getTechStack>)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600'
                  }`}
                >
                  <Icon size={18} />
                  <span>{t(category.titleKey)}</span>
                </motion.button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeStack.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative p-5 rounded-2xl ${activeStack.bgColor} border ${activeStack.borderColor} hover:border-opacity-50 transition-all duration-300`}
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activeStack.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {tech.name}
                      </h4>
                      <ChevronRight className="text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" size={18} />
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {t(tech.descKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {('projectKeys' in tech && tech.projectKeys ? tech.projectKeys : 'projects' in tech && tech.projects ? tech.projects : []).map((project: string) => (
                        <span
                          key={project}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/50"
                        >
                          {project.startsWith('skills.') ? t(project) : project}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Soft Skills */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20">
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
              >
                <Sparkles size={16} />
                <span>{t('skills.softSkills')}</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {t('skills.beyondCode') || (t('skills.softSkills'))}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkillsKeys.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm text-gray-300 text-center font-medium">{t(item.key)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
