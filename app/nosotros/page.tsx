import type { Metadata } from 'next'
import { Heart, ArrowRight, Phone, Target, Eye, Cpu, Wrench, Users, Sparkles } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Wave from '@/app/components/Wave'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Nosotros — Vanty | Redefiniendo el estándar del software B2B',
  description: 'Vanty es una startup tecnológica que cierra la brecha entre operaciones empresariales complejas y la tecnología de última generación. Conoce nuestra historia, visión y valores.',
}

const VALUES = [
  { icon: Cpu, c: '#1D4ED8', bg: '#e6efff', title: 'Innovación AI-First', desc: 'La inteligencia artificial no es un complemento: es el núcleo desde donde diseñamos cada solución.' },
  { icon: Wrench, c: '#0f766e', bg: '#ddf7ef', title: 'Excelencia en ingeniería', desc: 'Construimos con arquitecturas modernas, limpias y robustas, asegurando un rendimiento impecable.' },
  { icon: Users, c: '#7c3aed', bg: '#efe7fe', title: 'Empatía operativa', desc: 'Desarrollamos pensando en el humano que usa la herramienta, eliminando la fricción administrativa para potenciar el talento real.' },
]

export default function NosotrosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-14%', left: '-6%', background: 'rgba(124,58,237,.16)' }} />
        <div className="vt-arc" style={{ width: 240, height: 240, bottom: '6%', right: '7%', borderWidth: 2, borderColor: 'rgba(29,78,216,.18)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow"><Heart size={13} /> Nosotros</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Redefiniendo el estándar del <span className="vt-grad-ink">software B2B</span></h1>
          <p className="vt-lead">Una startup tecnológica de vanguardia nacida con una misión clara: cerrar la brecha entre las operaciones empresariales complejas y la tecnología de última generación.</p>
        </div>
      </header>

      <div style={{ background: '#ffffff' }}><Wave fill="#eef4ff" /></div>

      {/* Quiénes somos + imagen */}
      <section className="vt-section" style={{ background: '#eef4ff' }}>
        <div className="vt-inner vt-hero-split" style={{ alignItems: 'center' }}>
          <Reveal>
            <span className="vt-eyebrow"><Sparkles size={13} /> Quiénes somos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Creadores independientes, asistidos por IA</h2>
            <p className="vt-lead" style={{ marginTop: 14 }}>
              Entendemos que el mundo empresarial —especialmente en sectores críticos como la gestión clínica—
              requiere herramientas que no solo sean funcionales, sino profundamente inteligentes e intuitivas.
              Nuestro primer producto, <strong style={{ color: 'var(--ink)' }}>Vanty ABA</strong>, nació resolviendo
              ese tipo de problema junto a centros reales.
            </p>
            <a href="/servicios" className="vt-btn vt-btn-primary" style={{ marginTop: 24 }}>Qué hacemos <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vt-brandcard">
              <span className="blob" />
              <div className="inner">
                <img src="/images/logos/vanty.png" alt="Vanty" />
                <div className="nm">VANTY</div>
                <div className="tg">Tecnología con propósito · Perú → LATAM</div>
                <div className="chips">
                  <span>🩺 Salud</span>
                  <span>🎓 Educación</span>
                  <span>🏢 Empresas</span>
                  <span>💜 Bienestar</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ background: '#eef4ff' }}><Wave flip fill="#ffffff" /></div>

      {/* Misión / Visión */}
      <section className="vt-section">
        <div className="vt-inner vt-grid-2">
          <Reveal className="vt-open" as="div">
            <span className="vt-ico-round" style={{ background: '#e6efff', color: '#1D4ED8' }}><Target size={28} /></span>
            <h2 className="vt-h3" style={{ fontSize: 22 }}>Nuestra misión</h2>
            <p className="vt-card-desc" style={{ fontSize: 15.5 }}>Resolver problemas reales con tecnología e inteligencia artificial, poniendo herramientas de nivel mundial al alcance de las organizaciones de América Latina — en su idioma y a un precio justo.</p>
          </Reveal>
          <Reveal className="vt-open" as="div" delay={0.1}>
            <span className="vt-ico-round" style={{ background: '#efe7fe', color: '#7c3aed' }}><Eye size={28} /></span>
            <h2 className="vt-h3" style={{ fontSize: 22 }}>Nuestra visión</h2>
            <p className="vt-card-desc" style={{ fontSize: 15.5 }}>Ser el motor tecnológico invisible detrás de las instituciones más eficientes del mañana, democratizando el acceso a la IA avanzada en plataformas SaaS listas para usar, seguras y escalables.</p>
          </Reveal>
        </div>
      </section>

      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#f5f1fe" /></div>

      {/* Valores */}
      <section className="vt-section vt-rel" style={{ background: '#f5f1fe' }}>
        <div className="vt-arc" style={{ width: 300, height: 300, top: '-10%', right: '-6%', borderWidth: 1.5, borderColor: 'rgba(124,58,237,.16)' }} />
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Heart size={13} /> Valores fundamentales</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Lo que nos mueve todos los días</h2>
          </Reveal>
          <div className="vt-grid-3" style={{ marginTop: 8 }}>
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 0.08} className="vt-open" as="div">
                  <span className="vt-ico-round" style={{ background: v.bg, color: v.c }}><Icon size={28} /></span>
                  <h3 className="vt-h3" style={{ fontSize: 19 }}>{v.title}</h3>
                  <p className="vt-card-desc">{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <div style={{ background: '#f5f1fe' }}><Wave flip fill="#0c1838" /></div>

      <section className="vt-cta" style={{ paddingTop: 40 }}>
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Construyamos algo que importe</h2>
          <p className="vt-cta-sub">Ya seas un centro, una empresa o tengas una idea de producto: conversemos sobre cómo la tecnología puede transformar tu operación.</p>
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
