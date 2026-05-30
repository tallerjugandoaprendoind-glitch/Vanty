import type { Metadata } from 'next'
import { Brain, Code2, Rocket, ArrowRight, Bot, Database, Boxes, Phone, Layers, Sparkles } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Wave from '@/app/components/Wave'
import { SERVICES, WA_URL, type IconKey } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Qué hacemos — Vanty | Software B2B SaaS de alto rendimiento',
  description: 'Vanty funciona como un laboratorio de innovación y una fábrica de software. Nos especializamos en aplicaciones B2B SaaS de alto rendimiento, con IA nativa. Conoce nuestros pilares y productos.',
}

const SVC_ICONS: Record<IconKey, any> = { brain: Brain, code: Code2, rocket: Rocket }

const PILLARS = [
  { icon: Bot, c: '#1D4ED8', bg: '#e6efff', title: 'Orquestación de agentes de IA', desc: 'Creamos asistentes virtuales y flujos de trabajo automatizados que reducen drásticamente la carga manual de los equipos.' },
  { icon: Database, c: '#0f766e', bg: '#ddf7ef', title: 'Arquitecturas modernas', desc: 'Usamos las herramientas más avanzadas del ecosistema (Next.js, TypeScript, Node.js) sobre infraestructura de última generación para garantizar velocidad y estabilidad.' },
  { icon: Boxes, c: '#7c3aed', bg: '#efe7fe', title: 'Soluciones de nicho', desc: 'A través de nuestra infraestructura principal damos vida a productos especializados que transforman la gestión clínica y operativa.' },
]

export default function ServiciosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-14%', right: '-6%', background: 'rgba(37,99,235,.16)' }} />
        <div className="vt-arc" style={{ width: 200, height: 200, bottom: '8%', left: '8%', borderWidth: 2, borderColor: 'rgba(124,58,237,.18)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow"><Layers size={13} /> Qué hacemos</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Software creado para <span className="vt-grad-ink">escalar</span></h1>
          <p className="vt-lead">En Vanty funcionamos como un laboratorio de innovación y una fábrica de software. Nos especializamos en la creación de aplicaciones B2B SaaS de alto rendimiento.</p>
        </div>
      </header>

      <div style={{ background: '#ffffff' }}><Wave fill="#eef4ff" /></div>

      {/* Pilares tecnológicos */}
      <section className="vt-section vt-rel" style={{ background: '#eef4ff' }}>
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Nuestros pilares tecnológicos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>La ingeniería detrás de cada solución</h2>
          </Reveal>
          <div className="vt-grid-3" style={{ marginTop: 8 }}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.08} className="vt-open" as="div">
                  <span className="vt-ico-round" style={{ background: p.bg, color: p.c }}><Icon size={28} /></span>
                  <h3 className="vt-h3" style={{ fontSize: 19 }}>{p.title}</h3>
                  <p className="vt-card-desc">{p.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <div style={{ background: '#eef4ff' }}><Wave flip fill="#ffffff" /></div>

      {/* Productos */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Rocket size={13} /> Productos y servicios</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Lo que construimos para el mercado</h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {SERVICES.map((s, i) => {
              const Icon = SVC_ICONS[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <a href={s.href} className={`vt-card${s.slug === 'vanty-aba' ? ' featured' : ''}`} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 22, alignItems: 'center' }}>
                    <span className="vt-ico" style={{ background: s.accent, marginBottom: 0 }}><Icon size={26} /></span>
                    <span>
                      <span className="vt-badge-pill" style={{ color: s.accent, background: `${s.accent}15` }}>{s.badge}</span>
                      <h3 className="vt-h3" style={{ fontSize: 21 }}>{s.name}</h3>
                      <p className="vt-card-desc">{s.desc}</p>
                    </span>
                    <span className="vt-btn vt-btn-ghost" style={{ alignSelf: 'center' }}>Ver <ArrowRight size={16} /></span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">¿Tienes un problema que resolver?</h2>
          <p className="vt-cta-sub">Cuéntanos tu reto operativo y te decimos con honestidad qué solución de Vanty encaja mejor — o si vale la pena crear una nueva.</p>
          <div className="vt-cta-btns">
            <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Hablemos del futuro</a>
            <a href="/contacto" className="vt-btn vt-btn-ghost-dark">Contáctanos <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
