import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'bbaren',
  description: 'Frida Stenström fyller 40 år och bjuder in dig till fest lördagen den 26 september i Stockholm.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
