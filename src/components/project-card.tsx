import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { MotionSurface } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/site-data"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <MotionSurface>
      <Card className="h-full transition-colors hover:border-primary/60">
        <CardHeader className="gap-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">Project / {String(index + 1).padStart(2, "0")}</p>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardAction><Badge variant="secondary">{project.status}</Badge></CardAction>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-6">
          <p className="leading-7 text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">{project.technologies.map((technology) => <Badge key={technology} variant="outline">{technology}</Badge>)}</div>
        </CardContent>
        <CardFooter>
          <Link href={project.href} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-ml-2 text-primary")}>View work<ArrowUpRightIcon data-icon="inline-end" /></Link>
        </CardFooter>
      </Card>
    </MotionSurface>
  )
}
