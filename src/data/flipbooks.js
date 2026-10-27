// Editions that have a flipbook. To enable another edition later, add an entry here,
// drop its page images in public/<folder>/ and give its library card a `readHref`.
// Editions NOT listed here (e.g. October 2026) cannot be opened in the reader.
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
}
