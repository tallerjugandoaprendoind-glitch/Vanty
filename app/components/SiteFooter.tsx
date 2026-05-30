import { Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { WA_URL, EMAIL, FB_URL, IG_URL, SERVICES } from '@/app/lib/site'
import Logo from '@/app/components/Logo'

export default function SiteFooter() {
  return (
    <footer className="vt-footer">
      <div className="vt-footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <Logo height={34} />
            <span className="vt-display" style={{ fontWeight: 800, fontSize: 19, color: '#fff' }}>VANTY</span>
          </div>
          <p className="vt-footer-tag">Software e inteligencia artificial que resuelve problemas reales. Hecho con 💜 desde Perú para toda América Latina.</p>
          <div className="vt-socials">
            <a href={WA_URL} className="vt-soc" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Phone size={17} /></a>
            <a href={`mailto:${EMAIL}`} className="vt-soc" aria-label="Email"><Mail size={17} /></a>
            <a href={IG_URL} className="vt-soc" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
            <a href={FB_URL} className="vt-soc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
          </div>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            {SERVICES.map(s => <li key={s.slug}><a href={s.href}>{s.name}</a></li>)}
            <li><a href="/servicios">Ver todos</a></li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/como-trabajamos">Cómo trabajamos</a></li>
            <li><a href="/contacto">Contacto</a></li>
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
      <div className="vt-footer-bottom">
        <p>© 2026 Vanty · Software e inteligencia artificial para LATAM</p>
        <p>Hecho con 💜 desde Perú</p>
      </div>
    </footer>
  )
}
