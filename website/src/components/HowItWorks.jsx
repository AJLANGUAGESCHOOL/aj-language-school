import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    { title: t('howItWorks.step1'), desc: t('howItWorks.step1Desc'), num: '01' },
    { title: t('howItWorks.step2'), desc: t('howItWorks.step2Desc'), num: '02' },
    { title: t('howItWorks.step3'), desc: t('howItWorks.step3Desc'), num: '03' },
    { title: t('howItWorks.step4'), desc: t('howItWorks.step4Desc'), num: '04' },
  ]

  return (
    <section id="how-it-works" className="py-28 md:py-40 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
            {t('nav.howItWorks')}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy max-w-2xl">
              {t('howItWorks.title')}
            </h2>
            <p className="text-navy/40 text-base max-w-md">{t('howItWorks.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-10 lg:p-14 bg-white rounded-2xl"
            >
              <span className="absolute top-8 right-8 lg:top-10 lg:right-10 text-7xl lg:text-8xl font-serif text-pink-100 leading-none select-none">
                {step.num}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-medium text-coral mb-4 block">
                  Step {step.num}
                </span>
                <h3 className="text-lg lg:text-xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-navy/40 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
