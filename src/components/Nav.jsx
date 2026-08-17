import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'

export default function Nav() {
  const { lang, setLang, t } = useLanguage()

  const links = [
    { href: '#team', label: t('navTeam') },
    { href: '#subscribers', label: t('navSubscribers') },
    { href: '#issues', label: t('navIssues') },
    { href: '#share-your-story', label: t('navShareStory') },
    { href: '#advertise', label: t('navAdvertise') },
  ]

  return (
    <nav className="sticky top-0 z-[100] bg-[#0a1e2e] backdrop-blur-md border-b border-gold/25">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between gap-5 flex-wrap px-4 py-3 sm:px-6">
        <a
          className="flex items-center gap-2.5 min-w-0 no-underline"
          href="https://edenoceans.com"
        >
          <img src={logo} alt="EdenOceans logo" className="h-[26px] sm:h-[34px] w-auto flex-shrink-0" />
          <div className="flex flex-col leading-[1.15] min-w-0">
            <span className="font-display text-xs sm:text-sm text-cream font-semibold whitespace-nowrap">
              EdenOceans
            </span>
            <span className="text-[8px] sm:text-[10px] text-gold-light tracking-[0.08em] uppercase whitespace-nowrap">
              {t('backToSite')}
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3.5 sm:gap-6 flex-wrap order-3 sm:order-none w-full sm:w-auto justify-center pt-2 sm:pt-0 border-t border-white/10 sm:border-t-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline text-[#C9D6DD] text-[12.5px] sm:text-sm font-medium whitespace-nowrap py-1.5 px-0.5 border-b-2 border-transparent transition-colors duration-200 hover:text-gold-light hover:border-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center border border-gold rounded-[20px] overflow-hidden flex-shrink-0">
          {['en', 'fr', 'de'].map((code, i) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={` border-none py-[5px] px-[10px] sm:py-[7px] sm:px-[13px] font-sans text-[10.5px] sm:text-xs font-semibold tracking-[0.03em] cursor-pointer whitespace-nowrap transition-colors duration-200 ${
                i > 0 ? 'border-l border-gold/40' : ''
              } ${
                lang === code
                  ? 'bg-gold text-navy-deep'
                  : 'text-cream hover:bg-gold/20'
              }`}
            >
              {code.toUpperCase()}
            </button> 
          ))}
        </div>    
      </div>
    </nav>
  )
}
