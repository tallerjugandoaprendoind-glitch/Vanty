'use client'

import { useState } from 'react'

export default function ClientChip({ src, name }: { src: string; name: string }) {
  const [err, setErr] = useState(false)
  return (
    <span className="vt-logo-chip">
      {!err && <img src={src} alt={name} onError={() => setErr(true)} />}
      {name}
    </span>
  )
}
