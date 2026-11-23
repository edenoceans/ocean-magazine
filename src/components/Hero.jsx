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

      {/* A genuine edge-to-edge awards banner, not a poster inside a card. */}
      <a
        href={`/women-of-the-year-2026/?lang=${lang}`}
        aria-label={t('awardsAria')}
        className="group relative z-10 mt-8 sm:mt-14 block w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#050D32] text-left no-underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#FFE0A0]"
      >
        <div
          className="relative h-[550px] sm:h-[560px] lg:h-[650px] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2,9,35,.70), rgba(3,13,45,.15) 50%, rgba(3,10,40,.30)), url("${import.meta.env.BASE_URL}awards-2026/awards-landing.webp")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
          }}
        >
          {/* The original navy, gold, ribbon and emblem artwork spans the entire width. */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#E8C16F]/40" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-[#A66A19] via-[#FFE6A7] to-[#A66A19]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-[7px] bg-gradient-to-r from-[#7B4C13] via-[#FFE3A2] to-[#7B4C13]" aria-hidden="true" />

          {/* Desktop information sits outside the emblem rather than in a card. On phones the poster's own lettering remains the focus. */}
          <div className="absolute left-[5%] top-[18%] hidden max-w-[36%] lg:block">
            <span className="block text-xs font-semibold uppercase tracking-[.3em] text-[#FFE0A0]">{t('awardsFeatured')}</span>
            <h2 className="mt-5 font-display text-[clamp(30px,3.5vw,56px)] leading-[1.06] text-[#FFF2D1] drop-shadow-[0_3px_14px_rgba(0,0,0,.85)]">{t('awardsTitle')}</h2>
            <div className="mt-6 h-[2px] w-28 bg-[#E6B554]" aria-hidden="true" />
            <p className="mt-5 max-w-sm text-base leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.9)]">{t('awardsDescription')}</p>
          </div>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-[5%] lg:translate-x-0 z-10 inline-flex min-w-[220px] items-center justify-center gap-3 border border-[#F7D68B] bg-[#061735]/90 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-[.08em] uppercase text-[#FFE5AE] shadow-[0_5px_24px_rgba(0,0,0,.4)] transition-all duration-200 group-hover:bg-[#D7AA56] group-hover:text-[#07182C]">
            {t('awardsExplore')}
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
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
