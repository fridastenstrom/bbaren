import type { Metadata } from 'next'
import { Big_Shoulders, Space_Mono } from 'next/font/google'
import './globals.css'

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-heading',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'bbaren',
  description: 'Frida Stenström fyller 40 år och bjuder in dig till fest lördagen den 26 september i Stockholm.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${bigShoulders.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
