import './globals.css'
import type { Metadata, Viewport } from 'next'
import ScrollToTop from '@/components/scroll-to-top'

export const viewport: Viewport = {
  themeColor: '#FF6666',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'DTikTok - Download TikTok Videos Without Watermark',
  description: 'DTikTok is an iOS Shortcut designed for downloading TikTok videos seamlessly. Save your favorite TikTok content without watermarks in high quality.',
  keywords: ['tiktok downloader', 'ios shortcut', 'download tiktok', 'no watermark', 'social media', 'video downloader'],
  authors: [{ name: 'Raihan Sardar' }],
  creator: 'Raihan Sardar',
  publisher: 'Raihan Sardar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dtiktok.vercel.app'),
  openGraph: {
    title: 'DTikTok - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark using our iOS Shortcut. Fast, free, and easy to use.',
    url: 'https://dtiktok.vercel.app',
    siteName: 'DTikTok',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTikTok - Download TikTok Videos Without Watermark',
    description: 'Download TikTok videos without watermark using our iOS Shortcut. Fast, free, and easy to use.',
    creator: '@dtiktok',
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dtiktok.vercel.app" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#FF6666" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
