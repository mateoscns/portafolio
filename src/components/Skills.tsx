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

const techStack = {
  frontend: {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    technologies: [
      { name: 'Angular 18/19', description: 'Aplicaciones empresariales con RxJS', projects: ['CompraXApp', 'ERP Villa del Cóndor'] },
      { name: 'React / Next.js', description: 'Interfaces modernas con SSR', projects: ['Portafolio'] },
      { name: 'TypeScript', description: 'Desarrollo tipado estático', projects: ['Todos mis proyectos'] },
      { name: 'Bootstrap / Material', description: 'Diseño UI profesional', projects: ['Múltiples proyectos'] },
      { name: 'HTML5 / CSS3 / SASS', description: 'Maquetación responsive', projects: ['Todos los proyectos'] },
    ]
  },
  backend: {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    technologies: [
      { name: 'Java 17 / Spring Boot 3', description: 'Security, Data, Web - APIs REST robustas', projects: ['CompraXApp', 'ERP Villa del Cóndor'] },
      { name: 'C# / .NET Core', description: 'Aplicaciones empresariales y APIs', projects: ['Pizzería Formaggio'] },
      { name: 'Node.js / Express', description: 'Servicios backend ligeros y APIs', projects: ['Bot Discord', 'APIs varias'] },
      { name: 'Microservicios', description: 'Arquitecturas distribuidas escalables', projects: ['ERP Villa del Cóndor'] },
      { name: 'RabbitMQ', description: 'Mensajería Event-Driven', projects: ['ERP Villa del Cóndor'] },
    ]
  },
  database: {
    title: 'Bases de Datos',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    technologies: [
      { name: 'SQL Server (T-SQL, SPs)', description: 'Bases de datos empresariales', projects: ['CompraXApp', 'Pizzería Formaggio'] },
      { name: 'MySQL / PostgreSQL', description: 'Bases de datos relacionales', projects: ['Proyectos varios'] },
      { name: 'MongoDB', description: 'Bases NoSQL flexibles', projects: ['Bot Discord'] },
      { name: 'Hibernate / JPA', description: 'ORM para Java', projects: ['CompraXApp', 'ERP'] },
      { name: 'Entity Framework', description: 'ORM para .NET', projects: ['Pizzería Formaggio'] },
    ]
  },
  tools: {
    title: 'DevOps & Herramientas',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    technologies: [
      { name: 'Docker (Compose)', description: 'Containerización de aplicaciones', projects: ['CompraXApp', 'ERP'] },
      { name: 'GitHub Actions (CI/CD)', description: 'Integración y despliegue continuo', projects: ['Proyectos recientes'] },
      { name: 'Nginx / Linux (Bash)', description: 'Servidor web y administración', projects: ['Despliegues'] },
      { name: 'GitFlow', description: 'Flujo de trabajo colaborativo', projects: ['Todos los proyectos'] },
      { name: 'Testing (JUnit, Mockito, Jasmine)', description: 'Tests unitarios e integración', projects: ['CompraXApp'] },
    ]
  }
}

const softSkills = [
  { skill: 'Trabajo en equipo', icon: '👥' },
  { skill: 'Comunicación', icon: '💬' },
  { skill: 'Resolución de problemas', icon: '🧩' },
  { skill: 'Adaptabilidad', icon: '🔄' },
  { skill: 'Aprendizaje rápido', icon: '📚' },
  { skill: 'Liderazgo', icon: '🎯' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof techStack>('frontend')
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
              <span>Tech Stack</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tecnologías que <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Domino</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Mi stack tecnológico, construido a través de proyectos reales y experiencia práctica
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
                  onClick={() => setActiveCategory(key as keyof typeof techStack)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.title}</span>
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
                      {tech.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tech.projects.map((project) => (
                        <span
                          key={project}
                          className="text-xs px-2 py-1 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/50"
                        >
                          {project}
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
                <span>Soft Skills</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Más allá del código
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="text-sm text-gray-300 text-center font-medium">{item.skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
