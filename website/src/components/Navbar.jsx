import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import LanguageToggle from './LanguageToggle'

const navLinks = [
  { key: 'programs', to: 'programs' },
  { key: 'about', to: 'about' },
  { key: 'howItWorks', to: 'how-it-works' },
  { key: 'contact', to: 'contact' },
]

function useScrollDirection() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current && y > 80
      setHidden(goingDown)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hidden
}

export default function Navbar() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const hidden = useScrollDirection()

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src="/images/logo.png" alt="AJ Language School" className="h-16 lg:h-20 w-auto" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.to)}
                  className="text-sm font-medium text-navy/50 hover:text-navy transition-colors duration-300 cursor-pointer"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <LanguageToggle />
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 py-2.5 bg-coral text-white rounded-full text-sm font-medium hover:bg-coral-light transition-colors duration-300 cursor-pointer"
              >
                {t('nav.enroll')}
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-navy cursor-pointer"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <img src="/images/logo.png" alt="AJ Language School" className="h-14 w-auto" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-navy cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  onClick={() => scrollTo(link.to)}
                  className="text-left text-3xl font-serif text-navy py-3 border-b border-warm-gray-dark cursor-pointer hover:text-coral transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </motion.button>
              ))}
            </div>

            <div className="px-8 pb-10 flex items-center justify-between">
              <LanguageToggle />
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-full text-sm font-medium cursor-pointer"
              >
                {t('nav.enroll')}
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
