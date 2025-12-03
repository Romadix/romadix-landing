import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google' // Premium fonts
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Romadix | The Resilient Claims Infrastructure',
  description: 'Enterprise-grade clearinghouse failover for independent RCMs. Stop losing revenue to vendor outages.',
  openGraph: {
    title: 'Romadix - Never lose claims processing again',
    description: 'Resilient claims infrastructure that keeps you online during vendor outages.',
    url: 'https://romadix.com',
    siteName: 'Romadix',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased selection:bg-primary/20">{children}</body>
    </html>
  )
}