import type { Metadata } from 'next'
import {
  ArrowRight, Check, Bot, Database, Boxes,
  Phone, ShieldCheck, Sparkles, HeartPulse, GraduationCap, Building2, Layers,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import Wave from '@/app/components/Wave'
import ServiceIcon from '@/app/components/ServiceIcon'
import ClientChip from '@/app/components/ClientChip'
import { SERVICES, WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Vanty — Inteligencia que transforma la manera en que operas',
  description: 'Vanty construye ecosistemas de software B2B SaaS con inteligencia artificial nativa. Automatizamos la complejidad para que tu equipo se enfoque en lo que realmente importa. Desde Perú para LATAM.',
}

const PILLARS = [
  { icon: Bot, c: '#1D4ED8', bg: '#e6efff', title: 'Orquestación de agentes', desc: 'Asistentes y flujos de trabajo automatizados que reducen drásticamente la carga manual de tu equipo.' },
  { icon: Database, c: '#0f766e', bg: '#ddf7ef', title: 'Arquitecturas modernas', desc: 'Tecnología de última generación sobre infraestructura robusta: velocidad, estabilidad y escala.' },
  { icon: Boxes, c: '#7c3aed', bg: '#efe7fe', title: 'Soluciones de nicho', desc: 'Productos especializados que resuelven problemas concretos, de la gestión clínica a la operativa.' },
]

const SECTORS = [
  { icon: HeartPulse, c: '#e11d6b', bg: '#fde6ef', name: 'Gestión clínica', desc: 'Operación de centros de salud y terapia, sin fricción administrativa.' },
  { icon: GraduationCap, c: '#d97706', bg: '#fdeccf', name: 'Educación', desc: 'Seguimiento, aprendizaje y comunicación con las familias.' },
  { icon: Building2, c: '#1D4ED8', bg: '#e6efff', name: 'Operación empresarial', desc: 'Sistemas internos, automatización de procesos y datos accionables.' },
]

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO claro */}
      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 460, height: 460, top: '-14%', left: '-8%', background: 'rgba(37,99,235,.16)' }} />
        <div className="vt-blob" style={{ width: 380, height: 380, bottom: '-20%', right: '-6%', background: 'rgba(124,58,237,.14)', animationDelay: '5s' }} />
        <div className="vt-arc" style={{ width: 280, height: 280, top: '12%', right: '6%', borderWidth: 2, borderColor: 'rgba(29,78,216,.18)' }} />
        <div className="vt-arc" style={{ width: 130, height: 130, bottom: '14%', left: '7%', borderWidth: 2, borderColor: 'rgba(124,58,237,.2)' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <h1 className="vt-h1">Inteligencia que <span className="vt-grad-ink">transforma</span> la manera en que operas</h1>
            <p className="vt-lead">
              En Vanty construimos ecosistemas de software B2B SaaS con inteligencia artificial nativa.
              Automatizamos la complejidad para que tu equipo se enfoque en lo que realmente importa.
            </p>
            <div className="vt-hero-btns">
              <a href="/nosotros" className="vt-btn vt-btn-primary">Conoce nuestro enfoque <ArrowRight size={16} /></a>
              <a href="/servicios" className="vt-btn vt-btn-ghost">Descubre nuestros productos</a>
            </div>
            <p style={{ marginTop: 18, fontSize: 13.5, color: 'var(--muted-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={15} color="#1D4ED8" /> Ingeniería sólida · Seguridad desde el día cero · Soporte en español
            </p>
          </div>
          <Reveal delay={0.1}>
            <Figure src="/images/hero-home.svg" alt="Plataforma B2B SaaS de Vanty" caption="Producto Vanty" frameless blob="radial-gradient(circle at 40% 40%, #c9dbff, #e7defb)" />
          </Reveal>
        </div>
      </header>

      {/* LOGOS */}
      <section className="vt-section" style={{ paddingTop: 50, paddingBottom: 30 }}>
        <div className="vt-inner">
          <p className="vt-logos-label">Tecnología en operación real</p>
          <Reveal className="vt-logos">
            <ClientChip src="/images/clientes/santi.png" name="Neuropsicología y Terapias SANTI" />
            <ClientChip src="/images/aprendo.png" name="Jugando Aprendo" />
            <ClientChip src="/images/clientes/capyaba.png" alt="capyABA" name={<>capy<span style={{ color: '#e0959c' }}>ABA</span></>} />
            <span className="vt-logo-ghost">+ tu organización aquí</span>
          </Reveal>
        </div>
      </section>

      <div style={{ background: '#ffffff' }}><Wave fill="#eef4ff" /></div>

      {/* ENGANCHE — abierto, sin cajas */}
      <section className="vt-section vt-rel" style={{ background: '#eef4ff' }}>
        <div className="vt-arc" style={{ width: 360, height: 360, top: '-12%', left: '-6%', borderWidth: 1.5, borderColor: 'rgba(29,78,216,.14)' }} />
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Nuestro enfoque</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>No solo digitalizamos procesos:<br />los hacemos pensar</h2>
            <p className="vt-lead">El software tradicional registra datos; el del futuro los entiende, los analiza y actúa. Diseñamos plataformas que llevan la eficiencia operativa a un nivel sin precedentes.</p>
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

      {/* PRODUCTOS */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-section-head">
            <div>
              <span className="vt-eyebrow"><Layers size={13} /> Productos y servicios</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>Software creado para resolver y escalar</h2>
              <p className="vt-lead">Desde productos propios listos para usar hasta soluciones construidas a tu medida.</p>
            </div>
            <a href="/servicios" className="vt-btn vt-btn-ghost">Ver todos <ArrowRight size={16} /></a>
          </Reveal>
          <div className="vt-grid-2" style={{ maxWidth: 860, margin: '0 auto' }}>
            {SERVICES.map((s, i) => {
              const inner = (
                <>
                  <ServiceIcon iconKey={s.icon} logo={s.logo} accent={s.accent} />
                  {s.soon
                    ? <span className="vt-badge-soon">{s.badge}</span>
                    : <span className="vt-badge-pill" style={{ color: s.accent, background: `${s.accent}15` }}>{s.badge}</span>}
                  <h3 className="vt-h3">{s.name}</h3>
                  <p className="vt-card-desc">{s.desc}</p>
                  <div className="vt-tags">{s.tags.map(t => <span key={t} className="vt-tag">{t}</span>)}</div>
                  {!s.soon && <span className="vt-link">Conocer más <ArrowRight size={15} /></span>}
                </>
              )
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  {s.soon
                    ? <div className="vt-card soon" style={{ height: '100%' }}>{inner}</div>
                    : <a href={s.href} className={`vt-card${s.slug === 'vanty-aba' ? ' featured' : ''}`} style={{ height: '100%' }}>{inner}</a>}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#f5f1fe" /></div>

      {/* SECTORES — abierto, colorido */}
      <section className="vt-section vt-rel" style={{ background: '#f5f1fe' }}>
        <div className="vt-arc" style={{ width: 300, height: 300, bottom: '-10%', right: '-6%', borderWidth: 1.5, borderColor: 'rgba(124,58,237,.16)' }} />
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Dónde generamos impacto</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Operaciones complejas, soluciones elegantes</h2>
          </Reveal>
          <div className="vt-grid-3" style={{ marginTop: 8 }}>
            {SECTORS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.name} delay={i * 0.08} className="vt-open" as="div">
                  <span className="vt-ico-round" style={{ background: s.bg, color: s.c }}><Icon size={28} /></span>
                  <h3 className="vt-h3" style={{ fontSize: 19 }}>{s.name}</h3>
                  <p className="vt-card-desc">{s.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <div style={{ background: '#f5f1fe' }}><Wave flip fill="#ffffff" /></div>

      {/* CÓMO TRABAJAMOS teaser */}
      <section className="vt-section">
        <div className="vt-inner vt-hero-split" style={{ alignItems: 'center' }}>
          <Reveal>
            <span className="vt-eyebrow"><ShieldCheck size={13} /> Cómo trabajamos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Del código a la solución, con rigor de ingeniería</h2>
            <p className="vt-lead" style={{ marginTop: 14 }}>
              Combinamos la agilidad de una startup con arquitecturas sólidas y seguridad desde el día cero.
              Entendemos tu negocio, diseñamos la solución y la hacemos evolucionar contigo.
            </p>
            <ul className="vt-checks" style={{ marginTop: 18 }}>
              {['Análisis y arquitectura profunda', 'Seguridad y escalabilidad desde el día cero', 'Iteración continua: el software nunca está “terminado”'].map(t => <li key={t}><Check size={18} /> {t}</li>)}
            </ul>
            <a href="/como-trabajamos" className="vt-btn vt-btn-primary" style={{ marginTop: 24 }}>Ver nuestra metodología <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <Figure src="/images/servicios/software-a-medida.svg" alt="Proceso de desarrollo de Vanty" caption="Proceso de desarrollo" frameless blob="radial-gradient(circle at 60% 40%, #cfeee4, #d9e6ff)" />
          </Reveal>
        </div>
      </section>

      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#0c1838" /></div>

      {/* CTA */}
      <section className="vt-cta" style={{ paddingTop: 40 }}>
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">El futuro de tu operación empieza aquí</h2>
          <p className="vt-cta-sub">Ya sea que busques transformar la gestión de tu centro clínico o llevar la eficiencia de tu empresa al siguiente nivel, en Vanty tenemos la infraestructura tecnológica para hacerlo realidad.</p>
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
