'use client'

import { useEffect, useState } from 'react'
import { Check, CreditCard, Globe } from 'lucide-react'
import { PLANS, REGIONS, REGION_ORDER, countryToRegion, regionFromLanguage, type RegionKey } from '@/app/lib/pricing'
import { WA_URL } from '@/app/lib/site'

export default function PricingABA() {
  const [region, setRegion] = useState<RegionKey>('sudamerica')
  const [billing, setBilling] = useState<'m' | 'y'>('m')
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('vanty-region') as RegionKey | null
    if (saved && REGIONS[saved]) { setRegion(saved); setAuto(false); return }
    let cancelled = false
    fetch('/api/geo')
      .then(r => r.json())
      .then(d => { if (!cancelled) setRegion(countryToRegion(d?.country)) })
      .catch(() => { if (!cancelled) setRegion(regionFromLanguage(navigator.language)) })
    return () => { cancelled = true }
  }, [])

  const choose = (r: RegionKey) => { setRegion(r); setAuto(false); localStorage.setItem('vanty-region', r) }

  const R = REGIONS[region]
  const fmt = (n: number) => (R.cur === '€' ? n.toLocaleString('de-DE') : n.toLocaleString('en-US'))

  return (
    <section className="vt-section soft" id="precios">
      <div className="vt-inner">
        <div className="vt-head-center">
          <span className="vt-eyebrow"><CreditCard size={13} /> Precios</span>
          <h2 className="vt-h2" style={{ marginTop: 16 }}>Planes claros, en tu moneda</h2>
          <p className="vt-lead">El precio se ajusta automáticamente a tu región. Plan anual con <strong style={{ color: 'var(--ink)' }}>1 mes gratis</strong>.</p>
        </div>

        {/* Controles: región + facturación */}
        <div className="vt-pricebar">
          <div className="vt-region-pills" role="group" aria-label="Región">
            {REGION_ORDER.map(r => (
              <button key={r} className={region === r ? 'on' : ''} onClick={() => choose(r)}>
                <span>{REGIONS[r].flag}</span> {REGIONS[r].short}
              </button>
            ))}
          </div>
          <div className="vt-bill-toggle" role="group" aria-label="Facturación">
            <button className={billing === 'm' ? 'on' : ''} onClick={() => setBilling('m')}>Mensual</button>
            <button className={billing === 'y' ? 'on' : ''} onClick={() => setBilling('y')}>Anual</button>
          </div>
        </div>
        <p className="vt-region-note">
          <Globe size={13} /> {auto ? 'Detectamos tu región automáticamente' : `Región: ${R.label}`} · puedes cambiarla arriba · precios en {R.code}
        </p>

        {/* Planes */}
        <div className="vt-plans">
          {PLANS.map(p => {
            const price = billing === 'm' ? p.m[region] : p.y[region]
            return (
              <div key={p.id} className={`vt-price${p.featured ? ' feat' : ''}`}>
                {p.featured && <span className="vt-price-badge">Más elegido</span>}
                <div className="vt-price-tier">{p.group}</div>
                <div className="vt-price-name" style={{ textTransform: 'none', fontSize: 18, color: 'var(--ink)', letterSpacing: '-.01em' }}>{p.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 6 }}>{p.pacientes}</div>
                {price === null ? (
                  <div className="vt-price-amt"><span className="vt-price-num" style={{ fontSize: 34 }}>Consultar</span></div>
                ) : (
                  <>
                    <div className="vt-price-amt">
                      <span className="vt-price-cur">{R.cur}</span>
                      <span className="vt-price-num" style={{ fontSize: 40 }}>{fmt(price)}</span>
                      <span className="vt-price-per">/{billing === 'm' ? 'mes' : 'año'}</span>
                    </div>
                    {billing === 'y' && <span className="vt-price-save">🎁 1 mes gratis</span>}
                  </>
                )}
                <p className="vt-price-desc" style={{ marginTop: 12 }}>{p.desc}</p>
                <ul className="vt-checks">
                  {p.features.map(f => <li key={f} style={{ fontSize: 13 }}><Check size={15} /> {f}</li>)}
                </ul>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`vt-btn ${p.featured ? 'vt-btn-primary' : 'vt-btn-ghost'}`} style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
                  {price === null ? 'Hablar con ventas' : 'Empezar'}
                </a>
              </div>
            )
          })}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted-2)', marginTop: 24 }}>🔐 Activación en 24 h · Software multilingüe, se adapta a tu idioma · IA propia: ARIA</p>
      </div>
    </section>
  )
}
