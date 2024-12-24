import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Info, Award, Zap, DownloadIcon, ImageIcon, HelpCircle, CheckCircle, MessageSquare } from 'lucide-react'
import Image from "next/image"

export function ArticleContentWithIcons() {
  return (
    <article className="prose prose-invert max-w-none">
      <section id="about-dtiktok" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-6 h-6" />
              About DTikTok
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              DTikTok is a cutting-edge iOS Shortcut designed to revolutionize your TikTok experience by enabling seamless video downloads. Launched in 2020, this innovative tool has rapidly become the preferred solution for iOS users seeking to save their favorite TikTok content offline.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#E94C57]">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Direct download to Camera Roll</li>
                    <li>No watermarks on downloaded videos</li>
                    <li>Support for latest iOS versions</li>
                    <li>Completely free to use</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#E94C57]">Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Fast processing and download speeds</li>
                    <li>Regular updates for compatibility</li>
                    <li>User-friendly interface</li>
                    <li>Privacy-focused design</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="why-dtiktok" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              Why DTikTok is the Best?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In the competitive landscape of TikTok downloaders, DTikTok distinguishes itself through several key advantages:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#E94C57] mt-1 flex-shrink-0" />
                <span><strong>iOS-Specific Design:</strong> Tailored exclusively for iOS devices, ensuring perfect compatibility with iPhones and iPads.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#E94C57] mt-1 flex-shrink-0" />
                <span><strong>Native Integration:</strong> Seamlessly works with the iOS Shortcuts app, providing a smooth, native-feeling user experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#E94C57] mt-1 flex-shrink-0" />
                <span><strong>No Watermarks:</strong> Downloads videos without any added watermarks, preserving the original content quality.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#E94C57] mt-1 flex-shrink-0" />
                <span><strong>Privacy-Focused:</strong> Operates without collecting user data or tracking, keeping your downloads private and secure.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="dtiktok-features" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              DTikTok Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              DTikTok comes packed with a robust set of features designed to enhance your TikTok experience:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#E94C57]">Download Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>High-Quality Downloads</li>
                    <li>Watermark Removal</li>
                    <li>Direct Camera Roll Saving</li>
                    <li>Batch Download Support</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#E94C57]">Additional Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Audio Extraction</li>
                    <li>No Login Required</li>
                    <li>Fast Processing</li>
                    <li>Universal Compatibility</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="installation-guide" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DownloadIcon className="w-6 h-6" />
              Installation Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Getting started with DTikTok is quick and easy. Follow these simple steps to install DTikTok on your iOS device:
            </p>
            <ol className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <span><strong>Install Shortcuts App:</strong> Ensure you have the official Apple Shortcuts app installed on your device. It's free and available on the App Store.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <span><strong>Visit DTikTok Website:</strong> Open Safari and navigate to the official DTikTok website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <span><strong>Add to Shortcuts:</strong> Tap the "Add Shortcut" button on the website. This will redirect you to the Shortcuts app.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <span><strong>Review and Add:</strong> In the Shortcuts app, review the actions (if you wish) and tap "Add Untrusted Shortcut" at the bottom of the screen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">5</span>
                <span><strong>Allow Permissions:</strong> You may be prompted to allow certain permissions. Grant the necessary permissions for DTikTok to function correctly.</span>
              </li>
            </ol>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-[#E94C57] to-[#FF6B6B] hover:opacity-90 transition-all duration-300 text-lg group relative overflow-hidden shadow-lg glow-effect">
                <span className="relative z-10 flex items-center justify-center">
                  Install DTikTok Now <Download className="ml-2" />
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="download-guide" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DownloadIcon className="w-6 h-6" />
              Download Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Using DTikTok to download TikTok videos is a breeze. Here's a step-by-step guide:
            </p>
            <ol className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <span>Open the TikTok app and find the video you want to download.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <span>Tap the "Share" button (usually an arrow or three dots icon).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <span>In the share sheet, scroll until you find "DTikTok" and tap on it.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <span>DTikTok will process the video and save it to your Camera Roll automatically.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#E94C57] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">5</span>
                <span>Once complete, you'll see a confirmation message.</span>
              </li>
            </ol>
            <div className="mt-6">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="DTikTok Download Process"
                width={800}
                height={400}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-300 text-center mt-2">
                Visual guide: DTikTok download process in action
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="screenshots" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-6 h-6" />
              Screenshots
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Here are some screenshots showcasing DTikTok in action:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative aspect-[3/2] overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg"
                    alt={`Screenshot ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4">
              These screenshots demonstrate the user-friendly interface and seamless integration of DTikTok with the iOS share sheet and Shortcuts app.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="testimonials" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              User Testimonials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Don't just take our word for it. Here's what our users are saying about DTikTok:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <p className="italic mb-2">"DTikTok has revolutionized the way I save TikTok content. It's fast, easy, and reliable!"</p>
                  <p className="text-sm text-gray-400">- Sarah M., Content Creator</p>
                </CardContent>
              </Card>
              <Card className="bg-[#E94C57]/5 border-0">
                <CardContent className="p-4">
                  <p className="italic mb-2">"I love how seamlessly DTikTok integrates with iOS. It's become an essential tool for my TikTok browsing."</p>
                  <p className="text-sm text-gray-400">- Alex K., Social Media Manager</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  )
}
