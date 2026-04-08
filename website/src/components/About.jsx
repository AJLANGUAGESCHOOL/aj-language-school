import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { end: 5, suffix: '', label: t('about.stat1') },
    { end: 3, suffix: 'x', label: t('about.stat2') },
    { end: 10, suffix: '', label: t('about.stat3') },
    { end: 50, suffix: '+', label: t('about.stat4') },
  ]

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
            {t('nav.about')}
          </p>
        </ScrollReveal>

        {/* Large pull-quote style heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug text-navy max-w-4xl mb-16">
            {t('about.p1')}
          </h2>
        </ScrollReveal>

        {/* Body text in a narrower column */}
        <div className="max-w-3xl mb-24">
          <ScrollReveal delay={0.2}>
            <p className="text-base lg:text-lg text-navy/50 leading-relaxed mb-6">
              {t('about.p2')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base lg:text-lg text-navy/50 leading-relaxed">
              {t('about.p3')}
            </p>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${i > 0 ? 'md:border-l md:border-warm-gray-dark' : ''} md:px-8 first:md:pl-0 last:md:pr-0`}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
