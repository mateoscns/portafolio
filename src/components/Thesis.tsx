'use client'

import { motion } from 'framer-motion'
import { Play, GraduationCap, Award, ExternalLink, Sparkles } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Thesis() {
  return (
    <section id="thesis" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4"
            >
              <Sparkles size={16} />
              <span>Proyecto Destacado</span>
            </motion.div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="text-primary-400" size={32} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Mi <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Tesis</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Proyecto final de carrera - Tecnicatura Superior en Programación UTN Córdoba
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Video Container */}
            <div className="relative group">
              {/* Animated border glow */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-50"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
                {/* YouTube Video Embed */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <iframe 
                    className="absolute inset-0 w-full h-full z-20"
                    src="https://www.youtube.com/embed/8YJeum5KXjE" 
                    title="Video de presentación de tesis - CompraXApp"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                  
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-purple-900/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Thesis Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <AnimatedSection delay={0.3}>
                <div className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-primary-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                      <Award className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        🛒 CompraXApp - Plataforma E-Commerce
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Sistema integral de comercio electrónico con integración de pagos
                      </p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Plataforma full-stack que permite a usuarios explorar productos, gestionar carritos, 
                        realizar pedidos y procesar pagos con MercadoPago. Incluye panel de administración 
                        completo, sistema de notificaciones en tiempo real y módulo de promociones.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-primary-500/30 transition-all">
                  <h4 className="font-semibold text-white mb-4">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Angular 19', 'Spring Boot 3.3', 'SQL Server', 'MercadoPago SDK', 'JWT', 'Java 17', 'WhatsApp Business API', 'Docker'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href="https://github.com/113927-Mateo-Nielsen-Scienza/CompraXapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-primary-400 hover:border-primary-500/30 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Ver Repositorio</span>
                    </motion.a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
