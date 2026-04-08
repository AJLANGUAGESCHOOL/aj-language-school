import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: t('nav.programs'), id: 'programs' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.howItWorks'), id: 'how-it-works' },
    { label: t('nav.contact'), id: 'contact' },
  ]

  return (
    <footer className="bg-pink-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <img src="/images/logo.png" alt="AJ Language School" className="h-10 w-auto" />
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-navy/30 hover:text-coral transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-pink-200/60 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-navy/25">
              <a
                href="https://wa.me/14157067380"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors"
              >
                WhatsApp: +1 415 706 7380
              </a>
              <a
                href="mailto:angela.hyatt.official@gmail.com"
                className="hover:text-coral transition-colors"
              >
                angela.hyatt.official@gmail.com
              </a>
            </div>
            <p className="text-sm text-navy/20">
              &copy; {new Date().getFullYear()} AJ Language School. {t('footer.rights')}
            </p>
          </div>

          <p className="mt-8 font-serif italic text-navy/15 text-sm">
            "{t('footer.tagline')}"
          </p>
        </div>
      </div>
    </footer>
  )
}
