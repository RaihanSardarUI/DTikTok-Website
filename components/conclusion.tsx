import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function Conclusion() {
  return (
    <section className="py-8" id="conclusion">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              DTikTok represents the pinnacle of TikTok video downloading solutions for iOS users. Its seamless integration with iOS, user-friendly interface, and powerful features make it an indispensable tool for TikTok enthusiasts.
            </p>
            <p className="text-gray-300">
              We encourage you to try DTikTok and experience the difference for yourself. Join the community of satisfied users who have made DTikTok their go-to TikTok downloader. Remember to always respect copyright laws and creators' rights when downloading and using content.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
