import { useLanguage } from '../i18n/LanguageContext'

export default function Partners() {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-5 pb-[60px]" id="partners">
      <div className="text-center mb-7">
        <h2 className="text-[22px] text-navy-deep font-display font-semibold">
          {t('partnersHeading')}
        </h2>
      </div>
      <div className="flex justify-center">
        <a
          href="https://napacusa.org/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2.5 py-3.5 px-[26px] border border-navy-deep/15 rounded-[4px] no-underline text-navy-deep font-display text-[17px] bg-white transition-colors duration-200 hover:border-gold"
        >
          NAPAC USA
        </a>
      </div>
    </section>
  )
}
