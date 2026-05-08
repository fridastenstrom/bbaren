import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SectionVarfor from '@/components/SectionVarfor'
import SectionVarNar from '@/components/SectionVarNar'
import SectionHur from '@/components/SectionHur'
import SectionOsa from '@/components/SectionOsa'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionVarfor />
      <SectionVarNar />
      <SectionHur />
      <SectionOsa />
      <footer style={{
        padding: '40px 5vw',
        borderTop: '1px solid var(--line)',
        textAlign: 'right',
      }}>
        <a
          href="/admin"
          style={{
            fontSize: '11px',
            color: 'rgba(232,224,212,0.15)',
            textDecoration: 'none',
            fontFamily: "var(--font-mono), monospace",
            letterSpacing: '0.06em',
          }}
        >
          Gästlista
        </a>
      </footer>
    </>
  )
}
