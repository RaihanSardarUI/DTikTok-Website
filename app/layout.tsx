import './globals.css'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#FF6666',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: '%s | DTikTok',
    default: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
  },
  description: 'DTikTok is a cutting-edge iOS Shortcut designed to revolutionize your TikTok experience by enabling seamless video downloads in HD quality. Easy to install, free to use.',
  keywords: ['TikTok downloader', 'iOS shortcut', 'TikTok video download', 'DTikTok', 'social media tools', 'iOS automation'],
  authors: [{ name: 'DTikTok Team' }],
  creator: 'DTikTok Team',
  publisher: 'DTikTok',
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://dtiktok.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
    description: 'Download TikTok videos in HD quality with DTikTok iOS Shortcut. Simple, fast, and free.',
    url: 'https://dtiktok.vercel.app',
    siteName: 'DTikTok',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DTikTok - TikTok Video Downloader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
    description: 'Download TikTok videos in HD quality with DTikTok iOS Shortcut. Simple, fast, and free.',
    images: ['/og-image.jpg'],
    creator: '@dtiktok',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.svg' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DTikTok',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#FF6666" />
      </head>
      <body>{children}</body>
    </html>
  )
}
