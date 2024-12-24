import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative backdrop-blur-md bg-gradient-to-b from-black/50 to-black/80 border-t border-[#E94C57]/10 py-12">
      <div className="relative max-w-[1200px] mx-auto px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E94C57]/5 to-transparent rounded-3xl blur-xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">DTikTok</h2>
            <p className="text-gray-400">
              Next-Gen TikTok Video Downloader for iOS
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about-dtiktok" className="text-gray-400 hover:text-[#E94C57] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#installation-guide" className="text-gray-400 hover:text-[#E94C57] transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-[#E94C57] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E94C57] transform hover:scale-110 transition-all duration-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E94C57] transform hover:scale-110 transition-all duration-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E94C57] transform hover:scale-110 transition-all duration-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E94C57] transform hover:scale-110 transition-all duration-300">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E94C57] transform hover:scale-110 transition-all duration-300">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#E94C57]/10 text-center text-gray-400 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E94C57]/20 to-transparent"></div>
          <p>&copy; {new Date().getFullYear()} DTikTok. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:text-[#E94C57] transition-colors">Privacy Policy</Link>
            {' | '}
            <Link href="#" className="hover:text-[#E94C57] transition-colors">Terms of Service</Link>
            <p className="mt-2 text-sm text-gray-400">
              Made with <span className="text-[#E94C57]">❤️</span> by Raihan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

