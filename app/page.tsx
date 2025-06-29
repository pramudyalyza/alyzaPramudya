import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import HonorsAwards from "@/components/honors-awards"
import Skills from "@/components/skills"
import Publications from "@/components/publications"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingChatButton from '@/components/FloatingChat'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <HonorsAwards />
      <Publications />
      <Skills />
      <Contact />
      <Footer />
      <FloatingChatButton />
    </main>
  )
}
