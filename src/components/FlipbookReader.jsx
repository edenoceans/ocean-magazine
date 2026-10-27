import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FLIPBOOKS, DEFAULT_ISSUE } from '../data/flipbooks'
import { buildZip } from '../utils/zip'
import './FlipbookReader.css'

const BASE = import.meta.env.BASE_URL || '/'
const MOBILE_QUERY = '(max-width:700px)'
const MAX_RANGE_PAGES = 30
const TURN_FALLBACK_MS = 1050

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n))
const pad = (n) => String(n).padStart(3, '0')

/* ------------------------------------------------------------------ copy */

const COPY = {
  en: {
    docTitle: 'Read September 2026 | OCEANS Magazine',
    label: 'Volume 01 · Issue 04 · September 2026',
    title: 'Read the September Edition',
    prev: 'Previous page',
    next: 'Next page',
    library: '← Library',
    shareIssue: '↗ Share issue',
    pdf: '↓ Download PDF',
    page: 'Page',
    pages: 'Pages',
    goTo: 'Go to page',
    go: 'Go',
    thumbs: '▦ Pages',
    enlarge: '⤢ Enlarge',
    reduce: '⤡ Reduce',
    fullscreen: '⛶ Full screen',
    fullscreenNA: 'Full screen is not available',
    actionsTitle: 'Share or download pages',
    actionsDesc: 'Share a direct link or save just the pages you need.',
    singleTitle: 'Current page',
    sharePage: '↗ Share this page',
    downloadPage: '↓ Download page',
    singleHint: 'Downloads the visible page as a WebP image.',
    rangeTitle: 'Page range / section',
    from: 'From',
    to: 'To',
    shareRange: '↗ Share section',
    downloadRange: '↓ Download section',
    rangeHint: `Downloads selected pages as a ZIP of numbered WebP images. Limit: ${MAX_RANGE_PAGES} pages at once.`,
    sharedSection: 'Shared section: pages',
    viewFull: 'View full magazine',
    note: 'Use the arrows, your keyboard, or swipe on a phone. Pages are loaded as needed to keep reading fast.',
    linkCopied: 'Link copied!',
    copyPrompt: 'Copy link:',
    badRange: 'Enter a valid page range',
    maxPages: `Maximum ${MAX_RANGE_PAGES} pages per download`,
    pageDownloaded: 'Page downloaded',
    sectionDownloaded: 'Section downloaded',
    downloadFailed: 'Download failed. Please try again.',
    loading: 'Loading',
    shareDocTitle: (n) => `OCEANS — page ${n}`,
    shareRangeTitle: (a, b) => `OCEANS — ${a}–${b}`,
    alt: (n) => `Magazine page ${n}`,
    naTitle: 'This edition is not available online yet',
    naBody: 'The online reader is currently available for the September 2026 editions.',
    naLink: 'Back to the library',
  },
  fr: {
    docTitle: 'Lire Septembre 2026 | Magazine OCEANS',
    label: 'Volume 01 · Numéro 04 · Septembre 2026',
    title: 'Lire le numéro de septembre',
    prev: 'Page précédente',
    next: 'Page suivante',
    library: '← Bibliothèque',
    shareIssue: '↗ Partager',
    pdf: '↓ Télécharger le PDF',
    page: 'Page',
    pages: 'Pages',
    goTo: 'Aller à la page',
    go: 'Aller',
    thumbs: '▦ Pages',
    enlarge: '⤢ Agrandir',
    reduce: '⤡ Réduire',
    fullscreen: '⛶ Plein écran',
    fullscreenNA: 'Le plein écran n’est pas disponible',
    actionsTitle: 'Partager ou télécharger des pages',
    actionsDesc: 'Partagez un lien direct ou enregistrez uniquement les pages souhaitées.',
    singleTitle: 'Page actuelle',
    sharePage: '↗ Partager la page',
    downloadPage: '↓ Télécharger la page',
    singleHint: 'Télécharge cette page au format image WebP.',
    rangeTitle: 'Section / plage de pages',
    from: 'De',
    to: 'À',
    shareRange: '↗ Partager la section',
    downloadRange: '↓ Télécharger la section',
    rangeHint: `Télécharge les pages sélectionnées dans une archive ZIP d’images WebP numérotées. Maximum : ${MAX_RANGE_PAGES} pages.`,
    sharedSection: 'Section partagée : pages',
    viewFull: 'Voir tout le magazine',
    note: 'Utilisez les flèches, votre clavier ou balayez sur un téléphone. Les pages se chargent au fur et à mesure pour une lecture rapide.',
    linkCopied: 'Lien copié !',
    copyPrompt: 'Copiez le lien :',
    badRange: 'Choisissez des pages valides',
    maxPages: `Maximum ${MAX_RANGE_PAGES} pages par téléchargement`,
    pageDownloaded: 'Page téléchargée',
    sectionDownloaded: 'Section téléchargée',
    downloadFailed: 'Erreur de téléchargement. Veuillez réessayer.',
    loading: 'Chargement',
    shareDocTitle: (n) => `OCEANS — page ${n}`,
    shareRangeTitle: (a, b) => `OCEANS — ${a}–${b}`,
    alt: (n) => `Page ${n} du magazine`,
    naTitle: 'Ce numéro n’est pas encore disponible en ligne',
    naBody: 'Le lecteur en ligne est actuellement disponible pour les numéros de septembre 2026.',
    naLink: 'Retour à la bibliothèque',
  },
}

