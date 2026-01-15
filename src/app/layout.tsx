import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Leandro Scienza | Full Stack Developer',
  description: 'Professional portfolio of Leandro Mateo Scienza - Programming graduate from UTN Córdoba. Specialized in Backend development with Java/Spring, .NET and Distributed Architectures.',
  keywords: ['Leandro Scienza', 'Full Stack Developer', 'Backend Specialist', 'Java', 'Spring Boot', 'Angular', '.NET', 'UTN Córdoba'],
  authors: [{ name: 'Leandro Mateo Scienza' }],
  openGraph: {
    title: 'Leandro Scienza | Full Stack Developer',
    description: 'Professional portfolio of Leandro Scienza - Programming graduate from UTN Córdoba',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leandro Scienza | Full Stack Developer',
    description: 'Professional portfolio of Leandro Scienza - Programming graduate from UTN Córdoba',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-gray-950 text-white`}>
        <ThemeProvider>
          <LanguageProvider>
            {/* Particle Background */}
            <ParticleBackground />
            
            <div className="relative z-10 min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
