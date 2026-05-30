import {
  Brain, Bot, FileText, ShieldAlert, Target, Activity, TrendingUp, Lightbulb, BookOpen,
  ClipboardList, BarChart3, CalendarDays, CreditCard, Stethoscope, Users, MessageSquare,
  Video, ArrowRight, Check, Phone, Star, Sparkles, LayoutGrid, UserCog, Headset, HeartHandshake,
} from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import Figure from '@/app/components/Figure'
import FaqList from '@/app/components/FaqList'
import Wave from '@/app/components/Wave'
import { WA_URL, EMAIL } from '@/app/lib/site'

const AGENTS = [
  { icon: Bot, name: 'ARIA', desc: 'El asistente clínico que conversa contigo y coordina a todos los agentes.' },
  { icon: FileText, name: 'NotaIA', desc: 'Genera reportes de sesión y notas clínicas completas en segundos.' },
  { icon: ShieldAlert, name: 'GuardiánAI', desc: 'Audita la documentación y alerta lo que falta o no cuadra.' },
  { icon: Target, name: 'ObjetivoAI', desc: 'Sugiere y evalúa objetivos ABA por dominio para cada paciente.' },
  { icon: Activity, name: 'PatrónAI', desc: 'Detecta patrones en los datos de sesión que el ojo no ve.' },
  { icon: TrendingUp, name: 'PredicciónAI', desc: 'Anticipa el progreso y avisa de riesgos antes de que ocurran.' },
  { icon: Lightbulb, name: 'SugerenciasAI', desc: 'Recomendaciones clínicas accionables según cada caso.' },
  { icon: BookOpen, name: 'ConocimientoAI', desc: 'Tu base de conocimiento clínica, lista para responder al instante.' },
]

const AGENT_COLORS = [
  { bg: '#e6efff', fg: '#1D4ED8' },
  { bg: '#efe7fe', fg: '#7c3aed' },
  { bg: '#ddf7ef', fg: '#0f766e' },
  { bg: '#fdeccf', fg: '#d97706' },
  { bg: '#fde6ef', fg: '#e11d6b' },
  { bg: '#e0f5fb', fg: '#0891b2' },
]

const CAPS = [
  { icon: ClipboardList, t: 'Registro de sesiones ABA', d: 'Toma de datos en tiempo real, por objetivo y dominio.' },
  { icon: Target, t: 'Programas ABA', d: 'Define objetivos, criterios y seguimiento por paciente.' },
  { icon: BarChart3, t: 'Analítica y gráficas', d: 'Gráficos de dominio con alertas automáticas al ≥80%.' },
  { icon: CalendarDays, t: 'Agenda y calendario', d: 'Sesiones y citas, sincronizadas con Google y Outlook.' },
  { icon: CreditCard, t: 'Facturación y pagos', d: 'Cobros, comprobantes y reportes financieros integrados.' },
  { icon: Stethoscope, t: 'Evaluaciones + CIE-11', d: 'Evaluaciones iniciales con IA y buscador diagnóstico CIE-11.' },
  { icon: Users, t: 'Portal familiar', d: 'Las familias siguen el progreso y reciben actividades para casa.' },
  { icon: MessageSquare, t: 'Comunicación + WhatsApp', d: 'Chat interno y notificaciones a familias por WhatsApp.' },
  { icon: Video, t: 'Videollamadas y push', d: 'Sesiones remotas y notificaciones push nativas.' },
]

const ROLES = [
  { icon: UserCog, name: 'Dirección y analistas', accent: '#1D4ED8', items: ['Dashboard de todo el centro', 'Programas y supervisión clínica', 'Reportes con IA y analítica', 'Gestión de equipo y permisos'] },
  { icon: Stethoscope, name: 'Especialistas', accent: '#7c3aed', items: ['Registro de sus sesiones', 'Historial clínico del paciente', 'Notas clínicas con ARIA', 'Agenda y comunicación'] },
  { icon: Headset, name: 'Secretaría', accent: '#0891b2', items: ['Agenda y cronograma del centro', 'Pagos, cobros y comprobantes', 'WhatsApp con familias', 'Sin acceso clínico sensible'] },
  { icon: HeartHandshake, name: 'Familias', accent: '#ea580c', items: ['Progreso del paciente en vivo', 'Reportes y resúmenes de sesión', 'Actividades para el hogar', 'Mensajería con el especialista'] },
]