/* ----------------------------------------------------------------- hooks */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    if (mq.addEventListener) mq.addEventListener('change', onChange)
    else mq.addListener(onChange) // older Safari
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange)
      else mq.removeListener(onChange)
    }
  }, [query])
  return matches
}

/* ------------------------------------------------------------- utilities */

function saveBlob(blob, name) {
  const href = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = href
  a.download = name
  document.body.append(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(href), 20000)
}

/* ------------------------------------------------------------- component */

export default function FlipbookReader() {
  const params = useMemo(() => new URLSearchParams(window.location.search), [])
  const key = params.get('issue') || DEFAULT_ISSUE
  const cfg = FLIPBOOKS[key]

  if (!cfg) return <NotAvailable />
  return <Reader issueKey={key} cfg={cfg} params={params} />
}

function NotAvailable() {
  const t = COPY.en
  return (
    <div className="oceans-reader">
      <div className="na">
        <h1>{t.naTitle}</h1>
        <p>{t.naBody}</p>
        <a className="pill primary" href={`${BASE}#issues`}>
          {t.naLink}
        </a>
      </div>
    </div>
  )
}

function Reader({ issueKey, cfg, params }) {
  const { total, lang } = cfg
  const t = COPY[lang]
  const isMobile = useMediaQuery(MOBILE_QUERY)

  const imgSrc = useCallback((n) => `${BASE}${cfg.folder}/${pad(n)}.webp`, [cfg.folder])

  // Shared section (?from=&to=) limits navigation to that range.
  const range = useMemo(() => {
    const from = clamp(Number(params.get('from')) || 1, 1, total)
    const to = Math.max(from, clamp(Number(params.get('to')) || total, 1, total))
    return { from, to, shared: params.has('from') && params.has('to') }
  }, [params, total])
  const minPage = range.shared ? range.from : 1
  const maxPage = range.shared ? range.to : total

  const [current, setCurrent] = useState(() => {
    const p = clamp(Number(params.get('page')) || 1, 1, total)
    return range.shared ? clamp(p, range.from, range.to) : p
  })
  const [jump, setJump] = useState(String(current))
  const [startPage, setStartPage] = useState(String(range.shared ? range.from : 1))
  const [endPage, setEndPage] = useState(String(range.shared ? range.to : Math.min(10, total)))
  const [zoom, setZoom] = useState(false)
  const [thumbsOpen, setThumbsOpen] = useState(false)
  const [thumbsBuilt, setThumbsBuilt] = useState(false)
  const [leaf, setLeaf] = useState(null)
  const [toastMsg, setToastMsg] = useState('')
  const [rangeBusy, setRangeBusy] = useState('') // '' or progress label
  const [pageBusy, setPageBusy] = useState(false)

  const stageRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const busy = useRef(false)
  const leafId = useRef(0)
  const toastTimer = useRef(null)
  const touchX = useRef(0)

  // Desktop: cover alone, then 2–3, 4–5 … ; the last even page stands alone.
  // Mobile: one page at a time.
  const spread = useCallback(
    (n) => {
      if (isMobile) return { left: 0, right: n }
      if (n === 1) return { left: 0, right: 1 }
      const left = n % 2 === 0 ? n : n - 1
      return { left, right: left + 1 <= total ? left + 1 : 0 }
    },
    [isMobile, total]
  )
  const { left, right } = spread(current)
  const lastShown = right || left

  /* ----- toast ----- */
  const toast = useCallback((msg) => {
    setToastMsg(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(''), 2000)
  }, [])
  useEffect(() => () => clearTimeout(toastTimer.current), [])

  /* ----- document title / language ----- */
  useEffect(() => {
    const prevTitle = document.title
    const prevLang = document.documentElement.lang
    document.title = cfg.month ? `${cfg.shareTitle} | OCEANS Magazine` : t.docTitle
    document.documentElement.lang = lang
    return () => {
      document.title = prevTitle
      document.documentElement.lang = prevLang
    }
  }, [t.docTitle, lang, cfg.month, cfg.shareTitle])

  /* ----- keep URL, jump box and preloading in sync with the current page ----- */
  useEffect(() => {
    setJump(String(current))
    const u = new URL(window.location.href)
    u.searchParams.set('issue', issueKey)
    u.searchParams.set('page', current)
    window.history.replaceState({}, '', u.pathname + u.search)
    for (let n = lastShown + 1; n <= Math.min(total, lastShown + 3); n++) {
      const i = new Image()
      i.src = imgSrc(n)
    }
  }, [current, lastShown, issueKey, total, imgSrc])

  /* ----- page turning ----- */
  const nextIndex = useCallback(
    (delta) => {
      if (isMobile) return current + delta
      if (delta > 0) return current === 1 ? 2 : spread(current).left + 2
      return current <= 2 ? 1 : spread(current).left - 2
    },
    [isMobile, current, spread]
  )

  const move = useCallback(
    (delta) => {
      if (busy.current) return
      const candidate = nextIndex(delta)
      if (candidate < minPage || candidate > maxPage) return

      const old = spread(current)
      const oldPage = delta > 0 ? old.right : old.left || old.right
      const ns = spread(candidate)
      const reversePage = delta > 0 ? ns.left || ns.right : ns.right

      const el = delta > 0 ? rightRef.current : old.left ? leftRef.current : rightRef.current
      const stage = stageRef.current
      if (!el || !stage) {
        setCurrent(candidate)
        return
      }
      const rect = el.getBoundingClientRect()
      const box = stage.getBoundingClientRect()

      busy.current = true
      setLeaf({
        id: ++leafId.current,
        dir: delta > 0 ? 'next' : 'prev',
        turning: false,
        style: {
          left: rect.left - box.left,
          top: rect.top - box.top,
          width: rect.width,
          height: rect.height,
        },
        front: imgSrc(oldPage),
        back: imgSrc(reversePage),
      })
      setCurrent(candidate)
    },
    [nextIndex, minPage, maxPage, spread, current, imgSrc]
  )

  // Start the CSS transition one frame after the leaf is mounted; always clean up.
  const activeLeafId = leaf ? leaf.id : null
  useEffect(() => {
    if (activeLeafId === null) return
    let r1, r2
    r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() =>
        setLeaf((l) => (l && l.id === activeLeafId ? { ...l, turning: true } : l))
      )
    })
    const timer = setTimeout(() => {
      busy.current = false
      setLeaf(null)
    }, TURN_FALLBACK_MS)
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
      clearTimeout(timer)
    }
  }, [activeLeafId])

  const finishTurn = (e) => {
    if (e.target !== e.currentTarget) return
    busy.current = false
    setLeaf(null)
  }

  /* ----- keyboard ----- */
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement && document.activeElement.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [move])

  /* ----- touch swipe ----- */
  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].screenX
  }
  const onTouchEnd = (e) => {
    const d = e.changedTouches[0].screenX - touchX.current
    if (Math.abs(d) > 55) move(d < 0 ? 1 : -1)
  }

  /* ----- navigation helpers ----- */
  const goToPage = () => {
    const n = Math.floor(Number(jump))
    if (!Number.isFinite(n)) return
    setCurrent(clamp(n, minPage, maxPage))
  }

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen()
      else await document.exitFullscreen()
    } catch {
      toast(t.fullscreenNA)
    }
  }

  const toggleThumbs = () => {
    setThumbsOpen((o) => !o)
    setThumbsBuilt(true)
  }

  /* ----- sharing ----- */
  const shareLink = (from, to) => {
    const u = new URL(window.location.href)
    u.pathname = `${BASE}read`
    u.hash = ''
    u.searchParams.set('issue', issueKey)
    u.searchParams.set('page', from)
    u.searchParams.delete('from')
    u.searchParams.delete('to')
    if (to !== undefined) {
      u.searchParams.set('from', from)
      u.searchParams.set('to', to)
    }
    return u.href
  }

  const doShare = async (url, title) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch (e) {
        if (e.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      toast(t.linkCopied)
    } catch {
      window.prompt(t.copyPrompt, url)
    }
  }

  const readRange = () => {
    const a = Math.floor(Number(startPage))
    const b = Math.floor(Number(endPage))
    if (!(a >= 1 && b >= a && b <= total)) {
      toast(t.badRange)
      return null
    }
    return [a, b]
  }

  /* ----- downloading ----- */
  const fetchPage = async (n) => {
    const res = await fetch(imgSrc(n))
    if (!res.ok) throw new Error(`Could not load page ${n}`)
    return res.blob()
  }

  const downloadPage = async () => {
    setPageBusy(true)
    try {
      saveBlob(await fetchPage(current), `OCEANS-${cfg.fileTag}-page-${pad(current)}.webp`)
      toast(t.pageDownloaded)
    } catch {
      toast(t.downloadFailed)
    } finally {
      setPageBusy(false)
    }
  }

  const downloadRange = async () => {
    const r = readRange()
    if (!r) return
    const [start, end] = r
    if (end - start + 1 > MAX_RANGE_PAGES) {
      toast(t.maxPages)
      return
    }
    try {
      const files = []
      for (let n = start; n <= end; n++) {
        setRangeBusy(`${t.loading} ${n - start + 1}/${end - start + 1}`)
        const blob = await fetchPage(n)
        files.push({ name: `page-${pad(n)}.webp`, data: new Uint8Array(await blob.arrayBuffer()) })
      }
      saveBlob(buildZip(files), `OCEANS-${cfg.fileTag}-pages-${start}-${end}.zip`)
      toast(t.sectionDownloaded)
    } catch {
      toast(t.downloadFailed)
    } finally {
      setRangeBusy('')
    }
  }

  /* ---------------------------------------------------------------- JSX */
  return (
    <div className="oceans-reader">
      <header>
        <div>
          <a className="brand" href={`${BASE}#issues`}>
            OCEANS
          </a>
          <div className="sub">MAGAZINE · EDENOCEANS</div>
        </div>
        <div className="right">
          <a className="pill" href={`${BASE}#issues`}>
            {t.library}
          </a>
          <button className="pill" onClick={() => doShare(shareLink(current), cfg.shareTitle)}>
            {t.shareIssue}
          </button>
          <a className="pill primary" href={cfg.pdfHref} target="_blank" rel="noopener noreferrer">
            {t.pdf}
          </a>
        </div>
      </header>

      <main>
        <div className="eyebrow">
          <span>{cfg.label || t.label}</span>
        </div>
        <h1 className="intro">
          <span>{cfg.title || t.title}</span>
        </h1>

        <div className={`reader${zoom ? ' zoom' : ''}`}>
          <button className="arrow" aria-label={t.prev} disabled={current <= minPage} onClick={() => move(-1)}>
            ‹
          </button>

          <div
            className="stage"
            ref={stageRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={`page left${left ? '' : ' hidden'}`} ref={leftRef}>
              {left > 0 && <img alt={t.alt(left)} src={imgSrc(left)} />}
            </div>
            <div className={`page right${right ? '' : ' hidden'}`} ref={rightRef}>
              {right > 0 && <img alt={t.alt(right)} src={imgSrc(right)} />}
            </div>

            {leaf && (
              <div
                className={`turn-sheet ${leaf.dir}${leaf.turning ? ' turning' : ''}`}
                style={leaf.style}
                onTransitionEnd={finishTurn}
              >
                <div className="turn-face front">
                  <img alt="" src={leaf.front} />
                </div>
                <div className="turn-face back">
                  <img alt="" src={leaf.back} />
                </div>
              </div>
            )}
          </div>

          <button className="arrow" aria-label={t.next} disabled={lastShown >= maxPage} onClick={() => move(1)}>
            ›
          </button>
        </div>

        <div className="toolbar">
          <span className="counter">
            {isMobile || !left
              ? `${t.page} ${isMobile ? current : lastShown} / ${total}`
              : right
                ? `${t.pages} ${left}–${right} / ${total}`
                : `${t.page} ${left} / ${total}`}
          </span>
          <label htmlFor="jump">{t.goTo}</label>
          <input
            id="jump"
            type="number"
            min={minPage}
            max={maxPage}
            value={jump}
            onChange={(e) => setJump(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && goToPage()}
          />
          <button className="pill" onClick={goToPage}>
            {t.go}
          </button>
          <button className="pill" onClick={toggleThumbs}>
            {t.thumbs}
          </button>
          <button className="pill" onClick={() => setZoom((z) => !z)}>
            {zoom ? t.reduce : t.enlarge}
          </button>
          <button className="pill" onClick={toggleFullscreen}>
            {t.fullscreen}
          </button>
        </div>

        <section className="actions-panel" aria-label={t.actionsTitle}>
          <h2>{t.actionsTitle}</h2>
          <p>{t.actionsDesc}</p>
          <div className="action-grid">
            <div className="action-group">
              <h3>{t.singleTitle}</h3>
              <div className="action-line">
                <button className="pill" onClick={() => doShare(shareLink(current), t.shareDocTitle(current))}>
                  {t.sharePage}
                </button>
                <button className="pill primary" disabled={pageBusy} onClick={downloadPage}>
                  {t.downloadPage}
                </button>
              </div>
              <small>{t.singleHint}</small>
            </div>

            <div className="action-group">
              <h3>{t.rangeTitle}</h3>
              <div className="action-line">
                <label htmlFor="startPage">{t.from}</label>
                <input
                  id="startPage"
                  type="number"
                  min="1"
                  max={total}
                  value={startPage}
                  onChange={(e) => setStartPage(e.target.value)}
                />
                <label htmlFor="endPage">{t.to}</label>
                <input
                  id="endPage"
                  type="number"
                  min="1"
                  max={total}
                  value={endPage}
                  onChange={(e) => setEndPage(e.target.value)}
                />
              </div>
              <div className="action-line" style={{ marginTop: 10 }}>
                <button
                  className="pill"
                  onClick={() => {
                    const r = readRange()
                    if (r) doShare(shareLink(r[0], r[1]), t.shareRangeTitle(r[0], r[1]))
                  }}
                >
                  {t.shareRange}
                </button>
                <button className="pill primary" disabled={!!rangeBusy} onClick={downloadRange}>
                  {rangeBusy || t.downloadRange}
                </button>
              </div>
              <small>{t.rangeHint}</small>
            </div>
          </div>
        </section>

        {range.shared && (
          <div id="sectionBanner" style={{ display: 'block' }} role="status">
            {t.sharedSection} {range.from}–{range.to} ·{' '}
            <a href={`${BASE}read?issue=${encodeURIComponent(issueKey)}&page=1`}>{t.viewFull}</a>
          </div>
        )}

        {thumbsBuilt && (
          <section id="thumbs" className={thumbsOpen ? 'open' : ''} aria-label="Page thumbnails">
            {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                data-page={n}
                className={n === current ? 'current' : ''}
                onClick={() => {
                  setCurrent(n)
                  setThumbsOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <img loading="lazy" src={imgSrc(n)} alt={t.alt(n)} />
                <small>{n}</small>
              </button>
            ))}
          </section>
        )}

        <p className="note">{t.note}</p>
      </main>

      <div id="toast" role="status" style={{ display: toastMsg ? 'block' : 'none' }}>
        {toastMsg}
      </div>
    </div>
  )
}
