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
                src="/images/angela.png"
                alt={t('teacher.name')}
                className="w-full h-auto rounded-2xl object-cover"
              />
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

            <ScrollReveal direction="right" delay={0.35}>
              <p className="text-base text-navy/45 leading-relaxed mb-8">
                {t('teacher.bio2')}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-sm text-navy/30">
                Bilingual / TOEFL Expert / IELTS Expert / Business English
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
