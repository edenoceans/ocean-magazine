import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-deep text-[#9FB3BE] py-[50px] px-4 sm:px-6 pb-[34px] text-[13px]">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center gap-6 flex-wrap pb-7 border-b border-white/[0.08]">
        <a className="flex items-center gap-3 no-underline" href="https://edenoceans.com">
          <img src={logo} alt="EdenOceans logo" className="h-[30px] w-auto" />
          <span className="font-display text-gold-light text-[15px]">EdenOceans</span>
        </a>
        <div className="flex gap-6 flex-wrap">
          <a href="index.html" className="text-[#9FB3BE] no-underline text-[13px] hover:text-gold-light">
            {t('footerHome')}
          </a>
          <a href="library.html" className="text-[#9FB3BE] no-underline text-[13px] hover:text-gold-light">
            {t('footerLibrary')}
          </a>
          <a
            href="https://edenoceans.com"
            className="text-[#9FB3BE] no-underline text-[13px] hover:text-gold-light"
          >
            EdenOceans.com
          </a>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto pt-[22px] text-center leading-[1.8]">
        <div className="font-display text-gold-light text-base">OCEANS</div>
        <div>{t('footerPublication')}</div>
        <div className="opacity-75">{t('footerPublisher')}</div>
      </div>
    </footer>
  )
}
