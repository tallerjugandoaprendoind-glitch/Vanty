'use client'

import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

export default function Figure({
  src,
  alt,
  caption,
  light = false,
  badge,
  ratio,
}: {
  src: string
  alt: string
  caption?: string
  light?: boolean
  badge?: React.ReactNode
  ratio?: string
}) {
  const [err, setErr] = useState(false)
  return (
    <div className={`vt-frame${light ? ' light' : ''}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {!err && <img src={src} alt={alt} onError={() => setErr(true)} />}
      {err && (
        <div className="vt-frame-ph">
          <ImageIcon size={30} strokeWidth={1.6} />
          <span>{caption || alt}</span>
        </div>
      )}
      {badge && <div className="vt-frame-badge">{badge}</div>}
    </div>
  )
}
