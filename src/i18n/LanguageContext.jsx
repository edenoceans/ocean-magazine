import { createContext, useContext, useState, useMemo } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

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
