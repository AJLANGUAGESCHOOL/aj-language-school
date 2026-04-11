import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import WhatsIncluded from './components/WhatsIncluded'
import HowItWorks from './components/HowItWorks'
import MeetTeacher from './components/MeetTeacher'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-pink-400 origin-left z-[60]"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <WhatsIncluded />
        <HowItWorks />
        <MeetTeacher />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
