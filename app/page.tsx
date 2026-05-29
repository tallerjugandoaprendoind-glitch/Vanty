import type { Metadata } from 'next'
import {
  Brain, Code2, Rocket, ArrowRight, Check, Sparkles, Cpu, Gauge, Shield, Globe,
  HeartPulse, GraduationCap, Building2, Lightbulb, Phone, MessageSquare, Star, Layers,
  Bot, FileText, BellRing, CalendarCheck,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import { SERVICES, WA_URL, type IconKey } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Vanty — Software e IA que resuelve problemas reales',
  description: 'Empresa de tecnología que diseña software inteligente e IA para sectores con impacto: salud, educación y bienestar. Productos propios como Vanty ABA y software a medida. Desde Perú para LATAM.',
}

const SVC_ICONS: Record<IconKey, any> = { brain: Brain, code: Code2, rocket: Rocket }

const AI_TEASERS = [
  { icon: FileText, name: 'NotaIA', desc: 'Genera reportes y notas clínicas en segundos.' },
  { icon: BellRing, name: 'GuardiánAI', desc: 'Audita la documentación y detecta lo que falta.' },
  { icon: CalendarCheck, name: 'AgendaAI', desc: 'Organiza sesiones, recordatorios y disponibilidad.' },
  { icon: Bot, name: 'ARIA', desc: 'El asistente clínico que coordina a todos los agentes.' },
]

