import About from '@/components/about'
import Awards from '@/components/awards'
import Educations from '@/components/educations'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Certification from '@/components/certification'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-10">
      <Intro />
      <About />
      <Educations />
      <Awards />
      <Certification />
      <Projects />
      <Skills />
      <Footer />
    </main>
  )
}
