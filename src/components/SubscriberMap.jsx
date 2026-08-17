import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const regions = [
  { key: 'regionNorthAmerica', items: ['Atlanta, USA', 'Maryland, USA'] },
  { key: 'regionCaribbean', items: ['Jamaica', 'Barbados', 'St. Lucia'] },
  { key: 'regionEurope', items: ['UK', 'Germany'] },
  {
    key: 'regionAfrica',
    items: [
      'Benin Republic', 'Cameroon', "Côte d'Ivoire", 'Djibouti', 'Ethiopia',
      'Gabon', 'Ghana', 'Guinea', 'Kenya', 'Madagascar', 'Nigeria', 'Rwanda',
      'Senegal', 'Seychelles', 'Sierra Leone', 'South Africa', 'Tanzania',
      'Togo', 'Uganda',
    ],
  },
]

const subscriberCountryCodes = [
  'BJ', 'CM', 'CI', 'DJ', 'ET', 'GA', 'GH', 'GN', 'JM', 'KE', 'MG', 'NG',
  'RW', 'SN', 'SC', 'SL', 'TZ', 'TG', 'UG', 'ZA', 'BB', 'LC', 'GB', 'DE', 'US',
]

export default function SubscriberMap() {
  const { t } = useLanguage()
  const mapRef = useRef(null)
  const initialized = useRef(false)

  useEffect(() => {
    function initMap(retry = false) {
      const mapEl = mapRef.current
      if (!mapEl || typeof window.svgMap === 'undefined') {
        if (mapEl && !retry) {
          mapEl.innerHTML =
            '<p style="color:#C9D6DD;text-align:center;padding:40px 20px;font-family:\'Work Sans\',sans-serif;font-size:14px;">Map is loading — if it doesn\'t appear, please refresh the page.</p>'
        }
        return
      }
      try {
        mapEl.innerHTML = ''
        new window.svgMap({
          targetElementID: 'svgMap',
          colorMax: '#C9A24A',
          colorMin: '#C9A24A',
          colorNoData: '#153044',
          hideFlag: false,
          showZoomReset: true,
          initialZoom: 1.06,
          data: {
            data: {
              subs: {
                name: 'OCEANS Subscribers',
                format: 'Active readership',
              },
            },
            applyData: 'subs',
            values: Object.fromEntries(
              subscriberCountryCodes.map((code) => [code, { subs: 1 }])
            ),
          },
        })
        initialized.current = true
      } catch (e) {
        if (!initialized.current) {
          setTimeout(() => initMap(true), 400)
          return
        }
        mapEl.innerHTML =
          '<p style="color:#C9D6DD;text-align:center;padding:40px 20px;font-family:\'Work Sans\',sans-serif;font-size:14px;">Map could not load on this browser — see the full list of markets below.</p>'
      }
    }

    const timer = setTimeout(() => initMap(), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-navy-deep text-cream max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="subscribers">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-cream mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('subscribersHeading')}
        </h2>
        <p className="text-[#C9D6DD] text-[15.5px]">{t('subscribersSub')}</p>
      </div>

      <div className="relative max-w-[980px] mx-auto bg-[#0d2436] border border-gold/25 rounded-lg overflow-hidden">
        <div
          id="svgMap"
          ref={mapRef}
          className="w-full h-[300px] sm:h-[460px]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7 mt-8 sm:mt-12">
        {regions.map((region) => (
          <div
            key={region.key}
            className="bg-white/[0.04] border border-gold/25 rounded-md p-6"
          >
            <h3 className="text-xs tracking-[0.14em] uppercase text-gold-light mb-3.5 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              {t(region.key)}
            </h3>
            <ul className="list-none">
              {region.items.map((item) => (
                <li
                  key={item}
                  className="text-[14.5px] text-[#E4EAEC] py-1.5 border-b border-white/[0.06] break-words last:border-b-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center mt-10 text-sm text-gold-light tracking-[0.04em]">
        {t('mapStat')}
      </p>
    </section>
  )
}
