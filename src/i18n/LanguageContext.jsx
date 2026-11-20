import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const queryLang = new URLSearchParams(window.location.search).get('lang')
    if (['en', 'fr', 'de'].includes(queryLang)) return queryLang
    try {
      const stored = window.localStorage.getItem('oceans-language')
      if (['en', 'fr', 'de'].includes(stored)) return stored
    } catch { /* Storage may be unavailable in private browsing. */ }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { window.localStorage.setItem('oceans-language', lang) } catch { /* Optional preference. */ }
  }, [lang])

  const t = useMemo(() => {
    return (key) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[lang] || entry.en
    }
  }, [lang])

  const value = { lang, setLang, t }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
