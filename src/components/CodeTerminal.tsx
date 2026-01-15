'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function CodeTerminal() {
  const { t } = useLanguage()
  const [displayedLines, setDisplayedLines] = useState<number>(0)
  const [currentChar, setCurrentChar] = useState<number>(0)
  const [isTyping, setIsTyping] = useState(true)

  const codeLines = [
    { text: 'const developer = {', color: 'text-purple-400' },
    { text: '  name: "Leandro Scienza",', color: 'text-gray-300' },
    { text: `  role: "${t('hero.terminal.role')}",`, color: 'text-gray-300' },
    { text: `  location: "${t('hero.terminal.location')}",`, color: 'text-gray-300' },
    { text: '  education: "UTN - TSP",', color: 'text-gray-300' },
    { text: '  available: true,', color: 'text-green-400' },
    { text: '  skills: [', color: 'text-gray-300' },
    { text: '    "Java 17", "Spring Boot", "Angular",', color: 'text-yellow-400' },
    { text: '    "C# .NET", "TypeScript", "Docker",', color: 'text-yellow-400' },
    { text: '    "SQL Server", "RabbitMQ", "Microservices"', color: 'text-yellow-400' },
    { text: '  ],', color: 'text-gray-300' },
    { text: `  passion: "${t('hero.terminal.status')}"`, color: 'text-cyan-400' },
    { text: '};', color: 'text-purple-400' },
    { text: '', color: '' },
    { text: 'developer.contactMe();', color: 'text-green-400' },
  ]

  useEffect(() => {
    if (displayedLines >= codeLines.length) {
      setIsTyping(false)
      return
    }

    const currentLine = codeLines[displayedLines].text
    
    if (currentChar < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1)
      }, 30 + Math.random() * 20)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => prev + 1)
        setCurrentChar(0)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [displayedLines, currentChar, codeLines])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Terminal window */}
      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
        {/* Terminal header */}
        <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-4 font-mono">developer.ts</span>
        </div>

        {/* Terminal content */}
        <div className="bg-gray-900/95 p-6 font-mono text-sm leading-relaxed min-h-[380px]">
          {/* Line numbers and code */}
          {codeLines.map((line, index) => (
            <div key={index} className="flex">
              <span className="text-gray-600 w-8 text-right mr-4 select-none">
                {index + 1}
              </span>
              <span className={line.color}>
                {index < displayedLines
                  ? line.text
                  : index === displayedLines
                  ? line.text.slice(0, currentChar)
                  : ''}
                {index === displayedLines && isTyping && (
                  <span className="inline-block w-2 h-5 bg-primary-400 ml-0.5 animate-pulse" />
                )}
              </span>
            </div>
          ))}
          
          {/* Blinking cursor at end */}
          {!isTyping && (
            <div className="flex mt-2">
              <span className="text-gray-600 w-8 text-right mr-4 select-none">
                {codeLines.length + 1}
              </span>
              <span className="text-green-400">
                {'>'} <span className="inline-block w-2 h-5 bg-green-400 ml-0.5 animate-pulse" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10" />
    </motion.div>
  )
}
