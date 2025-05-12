import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "The Effect of Feature Extraction Based on the Frequency of Emotionally Loaded Words using Part-of-Speech Tagging in Sentiment Analysis",
      authors: "A. R. Pramudya, S. A. Qonitatin, and J. Budi",
      journal: "International Conference on Computer Sciences, Engineering, and Technology Innovation (ICoCSETI)",
      year: "2025",
      link: "https://drive.google.com/file/d/1Rn2_TEtyoTx68vlRxhaZyy5Njqb1NukM/view?usp=sharing",
    },
    {
      id: 2,
      title: "A Comparative Study of Machine Learning Algorithms for Optimizing Ventilator Pressure Prediction in ICU Patients",
      authors: "F. Kamil, S. A. Qonitatin, A. R. Pramudya, A. A. Santoso Gunawan and K. E. Saputra",
      journal: "8th International Conference on Information Technology and Digital Applications (ICITDA)",
      year: "2023",
      link: "https://ieeexplore.ieee.org/document/10427059",
    },
    {
      id: 3,
      title: "Design and Development of “Fright Hour” A Horror Game Utilizing Unreal Engine 5",
      authors: "J. Budiman, W. Wirijadipura, M. H. Widianto, S. A. Qonitatin and A. R. Pramudya",
      journal: "8th International Conference on Education and Technology (ICET)",
      year: "2022",
      link: "https://ieeexplore.ieee.org/document/9990769",
    },
  ]

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="bg-muted border border-muted shadow-none">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">
                      {pub.link ? (
                        <Link
                          href={pub.link}
                          className="hover:text-primary inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer">
                          <span className="inline-flex items-center gap-1">
                            {pub.title}
                            <ExternalLink className="h-4 w-4 shrink-0" />
                          </span>
                        </Link>
                      ) : (
                        pub.title
                      )}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {pub.journal} • {pub.year} • {pub.authors}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
