import Image from 'next/image'

export default function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '0 5vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflowX: 'clip',
    }}>
      <div className="hero-inner">
        <span
          className="grain-heading hero-title"
          style={{
            fontSize: 'clamp(90px, 20vw, 260px)',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
          }}
        >
          FRIDAS
        </span>

        <p className="hero-body">
          Frida Stenström fyller 40 år och bjuder in dig till fest lördagen den 26 september i Stockholm. Läs mer nedan.
        </p>

        <a
          href="#osa"
          className="hero-cta"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            padding: '16px 36px',
            border: '1.5px solid var(--cream)',
            fontFamily: "var(--font-mono), monospace",
            fontSize: '14px', letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--cream)', textDecoration: 'none',
          }}
        >
          OSA HÄR &nbsp;→
        </a>

        <div className="hero-logo">
          <Image
            src="/bbar-logo.png"
            alt="B-Bar"
            width={500}
            height={650}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid var(--line)',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {[
          { label: 'VARFÖR', href: '#varfor' },
          { label: 'VAR & NÄR', href: '#varnar' },
          { label: 'HUR', href: '#hur' },
        ].map(({ label, href }, i) => (
          <a
            key={href}
            href={href}
            style={{
              textDecoration: 'none', color: 'var(--cream)',
              fontFamily: "var(--font-mono), monospace",
              fontSize: '13px', letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              padding: '20px 0',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '6px',
              borderRight: i < 2 ? '1px solid var(--line)' : 'none',
            }}
          >
            <span>{label}</span>
            <span style={{ fontSize: '16px' }}>↓</span>
          </a>
        ))}
      </div>
    </div>
  )
}
