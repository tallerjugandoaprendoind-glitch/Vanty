'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { DICT, langFromCountry, langFromNavigator, type Lang } from '@/app/lib/dict'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (path: string) => string }
const LangContext = createContext<Ctx>({ lang: 'es', setLang: () => {}, t: (p) => p })

function resolve(obj: any, path: string): any {
  return path.split('.').reduce((a, k) => (a == null ? a : a[k]), obj)
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('vanty-lang') as Lang | null
    if (saved && DICT[saved]) { setLangState(saved); document.documentElement.lang = saved; return }
    let cancelled = false
    fetch('/api/geo')
      .then(r => r.json())
      .then(d => { if (!cancelled) { const l = langFromCountry(d?.country); setLangState(l); document.documentElement.lang = l } })
      .catch(() => { if (!cancelled) { const l = langFromNavigator(navigator.language); setLangState(l); document.documentElement.lang = l } })
    return () => { cancelled = true }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
    try { localStorage.setItem('vanty-lang', l) } catch {}
  }

  const t = (path: string) => {
    const v = resolve(DICT[lang], path)
    return (typeof v === 'string' ? v : resolve(DICT.es, path)) ?? path
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useT = () => useContext(LangContext)
