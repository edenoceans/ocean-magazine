// Editions that have a flipbook. To enable another edition later, add an entry here,
// drop its page images in public/<folder>/ and give its library card a `readHref`.
// Editions become available after their page images are uploaded to public/<folder>/.
export const DEFAULT_ISSUE = 'september-en'

export const FLIPBOOKS = {
  'september-en': {
    lang: 'en',
    total: 128,
    folder: 'september-en/pages', // -> /september-en/pages/001.webp … 128.webp
    pdfHref: 'https://rb.gy/caks55',
    fileTag: 'September-EN',
    shareTitle: 'OCEANS Magazine — September 2026',
  },
  'september-fr': {
    lang: 'fr',
    total: 128,
    folder: 'september-fr/pages',
    pdfHref: 'https://rebrand.ly/f50k90e',
    fileTag: 'September-FR',
    shareTitle: 'Magazine OCEANS — Septembre 2026',
  },
  'october-en': {
    lang: 'en',
    total: 133,
    folder: 'october-en',
    pdfHref: 'https://drive.google.com/file/d/1ozpWD7B_fgYuHTePW6mb09YdumQYD4Gk/view?usp=sharing',
    fileTag: 'October-EN',
    shareTitle: 'OCEANS Magazine — October 2026',
    month: 'October',
    label: 'Volume 02 · Issue 01 · October 2026',
    title: 'Read the October Edition',
  },
  'october-fr': {
    lang: 'fr',
    total: 133,
    folder: 'october-fr',
    pdfHref: 'https://drive.google.com/file/d/1SGNxaeOXGU8RxrYfUzuuv46T5zUlNJQA/view?usp=sharing',
    fileTag: 'October-FR',
    shareTitle: 'Magazine OCEANS — Octobre 2026',
    month: 'Octobre',
    label: 'Volume 02 · Numéro 01 · Octobre 2026',
    title: "Lire le numéro d'octobre",
  },
}
