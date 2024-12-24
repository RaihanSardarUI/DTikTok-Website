import { Metadata } from 'next'
import { AnimatedBackground } from "@/components/animated-background"
import { NavMenu } from "@/components/nav-menu"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { FaqSection } from "@/components/faq-section"
import { TableOfContents } from "@/components/table-of-contents"
import { ArticleContentWithIcons } from "@/components/article-content-with-icons"
import { DownloadSection } from "@/components/download-section"
import { Conclusion } from "@/components/conclusion"
import { Footer } from "@/components/footer"
import Image from 'next/image'
import { Play } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
  description: 'DTikTok is a cutting-edge iOS Shortcut designed to revolutionize your TikTok experience by enabling seamless video downloads.',
  openGraph: {
    title: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
    description: 'Download TikTok videos seamlessly with DTikTok, the cutting-edge iOS Shortcut.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTikTok - Next-Gen TikTok Video Downloader for iOS',
    description: 'Download TikTok videos seamlessly with DTikTok, the cutting-edge iOS Shortcut.',
    images: ['/og-image.jpg'],
  },
}

const headings = [
  { id: "about-dtiktok", text: "About DTikTok", level: 2 },
  { id: "why-dtiktok", text: "Why DTikTok is the Best?", level: 2 },
  { id: "dtiktok-features", text: "DTikTok Features", level: 2 },
  { id: "installation-guide", text: "Installation Guide", level: 2 },
  { id: "download-guide", text: "Download Guide", level: 2 },
  { id: "screenshots", text: "Screenshots", level: 2 },
  { id: "faq", text: "Frequently Asked Questions", level: 2 },
  { id: "conclusion", text: "Conclusion", level: 2 },
]

export default function Page() {
  return (
    <>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#FF6666]/10">
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative w-8 sm:w-10 h-8 sm:h-10">
                <Image 
                  src="/logo.svg" 
                  alt="DTikTok Logo" 
                  fill 
                  sizes="(max-width: 640px) 32px, 40px" 
                  priority
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-white font-bold text-lg sm:text-xl">DTikTok</h1>
            </div>
            <NavMenu />
          </div>
        </header>
        <main id="main-content">
          <HeroSection />
          <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="lg:max-w-5xl mx-auto mb-8 sm:mb-12">
              <TableOfContents headings={headings} />
            </div>
            <div className="lg:max-w-4xl mx-auto space-y-8">
              <ArticleContentWithIcons />
              <FeatureSection />
              <DownloadSection />
              <FaqSection />
            </div>
          </div>
          <div className="mt-8">
            <Conclusion />
          </div>
        </main>
        <Footer />
      </div>
      <Script id="schema-script" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DTikTok",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "iOS",
            "description": "DTikTok is a cutting-edge iOS Shortcut designed to revolutionize your TikTok experience by enabling seamless video downloads.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        `}
      </Script>
    </>
  )
}
