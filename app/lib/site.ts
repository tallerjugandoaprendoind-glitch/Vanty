// ════════════════════════════════════════════════
//  Datos compartidos del sitio Vanty
// ════════════════════════════════════════════════

export const WA_NUM = '51924685557'
export const EMAIL = 'soporte@vanty.xyz'
export const WA_MSG = encodeURIComponent('Hola, vi la página de Vanty y quiero conocer más sobre lo que hacen.')
export const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`
export const FB_URL = 'https://www.facebook.com/profile.php?id=61587764677406'
export const IG_URL = 'https://www.instagram.com/vanty.app'

export type IconKey = 'brain' | 'code' | 'rocket'

export interface Service {
  slug: string
  href: string
  icon: IconKey
  name: string
  tagline: string
  desc: string
  badge: string
  accent: string
  tags: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'vanty-aba',
    href: '/vanty-aba',
    icon: 'brain',
    name: 'Vanty ABA',
    tagline: 'Plataforma clínica ABA con IA',
    desc: 'La primera plataforma ABA multi-rol de LATAM: dirección, especialistas, secretaría y familias en un solo lugar, con IA clínica, facturación y portal familiar.',
    badge: 'Producto estrella',
    accent: '#1D4ED8',
    tags: ['Hub de IA clínica', 'Multi-rol nativo', 'Facturación', 'Portal familiar'],
  },
  {
    slug: 'software-a-medida',
    href: '/servicios/software-a-medida',
    icon: 'code',
    name: 'Software a medida',
    tagline: 'Plataformas, apps y sistemas',
    desc: 'Diseñamos y desarrollamos plataformas web, apps móviles y sistemas internos pensados para tu operación real. Del prototipo a producción.',
    badge: 'A medida',
    accent: '#0F766E',
    tags: ['Web & móvil', 'Dashboards', 'Integraciones', 'Automatización'],
  },
  {
    slug: 'productos-saas',
    href: '/servicios/productos-saas',
    icon: 'rocket',
    name: 'Productos SaaS con IA',
    tagline: 'Productos propios con IA',
    desc: 'Creamos nuestros propios productos digitales potenciados con inteligencia artificial para resolver problemas concretos en sectores con impacto.',
    badge: 'Productos propios',
    accent: '#7C3AED',
    tags: ['IA aplicada', 'Escalable', 'En la nube', 'Multi-tenant'],
  },
]

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios', dropdown: true },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Cómo trabajamos', href: '/como-trabajamos' },
  { label: 'Contacto', href: '/contacto' },
] as const
