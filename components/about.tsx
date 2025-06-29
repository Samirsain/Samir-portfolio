import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a keen eye for user
            experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Your Name - Full Stack Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Hi, I'm [Your Name] 👋</h3>
              <p className="text-lg mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating robust, scalable
                applications using cutting-edge technologies. My journey spans from crafting pixel-perfect frontend
                interfaces to architecting efficient backend systems.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. My
                goal is to bridge the gap between technical excellence and exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Continuous Learner</span>
              </div>
            </div>

            <div className="grid gap-4">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Clean Code</h4>
                      <p className="text-xs text-muted-foreground">Writing maintainable, scalable solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">UI/UX Focus</h4>
                      <p className="text-xs text-muted-foreground">Creating intuitive user experiences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Performance</h4>
                      <p className="text-xs text-muted-foreground">Optimizing for speed and efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
