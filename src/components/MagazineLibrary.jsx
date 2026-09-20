import { useLanguage } from "../i18n/LanguageContext";
import coverJune2026 from "../assets/cover-june-2026.jpeg";
import coverJuly2026En from "../assets/cover-july-2026-en.jpeg";
import coverJuly2026Fr from "../assets/cover-july-2026-fr.jpeg";
import coverAugust2026En from "../assets/cover-august-2026-en.jpeg";
import coverAugust2026Fr from "../assets/cover-august-2026-fr.jpeg";
import coverSeptember2026En from "../assets/cover-september-2026-en.jpg";
import coverSeptember2026Fr from "../assets/cover-september-2026-fr.jpg";
import coverSeptember2026De from "../assets/cover-september-2026-de.jpg";

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[15px] h-[15px] flex-shrink-0"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export default function MagazineLibrary() {
  const { t } = useLanguage();

  const issues = [
    {
      key: "june-2026",
      quarterTag: "June 2026",
      cover: coverJune2026,
      coverAlt: "OCEANS Magazine June 2026 cover",
      vol: "June Edition",
      title: "The Secret to Happiness",
      body: "Slow travel, sailing to success, funding your next big idea, and the downsides of passion as a business model.",
      href: "https://drive.google.com/file/d/1CWtyZ098FRVvyqEzq8j70AA_F2WiAPz7/view?usp=sharing",
      downloadLabel: "Download PDF",
    },
    {
      key: "july-2026-en",
      quarterTag: "July 2026",
      langTag: "EN",
      cover: coverJuly2026En,
      coverAlt: "OCEANS Magazine July 2026 cover, English edition",
      vol: "July Edition · Vol. 03",
      title: "The Audacity to Rise",
      body: "Ndileka Mandela on wisdom and leadership, Africa-diaspora business synergy, and predators in the workplace.",
      href: "https://drive.google.com/file/d/1GQc3hBPQxiQkZ7dauanQkeJIX4Hbqu_X/view?usp=sharing",
      downloadLabel: "Download PDF",
    },
    {
      key: "july-2026-fr",
      quarterTag: "Juillet 2026",
      langTag: "FR",
      cover: coverJuly2026Fr,
      coverAlt:
        "Couverture du magazine OCEANS, Juillet 2026, édition française",
      vol: "Édition de Juillet · Vol. 03",
      title: "L'Audace de s'Élever",
      body: "Ndileka Mandela, la synergie affaires Afrique-Diaspora, et les prédateurs sur le lieu de travail.",
      href: "https://drive.google.com/file/d/1fVF4CUdF1b34bE3Qi0Z9MyOwzJwtQE9y/view?usp=sharing",
      downloadLabel: "Télécharger le PDF",
    },
    {
      key: "august-2026-en",
      quarterTag: "August 2026",
      langTag: "EN",
      cover: coverAugust2026En,
      coverAlt: "OCEANS Magazine August 2026 cover, English edition, Vol. 04",
      vol: "August Edition · Vol. 01, Issue 03",
      titleKey: "augustTitle",
      bodyKey: "augustBody",
      href: "https://forms.gle/cDXejgB4SV5wmZsm7",
      downloadKey: "downloadPdf",
    },
    {
      key: "august-2026-fr",
      quarterTag: "Août 2026",
      langTag: "FR",
      cover: coverAugust2026Fr,
      coverAlt:
        "Couverture du magazine OCEANS, Août 2026, édition française, Vol. 04",
      vol: "Édition d'Août · Vol. 01, Numéro 03",
      titleKey: "L'Avenir de l'Afrique est Vert",
      bodyKey:
        "Faire naître la renaissance agricole — ainsi que le parcours de Karen Hendrickson vers le Ghana, et bien plus dans ce numéro.",
      href: "https://forms.gle/aqGzcXxR8vCyKHt88",
      downloadKey: "downloadPdf",
    },
    {
      key: "september-2026-en",
      quarterTag: "Septmber 2026",
      langTag: "EN",
      cover: coverSeptember2026En,
      coverAlt:
        "OCEANS Magazine September 2026 cover, English edition, Vol. 01 Issue 04",
      vol: "September Edition · Vol. 01, Issue 04",
      titleKey: "Exclusive: State Rep. Carol Kazeem",
      bodyKey:
        "Plus the injustice widows face across Africa, surviving a business-destroying fire, and the art of saying no.",
      href: "https://drive.google.com/file/d/1AXEIPFGCAgZX8z-KNyJdq12v2jRZ8oB6/view?usp=sharing",
      downloadKey: "downloadPdf",
    },
    {
      key: "september-2026-fr",
      quarterTag: "Septmbre 2026",
      langTag: "FR",
      cover: coverSeptember2026Fr,
      coverAlt:
        "Couverture du magazine OCEANS, Septembre 2026, édition française, Vol. 01 Numéro 04",
      vol: "Édition de Septembre · Vol. 01, Numéro 04",
      titleKey: "Exclusif : Députée d'État Carol Kazeem",
      bodyKey:
        "Ainsi que l'injustice faite aux veuves en Afrique, survivre à un incendie dévastateur, et l'art de dire non.",
      href: "https://drive.google.com/file/d/1AEeMG_TahyBpx8z0goyEuDk4rS0RaOF-/view?usp=sharing",
      downloadKey: "Télécharger le PDF",
    },
    {
      key: "september-2026-de",
      quarterTag: "Septmber 2026",
      langTag: "DE",
      cover: coverSeptember2026De,
      coverAlt:
        "OCEANS Magazin Cover September 2026, deutsche Ausgabe, Vol. 01 Ausgabe 04",
      vol: "September-Ausgabe · Vol. 01, Ausgabe 04",
      titleKey: "Exklusiv: Staatsabgeordnete Carol Kazeem",
      bodyKey:
        "Außerdem die Ungerechtigkeit gegenüber Witwen in Afrika, das Überleben eines verheerenden Feuers, und die Kunst, Nein zu sagen.",
      href: "https://rebrand.ly/qw94xyi",
      downloadKey: "PDF herunterladen",
    },
  ];

  return (
    <section
      className="max-w-[1180px] mx-auto px-4 py-14 sm:px-6 sm:py-[90px]"
      id="issues"
    >
      <div className="flex justify-between items-end gap-6 mb-11 flex-wrap">
        <h2
          className="text-navy-deep"
          style={{ fontSize: "clamp(26px, 3.4vw, 34px)" }}
        >
          {t("issuesHeading")}
        </h2>
        <span className="text-[13px] tracking-[0.14em] uppercase text-teal font-medium pb-1.5 whitespace-nowrap">
          {t("issuesCount")}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {issues.map((issue) => (
          <article
            key={issue.key}
            className="bg-white rounded-[4px] overflow-hidden shadow-[0_1px_2px_rgba(10,30,46,0.06),0_18px_40px_-20px_rgba(10,30,46,0.25)] flex flex-col relative group transition-transform duration-[350ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(10,30,46,0.08),0_30px_54px_-22px_rgba(10,30,46,0.35)]"
          >
            <div
              className="relative overflow-hidden bg-navy-deep"
              style={{ aspectRatio: "3 / 4" }}
            >
              <span className="absolute top-3.5 left-3.5 max-w-[calc(100%-90px)] bg-navy-deep/70 backdrop-blur-sm text-gold-light text-[11px] tracking-[0.1em] uppercase py-1.5 px-[11px] rounded-[2px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {issue.quarterTag}
              </span>
              {issue.langTag && (
                <span className="absolute top-3.5 right-3.5 bg-gold text-navy-deep text-[11px] tracking-[0.08em] uppercase py-1.5 px-2.5 rounded-[2px] font-semibold whitespace-nowrap">
                  {issue.langTag}
                </span>
              )}
              <img
                src={issue.cover}
                alt={issue.coverAlt}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
              />
            </div>
            <div className="p-[22px] pt-[22px] pb-6 flex flex-col gap-1 flex-1">
              <span className="text-xs text-teal tracking-[0.08em] uppercase font-semibold break-words">
                {issue.vol}
              </span>
              <h3 className="text-[21px] text-navy-deep my-1 mb-2 break-words">
                {issue.titleKey ? t(issue.titleKey) : issue.title}
              </h3>
              <p className="text-sm text-[#55636B] flex-1 mb-[18px] break-words">
                {issue.bodyKey ? t(issue.bodyKey) : issue.body}
              </p>
              <a
                className="inline-flex items-center justify-center gap-2 bg-navy-deep text-cream no-underline font-sans text-sm font-semibold tracking-[0.02em] py-[13px] px-[18px] rounded-[2px] transition-colors duration-250 border border-navy-deep whitespace-normal text-center hover:bg-gold hover:border-gold hover:text-navy-deep"
                href={issue.href}
                target="_blank"
                rel="noopener"
              >
                <DownloadIcon />
                {issue.downloadKey ? t(issue.downloadKey) : issue.downloadLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
