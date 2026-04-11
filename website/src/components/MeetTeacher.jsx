import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal'

export default function MeetTeacher() {
  const { t } = useTranslation()

  return (
    <section className="py-28 md:py-40 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="/images/angela.jpg"
                alt={t('teacher.name')}
                className="w-full h-auto rounded-2xl object-cover"
              />
              <p className="text-lg text-navy font-medium mt-4 text-center flex items-center justify-center gap-2"><span className="text-2xl">📍</span> {t('teacher.location')}</p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
                {t('teacher.role')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-3">
                {t('teacher.title')}
              </h2>
              <p className="text-navy/40 text-sm mb-10">
                {t('teacher.name')} — {t('teacher.role')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <blockquote className="font-serif italic text-xl md:text-2xl text-navy/80 leading-relaxed mb-10 border-l-2 border-coral pl-6">
                {t('teacher.quote')}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.25}>
              <p className="text-base text-navy/45 leading-relaxed mb-4">
                {t('teacher.bio1')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.30}>
              <p className="text-base text-navy/45 leading-relaxed mb-4">
                {t('teacher.bio2')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.35}>
              <p className="text-base text-navy/45 leading-relaxed mb-4">
                {t('teacher.bio3')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-sm font-medium text-navy/60 mb-3">{t('teacher.expertiseTitle')}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t('teacher.expertise', { returnObjects: true }).map((item, i) => (
                  <span key={i} className="text-xs font-medium text-coral bg-coral/10 px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.45}>
              <p className="text-base text-navy/45 leading-relaxed">
                {t('teacher.bio4')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
