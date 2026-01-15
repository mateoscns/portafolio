import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Thesis from '@/components/Thesis'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Thesis />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </>
  )
}
