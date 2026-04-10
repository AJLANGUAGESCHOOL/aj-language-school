import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Massive headline */}
        <div className="mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-6"
          >
            AJ Language School
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-navy max-w-6xl"
          >
            {t('hero.tagline')}{' '}
            <span className="italic text-coral">{t('hero.taglineHighlight')}</span>
          </motion.h1>
        </div>

        {/* Logo + Photo side by side (desktop only) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex justify-center"
          >
            <img
              src="/images/logo.png"
              alt="AJ Language School"
              className="w-auto" style={{ height: '340px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease }}
          >
            <div className="relative max-w-md mx-auto">
              <img
                src="/images/angela.png"
                alt="Angela - Founder of AJ Language School"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-medium text-white bg-coral/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Live on Zoom
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: photo only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="lg:hidden mb-12"
        >
          <div className="relative">
            <img
              src="/images/angela.png"
              alt="Angela - Founder of AJ Language School"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-medium text-white bg-coral/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Live on Zoom
              </span>
            </div>
          </div>
        </motion.div>

        {/* Subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          <div className="w-12 h-px bg-pink-300 mb-8" />

          <p className="text-lg lg:text-xl text-navy/50 leading-relaxed max-w-lg mb-10">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('programs')}
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-coral text-white rounded-full font-medium text-sm hover:bg-coral-light transition-colors duration-300 cursor-pointer"
            >
              {t('hero.explore')}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>

            <a
              href="https://wa.me/14157067380"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 border border-pink-200 text-navy rounded-full font-medium text-sm hover:border-pink-400 hover:text-coral transition-colors duration-300"
            >
              <MessageCircle size={16} />
              {t('hero.whatsapp')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
