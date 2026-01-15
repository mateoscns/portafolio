'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Terminal, Zap } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import CodeTerminal from './CodeTerminal'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <AnimatedSection>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>{t('hero.available')}</span>
              </motion.div>
            </AnimatedSection>

            {/* Main heading */}
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="block text-white">{t('hero.greeting')}</span>
                <span className="block bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Leandro Scienza
                </span>
              </h1>
            </AnimatedSection>

            {/* Role with icon */}
            <AnimatedSection delay={0.2}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                  <Terminal className="text-primary-400" size={20} />
                </div>
                <span className="text-xl md:text-2xl text-gray-300 font-light whitespace-nowrap">
                  {t('hero.role')}
                </span>
              </div>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection delay={0.3}>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 min-w-[180px] text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap size={18} />
                    {t('hero.cta.projects')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-primary-500 hover:text-primary-400 transition-all duration-300 min-w-[180px] text-center"
                >
                  {t('hero.cta.contact')}
                </motion.a>
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection delay={0.5}>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  { icon: Github, href: 'https://github.com/mateoscns', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/leandro-scienza', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:mateoscns@gmail.com', label: 'Email' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-primary-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 hover:border-primary-500/50"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Code Terminal */}
          <div className="hidden lg:block">
            <CodeTerminal />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
