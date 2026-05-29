'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, Phone, Brain, Code2, Rocket, ArrowRight } from 'lucide-react'
import { NAV_LINKS, SERVICES, WA_URL, type IconKey } from '@/app/lib/site'

const ICONS: Record<IconKey, any> = { brain: Brain, code: Code2, rocket: Rocket }

export default function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSvc, setMobileSvc] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setMegaOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className={`vt-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="vt-nav-row">
        {/* Logo */}
        <a href="/" className="vt-logo">
          <img src="/images/logo.png" alt="Vanty" style={{ height: 40, width: 'auto', display: 'block' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="vt-logo-name">VANTY</span>
            <span className="vt-logo-sub">software &amp; inteligencia artificial</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="vt-nav-links">
          {NAV_LINKS.map(link => (
            'dropdown' in link && link.dropdown ? (
              <li
                key={link.href}
                className={`vt-nav-item${megaOpen ? ' open' : ''}`}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <a
                  href={link.href}
                  className={`vt-nav-link${isActive(link.href) ? ' active' : ''}`}
                  onClick={e => { if (!megaOpen) { e.preventDefault(); setMegaOpen(true) } }}
                >
                  {link.label} <ChevronDown size={15} className="chev" />
                </a>

                <div className="vt-mega" role="menu">
                  <div className="vt-mega-grid">
                    {SERVICES.map(s => {
                      const Icon = ICONS[s.icon]
                      return (
                        <a key={s.slug} href={s.href} className="vt-mega-card">
                          <span className="vt-mega-ico" style={{ background: s.accent }}><Icon size={20} /></span>
                          <span>
                            <span className="vt-mega-name">
                              {s.name}
                              {s.slug === 'vanty-aba' && <span className="vt-mega-star">Estrella</span>}
                            </span>
                            <span className="vt-mega-tag">{s.tagline}</span>
                          </span>
                        </a>
                      )
                    })}
                    <a href="/contacto" className="vt-mega-card">
                      <span className="vt-mega-ico" style={{ background: 'linear-gradient(135deg,#1D4ED8,#7c3aed)' }}><ArrowRight size={20} /></span>
                      <span>
                        <span className="vt-mega-name">¿No sabes cuál necesitas?</span>
                        <span className="vt-mega-tag">Cuéntanos tu problema y te orientamos.</span>
                      </span>
                    </a>
                  </div>
                  <div className="vt-mega-foot">
                    <span style={{ fontSize: 12.5, color: 'var(--muted)' }}>Una empresa, varias formas de resolver tu problema.</span>
                    <a href="/servicios">Ver todos los servicios <ArrowRight size={14} /></a>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.href}>
                <a href={link.href} className={`vt-nav-link${isActive(link.href) ? ' active' : ''}`}>{link.label}</a>
              </li>
            )
          ))}
        </ul>

        {/* Right */}
        <div className="vt-nav-right">
          <a href="/login" className="vt-btn vt-btn-ghost vt-btn-sm">Iniciar sesión</a>
          <a href={WA_URL} className="vt-btn vt-btn-primary vt-btn-sm" target="_blank" rel="noopener noreferrer"><Phone size={15} /> Hablemos</a>
          <button className="vt-burger" onClick={() => setMobileOpen(o => !o)} aria-label="Menú">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="vt-mobile">
          <a href="/">Inicio</a>
          <button onClick={() => setMobileSvc(s => !s)}>
            Servicios <ChevronDown size={17} style={{ transform: mobileSvc ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
          </button>
          {mobileSvc && (
            <div className="vt-mobile-sub">
              {SERVICES.map(s => <a key={s.slug} href={s.href}>{s.name} <ChevronRight size={15} /></a>)}
              <a href="/servicios">Ver todos <ChevronRight size={15} /></a>
            </div>
          )}
          <a href="/nosotros">Nosotros</a>
          <a href="/como-trabajamos">Cómo trabajamos</a>
          <a href="/contacto">Contacto</a>
          <div className="vt-mobile-cta">
            <a href="/login" className="vt-btn vt-btn-ghost">Iniciar sesión</a>
            <a href={WA_URL} className="vt-btn vt-btn-primary" target="_blank" rel="noopener noreferrer"><Phone size={15} /> Hablemos</a>
          </div>
        </div>
      )}
    </nav>
  )
}
