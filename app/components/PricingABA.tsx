'use client'

import { useEffect, useState } from 'react'
import { Check, CreditCard, Globe, Phone } from 'lucide-react'
import { PLANS, REGIONS, countryToRegion, regionFromLanguage, type RegionKey, type Plan } from '@/app/lib/pricing'
import { waLink } from '@/app/lib/site'

export default function PricingABA() {
  const [region, setRegion] = useState<RegionKey>('sudamerica')
  const [billing, setBilling] = useState<'m' | 'y'>('m')
  const [group, setGroup] = useState<'Personal' | 'Vanty Empresa'>('Personal')

  useEffect(() => {
    let cancelled = false
    fetch('/api/geo')
      .then(r => r.json())
      .then(d => { if (!cancelled) setRegion(countryToRegion(d?.country)) })
      .catch(() => { if (!cancelled) setRegion(regionFromLanguage(navigator.language)) })
    return () => { cancelled = true }
  }, [])

  const R = REGIONS[region]
  const fmt = (n: number) => (R.cur === '€' ? n.toLocaleString('de-DE') : n.toLocaleString('en-US'))

  const card = (p: Plan) => {
    const price = billing === 'm' ? p.m[region] : p.y[region]
    const href = waLink(
      price === null
        ? `Hola, me interesa el plan ${p.name} de Vanty ABA y quisiera una cotización.`
        : `Hola, me interesa adquirir el plan ${p.name} de Vanty ABA.`
    )
    return (
      <div key={p.id} className={`vt-price${p.featured ? ' feat' : ''}`}>
        {p.featured && <span className="vt-price-badge">Más elegido</span>}
        <div className="vt-price-name" style={{ textTransform: 'none', fontSize: 19, color: 'var(--ink)', letterSpacing: '-.01em' }}>{p.name}</div>
        <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 8 }}>{p.pacientes}</div>
        {price === null ? (
          <div className="vt-price-amt"><span className="vt-price-num" style={{ fontSize: 36 }}>Consultar</span></div>
        ) : (
          <>
            <div className="vt-price-amt">
              <span className="vt-price-cur">{R.cur}</span>
              <span className="vt-price-num" style={{ fontSize: 42 }}>{fmt(price)}</span>
              <span className="vt-price-per">/{billing === 'm' ? 'mes' : 'año'}</span>
            </div>
            {billing === 'y' && <span className="vt-price-save">🎁 1 mes gratis</span>}
          </>
        )}
        <p className="vt-price-desc" style={{ marginTop: 12 }}>{p.desc}</p>
        <ul className="vt-checks">
          {p.features.map(f => <li key={f} style={{ fontSize: 13 }}><Check size={15} /> {f}</li>)}
        </ul>
        <a href={href} target="_blank" rel="noopener noreferrer" className={`vt-btn ${p.featured ? 'vt-btn-primary' : 'vt-btn-ghost'}`} style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
          {price === null ? 'Hablar con ventas' : 'Empezar'}
        </a>
      </div>
    )
  }

  const plans = PLANS.filter(p => p.group === group)
  const isPersonal = group === 'Personal'

  return (
    <section className="vt-section soft" id="precios">
      <div className="vt-inner">
        <div className="vt-head-center">
          <span className="vt-eyebrow"><CreditCard size={13} /> Precios</span>
          <h2 className="vt-h2" style={{ marginTop: 16 }}>Planes Vanty</h2>
          <p className="vt-lead">El precio se ajusta automáticamente a tu región. Plan anual con <strong style={{ color: 'var(--ink)' }}>1 mes gratis</strong>.</p>
        </div>

        {/* Selectores: Personal/Empresa + Mensual/Anual */}
        <div className="vt-pricebar">
          <div className="vt-bill-toggle" role="group" aria-label="Tipo de plan">
            <button className={isPersonal ? 'on' : ''} onClick={() => setGroup('Personal')}>Personal</button>
            <button className={!isPersonal ? 'on' : ''} onClick={() => setGroup('Vanty Empresa')}>Empresa</button>
          </div>
          <div className="vt-bill-toggle" role="group" aria-label="Facturación">
            <button className={billing === 'm' ? 'on' : ''} onClick={() => setBilling('m')}>Mensual</button>
            <button className={billing === 'y' ? 'on' : ''} onClick={() => setBilling('y')}>Anual</button>
          </div>
        </div>
        <p className="vt-region-note">
          <Globe size={13} /> Región detectada automáticamente: {R.flag} {R.label} · precios en {R.code}
        </p>

        <div className={isPersonal ? 'vt-plans-3' : 'vt-plans-2'} style={{ marginTop: 36, ...(isPersonal ? {} : { marginLeft: 'auto', marginRight: 'auto' }) }}>
          {plans.map(card)}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <a href={waLink('Hola, quiero solicitar una demo de Vanty ABA.')} target="_blank" rel="noopener noreferrer" className="vt-btn vt-btn-primary">
            <Phone size={16} /> Solicitar una demo
          </a>
          <a href={waLink('Hola, tengo dudas sobre los planes de Vanty ABA.')} target="_blank" rel="noopener noreferrer" className="vt-btn vt-btn-ghost">
            Tengo dudas
          </a>
        </div>

        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted-2)', marginTop: 24 }}>🔐 Activación en 24 h · Software multilingüe, se adapta a tu idioma · IA propia: ARIA</p>
      </div>
    </section>
  )
}
