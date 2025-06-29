import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications, mentor junior developers, and architect cloud-native solutions.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects, implemented CI/CD pipelines, and optimized application performance.",
      technologies: ["Vue.js", "Express", "MongoDB", "Docker", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency Co.",
      period: "2019 - 2020",
      description:
        "Created responsive web interfaces, collaborated with design teams, and implemented modern frontend architectures.",
      technologies: ["React", "SASS", "Webpack", "JavaScript", "HTML5"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description:
        "Built web applications from scratch, learned modern development practices, and contributed to open-source projects.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "Git"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in software development, building expertise across various technologies and domains.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
