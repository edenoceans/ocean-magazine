import { useLanguage } from '../i18n/LanguageContext'
import teamPhoto from '../assets/team-photo.jpeg'

const team = [
  { name: 'Dr Olasimbo Davidson', roleKey: 'roleEditorInChief' },
  { name: 'Nene Aderibigbe', roleKey: 'roleSeniorEditor' },
  { name: 'Monique Williams', roleKey: 'roleManagingEditor' },
  { name: 'Kenneth King', roleKey: 'roleContentDesignEditor' },
  { name: 'Loveth Chizinum', roleKey: 'roleContributingEditor' },
  { name: 'Christiana Babalola', roleKey: 'roleHealthFitnessEditor' },
  { name: 'Dr Inyang Takon', roleKey: 'rolePediatricEditor' },
  { name: 'Funmi Le Moign', roleKey: 'roleTravelLifestyleEditor' },
]

export default function EditorialTeam() {
  const { t } = useLanguage()

  return (
    <section className="max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]" id="team">
      <div className="text-center max-w-[640px] mx-auto mb-12">
        <h2 className="text-navy-deep mb-3.5" style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
          {t('teamHeading')}
        </h2>
        <p className="text-[#55636B] text-[15.5px]">{t('teamSub')}</p>
      </div>

      <div className="max-w-[880px] mx-auto mb-9 rounded-md overflow-hidden shadow-[0_20px_50px_-20px_rgba(10,30,46,0.35)]">
        <img src={teamPhoto} alt="OCEANS Magazine editorial team" className="w-full block" />
      </div>

      <div className="max-w-[400px] mx-auto mb-14 text-center py-4 px-5 border border-gold/40 rounded-[4px] bg-[#FBF8F0]">
        <div className="text-[11px] tracking-[0.14em] uppercase text-teal mb-1">
          {t('publisherLabel')}
        </div>
        <div className="font-display text-lg text-navy-deep">J. Maxum Trust</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12 max-w-[880px] mx-auto">
        {team.map((member) => (
          <div key={member.name} className="py-5 border-b border-navy-deep/10">
            <h4 className="text-[17px] text-navy-deep mb-1 break-words">{member.name}</h4>
            <span className="text-[13px] text-teal break-words">{t(member.roleKey)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
