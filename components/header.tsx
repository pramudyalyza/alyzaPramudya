"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
      setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experiences", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold">
          {mounted && (
            <Image
              src={resolvedTheme === "dark" ? "/alyzaLogoDark.png" : "/alyzaLogoLight.png"}
              alt="Alyza Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          )}
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(link.href)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
                setIsMenuOpen(false)
              }}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                    setIsMenuOpen(false)
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
