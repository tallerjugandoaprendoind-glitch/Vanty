import { MetadataRoute } from 'next'

const BASE = 'https://vanty.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, freq: 'monthly' },
    { path: '/servicios', priority: 0.9, freq: 'monthly' },
    { path: '/vanty-aba', priority: 0.9, freq: 'monthly' },
    { path: '/servicios/software-a-medida', priority: 0.8, freq: 'monthly' },
    { path: '/servicios/productos-saas', priority: 0.8, freq: 'monthly' },
    { path: '/nosotros', priority: 0.7, freq: 'yearly' },
    { path: '/como-trabajamos', priority: 0.7, freq: 'yearly' },
    { path: '/contacto', priority: 0.7, freq: 'yearly' },
    { path: '/login', priority: 0.5, freq: 'yearly' },
  ]
  return pages.map(p => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))
}
