'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Tag, CheckCircle2, Smartphone, FileType, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface VersionInfo {
  version: string
  notes: string
  release: string
  shortcutUrl: string
}

export function DownloadSection() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null)

  useEffect(() => {
    fetch('/version.json')
      .then(res => res.json())
      .then(data => setVersionInfo(data))
      .catch(err => console.error('Error loading version info:', err))
  }, [])

  const features = [
    { icon: CheckCircle2, text: "Easy to install and use" },
    { icon: Smartphone, text: "Compatible with iOS 17" },
    { icon: FileType, text: "Download in multiple qualities" },
  ]

  return (
    <section className="py-12 sm:py-16" id="download">
      <Card className="max-w-4xl mx-auto overflow-hidden backdrop-blur-xl bg-gradient-to-br from-black/40 to-black/20 border-0 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6666]/10 to-[#FF8080]/10" />
        <div className="relative p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Logo and Features */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto md:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6666]/30 to-[#FF8080]/30 rounded-3xl blur-3xl animate-pulse" />
                <div className="relative w-full h-full rounded-3xl flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/logo.svg"
                    alt="DTikTok Logo"
                    width={160}
                    height={160}
                    priority
                    className="object-contain p-6 drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <feature.icon className="w-6 h-6 text-[#FF6666]" />
                    <span className="text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Version Info and Download */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6666] to-[#FF8080]">
                  Download DTikTok
                </h2>
                <p className="text-gray-400">
                  The best TikTok video downloader for iOS
                </p>
              </div>

              {versionInfo && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Tag className="w-4 h-4" />
                  <span>Version {versionInfo.version} • Released {versionInfo.release}</span>
                </div>
              )}

              {versionInfo?.notes && (
                <div className="bg-[#FF6666]/10 rounded-lg p-4 border border-[#FF6666]/20">
                  <p className="text-sm text-[#FF6B6B]">
                    <span className="font-semibold">What's New:</span> {versionInfo.notes}
                  </p>
                </div>
              )}

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#FF6666] to-[#FF8080] hover:opacity-90 transition-all duration-300 group relative overflow-hidden shadow-lg text-lg font-medium"
                asChild
              >
                <a 
                  href={versionInfo?.shortcutUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative py-4"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Add to Shortcuts
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
