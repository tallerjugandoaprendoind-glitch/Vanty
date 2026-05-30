import type { Metadata } from 'next'
import { MessageSquare, Phone, Mail, Instagram, Facebook, ArrowRight, Clock, MapPin } from 'lucide-react'
import SiteNav from '@/app/components/SiteNav'
import SiteFooter from '@/app/components/SiteFooter'
import Reveal from '@/app/components/Reveal'
import { WA_URL, EMAIL, FB_URL, IG_URL } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Contacto — Vanty | Conversemos tu proyecto',
  description: 'Hablemos. Escríbenos por WhatsApp o email y cuéntanos qué problema quieres resolver con tecnología. Respuesta rápida y cercana.',
}

const CHANNELS = [
  { icon: Phone, title: 'WhatsApp', desc: 'La forma más rápida de hablar con nosotros.', cta: 'Escribir por WhatsApp', href: WA_URL, accent: '#1D4ED8', external: true },
  { icon: Mail, title: 'Email', desc: EMAIL, cta: 'Enviar un correo', href: `mailto:${EMAIL}`, accent: '#0f766e', external: false },
  { icon: Instagram, title: 'Instagram', desc: 'Mira lo que hacemos día a día.', cta: 'Seguir a Vanty', href: IG_URL, accent: '#7c3aed', external: true },
]

export default function ContactoPage() {
  return (
    <>
      <SiteNav />

      <header className="vt-hero vt-hero-light vt-rel">
        <div className="vt-hero-grid" />
        <div className="vt-blob" style={{ width: 420, height: 420, top: '-14%', right: '-6%', background: 'rgba(37,99,235,.16)' }} />
        <div className="vt-arc" style={{ width: 200, height: 200, bottom: '8%', left: '8%', borderWidth: 2, borderColor: 'rgba(124,58,237,.18)' }} />
        <div className="vt-hero-inner vt-hero-center">
          <span className="vt-eyebrow"><MessageSquare size={13} /> Contacto</span>
          <h1 className="vt-h1" style={{ marginTop: 18 }}>Hablemos del <span className="vt-grad-ink">futuro</span></h1>
          <p className="vt-lead">Cuéntanos qué quieres resolver. Te respondemos con honestidad y cercanía — incluso antes de ser cliente.</p>
          <div className="vt-hero-btns">
            <a href={WA_URL} className="vt-btn vt-btn-primary" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Hablar por WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="vt-btn vt-btn-ghost"><Mail size={16} /> {EMAIL}</a>
          </div>
        </div>
      </header>

      <section className="vt-section">
        <div className="vt-inner">
          <div className="vt-grid-3">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="vt-card" style={{ height: '100%' }}>
                    <span className="vt-ico" style={{ background: c.accent }}><Icon size={22} /></span>
                    <h3 className="vt-h3" style={{ fontSize: 18 }}>{c.title}</h3>
                    <p className="vt-card-desc">{c.desc}</p>
                    <a className="vt-link" href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}>
                      {c.cta} <ArrowRight size={15} />
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="vt-card" style={{ marginTop: 22, background: 'var(--soft)', flexDirection: 'row', flexWrap: 'wrap', gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="vt-trust-item"><Clock size={16} /> Respondemos en horario LATAM, normalmente el mismo día.</span>
              <span className="vt-trust-item"><MapPin size={16} /> Lima, Perú · Trabajamos para toda América Latina.</span>
              <span style={{ display: 'flex', gap: 10 }}>
                <a href={FB_URL} className="vt-soc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ background: '#eef3fb', color: '#1D4ED8' }}><Facebook size={17} /></a>
                <a href={IG_URL} className="vt-soc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ background: '#eef3fb', color: '#1D4ED8' }}><Instagram size={17} /></a>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
