import Hero, { Marquee } from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import Process from '../sections/Process.jsx'
import Work, { Why } from '../sections/Work.jsx'
import Voices, { CtaBand } from '../sections/Voices.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Work />
      <Why />
      <Voices />
      <CtaBand />
      <Contact />
    </main>
  )
}
