"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <img src="/placeholder-logo.png" alt="Samir Sain Logo" className="h-10 w-10 object-contain rounded-full shadow" />
            <span className="font-bold text-xl">Samir Sain</span>
          </div>

          {/* Desktop Navigation on the right */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
            <button onClick={() => scrollToSection("skills")} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection("experience")} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

/* Add this to your global CSS (e.g., styles/globals.css):
.nav-link {
  @apply relative text-muted-foreground hover:text-primary transition-colors duration-300 font-medium;
}
.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300;
}
.nav-link:hover::after {
  @apply w-full;
}
*/
