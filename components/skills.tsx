import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "HTML5", "CSS3", "SASS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "Jest", "Cypress", "Webpack", "Vite"],
    },
    {
      title: "Mobile & Other",
      skills: ["React Native", "Flutter", "Electron", "WebRTC", "Socket.io", "Stripe", "Firebase", "Supabase"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
