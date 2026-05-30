import type { Metadata } from 'next'
import { Zap, ArrowRight, Phone, Check } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Wave from '@/app/components/Wave'
import { WA_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Cómo trabajamos — Vanty | Del código a la solución',
  description: 'Nuestra metodología combina la agilidad de una startup con el rigor de la ingeniería de sistemas: análisis y arquitectura, desarrollo asistido por IA, seguridad desde el día cero e iteración continua.',
}

const STEPS = [
  { n: '01', c: '#1D4ED8', title: 'Análisis y arquitectura profunda', desc: 'Antes de escribir una sola línea de código, entendemos la lógica del negocio. Diseñamos esquemas de datos sólidos y planificamos integraciones que soporten el crecimiento a largo plazo.' },
  { n: '02', c: '#7c3aed', title: 'Desarrollo asistido por IA', desc: 'Potenciamos nuestra propia productividad con IA en el ciclo de desarrollo. Iteramos más rápido, optimizamos el código y llevamos soluciones al mercado en tiempo récord sin sacrificar calidad.' },
  { n: '03', c: '#0f766e', title: 'Seguridad y escalabilidad desde el día cero', desc: 'La protección de la información es innegociable, sobre todo con datos clínicos o empresariales sensibles. Implementamos protocolos de ciberseguridad robustos en cada capa.' },
  { n: '04', c: '#d97706', title: 'Iteración continua', desc: 'El software nunca está “terminado”. Monitoreamos el rendimiento, analizamos el uso y lanzamos actualizaciones constantes para que los productos evolucionen con la tecnología.' },
]

export default function ComoTrabajamosPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, bottom: '-18%', right: '-6%', background: 'rgba(37,99,235,.16)' }} />
        <div className="vt-arc" style={{ width: 220, height: 220, top: '10%', left: '7%', borderWidth: 2, borderColor: 'rgba(15,118,110,.2)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow"><Zap size={13} /> Cómo trabajamos</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Del código a la <span className="vt-grad-ink">solución</span></h1>
          <p className="vt-lead">Un proceso diseñado para el éxito. Combinamos la agilidad de una startup con el rigor de la ingeniería de sistemas para transformar ideas complejas en plataformas elegantes.</p>
        </div>
      </header>

      <div style={{ background: '#ffffff' }}><Wave fill="#f7f9fc" /></div>

      <section className="vt-section" style={{ background: '#f7f9fc' }}>
        <div className="vt-inner">
          <div className="vt-grid-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="vt-open" as="div">
                <span className="vt-stepc-num" style={{ background: s.c, margin: '0 0 16px' }}>{s.n}</span>
                <h3 className="vt-h3" style={{ fontSize: 20 }}>{s.title}</h3>
                <p className="vt-card-desc" style={{ fontSize: 15 }}>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: '#f7f9fc' }}><Wave flip fill="#ffffff" /></div>

      <section className="vt-section">
        <div className="vt-inner vt-narrow" style={{ margin: '0 auto' }}>
          <Reveal>
            <h2 className="vt-h2" style={{ textAlign: 'center', marginBottom: 26 }}>Lo que siempre tienes con Vanty</h2>
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

      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#0c1838" /></div>

      <section className="vt-cta" style={{ paddingTop: 40 }}>
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Empecemos por escucharte</h2>
          <p className="vt-cta-sub">Una conversación corta es suficiente para saber cómo podemos ayudarte.</p>
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
