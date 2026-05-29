import type { Metadata } from 'next'
import {
  Brain, Code2, Rocket, ArrowRight, Check, Sparkles, Cpu, Gauge, Shield, Globe,
  HeartPulse, GraduationCap, Building2, Lightbulb, Phone, MessageSquare, Star, Layers,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import { SERVICES, WA_URL, EMAIL, type IconKey } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Vanty — Software e IA que resuelve problemas reales',
  description: 'Empresa de tecnología que diseña software inteligente e IA para sectores con impacto: salud, educación y bienestar. Productos propios como Vanty ABA y software a medida. Desde Perú para LATAM.',
}

const SVC_ICONS: Record<IconKey, any> = { brain: Brain, code: Code2, rocket: Rocket }

const PILLARS = [
  { icon: Cpu, title: 'IA aplicada, no de moda', desc: 'Integramos inteligencia artificial donde realmente ahorra horas y mejora decisiones — como ARIA en Vanty ABA.' },
  { icon: Gauge, title: 'Del problema a producción', desc: 'Entendemos el problema real, prototipamos rápido y entregamos software que funciona en el día a día.' },
  { icon: Shield, title: 'Seguridad y confianza', desc: 'Manejamos datos sensibles con estándares serios. Tu información es tuya y la protegemos como tal.' },
  { icon: Globe, title: 'Hecho en LATAM, para LATAM', desc: '100% en español, precios justos en moneda local y soporte cercano. Desde Perú para toda la región.' },
]

