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

      {/* Mobile-first 2026 awards feature, based on the navy-and-gold concept.
          Use the REAL, approved award imagery and names, not mockup awardees. */}
      <div className="relative z-10 mt-8 sm:mt-14 w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#020D2E] text-[#FFE6AA]">
        <a
          href={`/women-of-the-year-2026/?lang=${lang}`}
          aria-label={t('awardsAria')}
          className="group relative block w-full overflow-hidden bg-[#030B2D] no-underline"
        >
          {/* Portrait award poster is never stretched or cropped across its heading on mobile. */}
          <div className="relative mx-auto h-[305px] w-full max-w-[520px] overflow-hidden sm:h-[470px] sm:max-w-none lg:h-[560px]">
            <img
              src={`${import.meta.env.BASE_URL}awards-2026/awards-landing.webp`}
              alt={t('awardsAlt')}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025] sm:object-center"
              loading="eager"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#020D2E] via-transparent to-transparent" aria-hidden="true" />
          </div>
        </a>

        <div className="relative mx-auto max-w-[920px] px-5 pb-14 pt-6 text-center sm:px-9 sm:pt-8">
          <div className="mx-auto mb-4 flex max-w-[740px] items-center gap-3 sm:gap-5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E6BC60]" />
            <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#F9D778] sm:text-[13px]">{t('awardsFeatured')}</p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E6BC60]" />
          </div>
          <h2 className="mx-auto max-w-[720px] font-display text-[28px] leading-tight text-[#FFF1C4] sm:text-[44px]">
            {t('awardsTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-relaxed text-[#F0E7DC] sm:text-[17px]">
            {t('awardsDescription')}
          </p>
          <a
            href={`/women-of-the-year-2026/?lang=${lang}`}
            className="group mx-auto mt-7 inline-flex min-h-[52px] w-full max-w-[325px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E9A824] via-[#FFE08B] to-[#E6A21D] px-6 py-3 text-[14px] font-bold text-[#081635] shadow-[0_7px_25px_rgba(204,145,23,.32)] no-underline transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#FFF5D0] sm:text-[16px]"
          >
            {t('awardsExplore')}
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </a>
          <div className="mx-auto mt-12 grid max-w-[760px] gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              { name: 'Amb. Sarah Jackson Solomon', category: 'Humanitarian & SDGs Impact', slug: 'amb-sarah-jackson-solomon', image: 'sarah-award.webp' },
              { name: 'Dr Toyin Opesanmi', category: 'Global Healthcare Impact', slug: 'dr-toyin-opesanmi', image: 'toyin-award.webp' },
            ].map((person) => (
              <a
                key={person.slug}
                href={`/women-of-the-year-2026/${person.slug}/`}
                className="group/card flex min-h-[130px] items-center gap-4 overflow-hidden rounded-[20px] border border-[#DDAE43] bg-gradient-to-br from-[#082254] via-[#051333] to-[#06153C] px-3 py-3 text-left no-underline transition-colors hover:bg-[#122D64] sm:min-h-[145px]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}awards-2026/${person.image}`}
                  alt={`Official OCEANS award for ${person.name}`}
                  loading="lazy"
                  className="h-[105px] w-[77px] shrink-0 rounded-lg border border-[#EAC16A] object-cover object-top sm:h-[120px] sm:w-[88px]"
                />
                <span className="min-w-0 flex-1 border-l border-[#C99E50]/70 pl-4">
                  <span className="block font-display text-[17px] font-semibold leading-snug text-[#FFF3D1] sm:text-[19px]">{person.name}</span>
                  <span className="mt-2 block text-[12px] italic leading-snug text-[#E7CA85] sm:text-[13px]">{person.category}</span>
                </span>
                <span className="pr-1 text-[#F7D47A] transition-transform group-hover/card:translate-x-1" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <a
            href={`/women-of-the-year-2026/?lang=${lang}`}
            className="mt-7 inline-block text-[13px] font-semibold text-[#F6D687] underline underline-offset-4 hover:text-white sm:text-[15px]"
          >
            {t('awardsExplore')}
          </a>
        </div>
        <div className="h-2 bg-gradient-to-r from-[#986019] via-[#FFE39A] to-[#986019]" aria-hidden="true" />
      </div>

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
