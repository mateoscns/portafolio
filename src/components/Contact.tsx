'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Github, Linkedin, CheckCircle, MessageCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Abrir WhatsApp con mensaje pre-llenado
    const form = formRef.current
    if (form) {
      const name = (form.elements.namedItem('user_name') as HTMLInputElement)?.value || ''
      const email = (form.elements.namedItem('user_email') as HTMLInputElement)?.value || ''
      const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || ''
      const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
      
      const greeting = language === 'en' ? 'Hi Leandro, how are you?' : 'Hola Leandro, ¿cómo estás?'
      const intro = language === 'en' ? `I'm ${name}, I'm writing from your portfolio.` : `Soy ${name}, te escribo desde tu portfolio.`
      const contact = language === 'en' ? 'My contact' : 'Mi contacto'
      
      const whatsappMessage = encodeURIComponent(
        `${greeting}\n\n${intro}\n\n${subject}: ${message}\n\n${contact}: ${email}`
      )
      const whatsappUrl = `https://wa.me/5493513091448?text=${whatsappMessage}`
      
      window.open(whatsappUrl, '_blank')
      setSubmitStatus('success')
      form.reset()
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'mateoscns@gmail.com',
      href: 'mailto:mateoscns@gmail.com',
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: '+54 9 351 309-1448',
      href: 'tel:+5493513091448',
    },
    {
      icon: MapPin,
      labelKey: 'contact.location',
      value: 'Córdoba, Argentina',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mateoscns',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leandro-mateo-scienza/',
      color: 'hover:text-blue-600',
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4"
            >
              <Mail size={16} />
              <span>{t('contact.badge')}</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('contact.title')} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t('contact.titleHighlight')}</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t('contact.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('contact.info')}
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.labelKey}
                      href={item.href}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-800/50 transition-colors group"
                    >
                      <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                        <item.icon className="text-primary-400" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {t(item.labelKey)}
                        </p>
                        <p className="font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <hr className="my-6 border-gray-800" />

                {/* Social Links */}
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {t('contact.social')}
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick message */}
            <AnimatedSection delay={0.3}>
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20">
                <p className="text-sm text-gray-300">
                  🚀 <span className="font-medium text-white">{language === 'en' ? 'Quick response:' : 'Respuesta rápida:'}</span> {language === 'en' ? 'I usually respond within 24 hours. Looking forward to your message!' : 'Generalmente respondo dentro de las 24 horas. ¡Espero tu mensaje!'}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} className="lg:col-span-3">
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">
                {language === 'en' ? 'Send me a message' : 'Envíame un mensaje'}
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                      placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                      placeholder={language === 'en' ? 'your@email.com' : 'tu@email.com'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                    placeholder={language === 'en' ? 'How can I help you?' : '¿En qué puedo ayudarte?'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none"
                    placeholder={language === 'en' ? 'Tell me about your project or opportunity...' : 'Cuéntame sobre tu proyecto u oportunidad...'}
                  />
                </div>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span>{language === 'en' ? 'Opening WhatsApp! I\'ll respond soon.' : '¡Abriendo WhatsApp! Te responderé pronto.'}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span>{t('contact.form.send')}</span>
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
