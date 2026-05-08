type Rsvp = {
  id: string
  name: string
  attending: 'ja' | 'nej' | 'kanske'
  comment: string | null
  created_at: string
}

const attendingColor: Record<string, string> = { ja: '#6fcf97', nej: '#eb5757', kanske: '#f2994a' }

export default function AdminGuestList({ guests }: { guests: Rsvp[] }) {
  const counts = {
    ja: guests.filter(g => g.attending === 'ja').length,
    nej: guests.filter(g => g.attending === 'nej').length,
    kanske: guests.filter(g => g.attending === 'kanske').length,
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--black)', padding: '60px 5vw' }}>
      <h1 style={{ fontFamily: "'Big Shoulders Display', sans-serif", fontWeight: 900, fontSize: '60px', color: 'var(--cream)', marginBottom: '8px' }}>
        Gästlista
      </h1>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', color: 'var(--dim)', marginBottom: '40px' }}>
        {guests.length} svar — JA: {counts.ja} · NEJ: {counts.nej} · KANSKE: {counts.kanske}
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Space Mono', monospace", fontSize: '13px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--line)', color: 'var(--dim)', textAlign: 'left' }}>
            <th style={{ padding: '10px 0', paddingRight: '24px' }}>NAMN</th>
            <th style={{ padding: '10px 0', paddingRight: '24px' }}>SVAR</th>
            <th style={{ padding: '10px 0', paddingRight: '24px' }}>KOMMENTAR</th>
            <th style={{ padding: '10px 0' }}>DATUM</th>
          </tr>
        </thead>
        <tbody>
          {guests.map(g => (
            <tr key={g.id} style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '14px 0', paddingRight: '24px', color: 'var(--cream)' }}>{g.name}</td>
              <td style={{ padding: '14px 0', paddingRight: '24px', color: attendingColor[g.attending], textTransform: 'uppercase' }}>{g.attending}</td>
              <td style={{ padding: '14px 0', paddingRight: '24px', color: 'var(--dim)' }}>{g.comment || '—'}</td>
              <td style={{ padding: '14px 0', color: 'var(--dim)' }}>{new Date(g.created_at).toLocaleDateString('sv-SE')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
