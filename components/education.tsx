import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* University Education */}
          <Card className="bg-muted border border-muted shadow-none">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="mb-2">Bina Nusantara University</CardTitle>
                <p className="text-sm text-muted-foreground">Computer Science, Specialized in Data Science • 2021 - 2025</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">GPA: 3.91/4.00</p>
            </CardContent>
          </Card>

          {/* High School */}
          <Card className="bg-muted border border-muted shadow-none">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full mt-1">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="mb-2">SMAN 20 Kota Bandung</CardTitle>
                <p className="text-sm text-muted-foreground">Natural Science • 2018 - 2021</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Consistently ranked as the number one student in Natural Science program for three years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
