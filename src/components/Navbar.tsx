'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Code2, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const navLinksConfig = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.thesis', href: '#thesis' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.education', href: '#education' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { language, setLanguage, t } = useLanguage()

  const navLinks = navLinksConfig.map(link => ({
    name: t(link.key),
    href: link.href
  }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = navLinksConfig.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                <Code2 className="text-primary-400" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Leandro
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800/50">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1)
                  return (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full border border-primary-500/30"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600 transition-all"
                title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <Globe size={16} />
                <span className="text-sm font-medium uppercase">{language}</span>
              </motion.button>

              {/* CV Download */}
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
              >
                <Download size={16} />
                <span>CV</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-gray-950 border-l border-gray-800 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                      <Code2 className="text-primary-400" size={20} />
                    </div>
                    <span className="text-xl font-bold text-white">Mateo</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1)
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-base font-medium py-3 px-4 rounded-xl transition-all ${
                          isActive 
                            ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' 
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    )
                  })}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-800 space-y-3">
                  {/* Language Switcher Mobile */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-800/50 border border-gray-700/50 text-gray-300 font-medium rounded-xl"
                  >
                    <Globe size={18} />
                    <span>{language === 'en' ? 'Español' : 'English'}</span>
                  </motion.button>
                  
                  <motion.a
                    href="/cv.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg"
                  >
                    <Download size={18} />
                    <span>{t('nav.cv')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
