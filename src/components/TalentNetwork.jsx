import { useLanguage } from '../i18n/LanguageContext'
import talentFlyer from '../assets/talent-network-flyer.jpg'

const categories = [
  {
    key: 'Executives',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    key: 'Consultants',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    key: 'Skilled Professionals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M22 21v-.8a4.8 4.8 0 0 0-3.2-4.5" />
      </svg>
    ),
  },
]

const bulletKeys = ['Global Reach, Local Impact', 'Vetted, High-Caliber Candidates', 'Industry-Specific Expertise', 'Strategic Growth Partnerships']

export default function TalentNetwork() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy-deep text-cream max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="talent-network">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-cream mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('Unlock Global Leadership & Expertise')}
        </h2>
        <p className="text-[#C9D6DD] text-[15.5px]">{t('Connect with top talent across 25 international locations.')}</p>
      </div>

      <div className="max-w-[480px] mx-auto mb-12 rounded-md overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,30,46,0.35)]">
        <img src={talentFlyer} alt="Unlock Global Leadership and Expertise flyer" className="w-full block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto mb-10">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="text-center bg-white/[0.04] border border-gold/25 rounded-md p-[22px]"
          >
            <div className="w-11 h-11 mx-auto mb-3 rounded-full border-[1.5px] border-gold flex items-center justify-center text-gold-light">
              {cat.icon}
            </div>
            <h4 className="text-sm text-cream tracking-[0.03em]">{t(cat.key)}</h4>
          </div>
        ))}
      </div>

      <p className="max-w-[620px] mx-auto mb-8 text-center text-[15.5px] leading-[1.6] text-[#E4EAEC]">
        {t('Are you hiring? Access an elite network of transformative leaders and specialized experts embedded in the vibrant regions where your business grows.')}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 max-w-[560px] mx-auto mb-9 list-none">
        {bulletKeys.map((key) => (
          <li key={key} className="relative pl-4 text-sm text-cream break-words">
            <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-gold" />
            {t(key)}
          </li>
        ))}
      </ul>

      <div className="text-center">
        <a
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
          href="mailto:info@edenoceans.com"
        >
          {t('Contact Us to Hire')}
        </a>
      </div>
    </section>
  )
}