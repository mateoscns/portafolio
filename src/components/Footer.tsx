'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { nameKey: 'footer.home', href: '#hero' },
    { nameKey: 'footer.about', href: '#about' },
    { nameKey: 'footer.projects', href: '#projects' },
    { nameKey: 'footer.contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mateoscns', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/leandro-mateo-scienza/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mateoscns@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                <Code2 className="text-primary-400" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Leandro
              </span>
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.nameKey}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors" />
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t('footer.connect')}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              mateoscns@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © {currentYear} Leandro Scienza. {t('footer.builtWith')}
            <Heart size={14} className="text-red-500" fill="currentColor" />
            {language === 'en' ? 'in Argentina' : 'en Argentina'}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
          >
            <span>{language === 'en' ? 'Back to top' : 'Volver arriba'}</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
