import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://csservices.io'),
  title: {
    default: 'CS Services — Film, Media & Production Services',
    template: 'CS Services — %s',
  },
  description: 'CS Services provides consultancy and practical services across film and media, including locations, equipment, studios and marketing support.',
  openGraph: {
    title: 'CS Services — Film, Media & Production Services',
    description: 'Consultancy and practical services for film and media projects.',
    type: 'website',
    siteName: 'CS Services',
    url: 'https://csservices.io',
    images: [{ url: '/images/css-hero.png', width: 1200, height: 630, alt: 'CS Services film, media and production services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CS Services — Film, Media & Production Services',
    description: 'Consultancy and practical services for film and media projects.',
    images: ['/images/css-hero.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#111318',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
