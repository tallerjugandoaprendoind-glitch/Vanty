'use client'

import { useState } from 'react'

// Muestra tu logo transparente de /images/logos/vanty.png.
// Si todavía no lo has subido, usa /images/logo.png para no romper el diseño.
export default function Logo({ height = 38 }: { height?: number }) {
  const [src, setSrc] = useState('/images/logos/vanty.png')
  return (
    <img
      src={src}
      alt="Vanty"
      onError={() => setSrc('/images/logo.png')}
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
