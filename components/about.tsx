import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-16 group">
          <div className="absolute inset-0 -z-10 transition-all duration-700 group-hover:blur-md pointer-events-none">
            <div
              id="about-gradient-bg"
              className="w-full h-full bg-gradient-to-r from-primary via-secondary to-primary opacity-40 animate-gradient-move rounded-2xl"
            ></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 relative z-10 select-none cursor-pointer">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto relative z-10">
            Full-Stack Web Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and name/title */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-[28rem] h-[28rem] bg-gradient-to-tr from-primary/60 to-secondary/60 rounded-full blur-2xl z-0"></div>
              <div className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] rounded-full border-4 border-primary/30 shadow-xl bg-background z-10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/samir.jpg"
                  alt="Samir Sain - Full Stack Developer"
                  width={448}
                  height={448}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-2 text-center lg:text-left">
              Samir Sain
              <br />
              <span className="text-lg font-medium text-primary">
                Full-Stack Web Developer
              </span>
            </h3>
          </div>

          {/* Right side - Details only, no repeat */}
          <div>
            <div className="mb-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Hi, I'm{" "}
                <span className="font-semibold text-foreground">Samir Sain</span> —
                a passionate Full-Stack Web Developer who transforms ideas into
                modern, responsive, and high-performing websites.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  🚀 <b>Specialties:</b> Frontend (React.js, Next.js, Tailwind
                  CSS), Backend (Node.js, Express, MongoDB), Tools (Git, VS Code,
                  Figma, Supabase, Vercel)
                </li>
                <li>
                  🧠 I love solving real-world problems through clean and scalable
                  code. Whether it's creating a smooth UI/UX or building REST APIs
                  — I enjoy every part of the development journey.
                </li>
                <li>
                  💡 <b>Vision:</b> “Technology should be simple, powerful, and
                  accessible.”
                </li>
                <li>
                  🌐 When I'm not coding, I'm exploring new tech, building side
                  projects, or helping others learn web development.
                </li>
              </ul>
              <p className="font-medium text-primary">
                Let's build something amazing together.
              </p>
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
                      <p className="text-xs text-muted-foreground">
                        Writing maintainable, scalable solutions
                      </p>
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
                      <p className="text-xs text-muted-foreground">
                        Creating intuitive user experiences
                      </p>
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
                      <p className="text-xs text-muted-foreground">
                        Optimizing for speed and efficiency
                      </p>
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

/* Add this to your global CSS (e.g., styles/globals.css):
.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradientMove 4s ease-in-out infinite;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
*/
