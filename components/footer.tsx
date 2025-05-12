"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-muted/70 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-lg font-bold mb-4 md:mb-0">Alyza Pramudya</h3>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-6 pt-6 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
            <Link
              href="https://www.linkedin.com/in/alyzapramudya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/pramudyalyza"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://medium.com/@alyzapramudya"
              className="p-2 rounded-full hover:bg-background transition-colors"
              aria-label="Medium">
              <FileText className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alyza Pramudya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
