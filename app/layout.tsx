import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Romadix - Resilient Claims Infrastructure for Healthcare',
  description: 'Never lose claims processing again. Healthcare infrastructure that stays online when vendors go down.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
