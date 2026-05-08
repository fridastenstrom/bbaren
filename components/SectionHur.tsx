export default function SectionHur() {
  return (
    <section
      id="hur"
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
        HUR
      </span>

      {[
        'B-Barens öppettider är kl. 18:00–01:00 (kanske 02:00 om ägaren är snäll).',
        'Frida bjuder på mat och en öl eller två. Därefter finns baren öppen för den som vill fortsätta.',
        'När det gäller presenter har Frida redan allt hon behöver så inga presenter medtages — det viktigaste är att du kommer och firar. Lägg hellre pengarna på en drink till dig själv i baren.',
        'Gällande klädsel får du komma som du är! Det är också fritt att tolka kvällens tema på bokstaven B. Det kan vara allt från barockt, bowlingkung eller beige.',
      ].map((text, i) => (
        <p key={i} style={{
          fontSize: '15px', lineHeight: 1.85,
          color: 'rgba(232,224,212,0.75)',
          marginBottom: '1.4em',
        }}>
          {text}
        </p>
      ))}

      <div style={{
        marginTop: '40px',
        border: '1px solid rgba(232,224,212,0.25)',
        padding: '24px 28px',
      }}>
        <strong style={{
          display: 'block', fontSize: '12px',
          letterSpacing: '0.2em', color: 'var(--cream)',
          marginBottom: '10px',
        }}>
          OBS! VIKTIGT!
        </strong>
        <p style={{ fontSize: '14px', color: 'var(--cream)', lineHeight: 1.7 }}>
          Det kommer att finnas badtunna. Så ta med badkläder ifall du får feeling.
        </p>
      </div>
    </section>
  )
}
