'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.refresh()
    } else {
      setError('Fel lösenord')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Lösenord"
          style={{
            background: 'transparent', color: 'var(--cream)',
            fontFamily: "'Space Mono', monospace", fontSize: '14px',
            padding: '12px', border: '1px solid var(--line)', outline: 'none',
          }}
        />
        {error && <p style={{ color: '#ff6b6b', fontSize: '12px' }}>{error}</p>}
        <button type="submit" style={{
          padding: '12px', border: '1px solid var(--cream)',
          background: 'transparent', color: 'var(--cream)',
          fontFamily: "'Space Mono', monospace", fontSize: '12px',
          letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
        }}>
          Logga in
        </button>
      </form>
    </div>
  )
}
