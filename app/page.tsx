import About from '@/components/about'
import Awards from '@/components/awards'
import Educations from '@/components/educations'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-10">
      <Intro />
      <About />
      <Educations />
      <Awards />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}
