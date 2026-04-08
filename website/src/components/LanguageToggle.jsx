import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`cursor-pointer transition-colors duration-300 ${
          isEn ? 'font-semibold text-navy' : 'text-navy/35 hover:text-navy/60'
        }`}
      >
        EN
      </button>
      <span className="text-navy/20">/</span>
      <button
        onClick={() => i18n.changeLanguage('es')}
        className={`cursor-pointer transition-colors duration-300 ${
          !isEn ? 'font-semibold text-navy' : 'text-navy/35 hover:text-navy/60'
        }`}
      >
        ES
      </button>
    </div>
  )
}
