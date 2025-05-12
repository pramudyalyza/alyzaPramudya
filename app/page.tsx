import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Education from "@/components/education"
import Experience from "@/components/experience"
import HonorsAwards from "@/components/honors-awards"
import Skills from "@/components/skills"
import Publications from "@/components/publications"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <HonorsAwards />
      <Skills />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
