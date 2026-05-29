import type { Metadata } from 'next'
import { Brain, Code2, Rocket, ArrowRight, Layers, Phone, MessageSquare } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import { SERVICES, WA_URL, type IconKey } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Servicios — Vanty | Productos propios, software a medida e IA',
  description: 'Conoce los servicios de Vanty: Vanty ABA (plataforma clínica ABA con IA), software a medida y productos SaaS con inteligencia artificial.',
}

const SVC_ICONS: Record<IconKey, any> = { brain: Brain, code: Code2, rocket: Rocket }

export default function ServiciosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-16%', right: '-6%', background: 'rgba(37,99,235,.36)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow on-dark"><Layers size={13} /> Servicios</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Una empresa, varias formas de resolver tu problema</h1>
          <p className="vt-lead">Desde un producto listo para usar hasta software construido a tu medida. Todo con tecnología moderna e IA donde suma.</p>
        </div>
      </header>

      <section className="vt-section">
        <div className="vt-inner" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {SERVICES.map((s, i) => {
            const Icon = SVC_ICONS[s.icon]
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <a href={s.href} className={`vt-card${s.slug === 'vanty-aba' ? ' featured' : ''}`} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 24, alignItems: 'center' }}>
                  <span className="vt-ico" style={{ background: s.accent, marginBottom: 0 }}><Icon size={26} /></span>
                  <span>
                    <span className="vt-badge-pill" style={{ color: s.accent, background: `${s.accent}15` }}>{s.badge}</span>
                    <h3 className="vt-h3" style={{ fontSize: 22 }}>{s.name}</h3>
                    <p className="vt-card-desc">{s.desc}</p>
                    <div className="vt-tags">{s.tags.map(t => <span key={t} className="vt-tag">{t}</span>)}</div>
                  </span>
                  <span className="vt-btn vt-btn-ghost" style={{ alignSelf: 'center' }}>Ver <ArrowRight size={16} /></span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">¿No sabes cuál necesitas?</h2>
          <p className="vt-cta-sub">Cuéntanos tu problema y te decimos con honestidad qué solución de Vanty encaja mejor — o si vale la pena crear una nueva.</p>
          <div className="vt-cta-btns">
            <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Hablar por WhatsApp</a>
            <a href="/contacto" className="vt-btn vt-btn-ghost-dark"><MessageSquare size={16} /> Ir a contacto</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
