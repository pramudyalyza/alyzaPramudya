"use client"

import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/70 py-10">
        <div className="mt-2 pt-1 text-center">
          {/* <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
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
          </div> */}
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alyza Pramudya. All rights reserved.
          </p>
        </div>
    </footer>
  )
}