const CMP_HEAD = ['Característica', 'Software internacional', 'Otras apps', '⭐ Vanty ABA']
const CMP_ROWS = [
  ['Multi-rol (dirección, especialista, secretaría, familia)', '⚠️ Limitado', '❌ No aplica', '✅ 4 roles nativos'],
  ['Hub de IA con agentes clínicos (ARIA + más)', '❌ No', '❌ No', '✅ Suite completa'],
  ['Reportes clínicos con IA en segundos', '⚠️ Manual', '❌ No', '✅ Automáticos'],
  ['Evaluaciones iniciales + diagnóstico CIE-11', '⚠️ Parcial', '❌ No', '✅ Con IA'],
  ['Facturación y pagos integrados', '⚠️ Módulo aparte', '❌ No', '✅ Incluido'],
  ['WhatsApp integrado para familias', '❌ No', '⚠️ Básico', '✅ Nativo'],
  ['Sincronización Google y Outlook', '⚠️ Parcial', '❌ No', '✅ Incluida'],
  ['Multilingüe, se adapta a tu idioma', '⚠️ Limitado', '⚠️ Parcial', '✅ Sí'],
  ['Precio transparente, sin costos ocultos', '⚠️ Módulos extra', '⚠️ Variable', '✅ Todo incluido'],
  ['Setup completo incluido', '❌ Costo extra', '❌ No', '✅ Incluido'],
]
const cellClass = (v: string) => v.startsWith('✅') ? 'yes' : v.startsWith('❌') ? 'no' : v.startsWith('⚠️') ? 'par' : ''

const PLANS = [
  { name: 'Primer mes · Setup', cur: 'S/', num: '200', per: '', desc: 'Configuración completa, carga de pacientes y capacitación de tu equipo incluida.', feats: ['Setup completo del sistema', 'Carga inicial de pacientes', 'Capacitación del equipo', 'Todos los módulos y el Hub de IA'], feat: false, badge: '' },
  { name: 'Mensual · Sin permanencia', cur: 'S/', num: '120', per: '/mes', desc: 'Acceso a todo: módulos, Hub de IA ilimitado, actualizaciones y soporte.', feats: ['Todos los módulos activos', 'ARIA y agentes 24/7', 'Facturación, agenda y WhatsApp', 'Usuarios ilimitados', 'Soporte por WhatsApp y email'], feat: true, badge: 'Más elegido' },
  { name: 'Anual · Pagas 10, usas 12', cur: 'S/', num: '1,180', per: '/año', desc: 'Paga solo 10 meses y usa 12. Ahorra S/260 — sin permanencias.', feats: ['Todo lo del plan mensual', '2 meses gratis', 'Precio bloqueado 12 meses', 'Soporte VIP y onboarding prioritario'], feat: false, badge: '🎁 2 meses gratis' },
]

