'use client'

import { motion } from "framer-motion"
import { Sparkles, Shield, Zap, Smartphone, Cloud, RefreshCw } from 'lucide-react'
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Easy to Use",
    description: "Simple one-click download process for any TikTok video",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safe & Secure",
    description: "No watermarks, no ads, just pure content download",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Download videos in seconds with original quality",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "iOS Compatible",
    description: "Designed specifically for iPhones and iPads",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Integration",
    description: "Seamless integration with iCloud for easy storage",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Regular Updates",
    description: "Frequent updates to ensure compatibility with TikTok",
  },
]

export function FeatureSection() {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E94C57] via-[#FF6B6B] to-[#E94C57] bg-[200%_auto] animate-gradient">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Experience the next level of TikTok video downloading with our powerful features
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
        {/* Add decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#E94C57]/10 rounded-full blur-xl" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#FF6B6B]/10 rounded-full blur-xl" />

        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 backdrop-blur-md bg-white/5 border-0 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
      {/* Add hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E94C57]/10 to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Add subtle border glow */}
      <div className="absolute inset-0 border border-[#E94C57]/20 rounded-lg group-hover:border-[#E94C57]/40 transition-colors duration-300" />

      <div className="relative">
        <motion.div
          className="mb-4 text-[#E94C57] group-hover:text-[#FF6B6B] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#FF6B6B] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Card>
  )
}

