'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase, Code2, Rocket, Target, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t, language } = useLanguage()
  
  const stats = [
    { label: t('about.stat.experience'), value: '2+', icon: Rocket },
    { label: t('about.stat.projects'), value: '10+', icon: Target },
    { label: language === 'en' ? 'Technologies' : 'Tecnologías', value: '15+', icon: Code2 },
    { label: language === 'en' ? 'Teams' : 'Equipos', value: '5+', icon: Users },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <Code2 size={16} />
              <span>{t('about.title')} {t('about.titleHighlight')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('about.title')} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {language === 'en' ? 'A developer passionate about creating impactful solutions' : 'Un desarrollador apasionado por crear soluciones que impacten'}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Avatar Side */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated border */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-50 blur-sm"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                
                {/* Main image container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 p-1">
                  <img 
                    src="/profile.jpg" 
                    alt="Leandro Mateo Scienza - Full Stack Developer"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-sm font-medium text-white">🎓 UTN Córdoba</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <span className="text-sm font-medium text-green-400">🟢 {language === 'en' ? 'Available' : 'Disponible'}</span>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {language === 'en' ? "Hi! I'm Leandro 👋" : '¡Hola! Soy Leandro 👋'}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('about.intro')} <span className="text-primary-400 font-semibold">{t('about.degree')}</span> {t('about.from')} {t('about.utn')}.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('about.p1')}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {t('about.p2')}
                </p>
              </div>
            </AnimatedSection>

            {/* Quick Info */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                    <MapPin className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Ubicación</p>
                    <p className="font-medium text-white">Córdoba, Argentina</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Calendar className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{language === 'en' ? 'Age' : 'Edad'}</p>
                    <p className="font-medium text-white">22 {language === 'en' ? 'years' : 'años'}</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 flex items-center gap-3 col-span-2">
                  <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Briefcase className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Estado</p>
                    <p className="font-medium text-green-400">Disponible para nuevas oportunidades</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.5}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800/50 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