const FAQS = [
  { q: '¿En qué se diferencia Vanty ABA del software internacional?', a: 'El software ABA internacional suele ser costoso, rígido y pensado para otra realidad operativa. Vanty ABA te ofrece lo mismo y más —Hub de IA clínica, facturación, agenda y portal familiar—, es multilingüe (se adapta a tu idioma) e incluye setup completo, un rol de secretaría y acompañamiento cercano que otras plataformas no contemplan.' },
  { q: '¿Cuánto cuesta Vanty ABA para mi centro?', a: 'El primer mes es S/200 e incluye configuración completa, carga inicial de pacientes y capacitación. Desde el segundo mes pagas S/120/mes sin permanencia. Con el plan anual pagas S/1,180 (equivale a 10 meses) y usas 12 — 2 meses gratis y S/260 de ahorro.' },
  { q: '¿Necesito conocimientos técnicos para usarlo?', a: 'Para nada. Vanty ABA está diseñado para analistas y terapeutas, no para perfiles técnicos. La interfaz es intuitiva y está en tu idioma, y nosotros hacemos el setup completo contigo en las primeras 24 horas.' },
  { q: '¿Qué es el Hub de IA y cómo me ayuda?', a: 'Es un equipo de asistentes de IA liderado por ARIA. Generan reportes y notas, auditan documentación, sugieren y evalúan objetivos, detectan patrones y anticipan alertas — para que tu equipo dedique su tiempo a los pacientes, no al papeleo.' },
  { q: '¿Mis datos de pacientes están seguros?', a: 'Absolutamente. Tus datos son 100% tuyos, almacenados con estándares de seguridad clínica. Nunca compartimos información con terceros y tienes control total en todo momento.' },
  { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. El plan mensual no tiene permanencia mínima: cancelas cuando quieras desde el panel. El plan anual es un pago único por 12 meses y no se renueva automáticamente.' },
]

export default function VantyAbaPage() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 460, height: 460, top: '-14%', left: '-6%', background: 'rgba(37,99,235,.16)' }} />
        <div className="vt-blob" style={{ width: 360, height: 360, bottom: '-16%', right: '-4%', background: 'rgba(124,58,237,.14)', animationDelay: '5s' }} />
        <div className="vt-arc" style={{ width: 260, height: 260, top: '14%', right: '6%', borderWidth: 2, borderColor: 'rgba(29,78,216,.16)' }} />
        <div className="vt-hero-inner vt-hero-split">
          <div>
            <span className="vt-eyebrow"><Brain size={13} /> Producto · Vanty ABA</span>
            <h1 className="vt-h1">La plataforma clínica <span className="vt-grad-ink">ABA con IA</span>, hecha para LATAM</h1>
            <p className="vt-lead">
              Dirección, especialistas, secretaría y familias en una sola plataforma. Con un hub de IA clínica,
              facturación, agenda, evaluaciones y portal familiar. Multilingüe y en uso real en centros como
              <strong style={{ color: 'var(--ink)' }}> Jugando Aprendo</strong>.
            </p>
            <div className="vt-hero-btns">
              <a href={WA_URL} className="vt-btn vt-btn-primary" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Agenda una demo</a>
              <a href="#precios" className="vt-btn vt-btn-ghost">Ver precios <ArrowRight size={16} /></a>
            </div>
            <p style={{ marginTop: 18, fontSize: 13.5, color: 'var(--muted-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={15} color="#1D4ED8" /> Setup en 24 horas · Sin permanencia · Soporte dedicado
            </p>
          </div>
          <Reveal delay={0.1}>
            <Figure src="/images/vanty-aba/dashboard.svg" alt="Dashboard de Vanty ABA" caption="Dashboard de Vanty ABA" frameless blob="radial-gradient(circle at 45% 40%, rgba(96,165,250,.35), rgba(124,58,237,.18))" badge={<><Bot size={15} color="#1D4ED8" /> ARIA · IA clínica</>} />
          </Reveal>
        </div>
      </header>

      {/* LOGOS + USO REAL */}
      <section className="vt-section" style={{ paddingTop: 52, paddingBottom: 0 }}>
        <div className="vt-inner">
          <p className="vt-logos-label">En uso real en centros terapéuticos</p>
          <Reveal className="vt-logos">
            <span className="vt-logo-chip"><img src="/images/aprendo.png" alt="Jugando Aprendo" /> Jugando Aprendo</span>
            <span className="vt-logo-ghost">Centro pionero · Lima 🇵🇪</span>
            <span className="vt-logo-ghost">+ tu centro aquí</span>
          </Reveal>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-statband">
            {[
              { n: '4', c: 'Roles en una sola plataforma' },
              { n: '8', c: 'Agentes de IA clínica' },
              { n: '9+', c: 'Módulos integrados' },
              { n: '24h', c: 'Setup incluido' },
            ].map((s, i) => (
              <div key={i} className="vt-stat-cell2">
                <div className="vt-stat-big">{s.n}</div>
                <div className="vt-stat-cap">{s.c}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HUB DE IA */}
      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#f5f1fe" /></div>
      <section className="vt-section vt-rel" id="aria" style={{ background: '#f5f1fe' }}>
        <div className="vt-arc" style={{ width: 320, height: 320, top: '-10%', right: '-6%', borderWidth: 1.5, borderColor: 'rgba(124,58,237,.16)' }} />
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Sparkles size={13} /> Hub de IA clínica</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Conoce a ARIA y su equipo de agentes</h2>
            <p className="vt-lead">No es un chatbot genérico. Es un equipo de agentes de IA entrenados para el flujo real de un centro ABA — cada uno con una tarea concreta que le ahorra horas a tu equipo.</p>
          </Reveal>
          <div className="vt-grid-4">
            {AGENTS.map((a, i) => {
              const Icon = a.icon
              const c = AGENT_COLORS[i % AGENT_COLORS.length]
              return (
                <Reveal key={a.name} delay={(i % 4) * 0.06} className="vt-open" as="div">
                  <span className="vt-ico-round" style={{ background: c.bg, color: c.fg }}><Icon size={26} /></span>
                  <h3 className="vt-h3" style={{ fontSize: 17 }}>{a.name} <span style={{ fontSize: 10, fontWeight: 800, color: '#7c3aed', background: '#efe7fe', borderRadius: 6, padding: '2px 6px', marginLeft: 4, verticalAlign: 'middle' }}>IA</span></h3>
                  <p className="vt-card-desc">{a.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
      <div style={{ background: '#f5f1fe' }}><Wave flip fill="#ffffff" /></div>

      {/* CAPACIDADES */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><LayoutGrid size={13} /> La plataforma</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Toda la operación de tu centro, en un solo lugar</h2>
            <p className="vt-lead">Deja de saltar entre apps, hojas de cálculo y chats sueltos. Vanty ABA conecta lo clínico, lo administrativo y a las familias.</p>
          </Reveal>
          <div className="vt-caps">
            {CAPS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.t} delay={(i % 3) * 0.06}>
                  <div className="vt-cap">
                    <span className="vt-cap-ico"><Icon size={22} /></span>
                    <span>
                      <span className="vt-cap-t">{c.t}</span>
                      <span className="vt-cap-d" style={{ display: 'block' }}>{c.d}</span>
                    </span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="vt-section soft" id="roles">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Users size={13} /> Para todo tu equipo</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Cada rol ve exactamente lo que necesita</h2>
          </Reveal>
          <div className="vt-grid-4">
            {ROLES.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.name} delay={i * 0.07}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico" style={{ background: r.accent }}><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 17 }}>{r.name}</h3>
                    <ul className="vt-checks" style={{ marginTop: 12 }}>
                      {r.items.map(it => <li key={it} style={{ fontSize: 13.5 }}><Check size={16} /> {it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="vt-section" id="diferencial">
        <div className="vt-inner">
          <div className="vt-feature">
            <Reveal className="vt-feature-text">
              <span className="vt-eyebrow"><BarChart3 size={13} /> Datos clínicos</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>Datos ABA que se entienden solos</h2>
              <p className="vt-lead" style={{ marginTop: 14 }}>Gráficas de dominio por objetivo, generadas automáticamente desde el registro de sesión. Alertas cuando un objetivo alcanza ≥80% y resúmenes listos para supervisión, sin trabajo manual extra.</p>
              <ul className="vt-checks" style={{ marginTop: 18 }}>
                {['Gráficos por objetivo y dominio', 'Alertas automáticas de metas alcanzadas', 'Importación desde Excel'].map(t => <li key={t}><Check size={18} /> {t}</li>)}
              </ul>
            </Reveal>
            <Reveal className="vt-feature-media" delay={0.1}>
              <Figure src="/images/vanty-aba/graficas.svg" alt="Gráficas clínicas ABA en Vanty ABA" caption="Analítica y gráficas ABA" frameless blob="radial-gradient(circle at 55% 40%, #cfe0fb, #e7defb)" badge={<><BarChart3 size={15} color="#1D4ED8" /> Analítica clínica</>} />
            </Reveal>
          </div>

          <div className="vt-feature reverse">
            <Reveal className="vt-feature-text">
              <span className="vt-eyebrow"><HeartHandshake size={13} /> Familias</span>
              <h2 className="vt-h2" style={{ marginTop: 16 }}>La familia, dentro del proceso</h2>
              <p className="vt-lead" style={{ marginTop: 14 }}>Un portal familiar nativo donde los padres ven el progreso en tiempo real, reciben reportes y actividades para casa, y se comunican con el especialista — con notificaciones por WhatsApp.</p>
              <ul className="vt-checks" style={{ marginTop: 18 }}>
                {['Progreso del paciente en tiempo real', 'Actividades recomendadas para el hogar', 'Mensajería y WhatsApp con el equipo'].map(t => <li key={t}><Check size={18} /> {t}</li>)}
              </ul>
            </Reveal>
            <Reveal className="vt-feature-media" delay={0.1}>
              <Figure src="/images/vanty-aba/portal-familiar.svg" alt="Portal familiar de Vanty ABA" caption="Portal familiar" frameless blob="radial-gradient(circle at 50% 40%, #fde6ef, #cfe0fb)" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="vt-section soft">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><Star size={13} /> Por qué Vanty ABA</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>La alternativa LATAM, hecha para tu centro</h2>
            <p className="vt-lead">Todo lo que esperas de un software ABA internacional —y más—, con IA integrada, multilingüe y pensado para tu equipo.</p>
          </Reveal>
          <Reveal className="vt-cmp-wrap">
            <table className="vt-cmp">
              <thead>
                <tr>{CMP_HEAD.map((h, i) => <th key={i}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {CMP_ROWS.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j} className={j > 0 ? cellClass(cell) : ''}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="vt-section">
        <div className="vt-inner">
          <Reveal className="vt-quote">
            <div className="vt-quote-mark">“</div>
            <p className="vt-quote-text">Antes tardaba horas escribiendo reportes. Con ARIA lo hago en minutos y puedo enfocarme en lo que importa: mis pacientes.</p>
            <div className="vt-quote-who">
              <img className="vt-quote-av" src="/images/Testimonial.png" alt="Ana M." />
              <div style={{ textAlign: 'left' }}>
                <div className="vt-quote-name">Ana M.</div>
                <div className="vt-quote-role">Analista ABA</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRECIOS */}
      <section className="vt-section soft" id="precios">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><CreditCard size={13} /> Precios</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>Planes claros, sin sorpresas</h2>
            <p className="vt-lead">Sin contratos anuales obligatorios. Tu plataforma activa en 24 horas desde el primer pago.</p>
          </Reveal>
          <div className="vt-price-grid">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className={`vt-price${p.feat ? ' feat' : ''}`}>
                  {p.badge && <span className="vt-price-badge">{p.badge}</span>}
                  <div className="vt-price-name">{p.name}</div>
                  <div className="vt-price-amt">
                    <span className="vt-price-cur">{p.cur}</span>
                    <span className="vt-price-num">{p.num}</span>
                    {p.per && <span className="vt-price-per">{p.per}</span>}
                  </div>
                  <p className="vt-price-desc">{p.desc}</p>
                  <ul className="vt-checks">{p.feats.map(f => <li key={f} style={{ fontSize: 13.5 }}><Check size={16} /> {f}</li>)}</ul>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={`vt-btn ${p.feat ? 'vt-btn-primary' : 'vt-btn-ghost'}`} style={{ marginTop: 22, width: '100%', justifyContent: 'center' }}>Empezar</a>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted-2)', marginTop: 22 }}>🔐 Activación en 24 h · Gestionado directamente con el equipo Vanty</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="vt-section" id="faq">
        <div className="vt-inner">
          <Reveal className="vt-head-center">
            <span className="vt-eyebrow"><MessageSquare size={13} /> Preguntas frecuentes</span>
            <h2 className="vt-h2" style={{ marginTop: 16 }}>¿Tienes dudas? Las respondemos</h2>
          </Reveal>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: '#ffffff' }}><Wave variant={2} fill="#0c1838" /></div>
      <section className="vt-cta" style={{ paddingTop: 40 }}>
        <div className="vt-cta-dots" />
        <div className="vt-cta-inner">
          <h2 className="vt-h2">Ordenemos el trabajo clínico ABA, juntos</h2>
          <p className="vt-cta-sub">Un solo sistema para dirección, especialistas, secretaría y familias.</p>
          <div className="vt-cta-btns">
            <a href={WA_URL} className="vt-btn vt-btn-light" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Agenda una demo</a>
            <a href={`mailto:${EMAIL}`} className="vt-btn vt-btn-ghost-dark">{EMAIL}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
