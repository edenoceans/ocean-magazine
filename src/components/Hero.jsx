import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section className="relative text-cream text-center overflow-hidden px-2 pt-3 pb-[38px] sm:px-6 sm:pt-[90px] sm:pb-[130px]"
      style={{
        background: 'radial-gradient(120% 100% at 50% -10%, #113A52 0%, #0A1E2E 55%, #060F17 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-50" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 500" preserveAspectRatio="none" className="absolute inset-0">
          <path d="M-50,120 C 200,60 350,180 600,110 S 1000,40 1250,120" stroke="#C9A24A" strokeOpacity="0.18" strokeWidth="1.5" fill="none"/>
          <path d="M-50,200 C 220,150 400,260 650,190 S 1020,110 1250,190" stroke="#C9A24A" strokeOpacity="0.12" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[850px] mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}oceans-landing-flyer.jpg`}
          alt="OCEANS E-MAGAZINE: YOUR ESSENTIAL GUIDE — official promotional flyer"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Full-artwork award feature: no nested poster card or miniature thumbnail. */}
      <a
        href={`/women-of-the-year-2026/?lang=${lang}`}
        aria-label={t('awardsAria')}
        className="group relative z-10 mx-auto mt-7 sm:mt-12 block w-full max-w-[850px] overflow-hidden no-underline shadow-[0_24px_65px_rgba(0,0,0,0.4)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#F6D68C]"
      >
        <div className="absolute inset-0 z-10 pointer-events-none border-[2px] border-[#D7AA56]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 z-10 h-[5px] bg-gradient-to-r from-[#77501A] via-[#FFE7A0] to-[#77501A]" aria-hidden="true" />
        <img
          src={`${import.meta.env.BASE_URL}awards-2026/awards-landing.webp`}
          alt={t('awardsAlt')}
          className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
          loading="eager"
        />
        <div className="relative z-20 -mt-px flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-[#05142C] via-[#102F58] to-[#05142C] px-4 py-4 sm:px-7 sm:py-5 border-t border-[#D7AA56]/70">
          <span className="text-center text-[11px] sm:text-sm font-semibold tracking-[0.06em] text-[#F9E2A5]">
            {t('awardsExplore')}
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#EFCF80] text-[#F9E2A5] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </a>

      <div className="relative z-10 mt-5 sm:mt-8 inline-flex gap-3.5 flex-wrap justify-center">
        <a
          href="#issues"
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-xs sm:text-sm font-semibold tracking-[0.02em] py-[9px] px-[15px] sm:py-[13px] sm:px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
        >
          {t('browseLibrary')}
        </a>
      </div>

      <svg
        className="absolute left-0 right-0 -bottom-px w-full h-[55px] sm:h-[140px] block"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,60 C 240,120 480,0 720,50 C 960,100 1200,20 1440,70 L1440,140 L0,140 Z" fill="#F4EFE3"/>
        <path d="M0,80 C 240,30 480,130 720,80 C 960,30 1200,110 1440,60 L1440,140 L0,140 Z" fill="#F4EFE3" opacity="0.6"/>
      </svg>
    </section>
  )
}
