'use client'
import { useState } from 'react'

type Attending = 'ja' | 'nej' | 'kanske'

export default function SectionOsa() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState<Attending | null>(null)
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !attending) return
    setStatus('loading')
    const res = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, attending, comment }),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <section id="osa" style={{ padding: '100px 8vw', borderTop: '1px solid var(--line)', maxWidth: '900px', margin: '0 auto' }}>
        <span className="grain-heading" style={{ fontSize: 'clamp(60px, 10vw, 110px)', letterSpacing: '0.02em', marginBottom: '48px' }}>
          OSA
        </span>
        <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--cream)' }}>
          Tack {name}! Vi ses på B-Baren.
        </p>
      </section>
    )
  }

  const radioStyle = (selected: boolean): React.CSSProperties => ({
    minWidth: '56px', height: '44px', padding: '0 14px',
    border: '1.5px solid var(--cream)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', letterSpacing: '0.1em',
    color: selected ? 'transparent' : 'var(--cream)',
    cursor: 'pointer', whiteSpace: 'nowrap',
    position: 'relative',
    fontFamily: "var(--font-mono), monospace",
    background: 'transparent',
  })

  return (
    <section id="osa" style={{ padding: '100px 8vw', borderTop: '1px solid var(--line)', maxWidth: '900px', margin: '0 auto' }}>
      <span className="grain-heading" style={{ fontSize: 'clamp(60px, 10vw, 110px)', letterSpacing: '0.02em', marginBottom: '48px' }}>
        OSA
      </span>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '10px' }}>
            För- och efternamn
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Ditt namn"
            required
            style={{
              width: '100%', background: 'transparent',
              color: 'var(--cream)',
              fontFamily: "var(--font-mono), monospace", fontSize: '15px',
              padding: '14px 0', outline: 'none',
              border: 'none', borderBottom: '1px solid rgba(232,224,212,0.4)',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '10px' }}>
            Kommer du?
          </label>
          <div style={{ display: 'flex', gap: '12px' }}>
            {(['ja', 'nej', 'kanske'] as Attending[]).map(val => (
              <button
                key={val}
                type="button"
                onClick={() => setAttending(val)}
                style={radioStyle(attending === val)}
              >
                {attending === val && (
                  <span style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-8deg)',
                    color: 'var(--cream)', fontSize: '24px',
                    fontWeight: 900, lineHeight: 1,
                  }}>✕</span>
                )}
                {val.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '10px' }}>
            Kommentar (t.ex. allergier eller något annat du vill att Frida ska veta)
          </label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Frivilligt..."
            rows={4}
            style={{
              width: '100%', background: 'transparent',
              color: 'var(--cream)',
              fontFamily: "var(--font-mono), monospace", fontSize: '14px',
              padding: '12px', resize: 'vertical',
              border: '1px solid rgba(232,224,212,0.2)', outline: 'none',
            }}
          />
        </div>

        {status === 'error' && (
          <p style={{ color: '#ff6b6b', fontSize: '13px' }}>Något gick fel. Försök igen.</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            padding: '16px 40px', alignSelf: 'flex-start',
            border: '1.5px solid var(--cream)',
            fontFamily: "var(--font-mono), monospace",
            fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--cream)', background: 'transparent', cursor: 'pointer',
          }}
        >
          {status === 'loading' ? 'Skickar...' : 'Skicka →'}
        </button>
      </form>
    </section>
  )
}
