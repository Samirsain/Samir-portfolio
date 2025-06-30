import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-xl mb-2">
              <span className="text-primary"></span>
              Samirsain
              <span className="text-primary"></span>
            </div>
            <p className="text-muted-foreground">Building the future, one line of code at a time.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Samirsain" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/samir-sain-8774b936b/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/codexmir" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:devxmir@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; crafted by samir sain.</p>
        </div>
      </div>
    </footer>
  )
}
