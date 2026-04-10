import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

export default function WhatsIncluded() {
  const { t } = useTranslation()

  const items = [
    { title: t('included.placement'), desc: t('included.placementDesc') },
    { title: t('included.book'), desc: t('included.bookDesc') },
    { title: t('included.worksheets'), desc: t('included.worksheetsDesc') },
    { title: t('included.tests'), desc: t('included.testsDesc') },
    { title: t('included.progress'), desc: t('included.progressDesc') },
    { title: t('included.corporate'), desc: t('included.corporateDesc') },
    { title: t('included.certificate'), desc: t('included.certificateDesc') },
  ]

  return (
    <section id="included" className="py-28 md:py-40 bg-pink-50/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left: heading */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
                {t('nav.included')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy leading-snug mb-4">
                {t('included.title')}
              </h2>
              <p className="text-navy/40 text-base">{t('included.subtitle')}</p>
            </div>
          </ScrollReveal>

          {/* Right: numbered list */}
          <div>
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 py-7 border-b border-navy/8 first:pt-0"
              >
                <span className="text-2xl font-serif text-navy/15 shrink-0 w-8 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm text-navy/40 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
