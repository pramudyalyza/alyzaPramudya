import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <Card className="overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative w-full max-w-sm h-auto mx-auto md:h-[400px]">
                <Image
                  src="/alyzaPasFoto.JPG"
                  alt="Alyza Pramudya"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Alyza Pramudya</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a computer science student with a focus on data science, and I've recently completed my thesis
                  defense. Over the years, I've gained hands-on experience in machine learning, automation, and
                  data-driven projects through various internships and personal projects. I'm passionate about using
                  data to solve complex problems, optimize systems, and drive meaningful impact.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}