import { motion } from 'framer-motion'
import { Clock, Users, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ProgramCard({ program, index }) {
  const { t } = useTranslation()

  if (program.comingSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rounded-2xl bg-warm-gray/60 p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center min-h-[280px]">
          <h3 className="text-xl font-serif text-navy/40 mb-3">{program.name}</h3>
          <p className="text-sm text-navy/30 mb-5 max-w-xs">{program.desc}</p>
          <span className="text-xs uppercase tracking-widest font-medium text-navy/30">
            {program.comingSoonLabel}
          </span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rounded-2xl bg-warm-gray hover:bg-pink-50 transition-colors duration-400 p-8 lg:p-10 h-full">
        <div className="mb-6">
          <h3 className="text-xl lg:text-2xl font-serif text-navy mb-3">
            {program.name}
          </h3>
          <p className="text-sm text-navy/45 leading-relaxed">{program.desc}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-xs text-navy/35 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {program.session}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} /> {t('programs.students')}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {t('programs.schedule')}
          </span>
        </div>

        <div className="h-px bg-pink-200/60 mb-6" />

        {/* Pricing */}
        <div className="space-y-2.5">
          {program.levels.map((level, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-navy/70">{level.name}</span>
              <span className="text-sm font-medium text-coral">
                S/ {level.price} <span className="text-navy/30 font-normal">/ {t('programs.perStudent')}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="h-px bg-pink-200/60 my-6" />

        <div className="flex items-center justify-between text-sm">
          <span className="text-navy/35">{t('programs.duration')}</span>
          <span className="font-medium text-navy">{program.duration}</span>
        </div>
      </div>
    </motion.div>
  )
}
