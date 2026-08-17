import { Reveal, Stagger } from "@/components/motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/site-data"

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="technical-rule grid gap-8 pt-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
        <div><p className="section-label">Selected work</p><h1 className="mt-5 text-5xl leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl">Built to hold up in the real world<span className="text-accent">.</span></h1></div>
        <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">A selection of product work and open-source projects built with React, TypeScript, and a focus on maintainable frontend systems.</p>
      </Reveal>
      <Stagger className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</Stagger>
    </main>
  )
}
