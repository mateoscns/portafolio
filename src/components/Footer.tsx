'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
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
              Técnico Superior en Programación graduado de la UTN Córdoba. 
              Especialista Full Stack con alta adaptabilidad y pasión por crear soluciones digitales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Links rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Conectemos
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
            © {currentYear} Leandro Scienza. Hecho con
            <Heart size={14} className="text-red-500" fill="currentColor" />
            en Argentina
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
          >
            <span>Volver arriba</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
