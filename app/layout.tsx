import type { Metadata, Viewport } from "next"
import "./globals.css"

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Vanty — Plataforma ABA Multi-Rol en LATAM",
  description: "La primera plataforma ABA multi-rol en América Latina. Conecta analistas, especialistas y familias en una sola plataforma. 100% en español, con IA integrada.",
  keywords: "plataforma ABA LATAM, software terapia conductual, ABA software español, gestión terapeutas ABA, plataforma neurodivergencia",
  authors: [{ name: "Vanty" }],
  openGraph: {
    title: "Vanty — Plataforma ABA Multi-Rol en LATAM",
    description: "La primera plataforma ABA multi-rol en América Latina. Con IA integrada (ARIA), portal familiar y 100% en español.",
    type: "website",
    locale: "es_PE",
    siteName: "Vanty",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
