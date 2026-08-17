import { useLanguage } from '../i18n/LanguageContext'
import storyFlyer from '../assets/story-flyer.jpeg'

const categories = [
  {
    key: 'catSurvivor',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
  {
    key: 'catRags',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    key: 'catCareer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    key: 'catEntrepreneur',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
  },
  {
    key: 'catPurpose',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M8 21l4-7 4 7" />
        <path d="M3 21l6-11 4 6.5" />
        <path d="M13 10.5L17 3l4 8" />
      </svg>
    ),
  },
]

const requirementKeys = ['reqName', 'reqSummary', 'reqPhoto', 'reqContact']

export default function ShareYourStory() {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="share-your-story">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-navy-deep mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('storyHeading')}
        </h2>
        <p className="text-[#55636B] text-[15.5px]">{t('storySub')}</p>
      </div>

      <div className="max-w-[480px] mx-auto mb-12 rounded-md overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,30,46,0.35)]">
        <img
          src={storyFlyer}
          alt="OCEANS Magazine - Your Story Could Inspire the World - call for submissions"
          className="w-full block"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-[1000px] mx-auto mb-12">
        {categories.map((cat) => (
          <div key={cat.key} className="text-center py-5 px-3">
            <div className="w-[46px] h-[46px] mx-auto mb-3 rounded-full border-[1.5px] border-gold flex items-center justify-center text-gold">
              {cat.icon}
            </div>
            <h4 className="text-[13.5px] text-navy-deep leading-[1.3] break-words">
              {t(cat.key)}
            </h4>
          </div>
        ))}
      </div>

      <div className="max-w-[560px] mx-auto mb-8 bg-[#FBF8F0] border border-gold/30 rounded-md py-6 px-7">
        <h4 className="text-[13px] tracking-[0.1em] uppercase text-teal mb-3.5">
          {t('requirementsHeading')}
        </h4>
        <ul className="list-none">
          {requirementKeys.map((key) => (
            <li key={key} className="text-[14.5px] text-navy-deep py-1.5 break-words">
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center max-w-[560px] mx-auto mb-8 text-sm text-teal italic">
        {t('storyIncentive')}
      </p>

      <div className="text-center">
        <a
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
          href="mailto:stories@edenoceans.com"
        >
          {t('shareYourStory')}
        </a>
      </div>
    </section>
  )
}
