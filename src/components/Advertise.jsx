import { useLanguage } from '../i18n/LanguageContext'

const rates = [
  { labelKey: 'rateCover', price: '$250' },
  { labelKey: 'rateFull', price: '$200' },
  { labelKey: 'rateHalf', price: '$150' },
  { labelKey: 'rateQuarter', price: '$100' },
  { labelKey: 'rateClassified', priceKey: 'rateClassifiedPrice' },
]

export default function Advertise() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy-deep text-cream max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="advertise">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-cream mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('advertiseHeading')}
        </h2>
        <p className="text-[#C9D6DD] text-[15.5px]">{t('advertiseSub')}</p>
      </div>

      <div className="max-w-[560px] mx-auto mb-7 border border-gold/30 rounded-md overflow-hidden">
        {rates.map((rate) => (
          <div
            key={rate.labelKey}
            className="flex justify-between items-center py-4 px-[22px] border-b border-white/[0.08] gap-3 last:border-b-0"
          >
            <span className="text-[15px] text-cream break-words">{t(rate.labelKey)}</span>
            <span className="font-display text-lg text-gold-light whitespace-nowrap">
              {rate.priceKey ? t(rate.priceKey) : rate.price}
            </span>
          </div>
        ))}
      </div>

      <p className="max-w-[560px] mx-auto mb-8 text-center text-[13.5px] text-[#C9D6DD] break-words">
        {t('advertiseNote')}
      </p>

      <div className="text-center">
        <a
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
          href="mailto:adverts@edenoceans.com"
        >
          {t('advertiseWithUs')}
        </a>
      </div>

      <p className="text-center mt-5 text-xs text-gold-light tracking-[0.03em]">
        {t('advertiseFine')}
      </p>
    </section>
  )
}
