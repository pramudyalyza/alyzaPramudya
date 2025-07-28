import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/alyzaPasFoto.JPG"
                alt="Alyza Pramudya Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <Card className="w-full md:w-3/5 border-none shadow-lg">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed text-justify mb-4">
                Hi! I'm <span className="text-primary font-bold">Alyza Pramudya</span> a Computer Science graduate from BINUS University with a focus on data science. Professionally, I've worked as a Data Intelligence Intern at Astra International, a Digital Project Consultant at Auto2000, and a Data Engineer Intern at 
                NTT Indonesia Technology. I also previously interned at Abbott and led the Public Relations division at HIMTI BINUS. I'm also a former Astra1st awardee and a Mastering AI Bootcamp scholar. Feel free to reach out if you'd like to connect or collaborate!
              </p>
              
              <p className="font-semibold">Bina Nusantara University</p>
              <p className="text-muted-foreground">
                Computer Science | 2021 - 2025
              </p>
              <p className="text-muted-foreground">GPA: 3.91 / 4.00</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}