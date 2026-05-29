import type { Metadata } from 'next'
import {
  Rocket, ArrowRight, Check, Phone, Brain, Cloud, Layers, Bot, LineChart, Lock, Sparkles,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Productos SaaS con IA — Vanty | Productos propios potenciados con IA',
  description: 'Vanty crea sus propios productos digitales SaaS potenciados con inteligencia artificial para resolver problemas concretos en sectores con impacto. Vanty ABA fue el primero.',
}

const TRAITS = [
  { icon: Bot, title: 'IA en el núcleo', desc: 'Agentes y asistentes que automatizan tareas reales, como ARIA en Vanty ABA.' },
  { icon: Cloud, title: 'En la nube', desc: 'Disponibles desde cualquier lugar, sin instalaciones ni servidores que mantener.' },
  { icon: Layers, title: 'Multi-rol y multi-tenant', desc: 'Pensados para equipos, con permisos por rol y datos aislados por organización.' },
  { icon: LineChart, title: 'Datos que importan', desc: 'Métricas, reportes y alertas automáticas para decidir mejor.' },
  { icon: Lock, title: 'Seguros por diseño', desc: 'Estándares de seguridad serios para datos sensibles. Tu información es tuya.' },
  { icon: Sparkles, title: 'Mejora continua', desc: 'Actualizaciones constantes y nuevas funciones, sin costo de mantenimiento extra.' },
]

export default function ProductosSaasPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 440, height: 440, top: '-16%', right: '-6%', background: 'rgba(124,58,237,.4)' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <span className="vt-eyebrow on-dark"><Rocket size={13} /> Productos SaaS con IA</span>
            <h1 className="vt-h1">Productos propios <span className="vt-grad">potenciados con IA</span></h1>
            <p className="vt-lead">Creamos productos digitales que resuelven problemas concretos en sectores con impacto. <strong style={{ color: '#fff' }}>Vanty ABA</strong> fue el primero — y vienen más.</p>
            <div className="vt-hero-btns">
              <a href="/vanty-aba" className="vt-btn vt-btn-light">Conocer Vanty ABA <ArrowRight size={16} /></a>
              <a href={WA_URL} className="vt-btn vt-btn-ghost-dark" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Quiero saber más</a>
            </div>
          </div>
          <Reveal delay={0.1}>
            <Figure src="/images/servicios/productos-saas.svg" alt="Productos SaaS de Vanty" caption="Producto SaaS (mockup)" badge={<><Sparkles size={15} color="#7c3aed" /> IA aplicada</>} />
          </Reveal>
        </div>
      </header>

      {/* Producto destacado: Vanty ABA */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Brain size={13} /> Nuestro producto estrella</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Vanty ABA</h2>
            <p className="vt-lead">La primera plataforma ABA multi-rol de LATAM: dirección, especialistas, secretaría y familias en un solo lugar, con un hub de IA clínica, facturación y portal familiar.</p>
          </Reveal>
          <Reveal>
            <a href="/vanty-aba" className="vt-card featured" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 24, alignItems: 'center' }}>
              <span className="vt-ico" style={{ background: '#1D4ED8', marginBottom: 0 }}><Brain size={26} /></span>
              <span>
                <h3 className="vt-h3" style={{ fontSize: 22 }}>Vanty ABA</h3>
                <p className="vt-card-desc">Hub de IA clínica (ARIA + agentes), facturación, agenda con Google y Outlook, WhatsApp integrado, evaluaciones con IA y portal familiar. 100% en español.</p>
                <div className="vt-tags">{['Hub de IA clínica', 'Multi-rol nativo', 'Facturación', 'WhatsApp', 'Portal familiar'].map(t => <span key={t} className="vt-tag">{t}</span>)}</div>
              </span>
              <span className="vt-btn vt-btn-primary" style={{ alignSelf: 'center' }}>Ver Vanty ABA <ArrowRight size={16} /></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Características */}
      <section className="vt-section soft">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Cómo son nuestros productos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Hechos para escalar y para durar</h2>
          </Reveal>
          <div className="vt-grid-3">
            {TRAITS.map((tr, i) => {
              const Icon = tr.icon
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico soft"><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 18 }}>{tr.title}</h3>
                    <p className="vt-card-desc">{tr.desc}</p>
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
          <h2 className="vt-h2">¿Tienes una idea de producto?</h2>
          <p className="vt-cta-sub">Si crees que un producto digital con IA puede resolver un problema de tu sector, conversemos. Podríamos construir el próximo juntos.</p>
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
