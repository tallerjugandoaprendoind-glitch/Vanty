import type { Metadata } from 'next'
import {
  Heart, ArrowRight, Phone, Target, Eye, HandHeart, Cpu, Gauge, Shield, Globe, Sparkles,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Nosotros — Vanty | Tecnología con propósito desde Perú',
  description: 'Vanty es una empresa de tecnología que resuelve problemas reales con software inteligente e IA. Conoce nuestra misión, visión y valores. Desde Perú para LATAM.',
}

const VALUES = [
  { icon: Cpu, title: 'IA con propósito', desc: 'Usamos inteligencia artificial para resolver, no para presumir.' },
  { icon: Gauge, title: 'Simplicidad', desc: 'La mejor solución es la más simple que funciona de verdad.' },
  { icon: Shield, title: 'Confianza', desc: 'Cuidamos los datos y cumplimos lo que prometemos.' },
  { icon: Globe, title: 'Cercanía LATAM', desc: 'En español, en tu moneda y con soporte humano cercano.' },
]

export default function NosotrosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-14%', left: '-6%', background: 'rgba(37,99,235,.38)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow on-dark"><Heart size={13} /> Nosotros</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Tecnología con propósito, <span className="vt-grad">desde Perú para LATAM</span></h1>
          <p className="vt-lead">Somos una empresa de tecnología que cree que el buen software cambia vidas. Por eso creamos productos propios y soluciones a medida para sectores con impacto.</p>
        </div>
      </header>

      {/* Misión / Visión */}
      <section className="vt-section">
        <div className="vt-inner vt-grid-2">
          <Reveal>
            <div className="vt-card" style={{ height: '100%' }}>
              <span className="vt-ico soft"><Target size={22} /></span>
              <h2 className="vt-h3" style={{ fontSize: 22 }}>Nuestra misión</h2>
              <p className="vt-card-desc">Resolver problemas reales con tecnología e inteligencia artificial, poniendo herramientas de nivel mundial al alcance de las organizaciones de América Latina — en su idioma y a un precio justo.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vt-card" style={{ height: '100%' }}>
              <span className="vt-ico soft"><Eye size={22} /></span>
              <h2 className="vt-h3" style={{ fontSize: 22 }}>Nuestra visión</h2>
              <p className="vt-card-desc">Ser la empresa de tecnología de referencia en LATAM para sectores con impacto: salud, educación y bienestar. Una casa de productos donde la IA mejora la vida de las personas.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Historia + imagen */}
      <section className="vt-section soft">
        <div className="vt-inner vt-hero-split" style={{ alignItems: 'center' }}>
          <Reveal>
            <span className="vt-eyebrow"><Sparkles size={13} /> Cómo empezamos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Nacimos resolviendo un problema real</h2>
            <p className="vt-lead" style={{ marginTop: 14 }}>
              Vanty empezó construyendo <strong style={{ color: 'var(--ink)' }}>Vanty ABA</strong>, la primera plataforma ABA multi-rol de LATAM, junto a centros terapéuticos reales.
              Ese aprendizaje —escuchar, simplificar y resolver— hoy lo aplicamos a cada producto y proyecto que hacemos.
            </p>
            <a href="/vanty-aba" className="vt-btn vt-btn-primary" style={{ marginTop: 24 }}>Conocer Vanty ABA <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal delay={0.1}>
            <Figure src="/images/nosotros.png" alt="El equipo de Vanty" caption="Foto del equipo / oficina (opcional)" light badge={<><HandHeart size={15} color="#1D4ED8" /> Primer aliado: Jugando Aprendo</>} />
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Heart size={13} /> Nuestros valores</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Lo que nos mueve todos los días</h2>
          </Reveal>
          <div className="vt-grid-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico soft"><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 17 }}>{v.title}</h3>
                    <p className="vt-card-desc">{v.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Construyamos algo que importe</h2>
          <p className="vt-cta-sub">Ya seas un centro, una empresa o tengas una idea de producto: conversemos.</p>
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