const SECTORS = [
  { icon: HeartPulse, name: 'Salud y terapia', desc: 'Plataformas clínicas, gestión de pacientes e IA para reportes.' },
  { icon: GraduationCap, name: 'Educación', desc: 'Seguimiento, aprendizaje y comunicación con las familias.' },
  { icon: Building2, name: 'Empresas', desc: 'Sistemas internos, automatización de procesos y dashboards.' },
  { icon: Lightbulb, name: 'Bienestar e impacto', desc: 'Productos que mejoran la vida de personas y comunidades.' },
]

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 460, height: 460, top: '-14%', left: '-6%', background: 'rgba(37,99,235,.4)' }} />
        <div className="vt-blob" style={{ width: 380, height: 380, bottom: '-18%', right: '-4%', background: 'rgba(124,58,237,.32)', animationDelay: '5s' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <span className="vt-eyebrow on-dark"><span className="dot" /> Empresa de tecnología · Perú → LATAM</span>
            <h1 className="vt-h1">Creamos <span className="vt-grad">software e IA</span> que resuelve problemas reales</h1>
            <p className="vt-lead">
              Vanty diseña software inteligente e inteligencia artificial para sectores con impacto
              —salud, educación y bienestar—. Construimos productos propios como <strong style={{ color: '#fff' }}>Vanty ABA</strong> y
              soluciones a medida para quienes quieren avanzar.
            </p>
            <div className="vt-hero-btns">
              <a href="/servicios" className="vt-btn vt-btn-light">Ver nuestros servicios <ArrowRight size={17} /></a>
              <a href={WA_URL} className="vt-btn vt-btn-ghost-dark" target="_blank" rel="noopener noreferrer"><MessageSquare size={16} /> Conversemos</a>
            </div>
            <div className="vt-hero-stats">
              {[
                { n: 'IA', l: 'Integrada en cada producto' },
                { n: '+4', l: 'Roles en una sola plataforma' },
                { n: '100%', l: 'En español, para LATAM' },
                { n: '24h', l: 'Para arrancar tu solución' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="vt-stat-n">{s.n}</div>
                  <div className="vt-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <Figure
              src="/images/hero-home.png"
              alt="Plataformas y productos creados por Vanty"
              caption="Vista de producto Vanty"
              badge={<><Sparkles size={15} color="#1D4ED8" /> Potenciado con IA</>}
            />
          </Reveal>
        </div>
      </header>

      {/* TRUST */}
      <section className="vt-section" style={{ paddingTop: 44, paddingBottom: 44 }}>
        <div className="vt-inner">
          <Reveal className="vt-trust">
            {['Tecnología en uso real', 'IA clínica integrada', 'Datos seguros', 'Soporte cercano en español', 'Setup en 24 horas'].map((t, i) => (
              <span key={i} className="vt-trust-item"><Check size={16} /> {t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="vt-section soft" id="servicios">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Layers size={13} /> Servicios</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Una empresa, varias formas de resolver tu problema</h2>
            <p className="vt-lead">Productos propios, software a medida e IA aplicada para sectores con impacto.</p>
          </Reveal>
          <div className="vt-grid-3">
            {SERVICES.map((s, i) => {
              const Icon = SVC_ICONS[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.1}>
                  <a href={s.href} className={`vt-card${s.slug === 'vanty-aba' ? ' featured' : ''}`} style={{ height: '100%' }}>
                    <span className="vt-ico" style={{ background: s.accent }}><Icon size={24} /></span>
                    <span className="vt-badge-pill" style={{ color: s.accent, background: `${s.accent}15` }}>{s.badge}</span>
                    <h3 className="vt-h3">{s.name}</h3>
                    <p className="vt-card-desc">{s.desc}</p>
                    <div className="vt-tags">{s.tags.map(t => <span key={t} className="vt-tag">{t}</span>)}</div>
                    <span className="vt-link">Conocer más <ArrowRight size={15} /></span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ VANTY */}
      <section className="vt-section" id="nosotros">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Star size={13} /> Por qué Vanty</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Tecnología que se nota en los resultados</h2>
          </Reveal>
          <div className="vt-grid-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico soft"><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 17 }}>{p.title}</h3>
                    <p className="vt-card-desc">{p.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTORES (dark) */}
      <section className="vt-section vt-dark">
        <div className="vt-hero-grid" />
        <div className="vt-inner" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow on-dark"><Sparkles size={13} /> Sectores con impacto</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Donde la tecnología cambia la vida de la gente</h2>
            <p className="vt-lead">Nos enfocamos en sectores donde un buen software no es un lujo: es una mejora real para las personas.</p>
          </Reveal>
          <div className="vt-grid-4">
            {SECTORS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="vt-card" style={{ height: '100%', background: 'rgba(255,255,255,.05)', borderColor: 'rgba(255,255,255,.12)' }}>
                    <span className="vt-ico" style={{ background: 'rgba(96,165,250,.16)', color: '#93c5fd', boxShadow: 'none' }}><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ color: '#fff', fontSize: 17 }}>{s.name}</h3>
                    <p className="vt-card-desc" style={{ color: 'rgba(255,255,255,.66)' }}>{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESO teaser */}
      <section className="vt-section soft">
        <div className="vt-inner vt-hero-split" style={{ alignItems: 'center' }}>
          <Reveal>
            <span className="vt-eyebrow"><Sparkles size={13} /> Cómo trabajamos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>De la idea a la solución, sin vueltas</h2>
            <p className="vt-lead" style={{ marginTop: 14 }}>
              Escuchamos tu problema, diseñamos la solución más simple y efectiva, la construimos con IA donde suma
              y te acompañamos al lanzarla. Sin tecnicismos.
            </p>
            <a href="/como-trabajamos" className="vt-btn vt-btn-primary" style={{ marginTop: 26 }}>Ver nuestro proceso <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vt-card" style={{ gap: 18 }}>
              {[
                ['01', 'Escuchamos el problema'],
                ['02', 'Diseñamos la solución'],
                ['03', 'Construimos con IA'],
                ['04', 'Lanzamos y acompañamos'],
              ].map(([n, t]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span className="vt-display" style={{ fontWeight: 900, fontSize: 24, color: '#cfe0fb', minWidth: 38 }}>{n}</span>
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, color: 'var(--ink)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">¿Tienes un problema que la tecnología puede resolver?</h2>
          <p className="vt-cta-sub">Cuéntanos qué necesitas. Te decimos con honestidad cómo Vanty puede ayudarte — con un producto listo como Vanty ABA o con una solución hecha para ti.</p>
          <div className="vt-cta-btns">
            <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Hablar por WhatsApp</a>
            <a href="/contacto" className="vt-btn vt-btn-ghost-dark">Ir a contacto <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
