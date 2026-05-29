'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Brain, Code2, Rocket, Sparkles, ArrowRight, Check, Shield, Zap,
  Phone, Mail, Instagram, Facebook, Menu, X, ChevronDown, Globe,
  Cpu, HeartPulse, GraduationCap, Building2, Lightbulb, MessageSquare,
  Star, Layers, Gauge,
} from 'lucide-react'

const WA_NUM = '51924685557'
const EMAIL  = 'soporte@vanty.xyz'
const WA_MSG = encodeURIComponent('Hola, vi la página de Vanty y quiero conocer más sobre lo que hacen.')
const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`
const FB_URL = 'https://www.facebook.com/profile.php?id=61587764677406'
const IG_URL = 'https://www.instagram.com/vanty.app'

// ── Reveal-on-scroll hook ──────────────────────────────
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ══════════════════════════════════════════════════════
//  SERVICIOS
// ══════════════════════════════════════════════════════
const SERVICES = [
  {
    icon: Brain,
    badge: 'Producto estrella',
    badgeBg: '#1D4ED8',
    title: 'Vanty ABA',
    desc: 'La primera plataforma ABA multi-rol de LATAM. Conecta analistas, especialistas, secretaría y familias, con IA clínica (ARIA), videollamadas, portal familiar y reportes automáticos. Hoy en uso real en centros terapéuticos.',
    tags: ['IA clínica ARIA', 'Multi-rol nativo', 'Portal familiar', 'Reportes automáticos', '100% en español'],
    href: '/vanty-aba',
    cta: 'Conocer Vanty ABA',
    featured: true,
  },
  {
    icon: Code2,
    badge: 'A medida',
    badgeBg: '#0f766e',
    title: 'Software a medida',
    desc: 'Diseñamos y desarrollamos plataformas web, apps y sistemas internos pensados para tu operación real. Del prototipo al producto en producción, con tecnología moderna y mantenimiento incluido.',
    tags: ['Web & móvil', 'Dashboards', 'Integraciones', 'Automatización'],
    href: WA_URL,
    cta: 'Conversemos tu proyecto',
    featured: false,
  },
  {
    icon: Rocket,
    badge: 'Productos propios',
    badgeBg: '#7c3aed',
    title: 'Productos SaaS con IA',
    desc: 'Creamos nuestros propios productos digitales potenciados con inteligencia artificial para resolver problemas concretos en sectores con impacto. Vanty ABA fue el primero — y vienen más.',
    tags: ['IA aplicada', 'Escalable', 'En la nube', 'Próximamente más'],
    href: WA_URL,
    cta: 'Quiero saber más',
    featured: false,
  },
]

function ServicesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="section svc" id="servicios" ref={ref}>
      <div className="inner">
        <div className={`reveal${visible ? ' in' : ''}`} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div className="label"><Layers size={12} /> Servicios</div>
          <h2 className="h2">Una empresa, varias formas<br />de resolver tu problema</h2>
          <p className="sub" style={{ marginTop: 12 }}>
            Vanty crea tecnología con propósito: productos propios, software a medida e IA aplicada para sectores con impacto.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            const external = s.href.startsWith('http')
            return (
              <a
                key={i}
                href={s.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`svc-card reveal${visible ? ' in' : ''}${s.featured ? ' featured' : ''}`}
                style={visible ? { transitionDelay: `${0.1 + i * 0.12}s` } : {}}
              >
                <div className="svc-icon" style={{ background: s.badgeBg }}><Icon size={24} color="#fff" /></div>
                <div className="svc-badge" style={{ color: s.badgeBg, background: `${s.badgeBg}14` }}>{s.badge}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((tag, j) => <span key={j} className="svc-tag">{tag}</span>)}
                </div>
                <span className="svc-cta">{s.cta} <ArrowRight size={15} /></span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════
//  POR QUÉ VANTY
// ══════════════════════════════════════════════════════
const PILLARS = [
  { icon: Cpu, title: 'IA aplicada, no de moda', desc: 'No usamos IA por marketing. La integramos donde realmente ahorra horas y mejora decisiones, como ARIA en Vanty ABA.' },
  { icon: Gauge, title: 'Del problema a producción', desc: 'Entendemos el problema real, prototipamos rápido y entregamos software que funciona en el día a día, no solo demos.' },
  { icon: Shield, title: 'Seguridad y confianza', desc: 'Manejamos datos sensibles con estándares serios. Tu información es tuya y la protegemos como tal.' },
  { icon: Globe, title: 'Hecho en LATAM, para LATAM', desc: '100% en español, precios justos en moneda local y soporte cercano. Desde Perú para toda la región.' },
]

function WhySection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="section why" ref={ref}>
      <div className="inner">
        <div className={`reveal${visible ? ' in' : ''}`} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div className="label"><Star size={12} /> Por qué Vanty</div>
          <h2 className="h2">Tecnología que se nota<br />en los resultados</h2>
        </div>
        <div className="why-grid">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className={`why-card reveal${visible ? ' in' : ''}`} style={visible ? { transitionDelay: `${0.1 + i * 0.1}s` } : {}}>
                <div className="why-icon"><Icon size={22} /></div>
                <h3 className="why-title">{p.title}</h3>
                <p className="why-desc">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════
//  SECTORES CON IMPACTO
// ══════════════════════════════════════════════════════
const SECTORS = [
  { icon: HeartPulse, name: 'Salud y terapia', desc: 'Plataformas clínicas, gestión de pacientes e IA para reportes.' },
  { icon: GraduationCap, name: 'Educación', desc: 'Herramientas de seguimiento, aprendizaje y comunicación con familias.' },
  { icon: Building2, name: 'Empresas', desc: 'Sistemas internos, automatización de procesos y dashboards.' },
  { icon: Lightbulb, name: 'Bienestar e impacto', desc: 'Productos que mejoran la vida de personas y comunidades.' },
]

function SectorsSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="section sectors" ref={ref}>
      <div className="inner">
        <div className={`reveal${visible ? ' in' : ''}`} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div className="label" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)', color: '#bfdbfe' }}>
            <Sparkles size={12} /> Sectores con impacto
          </div>
          <h2 className="h2" style={{ color: '#fff' }}>Donde la tecnología<br />cambia la vida de la gente</h2>
          <p className="sub" style={{ marginTop: 12, color: 'rgba(255,255,255,.7)' }}>
            Nos enfocamos en sectores donde un buen software no es un lujo: es una mejora real para las personas.
          </p>
        </div>
        <div className="sectors-grid">
          {SECTORS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className={`sector-card reveal${visible ? ' in' : ''}`} style={visible ? { transitionDelay: `${0.1 + i * 0.1}s` } : {}}>
                <div className="sector-icon"><Icon size={22} /></div>
                <div className="sector-name">{s.name}</div>
                <div className="sector-desc">{s.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════
//  PROCESO
// ══════════════════════════════════════════════════════
const STEPS = [
  { n: '01', title: 'Escuchamos el problema', desc: 'Conversamos para entender qué necesitas resolver de verdad, sin tecnicismos.' },
  { n: '02', title: 'Diseñamos la solución', desc: 'Proponemos el camino más simple y efectivo, con un prototipo claro.' },
  { n: '03', title: 'Construimos con IA', desc: 'Desarrollamos rápido, con tecnología moderna e inteligencia artificial donde suma.' },
  { n: '04', title: 'Lanzamos y acompañamos', desc: 'Ponemos tu solución en marcha y seguimos a tu lado con soporte y mejoras.' },
]

function ProcessSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="section process" ref={ref}>
      <div className="inner">
        <div className={`reveal${visible ? ' in' : ''}`} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div className="label"><Zap size={12} /> Cómo trabajamos</div>
          <h2 className="h2">De la idea a la solución,<br />sin vueltas</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div key={i} className={`step reveal${visible ? ' in' : ''}`} style={visible ? { transitionDelay: `${0.1 + i * 0.1}s` } : {}}>
              <div className="step-n">{s.n}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════
//  PÁGINA PRINCIPAL — VANTY EMPRESA
// ══════════════════════════════════════════════════════
export default function VantyHome() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { font-family:'Inter',sans-serif; background:#fff; color:#111; overflow-x:hidden; -webkit-font-smoothing:antialiased; }

        @keyframes blob   { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-40px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(.95)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes shine  { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }

        .fu0{animation:fadeUp .7s 0s both}.fu1{animation:fadeUp .7s .12s both}.fu2{animation:fadeUp .7s .26s both}.fu3{animation:fadeUp .7s .4s both}.fu4{animation:fadeUp .7s .54s both}

        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
        .reveal.in{opacity:1;transform:none}

        /* NAV */
        .nav{position:sticky;top:0;z-index:300;background:rgba(255,255,255,.9);backdrop-filter:blur(12px);height:68px;display:flex;align-items:center;padding:0 clamp(16px,4vw,48px);border-bottom:1px solid #eef0f3;transition:box-shadow .3s}
        .nav.scrolled{box-shadow:0 2px 16px rgba(0,0,0,.07)}
        .nav-inner{max-width:1280px;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px}
        .nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}
        .nav-links{display:flex;gap:2px;list-style:none}
        @media(max-width:920px){.nav-links{display:none}}
        .nav-links a{display:flex;align-items:center;gap:4px;padding:8px 14px;border-radius:8px;font-size:14px;font-weight:500;color:#374151;text-decoration:none;transition:all .15s}
        .nav-links a:hover{background:#f3f4f6;color:#111}
        .nav-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
        .btn-ghost{font-size:14px;font-weight:600;color:#374151;text-decoration:none;padding:9px 16px;border-radius:8px;border:1.5px solid #d1d5db;transition:all .15s}
        .btn-ghost:hover{border-color:#111;color:#111}
        .btn-primary{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;background:#1D4ED8;color:#fff;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;font-family:'Poppins',sans-serif;transition:background .2s}
        .btn-primary:hover{background:#1e40af}
        .burger{display:none;background:none;border:1.5px solid #d1d5db;border-radius:8px;padding:8px;cursor:pointer;color:#374151}
        @media(max-width:920px){.burger{display:flex;align-items:center}}
        @media(max-width:600px){.btn-ghost{display:none}}
        .mobile-menu{position:fixed;top:68px;left:0;right:0;z-index:299;background:#fff;border-bottom:1px solid #e5e7eb;padding:16px clamp(16px,4vw,48px) 24px}
        .mobile-menu a{display:flex;align-items:center;justify-content:space-between;padding:14px 0;color:#374151;text-decoration:none;font-size:15px;font-weight:500;border-bottom:1px solid #f3f4f6}

        /* HERO */
        .hero{position:relative;overflow:hidden;background:linear-gradient(160deg,#0a1230 0%,#0c1a4a 45%,#13235e 100%);padding:clamp(90px,12vw,150px) clamp(20px,6vw,80px) clamp(80px,10vw,120px);text-align:center}
        .hero-blob{position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;animation:blob 16s ease-in-out infinite}
        .hero-grid-bg{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px);background-size:30px 30px;mask-image:radial-gradient(ellipse 70% 60% at 50% 40%,#000,transparent)}
        .hero-inner{position:relative;z-index:2;max-width:860px;margin:0 auto;display:flex;flex-direction:column;align-items:center}
        .hero-pre{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:99px;border:1.5px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);backdrop-filter:blur(8px);font-size:12px;font-weight:700;color:#fff;letter-spacing:.05em;text-transform:uppercase;margin-bottom:26px}
        .hero-pre-dot{width:7px;height:7px;border-radius:50%;background:#60a5fa;animation:pulse 2s infinite}
        .hero-h1{font-family:'Poppins',sans-serif;font-size:clamp(38px,6.5vw,76px);font-weight:800;color:#fff;line-height:1.05;letter-spacing:-.03em;margin-bottom:24px}
        .hero-h1 .grad{background:linear-gradient(90deg,#60a5fa,#a78bfa,#60a5fa);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:shine 5s linear infinite}
        .hero-sub{font-size:clamp(16px,2.2vw,20px);color:rgba(255,255,255,.78);line-height:1.65;max-width:620px;margin-bottom:36px}
        .hero-btns{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
        .hero-btn-w{display:inline-flex;align-items:center;gap:8px;padding:15px 30px;background:#fff;color:#0c1a4a;border-radius:10px;font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;text-decoration:none;transition:transform .2s,box-shadow .2s}
        .hero-btn-w:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.25)}
        .hero-btn-g{display:inline-flex;align-items:center;gap:8px;padding:15px 30px;background:rgba(255,255,255,.06);color:#fff;border:1.5px solid rgba(255,255,255,.3);border-radius:10px;font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;text-decoration:none;transition:all .2s}
        .hero-btn-g:hover{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.6)}
        .hero-stats{display:flex;gap:clamp(24px,5vw,64px);justify-content:center;flex-wrap:wrap;margin-top:54px}
        .hero-stat-n{font-family:'Poppins',sans-serif;font-size:clamp(26px,4vw,40px);font-weight:900;color:#fff;line-height:1;letter-spacing:-.02em}
        .hero-stat-l{font-size:12.5px;color:rgba(255,255,255,.55);font-weight:600;margin-top:6px;letter-spacing:.03em}

        /* SECTIONS */
        .section{padding:clamp(64px,9vw,104px) clamp(20px,4vw,48px)}
        .inner{max-width:1180px;margin:0 auto}
        .label{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:99px;background:#eff6ff;border:1px solid #bfdbfe;font-size:11.5px;font-weight:700;color:#1e40af;letter-spacing:.05em;text-transform:uppercase;margin-bottom:16px}
        .h2{font-family:'Poppins',sans-serif;font-size:clamp(28px,4.2vw,46px);font-weight:800;color:#111;letter-spacing:-.03em;line-height:1.1}
        .sub{font-size:clamp(15px,2vw,17px);color:#6b7280;line-height:1.7}

        /* SERVICIOS */
        .svc{background:#f9fafb}
        .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px}
        @media(max-width:920px){.svc-grid{grid-template-columns:1fr;max-width:520px;margin-left:auto;margin-right:auto}}
        .svc-card{display:flex;flex-direction:column;align-items:flex-start;background:#fff;border:1.5px solid #eef0f3;border-radius:22px;padding:32px;text-decoration:none;transition:transform .25s,box-shadow .25s,border-color .25s}
        .svc-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(12,26,74,.1);border-color:#dbeafe}
        .svc-card.featured{border-color:#1D4ED8;box-shadow:0 12px 40px rgba(29,78,216,.12)}
        .svc-icon{width:54px;height:54px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 8px 20px rgba(0,0,0,.12)}
        .svc-badge{font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 10px;border-radius:99px;margin-bottom:12px;font-family:'Poppins',sans-serif}
        .svc-title{font-family:'Poppins',sans-serif;font-size:23px;font-weight:800;color:#111;letter-spacing:-.02em;margin-bottom:10px}
        .svc-desc{font-size:14.5px;color:#6b7280;line-height:1.7;margin-bottom:18px}
        .svc-tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:22px}
        .svc-tag{font-size:11.5px;font-weight:600;color:#374151;background:#f3f4f6;border-radius:99px;padding:4px 11px;font-family:'Poppins',sans-serif}
        .svc-cta{margin-top:auto;display:inline-flex;align-items:center;gap:7px;font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:#1D4ED8}
        .svc-card:hover .svc-cta{gap:11px}
        .svc-cta{transition:gap .2s}

        /* WHY */
        .why{background:#fff}
        .why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:52px}
        @media(max-width:920px){.why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.why-grid{grid-template-columns:1fr}}
        .why-card{background:#f9fafb;border:1px solid #f3f4f6;border-radius:20px;padding:28px;transition:transform .2s,box-shadow .2s,border-color .2s}
        .why-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(29,78,216,.08);border-color:#dbeafe}
        .why-icon{width:48px;height:48px;border-radius:12px;background:#eff6ff;color:#1D4ED8;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
        .why-title{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:#111;line-height:1.25;margin-bottom:9px}
        .why-desc{font-size:13.5px;color:#6b7280;line-height:1.65}

        /* SECTORES */
        .sectors{background:linear-gradient(160deg,#0c1a4a 0%,#13235e 100%);position:relative;overflow:hidden}
        .sectors-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:52px}
        @media(max-width:920px){.sectors-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.sectors-grid{grid-template-columns:1fr}}
        .sector-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:28px;transition:transform .2s,background .2s,border-color .2s}
        .sector-card:hover{transform:translateY(-4px);background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.28)}
        .sector-icon{width:48px;height:48px;border-radius:12px;background:rgba(96,165,250,.15);color:#93c5fd;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
        .sector-name{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:#fff;margin-bottom:8px}
        .sector-desc{font-size:13.5px;color:rgba(255,255,255,.65);line-height:1.6}

        /* PROCESO */
        .process{background:#fff}
        .steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:52px}
        @media(max-width:920px){.steps-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.steps-grid{grid-template-columns:1fr}}
        .step{border-left:2px solid #eef0f3;padding:6px 0 6px 22px}
        .step-n{font-family:'Poppins',sans-serif;font-size:30px;font-weight:900;color:#dbeafe;letter-spacing:-.03em;margin-bottom:8px}
        .step-title{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:#111;margin-bottom:8px;line-height:1.25}
        .step-desc{font-size:13.5px;color:#6b7280;line-height:1.65}

        /* CTA */
        .cta{padding:clamp(72px,9vw,110px) clamp(20px,6vw,80px);text-align:center;background:linear-gradient(135deg,#0c1a4a 0%,#1D4ED8 55%,#0c1a4a 100%);position:relative;overflow:hidden}
        .cta-dots{position:absolute;inset:0;opacity:.06;background-image:radial-gradient(#fff 1px,transparent 1px);background-size:24px 24px}
        .cta-inner{position:relative;z-index:2;max-width:680px;margin:0 auto}
        .cta-h2{font-family:'Poppins',sans-serif;font-size:clamp(30px,5vw,50px);font-weight:800;color:#fff;letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
        .cta-sub{font-size:17px;color:rgba(255,255,255,.74);line-height:1.7;margin-bottom:38px}
        .cta-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}

        /* FOOTER */
        .footer{background:#0a0f1c;padding:60px clamp(20px,4vw,48px) 0}
        .footer-grid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;padding-bottom:48px}
        @media(max-width:880px){.footer-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:520px){.footer-grid{grid-template-columns:1fr}}
        .footer h4{font-family:'Poppins',sans-serif;font-size:13px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:.07em;margin-bottom:18px}
        .footer ul{list-style:none;display:flex;flex-direction:column;gap:11px}
        .footer ul li a{font-size:13.5px;color:#6b7280;text-decoration:none;transition:color .15s}
        .footer ul li a:hover{color:#fff}
        .footer-tagline{font-size:13px;color:#6b7280;line-height:1.7;margin:16px 0 22px;max-width:300px}
        .footer-socials{display:flex;gap:10px}
        .fsoc{width:36px;height:36px;border-radius:8px;background:#1f2937;color:#9ca3af;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all .2s}
        .fsoc:hover{background:#374151;color:#fff}
        .footer-bottom{max-width:1180px;margin:0 auto;border-top:1px solid #1f2937;padding:24px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
        .footer-bottom p{font-size:12px;color:#4b5563}
      `}</style>

      {/* NAVBAR */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/images/logo.png" alt="Vanty" style={{ height: '42px', width: 'auto', display: 'block' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '18px', color: '#111', letterSpacing: '-0.02em' }}>VANTY</span>
              <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 400, fontSize: '10px', color: '#6b7280', letterSpacing: '0.01em' }}>software & inteligencia artificial</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="/vanty-aba">Vanty ABA</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#proceso">Cómo trabajamos</a></li>
            <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">Contacto</a></li>
          </ul>
          <div className="nav-right">
            <a href="/login" className="btn-ghost">Iniciar sesión</a>
            <a href={WA_URL} className="btn-primary" target="_blank" rel="noopener noreferrer"><Phone size={15} /> Hablemos</a>
            <button className="burger" onClick={() => setMenuOpen(m => !m)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <a href="#servicios">Servicios</a>
          <a href="/vanty-aba">Vanty ABA</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">Contacto</a>
          <a href="/login">Iniciar sesión</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-blob" style={{ width: 420, height: 420, top: '-12%', left: '-6%', background: 'rgba(37,99,235,.45)' }} />
        <div className="hero-blob" style={{ width: 360, height: 360, bottom: '-14%', right: '-4%', background: 'rgba(124,58,237,.38)', animationDelay: '4s' }} />
        <div className="hero-inner">
          <div className="hero-pre fu0"><span className="hero-pre-dot" /> Empresa de tecnología · Desde Perú para LATAM</div>
          <h1 className="hero-h1 fu1">Creamos <span className="grad">software e IA</span><br />que resuelve problemas reales</h1>
          <p className="hero-sub fu2">
            Vanty es una empresa de tecnología que diseña software inteligente e inteligencia artificial
            para sectores con impacto —salud, educación y bienestar—. Construimos productos propios como
            <strong style={{ color: '#fff' }}> Vanty ABA</strong> y soluciones a medida para quienes quieren avanzar.
          </p>
          <div className="hero-btns fu3">
            <a href="#servicios" className="hero-btn-w">Ver nuestros servicios <ArrowRight size={16} /></a>
            <a href={WA_URL} className="hero-btn-g" target="_blank" rel="noopener noreferrer"><MessageSquare size={16} /> Conversemos</a>
          </div>
          <div className="hero-stats fu4">
            {[
              { n: 'IA', l: 'Integrada en cada producto' },
              { n: '+4', l: 'Roles en una sola plataforma' },
              { n: '100%', l: 'En español, para LATAM' },
              { n: '24h', l: 'Para arrancar tu solución' },
            ].map((s, i) => (
              <div key={i}>
                <div className="hero-stat-n">{s.n}</div>
                <div className="hero-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <ServicesSection />

      {/* POR QUÉ VANTY */}
      <div id="nosotros"><WhySection /></div>

      {/* SECTORES */}
      <SectorsSection />

      {/* PROCESO */}
      <div id="proceso"><ProcessSection /></div>

      {/* CTA */}
      <section className="cta">
        <div className="cta-dots" />
        <div className="cta-inner">
          <h2 className="cta-h2">¿Tienes un problema<br />que la tecnología puede resolver?</h2>
          <p className="cta-sub">
            Cuéntanos qué necesitas. Te escuchamos y te decimos con honestidad cómo Vanty puede ayudarte —
            con un producto listo como Vanty ABA o con una solución hecha para ti.
          </p>
          <div className="cta-btns">
            <a href={WA_URL} className="hero-btn-w" target="_blank" rel="noopener noreferrer"><Phone size={16} /> Hablar por WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="hero-btn-g"><Mail size={16} /> {EMAIL}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <img src="/images/logo.png" alt="Vanty" style={{ height: '38px', width: 'auto', display: 'block' }} />
              <span style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: '18px', color: '#fff', letterSpacing: '-0.02em' }}>VANTY</span>
            </div>
            <p className="footer-tagline">Software e inteligencia artificial que resuelve problemas reales. Hecho con 💜 desde Perú para toda América Latina.</p>
            <div className="footer-socials">
              <a href={WA_URL} className="fsoc" target="_blank" rel="noopener noreferrer"><Phone size={16} /></a>
              <a href={`mailto:${EMAIL}`} className="fsoc"><Mail size={16} /></a>
              <a href={IG_URL} className="fsoc" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
              <a href={FB_URL} className="fsoc" target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
            </div>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><a href="/vanty-aba">Vanty ABA</a></li>
              <li><a href="#servicios">Software a medida</a></li>
              <li><a href="#servicios">Productos SaaS con IA</a></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#proceso">Cómo trabajamos</a></li>
              <li><a href="#servicios">Sectores</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><a href="/login">Iniciar sesión</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Vanty · Software e inteligencia artificial para LATAM</p>
          <p>Hecho con 💜 desde Perú</p>
        </div>
      </footer>
    </>
  )
}