const PILLARS = [
  { icon: Cpu, title: 'IA aplicada, no de moda', desc: 'Integramos inteligencia artificial donde realmente ahorra horas y mejora decisiones.' },
  { icon: Gauge, title: 'Del problema a producción', desc: 'Entendemos el problema real, prototipamos rápido y entregamos software que funciona.' },
  { icon: Shield, title: 'Seguridad y confianza', desc: 'Manejamos datos sensibles con estándares serios. Tu información es tuya.' },
  { icon: Globe, title: 'Hecho en LATAM, para LATAM', desc: '100% en español, precios en moneda local y soporte cercano.' },
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
        <div className="vt-blob" style={{ width: 380, height: 380, bottom: '-18%', right: '-4%', background: 'rgba(124,58,237,.3)', animationDelay: '5s' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <span className="vt-eyebrow on-dark"><span className="dot" /> Empresa de tecnología · Perú → LATAM</span>
            <h1 className="vt-h1">Creamos <span className="vt-grad">software e IA</span> que resuelve problemas reales</h1>
            <p className="vt-lead">
              Vanty diseña software inteligente e inteligencia artificial para sectores con impacto.
              Construimos productos propios como <strong style={{ color: '#fff' }}>Vanty ABA</strong> —ya en uso en centros
              terapéuticos— y soluciones a medida para quienes quieren avanzar.
            </p>
            <div className="vt-hero-btns">
              <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Agenda una demo</a>
              <a href="/vanty-aba" className="vt-btn vt-btn-ghost-dark">Conoce Vanty ABA <ArrowRight size={16} /></a>
            </div>
            <p style={{ marginTop: 18, fontSize: 13.5, color: 'rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={15} /> Sin tecnicismos · Setup acompañado · Soporte en español
            </p>
          </div>
          <Reveal delay={0.1}>
            <Figure
              src="/images/hero-home.png"
              alt="Productos y plataformas creados por Vanty"
              caption="Captura de producto Vanty (1200×900)"
              badge={<><Sparkles size={15} color="#1D4ED8" /> Potenciado con IA</>}
            />
          </Reveal>
        </div>
      </header>

      {/* LOGOS */}
      <section className="vt-section" style={{ paddingTop: 52, paddingBottom: 52 }}>
        <div className="vt-inner">
          <p className="vt-logos-label">Equipos y centros que ya avanzan con Vanty</p>
          <Reveal className="vt-logos">
            <span className="vt-logo-chip"><img src="/images/aprendo.png" alt="Jugando Aprendo" /> Jugando Aprendo</span>
            <span className="vt-logo-ghost">+ tu organización aquí</span>
            <span className="vt-logo-ghost">Salud</span>
            <span className="vt-logo-ghost">Educación</span>
            <span className="vt-logo-ghost">Empresas</span>
          </Reveal>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="vt-section" style={{ paddingTop: 0 }}>
        <div className="vt-inner">
          <Reveal className="vt-statband">
            {[
              { n: 'IA', c: 'Integrada en cada producto' },
              { n: '4+', c: 'Roles en una sola plataforma' },
              { n: '100%', c: 'En español, para LATAM' },
              { n: '24h', c: 'Para arrancar tu solución' },
            ].map((s, i) => (
              <div key={i} className="vt-stat-cell2">
                <div className="vt-stat-big">{s.n}</div>
                <div className="vt-stat-cap">{s.c}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="vt-section soft" id="servicios">
        <div className="vt-inner">
          <Reveal className="vt-section-head">
            <div>
              <span className="vt-eyebrow"><Layers size={13} /> Servicios</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>Una empresa, varias formas de resolver tu problema</h2>
              <p className="vt-lead">Productos propios, software a medida e IA aplicada para sectores con impacto.</p>
            </div>
            <a href="/servicios" className="vt-btn vt-btn-ghost">Ver todos <ArrowRight size={16} /></a>
          </Reveal>
          <div className="vt-grid-3">
            {SERVICES.map((s, i) => {
              const Icon = SVC_ICONS[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
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

      {/* IA SECTION (dark) */}
      <section className="vt-section vt-dark">
        <div className="vt-hero-grid" />
        <div className="vt-inner" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow on-dark"><Sparkles size={13} /> Construido con IA</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>IA pensada para resolver, no para presumir</h2>
            <p className="vt-lead">En Vanty ABA, ARIA y su equipo de agentes hacen el trabajo pesado: generan reportes, auditan documentación, organizan agendas y anticipan alertas. Así es como integramos IA en todo lo que creamos.</p>
          </Reveal>
          <div className="vt-ai-grid">
            {AI_TEASERS.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={i} delay={i * 0.07}>
                  <div className="vt-ai-card">
                    <span className="vt-ai-ico"><Icon size={20} /></span>
                    <div className="vt-ai-name">{a.name} <span className="vt-ai-tag">IA</span></div>
                    <div className="vt-ai-desc">{a.desc}</div>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="vt-head-center" delay={0.1}>
            <a href="/vanty-aba" className="vt-btn vt-btn-light" style={{ marginTop: 40 }}>Conoce el Hub de IA de Vanty ABA <ArrowRight size={16} /></a>
          </Reveal>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="vt-section">
        <div className="vt-inner">
          <div className="vt-feature">
            <Reveal className="vt-feature-text">
              <span className="vt-eyebrow"><Brain size={13} /> Producto estrella</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>Vanty ABA: tu centro entero en una plataforma</h2>
              <p className="vt-lead" style={{ marginTop: 14 }}>La primera plataforma ABA multi-rol de LATAM. Dirección, especialistas, secretaría y familias trabajando en sincronía, con un hub de IA clínica, facturación, agenda y portal familiar.</p>
              <ul className="vt-checks" style={{ marginTop: 18 }}>
                {['Hub de IA clínica (ARIA + agentes)', 'Facturación, agenda y WhatsApp integrados', 'Portal familiar y evaluaciones con IA'].map(t => <li key={t}><Check size={18} /> {t}</li>)}
              </ul>
              <a href="/vanty-aba" className="vt-btn vt-btn-primary" style={{ marginTop: 24 }}>Explorar Vanty ABA <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal className="vt-feature-media" delay={0.1}>
              <Figure src="/images/vanty-aba/dashboard.png" alt="Dashboard de Vanty ABA" caption="Dashboard de Vanty ABA (1200×900)" light badge={<><Bot size={15} color="#1D4ED8" /> ARIA · IA clínica</>} />
            </Reveal>
          </div>

          <div className="vt-feature reverse">
            <Reveal className="vt-feature-text">
              <span className="vt-eyebrow"><Code2 size={13} /> Software a medida</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>¿Tu problema es único? Tu software también</h2>
              <p className="vt-lead" style={{ marginTop: 14 }}>Diseñamos y desarrollamos plataformas web, apps móviles y sistemas internos pensados para tu operación real. Del prototipo a producción, con IA donde suma y mantenimiento incluido.</p>
              <ul className="vt-checks" style={{ marginTop: 18 }}>
                {['Web, móvil, dashboards e integraciones', 'Automatización de procesos manuales', 'Precios y alcance claros desde el inicio'].map(t => <li key={t}><Check size={18} /> {t}</li>)}
              </ul>
              <a href="/servicios/software-a-medida" className="vt-btn vt-btn-primary" style={{ marginTop: 24 }}>Ver software a medida <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal className="vt-feature-media" delay={0.1}>
              <Figure src="/images/servicios/software-a-medida.png" alt="Software a medida de Vanty" caption="Mockup de plataforma a medida (1200×900)" light badge={<><Code2 size={15} color="#0f766e" /> A tu medida</>} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* POR QUÉ (pillars) */}
      <section className="vt-section soft" id="nosotros">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Star size={13} /> Por qué Vanty</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Tecnología que se nota en los resultados</h2>
          </Reveal>
          <div className="vt-grid-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={i} delay={i * 0.07}>
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
          </Reveal>
          <div className="vt-grid-4">
            {SECTORS.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={i} delay={i * 0.07}>
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

      {/* TESTIMONIO */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-quote">
            <div className="vt-quote-mark">“</div>
            <p className="vt-quote-text">Antes tardaba horas escribiendo reportes. Con Vanty ABA y ARIA lo hago en minutos y me enfoco en lo que importa: mis pacientes.</p>
            <div className="vt-quote-who">
              <img className="vt-quote-av" src="/images/Testimonial.png" alt="Ana M." />
              <div style={{ textAlign: 'left' }}>
                <div className="vt-quote-name">Ana M.</div>
                <div className="vt-quote-role">Analista ABA · Lima, Perú</div>
              </div>
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
            <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Agenda una demo</a>
            <a href="/contacto" className="vt-btn vt-btn-ghost-dark">Ir a contacto <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
