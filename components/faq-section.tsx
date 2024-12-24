'use client'

import { motion } from "framer-motion"
import { HelpCircle } from 'lucide-react'
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Is DTikTok safe to use?",
    answer: "Yes, DTikTok is safe to use. It's a Shortcut that runs within Apple's Shortcuts app, which has built-in security measures. DTikTok doesn't collect any personal data or require login information.",
  },
  {
    question: "Does DTikTok work on Android?",
    answer: "No, DTikTok is exclusively designed for iOS devices due to its integration with the Apple Shortcuts app. Android users will need to look for alternative solutions.",
  },
  {
    question: "Is DTikTok allowed/approved by TikTok?",
    answer: "DTikTok is a third-party tool and is not officially associated with or endorsed by TikTok. Users should be aware of TikTok's terms of service regarding content usage.",
  },
  {
    question: "How do I update DTikTok?",
    answer: "To update DTikTok, simply revisit the official DTikTok website and add the shortcut again. This will replace the old version with the latest one, ensuring you have the most up-to-date features and compatibility.",
  },
  {
    question: "Can I download private TikTok videos?",
    answer: "DTikTok can only download videos that you have access to view. If a video is set to private and you don't have permission to view it, DTikTok won't be able to download it.",
  },
]

export function FaqSection() {
  return (
    <section className="py-8" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#E94C57] to-[#FF6B6B]">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FaqCard {...faq} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FaqCard({ question, answer }: { question: string; answer: string }) {
  return (
    <Card className="p-6 backdrop-blur-md bg-white/5 border-0 hover:bg-white/10 transition-colors group">
      <div className="flex items-start gap-4">
        <HelpCircle className="w-6 h-6 text-[#E94C57] group-hover:text-[#FF6B6B] transition-colors shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">{question}</h3>
          <p className="text-gray-300">{answer}</p>
        </div>
      </div>
    </Card>
  )
}
