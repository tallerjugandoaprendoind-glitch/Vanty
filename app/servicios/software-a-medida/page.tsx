import type { Metadata } from 'next'
import {
  Code2, ArrowRight, Check, Phone, Layout, Smartphone, BarChart3, Plug, Workflow, ShieldCheck, Sparkles,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Software a medida — Vanty | Plataformas, apps y sistemas',
  description: 'Diseñamos y desarrollamos plataformas web, apps móviles y sistemas internos a medida para tu operación real. Del prototipo a producción, con IA donde suma.',
}

const WHAT = [
  { icon: Layout, title: 'Plataformas web', desc: 'Portales, paneles y aplicaciones web rápidas, seguras y fáciles de usar.' },
  { icon: Smartphone, title: 'Apps móviles', desc: 'Aplicaciones para tus clientes o tu equipo, conectadas a tu información en tiempo real.' },
  { icon: BarChart3, title: 'Dashboards y reportes', desc: 'Visualiza tus datos y toma decisiones con tableros claros y automáticos.' },
  { icon: Plug, title: 'Integraciones', desc: 'Conectamos tus herramientas: pagos, WhatsApp, calendarios, ERPs y más.' },
  { icon: Workflow, title: 'Automatización', desc: 'Eliminamos tareas manuales y repetitivas con flujos inteligentes.' },
  { icon: Sparkles, title: 'IA a tu medida', desc: 'Asistentes, análisis y generación de contenido entrenados para tu negocio.' },
]

const STEPS = [
  ['01', 'Descubrimiento', 'Entendemos tu operación y definimos el alcance contigo, sin tecnicismos.'],
  ['02', 'Prototipo', 'Te mostramos cómo se verá y funcionará antes de construir todo.'],
  ['03', 'Desarrollo', 'Construimos con tecnología moderna, en entregas que puedes ver avanzar.'],
  ['04', 'Lanzamiento y soporte', 'Ponemos tu solución en producción y seguimos a tu lado con mejoras.'],
]

export default function SoftwareAMedidaPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-14%', left: '-6%', background: 'rgba(15,118,110,.4)' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <span className="vt-eyebrow on-dark"><Code2 size={13} /> Software a medida</span>
            <h1 className="vt-h1">Software hecho para tu <span className="vt-grad">operación real</span></h1>
            <p className="vt-lead">Diseñamos y desarrollamos plataformas web, apps móviles y sistemas internos pensados para resolver tu problema concreto. Del prototipo a producción, con IA donde suma.</p>
            <div className="vt-hero-btns">
              <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Conversemos tu proyecto</a>
              <a href="/como-trabajamos" className="vt-btn vt-btn-ghost-dark">Cómo trabajamos <ArrowRight size={16} /></a>
            </div>
          </div>
          <Reveal delay={0.1}>
            <Figure src="/images/servicios/software-a-medida.png" alt="Software a medida de Vanty" caption="Plataforma a medida (mockup)" badge={<><Code2 size={15} color="#0f766e" /> A tu medida</>} />
          </Reveal>
        </div>
      </header>

      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Qué construimos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Todo lo que tu negocio necesita, en un solo equipo</h2>
          </Reveal>
          <div className="vt-grid-3">
            {WHAT.map((w, i) => {
              const Icon = w.icon
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico soft"><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 18 }}>{w.title}</h3>
                    <p className="vt-card-desc">{w.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="vt-section soft">
        <div className="vt-inner vt-hero-split" style={{ alignItems: 'center' }}>
          <Reveal>
            <span className="vt-eyebrow"><ShieldCheck size={13} /> Cómo lo hacemos</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Un proceso claro, sin sorpresas</h2>
            <ul className="vt-checks" style={{ marginTop: 22 }}>
              {['Precios y alcance acordados desde el inicio', 'Avances que puedes ver y probar', 'Código y datos que te pertenecen', 'Mantenimiento y mejoras después del lanzamiento'].map(t => (
                <li key={t}><Check size={18} /> {t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="vt-card" style={{ gap: 20 }}>
              {STEPS.map(([n, t, d]) => (
                <div key={n} className="vt-step">
                  <div className="vt-step-n">{n}</div>
                  <h3 className="vt-h3" style={{ fontSize: 17, marginTop: 4 }}>{t}</h3>
                  <p className="vt-card-desc" style={{ marginTop: 4 }}>{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Cuéntanos qué quieres construir</h2>
          <p className="vt-cta-sub">Una llamada basta para entender tu idea y decirte cómo la hacemos realidad.</p>
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
