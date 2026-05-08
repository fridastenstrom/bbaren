function B({ children }: { children: string }) {
  return (
    <strong style={{ fontWeight: 700, color: 'var(--cream)' }}>
      {children}
    </strong>
  )
}

export default function SectionVarfor() {
  return (
    <section
      id="varfor"
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
        VARFÖR
      </span>

      <div style={{ fontSize: '15px', lineHeight: 1.85, color: 'rgba(232,224,212,0.75)' }}>
        {([
          <p key="1">&quot;Vad är B-baren? Jo, jag älskar ett bra koncept, och länge snurrade en fråga i huvudet: vad ska man ha för tema på sin 40-årsfest?</p>,
          <p key="2">Och så slog det mig – att väldigt många fina saker i livet faktiskt börjar på bokstaven B.</p>,
          <p key="3">Bara för att nämna några... <B>bärs</B>, <B>brudar</B>, <B>band</B>, <B>bordtennis</B>, <B>bingo</B>, <B>banankaka</B>, <B>blindtest</B>.</p>,
          <p key="4">Jag tänkte, det här borde jag göra något av...</p>,
          <p key="5">Något som inte så många vet är att jag haft en liten dröm om att starta en bar. En skön plats att vara på, men också där det händer lite oväntade saker. Där det finns både <B>bärs</B> och <B>bubbel</B>, kanske ett <B>band</B> i ett hörn, någon som spelar <B>brädspel</B> i ett annat, och där kvällen kan ta lite vilken riktning som helst.</p>,
          <p key="6">Så… varför inte testa det nu? För en kväll. På min 40-årsdag.</p>,
          <p key="7">Så välkommen till B-Baren!</p>,
          <p key="8">En tillfällig bar i ett <B>bryggeri</B> i Stockholm där mycket på något sätt kretsar kring bokstaven B. Det kan vara stort eller litet, genomtänkt eller helt spontant.</p>,
          <p key="9">Om du bestämmer dig för att komma och testa baren med mig och vill kliva in i konceptet fullt ut får du mer än gärna göra det: kanske i en <B>bandana</B>, något <B>barockt</B> eller varför inte något <B>bajsbrunt</B>. Eller så kommer du exakt som du är – det funkar också väldigt bra.</p>,
          <p key="10">Under kvällen kommer det finnas lite olika saker att göra; dricka, spela, lyssna på och kanske delta i. Tänk häng med happenings.</p>,
          <p key="11">Och som en liten <B>bonus</B> (eller kanske huvudattraktion för vissa): det kommer finnas <B>badtunna</B>.<br />Så ta med <B>badkläder</B>, ifall du får feeling.</p>,
          <p key="12">Jag hoppas verkligen att du vill komma och testa B-Baren tillsammans med mig.&quot;</p>,
        ] as React.ReactNode[]).map((p, i) => (
          <div key={i} style={{ marginBottom: '1.4em' }}>{p}</div>
        ))}
      </div>

      <p style={{ marginTop: '40px', fontSize: '13px', color: 'var(--dim)', letterSpacing: '0.05em' }}>
        — Frida, grundare av B-baren
      </p>
    </section>
  )
}
