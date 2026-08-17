import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative text-cream text-center overflow-hidden px-6 pt-14 pb-[130px] sm:pt-[90px]"
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

      <p className="font-sans uppercase tracking-[0.28em] sm:tracking-[0.28em] text-[10px] sm:text-xs text-gold-light mb-[22px] opacity-90">
        {t('heroEyebrow')}
      </p>

      <h1
        className="font-display mb-5 leading-[0.98] break-words text-transparent bg-clip-text"
        style={{
          fontSize: 'clamp(42px, 8vw, 100px)',
          backgroundImage: 'linear-gradient(180deg, #FFFDF6 0%, #E4C878 100%)',
        }}
      >
        {t('heroTitle')}
      </h1>

      <p className="max-w-[700px] mx-auto text-[15px] sm:text-[16.5px] text-[#C9D6DD] font-normal">
        {t('heroSub')}
      </p>

      <div className="mt-6 sm:mt-8 inline-flex gap-3.5 flex-wrap justify-center">
        <a
          href="#issues"
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
        >
          {t('browseLibrary')}
        </a>
      </div>

      <svg
        className="absolute left-0 right-0 -bottom-px w-full h-[140px] block"
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
