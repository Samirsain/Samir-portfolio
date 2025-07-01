"use client"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Instagram, Linkedin } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10 z-0" />

      {/* 💡 Two-column layout */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
        
        {/* ✅ Left Column - Spline 3D */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]">
          <Spline scene="https://prod.spline.design/U6TGynq4CrXPEP-n/scene.splinecode" />
        </div>

        {/* ✅ Right Column - Text and Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Samir Sain - Full-Stack Developer
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Crafting exceptional digital experiences with modern technologies and clean, scalable code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a href="https://github.com/Samirsain" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/codexmir" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="h-5 w-5" />
      </Button>
    </section>
  )
}
