import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

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

      <a
        href="/women-of-the-year-preview.html"
        aria-label="Explore the OCEANS Women of the Year 2026 gallery"
        className="relative z-10 mx-auto mt-7 sm:mt-12 flex w-full max-w-[850px] flex-col sm:flex-row items-center gap-5 sm:gap-7 rounded-lg border border-[#D7AA56]/80 bg-[#091E3A] p-4 sm:p-5 text-left shadow-[0_15px_45px_rgba(0,0,0,0.28)] no-underline transition-all duration-200 hover:border-[#F9D88C] hover:bg-[#102E54] group"
      >
        <img
          src={`${import.meta.env.BASE_URL}awards-2026/awards-landing.webp`}
          alt="OCEANS Women of the Year 2026 official awards artwork"
          className="w-[155px] sm:w-[142px] h-auto flex-none rounded border border-[#D7AA56]/70 object-contain"
          loading="eager"
        />
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <p className="text-[#F6D68C] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em]">Featured · 2026 Awards Gallery</p>
          <h2 className="mt-2 font-display text-[23px] sm:text-[30px] font-semibold leading-tight text-[#FFF3D5]">OCEANS Women of the Year 2026</h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#D6E0EB]">Meet the remarkable women shaping the future. View their official award images and impact portfolios.</p>
          <span className="mt-4 inline-flex items-center justify-center rounded bg-[#D7AA56] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#091E3A] group-hover:bg-[#F6D68C]">
            Explore the Awardees →
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
