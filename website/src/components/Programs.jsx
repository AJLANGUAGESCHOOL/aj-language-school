import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Briefcase, MessageSquare, Building2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import ProgramCard from './ProgramCard'

const categories = ['all', 'general', 'academic', 'professional', 'talking', 'corporate']

export default function Programs() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const programs = [
    {
      id: 'general',
      name: t('programs.general.name'),
      desc: t('programs.general.desc'),
      session: t('programs.general.session'),
      duration: t('programs.general.year'),
      icon: <BookOpen className="text-coral" size={28} />,
      levels: [
        { name: t('programs.general.basic'), price: 20 },
        { name: t('programs.general.intermediate'), price: 20 },
        { name: t('programs.general.advanced'), price: 20 },
      ],
    },
    {
      id: 'academic',
      name: t('programs.academic.name'),
      desc: t('programs.academic.desc'),
      session: t('programs.academic.session'),
      duration: t('programs.academic.months'),
      icon: <GraduationCap className="text-coral" size={28} />,
      levels: [
        { name: t('programs.academic.toefl'), price: 30 },
        { name: t('programs.academic.ielts'), price: 30 },
      ],
    },
    {
      id: 'professional',
      name: t('programs.professional.name'),
      desc: t('programs.professional.desc'),
      session: t('programs.professional.session'),
      duration: t('programs.professional.year'),
      icon: <Briefcase className="text-coral" size={28} />,
      levels: [
        { name: t('programs.professional.business'), price: 30 },
        { name: t('programs.professional.medical'), price: 30 },
        { name: t('programs.professional.tourism'), price: 30 },
        { name: t('programs.professional.it'), price: 30 },
      ],
    },
    {
      id: 'talking',
      name: t('programs.talking.name'),
      desc: t('programs.talking.desc'),
      session: t('programs.talking.session'),
      duration: t('programs.talking.enrollment'),
      icon: <MessageSquare className="text-coral" size={28} />,
      levels: [
        { name: 'The Talking Club', price: 30 },
      ],
    },
    {
      id: 'corporate',
      name: t('programs.corporate.name'),
      desc: t('programs.corporate.desc'),
      comingSoon: true,
      comingSoonLabel: t('programs.corporate.comingSoon'),
      icon: <Building2 className="text-coral" size={28} />,
    },
  ]

  const categoryLabels = {
    all: t('nav.programs'),
    general: t('programs.general.name'),
    academic: t('programs.academic.name'),
    professional: t('programs.professional.name'),
    talking: t('programs.talking.name'),
    corporate: t('programs.corporate.name'),
  }

  const filtered = active === 'all' ? programs : programs.filter((p) => p.id === active)

  return (
    <section id="programs" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
            {t('nav.programs')}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy max-w-2xl">
              {t('programs.title')}
            </h2>
            <p className="text-navy/40 text-base max-w-md">{t('programs.subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* Underline-based filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-1 mb-14 border-b border-warm-gray-dark">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-3 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  active === cat
                    ? 'text-coral'
                    : 'text-navy/30 hover:text-navy/60'
                }`}
              >
                {categoryLabels[cat]}
                {active === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
