import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google' // Premium fonts
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Romadix | Modern Infrastructure for Healthcare Billing',
  description: 'One platform. One API. Instant validation. Cost-effective claims processing infrastructure for RCM teams. Built for speed, reliability, and scale.',
  keywords: ['healthcare claims', 'RCM infrastructure', 'claims processing', 'medical billing', 'EDI', 'HIPAA compliant'],
  openGraph: {
    title: 'Romadix - Modern Infrastructure for Healthcare Billing',
    description: 'One platform. One API. Instant validation. The modern claims infrastructure your RCM team deserves.',
    url: 'https://romadix.com',
    siteName: 'Romadix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://romadix.com/og-image.png', // You'll want to create this
        width: 1200,
        height: 630,
        alt: 'Romadix - Healthcare Claims Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romadix - Modern Infrastructure for Healthcare Billing',
    description: 'One platform. One API. Instant validation. Cost-effective claims processing infrastructure.',
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