export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, right: 0,
      padding: '28px 44px',
      display: 'flex', gap: '44px',
      zIndex: 100,
    }}>
      {[
        { label: 'VARFÖR', href: '#varfor' },
        { label: 'VAR & NÄR', href: '#varnar' },
        { label: 'HUR', href: '#hur' },
      ].map(({ label, href }) => (
        <a
          key={href}
          href={href}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '16px',
            letterSpacing: '0.14em',
            color: 'var(--cream)',
            textDecoration: 'none',
            textTransform: 'uppercase' as const,
            paddingBottom: '3px',
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
