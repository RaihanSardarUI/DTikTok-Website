'use client'

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [activeId, setActiveId] = useState<string>("")

  const toggleOpen = () => setIsOpen(!isOpen)

  const handleClick = (id: string) => {
    setActiveId(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  return (
    <nav className="bg-black/30 backdrop-blur-md rounded-lg border border-[#E94C57]/20 overflow-hidden transition-all duration-300 ease-in-out" aria-label="Table of contents">
      <Button
        variant="ghost"
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 text-white hover:bg-[#E94C57]/10"
        aria-expanded={isOpen}
        aria-controls="toc-content"
      >
        <span className="text-lg font-semibold">Table of Contents</span>
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isOpen ? "transform rotate-180" : "")} aria-hidden="true" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="toc-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="p-4">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <motion.button
                    onClick={() => handleClick(heading.id)}
                    className={cn(
                      "block w-full text-left px-2 py-1 my-1 rounded transition-colors duration-200",
                      heading.level === 2 ? "font-medium" : "text-sm pl-4",
                      activeId === heading.id
                        ? "bg-[#E94C57]/20 text-[#E94C57]"
                        : "text-gray-300 hover:bg-[#E94C57]/10 hover:text-white"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-current={activeId === heading.id ? "true" : "false"}
                  >
                    {heading.text}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

