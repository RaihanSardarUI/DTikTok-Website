'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Home, Github } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Easy Download",
    href: "#dtiktok-features",
    description: "One-click download process for TikTok videos.",
  },
  {
    title: "No Watermarks",
    href: "#dtiktok-features",
    description: "Download videos without any added watermarks.",
  },
  {
    title: "High Quality",
    href: "#dtiktok-features",
    description: "Maintain original video quality during download.",
  },
  {
    title: "Fast Processing",
    href: "#dtiktok-features",
    description: "Quick video processing and download speeds.",
  },
  {
    title: "iOS Compatible",
    href: "#dtiktok-features",
    description: "Designed specifically for iOS devices.",
  },
  {
    title: "Regular Updates",
    href: "#dtiktok-features",
    description: "Frequent updates to ensure compatibility with TikTok.",
  },
]

export function NavMenu() {
  return (
    <nav className="flex items-center gap-6">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
      >
        <Home className="w-5 h-5" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      <Link 
        href="#download" 
        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline">Download</span>
      </Link>
      <Link 
        href="https://github.com/yourusername/dtiktok" 
        target="_blank"
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
      >
        <Github className="w-5 h-5" />
        <span className="hidden sm:inline">Github</span>
      </Link>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
