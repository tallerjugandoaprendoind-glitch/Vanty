import type { Metadata } from 'next'
import { Zap, ArrowRight, Phone, Ear, PenTool, Cpu, Rocket, Check } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Cómo trabajamos — Vanty | De la idea a la solución, sin vueltas',
  description: 'Nuestro proceso para crear software e IA: escuchamos el problema, diseñamos la solución, construimos con IA y acompañamos el lanzamiento. Simple y transparente.',
}

const STEPS = [
  { icon: Ear, n: '01', title: 'Escuchamos el problema', desc: 'Conversamos para entender qué necesitas resolver de verdad, sin tecnicismos. El objetivo no es vender software, es resolver tu problema.' },
  { icon: PenTool, n: '02', title: 'Diseñamos la solución', desc: 'Proponemos el camino más simple y efectivo, con un prototipo claro para que veas y pruebes antes de construir todo.' },
  { icon: Cpu, n: '03', title: 'Construimos con IA', desc: 'Desarrollamos rápido, con tecnología moderna e inteligencia artificial donde realmente suma, en entregas que puedes ver avanzar.' },
  { icon: Rocket, n: '04', title: 'Lanzamos y acompañamos', desc: 'Ponemos tu solución en marcha, capacitamos a tu equipo y seguimos a tu lado con soporte cercano y mejoras continuas.' },
]

export default function ComoTrabajamosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, bottom: '-18%', right: '-6%', background: 'rgba(37,99,235,.36)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow on-dark"><Zap size={13} /> Cómo trabajamos</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>De la idea a la solución, <span className="vt-grad">sin vueltas</span></h1>
          <p className="vt-lead">Un proceso claro y humano. Tú nos cuentas el problema; nosotros lo convertimos en tecnología que funciona.</p>
        </div>
      </header>

      <section className="vt-section">
        <div className="vt-inner vt-grid-2">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="vt-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
                    <span className="vt-ico soft" style={{ marginBottom: 0 }}><Icon size={22} /></span>
                    <span className="vt-display" style={{ fontWeight: 900, fontSize: 30, color: '#cfe0fb' }}>{s.n}</span>
                  </div>
                  <h3 className="vt-h3" style={{ fontSize: 20, marginTop: 8 }}>{s.title}</h3>
                  <p className="vt-card-desc">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="vt-section soft">
        <div className="vt-inner vt-narrow" style={{ margin: '0 auto' }}>
          <Reveal>
            <h2 className="vt-h2" style={{ textAlign: 'center', marginBottom: 24 }}>Lo que siempre tienes con Vanty</h2>
            <ul className="vt-checks">
              {[
                'Precios y alcance acordados desde el inicio — sin sorpresas.',
                'Comunicación directa y cercana, en español.',
                'Avances que puedes ver y probar durante el proceso.',
                'Tu información y tu código te pertenecen.',
                'Soporte y mejoras después del lanzamiento.',
              ].map(t => <li key={t}><Check size={18} /> {t}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="vt-cta">
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Empecemos por escucharte</h2>
          <p className="vt-cta-sub">Una conversación corta es suficiente para saber cómo podemos ayudarte.</p>
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
