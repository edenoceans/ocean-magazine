import { useLanguage } from '../i18n/LanguageContext'
import featuredFlyer from '../assets/get-featured-flyer.jpg'
import healthcareFlyer from '../assets/get-featured-healthcare-flyer.jpg'

const categories = [
  {
    key: 'Creatives & Artists',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A5.2 5.2 0 0 0 22 10.5C22 5.8 17.5 2 12 2z" />
        <circle cx="7.5" cy="10.5" r="1" />
        <circle cx="10.5" cy="7" r="1" />
        <circle cx="15" cy="7.5" r="1" />
      </svg>
    ),
  },
  {
    key: 'Startup & Small Business Owners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    key: 'Remote Consultants & Professionals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M2 20h20M9 17v3M15 17v3" />
      </svg>
    ),
  },
  {
    key: 'Product-Based Businesses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    key: 'Businesses That Ship Products',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="1" y="7" width="15" height="10" rx="1" />
        <path d="M16 10h4l3 3v4h-7z" />
        <circle cx="5.5" cy="19" r="1.6" />
        <circle cx="18.5" cy="19" r="1.6" />
      </svg>
    ),
  },
]

const whyKeys = ['Share your story.', 'Showcase what you do.', 'Build visibility for your brand.', 'Reach new audiences through OCEANS Magazine.']

export default function GetFeatured() {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="get-featured">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-navy-deep mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('Get Featured in OCEANS Magazine')}
        </h2>
        <p className="text-[#55636B] text-[15.5px]">{t('Put your story, brand, or work in front of a wider audience.')}</p>
      </div>

      <div className="max-w-[480px] mx-auto mb-12 rounded-md overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,30,46,0.35)]">
        <img src={featuredFlyer} alt="Get Featured in OCEANS Magazine flyer" className="w-full block" />
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

      <div className="max-w-[560px] mx-auto mb-12">
        <ul className="list-none">
          {whyKeys.map((key) => (
            <li key={key} className="flex items-start gap-2.5 text-[15px] text-navy-deep py-[7px] break-words">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-[3px] text-teal">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[480px] mx-auto mb-12 rounded-md overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,30,46,0.35)]">
        <img src={healthcareFlyer} alt="OCEANS Magazine healthcare feature opportunity flyer" className="w-full block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-8">
        <div className="bg-[#FBF8F0] border border-gold/30 rounded-md py-[26px] px-6">
          <h4 className="text-[13px] tracking-[0.1em] uppercase text-teal mb-1.5">
            {t('Standard Feature')}
          </h4>
          <div className="font-display text-[26px] text-navy-deep mb-3.5">$50 – $100</div>
          <p className="text-[13.5px] text-[#55636B] break-words">{t('For creatives, small businesses, consultants, and product-based brands.')}</p>
        </div>
        <div className="bg-[#FBF8F0] border border-gold/30 rounded-md py-[26px] px-6">
          <h4 className="text-[13px] tracking-[0.1em] uppercase text-teal mb-1.5">
            {t('Healthcare Feature')}
          </h4>
          <div className="font-display text-[26px] text-navy-deep mb-3.5">$100 – $250+</div>
          <p className="text-[13.5px] text-[#55636B] break-words">{t('For hospitals, clinics, and healthcare brands reaching international & medical tourism audiences.')}</p>
        </div>
      </div>

      <p className="text-center max-w-[560px] mx-auto mb-7 text-[13.5px] text-[#55636B]">
        {t('Pricing depends on the size and extent of the feature. Contact us at stories@oceansmagazine.org.')}
      </p>

      <div className="text-center">
        <a
          className="inline-flex items-center justify-center gap-2 no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[22px] rounded-[3px] transition-all duration-250 whitespace-nowrap border border-gold bg-gold text-navy-deep hover:bg-gold-light hover:border-gold-light"
          href="mailto:stories@oceansmagazine.org"
        >
          {t('Want to Be Featured? Send Us a Message')}
        </a>
      </div>
    </section>
  )
}