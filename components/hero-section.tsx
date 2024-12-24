'use client'

import { motion } from "framer-motion"
import { Download, ChevronRight, Play, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-24 text-center relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center">
      {/* Enhanced grid background with glow effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(to right, #FF666615 1px, transparent 1px),
            linear-gradient(to bottom, #FF666615 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, #FF666630 1px, transparent 1px),
              linear-gradient(to bottom, #FF666630 1px, transparent 1px)
            `,
            backgroundSize: '1rem 1rem',
            filter: 'blur(0.5px)',
          }}
        />
        {/* Add glowing center point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF6666]/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Enhanced logo animation */}
        <motion.div
          className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-8 sm:mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#FF6666] rounded-3xl blur-xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative w-full h-full">
            <Image
              src="/logo.svg"
              alt="DTikTok Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Enhanced typography with animated gradient */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF6666] via-[#FF8080] to-[#FF6666] bg-[200%_auto] animate-gradient">
            DTikTok
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Next-Gen TikTok Video Downloader for iOS
        </motion.p>

        {/* Enhanced buttons with animations */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#E94C57] to-[#FF6B6B] hover:opacity-90 transition-all duration-300 group relative overflow-hidden shadow-lg text-lg font-medium"
            asChild
          >
            <a href="#download" className="relative px-8 py-4">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Shortcut
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="h-5 w-5" />
                </motion.span>
              </span>
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-[#E94C57] text-[#E94C57] hover:bg-[#E94C57] hover:text-white transition-all duration-300 group relative overflow-hidden shadow-lg text-lg font-medium"
            asChild
          >
            <a href="https://github.com/yourusername/dtiktok" target="_blank" rel="noopener noreferrer" className="relative px-8 py-4">
              <span className="absolute inset-0 w-full h-full bg-[#E94C57]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                View on GitHub
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Github className="h-5 w-5" />
                </motion.span>
              </span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
