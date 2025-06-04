"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.5,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

type Circle = {
  x: string
  left: string
  width: string
  height: string
  duration: number
  delay: number
}

export default function Hero() {
  const [circles, setCircles] = useState<Circle[]>([])

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      x: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 30 + 10}px`,
      height: `${Math.random() * 30 + 10}px`,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
    setCircles(generated)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30"
            initial={{ y: "100vh", x: circle.x, opacity: 0 }}
            animate={{
              y: ["100vh", "-10vh"],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: circle.delay,
            }}
            style={{
              left: circle.left,
              width: circle.width,
              height: circle.height,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-2xl md:text-6xl font-bold text-foreground">
            Hello, welcome to my site!
          </motion.h2>

          <motion.h1 className="text-xl md:text-xl text-foreground">
            I'm a tech enthu who's worn many hats but whatever I do, I make data work smarter
          </motion.h1>

          <motion.p className="text-base md:text-lg text-muted-foreground">
            Feel free to explore my work and let's see where data can take us 🚀
          </motion.p>

          <motion.div variants={childVariants}>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1VTq0wJJQKlkIsFSOAHFM144mAcRwlUjA"
                target="_blank"
                rel="noopener noreferrer"
                download="Alyza Pramudya-CV.pdf"
              >
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-10 text-center cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-10 w-10 text-foreground mx-auto" />
        </motion.div>

      </div>
    </section>
  )
}