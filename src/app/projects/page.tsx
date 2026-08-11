import type { Metadata } from "next"

import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments.",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-sm text-muted-foreground">Selected work</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Things I have built and explored.</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          A selection of product work and open-source projects built with React, TypeScript, and a focus on maintainable frontend systems.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  )
}
