import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics dashboard with AI-driven insights, data visualization, and predictive analytics.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "TensorFlow"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Platform",
      description: "Modern social media platform with real-time messaging, content sharing, and community features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
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
