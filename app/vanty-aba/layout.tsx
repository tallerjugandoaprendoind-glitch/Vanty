import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vanty ABA — Plataforma ABA Multi-Rol en LATAM",
  description: "La primera plataforma ABA multi-rol en América Latina. Conecta dirección, especialistas, secretaría y familias en una sola plataforma. Multilingüe, con IA clínica integrada (ARIA).",
  keywords: "plataforma ABA LATAM, software terapia conductual, ABA software español, gestión terapeutas ABA, plataforma neurodivergencia, ARIA IA clínica",
  authors: [{ name: "Vanty" }],
  openGraph: {
    title: "Vanty ABA — Plataforma ABA Multi-Rol en LATAM",
    description: "La primera plataforma ABA multi-rol en América Latina. Con IA clínica integrada (ARIA), portal familiar y multilingüe.",
    type: "website",
    locale: "es_PE",
    siteName: "Vanty",
  },
  robots: { index: true, follow: true },
}

export default function VantyAbaLayout({ children }: { children: React.ReactNode }) {
  return children
}
