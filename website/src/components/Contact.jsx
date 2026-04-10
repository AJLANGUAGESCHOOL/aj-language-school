import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MessageCircle, CreditCard, Video, ArrowRight, Instagram, Facebook } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const { t } = useTranslation()

  const methods = [
    {
      icon: <MessageCircle size={22} />,
      title: t('contact.whatsapp'),
      desc: t('contact.whatsappDesc'),
      detail: '+1 415 706 7380',
      href: 'https://wa.me/14157067380',
    },
    {
      icon: <CreditCard size={22} />,
      title: t('contact.payment'),
      desc: t('contact.paymentDesc'),
      detail: 'angela.hyatt.official@gmail.com',
      href: 'mailto:angela.hyatt.official@gmail.com',
    },
    {
      icon: <Video size={22} />,
      title: t('contact.classes'),
      desc: t('contact.classesDesc'),
      detail: 'Zoom Meetings',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
            {t('nav.contact')}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy max-w-3xl mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-navy/40 text-base max-w-lg mb-16">{t('contact.subtitle')}</p>
        </ScrollReveal>

        {/* Contact methods */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {methods.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-2xl p-8 lg:p-10"
            >
              <div className="text-coral mb-5">{m.icon}</div>
              <h3 className="text-navy font-semibold mb-1">{m.title}</h3>
              <p className="text-navy/35 text-sm mb-4">{m.desc}</p>
              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-coral hover:text-coral-light transition-colors font-medium break-all"
                >
                  {m.detail}
                </a>
              ) : (
                <span className="text-sm text-coral font-medium">{m.detail}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-coral font-medium mb-8">
              {t('contact.followUs')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/aj.language.school.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-full text-sm font-medium text-navy"
              >
                <Instagram size={16} className="text-coral" />
                @aj.language.school.official
              </a>
              <a
                href="https://www.tiktok.com/@ajlanguageschool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-full text-sm font-medium text-navy"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-coral">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
                @ajlanguageschool
              </a>
              <a
                href="https://www.facebook.com/AJLanguageSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-full text-sm font-medium text-navy"
              >
                <Facebook size={16} className="text-coral" />
                AJ Language School
              </a>
              <a
                href="https://wa.me/14157067380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-full text-sm font-medium text-navy"
              >
                <MessageCircle size={16} className="text-coral" />
                +1 415 706 7380
              </a>
              <a
                href="mailto:english.ajlanguageschool@gmail.com"
                className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 transition-colors duration-300 rounded-full text-sm font-medium text-navy"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                english.ajlanguageschool@gmail.com
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <motion.a
              href="https://wa.me/14157067380"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-coral text-white rounded-full text-sm font-semibold hover:bg-coral-light transition-colors duration-300"
            >
              <MessageCircle size={18} />
              {t('contact.cta')}
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
