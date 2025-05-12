import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function HonorsAwards() {
  const awards = [
  {
    id: 1,
    title: "Astra1st Batch XII Awardee",
    issuer: "PT Astra International Tbk",
    year: "2024",
    description: (
      <>
        Chosen as one of 43 awardees from over 6,900 applicants (<strong>0.62% acceptance rate</strong>). Astra1st program is a scholarship and development program for students held by Astra International.Awardees are given opportunities to collaborate with Astra Group in developing strategies, to be Astra Ambassador, and contribute to the society through Sustainable Action Project.
        <br /><br />
        <strong>Achievement:</strong> My team was honored as the Best Team in Astra1st Batch XII for our impressive collaboration and impactful contributions.
      </>
    ),
    image: "/bestTeam.jpg",
  },
  {
    id: 2,
    title: "Mastering AI Batch IV Awardee",
    issuer: "Skill Academy X Ruangguru Engineering Academy",
    year: "2024",
    description: (
      <>
        Awarded a <strong>full scholarship</strong> for the Mastering AI Bootcamp (Batch IV) by Skill Academy Pro x Ruangguru Engineering Academy. Throughout the program, I gained comprehensive knowledge in AI and machine learning, covering topics such as foundational toolkits, machine learning, deep learning, database management, computer vision, natural language processing, LangChain, and ML Ops.
        <br /><br />
        <strong>Successfully completed</strong> 8 projects and 1 final project as practical implementations of these skills.
      </>
    ),
    image: "/masteringAI.jpg",
  },
]


  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Honors & Awards</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award) => (
            <Card key={award.id} className="overflow-hidden bg-muted">
              <div className="relative h-48">
                <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
              </div>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{award.title}</CardTitle>
                  <CardDescription>
                    {award.issuer} • {award.year}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
