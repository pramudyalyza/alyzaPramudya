"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { AuroraBackground } from "@/components/ui/aurora-background"

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

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AuroraBackground id="home">
      <div className="container relative mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={childVariants}
            className="text-2xl font-bold text-foreground md:text-6xl"
          >
            Hello, welcome to my site!
          </motion.h2>

          <motion.h1
            variants={childVariants}
            className="text-xl text-foreground md:text-xl"
          >
            I'm a tech enthu who's worn many hats but whatever I do, I make data
            work smarter
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-base text-muted-foreground md:text-lg"
          >
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
          className="absolute -bottom-24 left-0 right-0 mx-auto w-10 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="mx-auto h-10 w-10 text-foreground" />
        </motion.div>
      </div>
    </AuroraBackground>
  )
}