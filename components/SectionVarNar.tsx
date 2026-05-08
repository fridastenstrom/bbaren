'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function SectionVarNar() {
  const [open, setOpen] = useState(false)

  return (
    <section
      id="varnar"
      style={{
        padding: '100px 8vw',
        borderTop: '1px solid var(--line)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <span
        className="grain-heading"
        style={{ fontSize: 'clamp(60px, 10vw, 110px)', letterSpacing: '0.02em', marginBottom: '48px' }}
      >
        VAR & NÄR
      </span>

      <p style={{
        fontFamily: "var(--font-heading), sans-serif",
        fontWeight: 900,
        fontSize: '28px',
        letterSpacing: '0.08em',
        color: 'var(--cream)',
        marginBottom: '20px',
      }}>
        Lördag 26 september
      </p>

      <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(232,224,212,0.75)', marginBottom: '28px' }}>
        Stockholm Brewing Co.<br />
        Frihamnsgatan 26a, 115 56 Stockholm
      </p>

      <a
        href="https://maps.app.goo.gl/bdTgTKfSBMXsSx798"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          color: 'var(--cream)', fontSize: '13px',
          letterSpacing: '0.1em', textTransform: 'uppercase' as const,
          textDecoration: 'none',
          borderBottom: '1px solid var(--line)',
          paddingBottom: '4px', marginBottom: '28px',
        }}
      >
        Öppna i Google Maps →
      </a>

      <p style={{ color: 'var(--dim)', fontSize: '14px', lineHeight: 1.9, marginBottom: '36px' }}>
        Kommunalt:<br />
        Gärdet T-bana — ca 15 min promenad<br />
        Buss 76, 1 eller 91 till Frihamnen
      </p>

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          background: 'transparent',
          border: '1px solid var(--line)',
          color: 'var(--dim)',
          fontFamily: "var(--font-mono), monospace",
          fontSize: '12px', letterSpacing: '0.14em',
          textTransform: 'uppercase' as const,
          padding: '12px 20px', cursor: 'pointer',
        }}
      >
        {open ? 'SE LOKALEN ↑' : 'SE LOKALEN →'}
      </button>

      {open && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px', marginTop: '20px',
        }}>
          {['/brewing-1.webp', '/brewing-2.jpg', '/brewing-3.jpeg'].map((src, i) => (
            <div key={i} style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src={src}
                alt={`Stockholm Brewing Co. ${i + 1}`}
                fill
                style={{ objectFit: 'cover', opacity: 0.7 }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
