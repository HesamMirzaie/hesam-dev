import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/site-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardAction>
          <Badge variant="secondary">{project.status}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <p className="leading-6 text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={project.href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2")}>
          View work
          <ArrowUpRightIcon data-icon="inline-end" />
        </Link>
      </CardFooter>
    </Card>
  )
}
