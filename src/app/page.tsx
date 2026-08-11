import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon, Code2Icon, MailIcon } from "lucide-react"

import { PostCard } from "@/components/post-card"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getAllPosts } from "@/lib/posts"
import { projects, siteConfig, skills } from "@/lib/site-data"

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="flex flex-col gap-7">
          <Badge variant="outline" className="w-fit font-mono">
            <span data-icon="inline-start" className="size-1.5 rounded-full bg-primary" />
            Available for thoughtful work
          </Badge>
          <div className="flex flex-col gap-5">
            <p className="font-mono text-sm text-muted-foreground">$ whoami</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              I build scalable frontend systems for the web.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.description} I care about clean code, performance, and maintainable systems for product teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/resume" className={cn(buttonVariants({ size: "lg" }))}>
              View resume
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <MailIcon data-icon="inline-start" />
              Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5 font-mono text-sm shadow-sm">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>~/portfolio</span>
            <span aria-hidden="true">● ● ●</span>
          </div>
          <Separator className="my-4" />
          <dl className="grid gap-4">
            <div className="flex items-start justify-between gap-6">
              <dt className="text-muted-foreground">focus</dt>
              <dd className="text-right">React and TypeScript</dd>
            </div>
            <div className="flex items-start justify-between gap-6">
              <dt className="text-muted-foreground">based in</dt>
              <dd className="text-right">{siteConfig.location}</dd>
            </div>
            <div className="flex items-start justify-between gap-6">
              <dt className="text-muted-foreground">currently</dt>
              <dd className="text-right">Building CRM and startup products</dd>
            </div>
          </dl>
        </div>
      </section>

      <Separator />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm text-muted-foreground">01 / selected work</p>
            <h2 className="text-3xl font-semibold tracking-tight">Projects with a purpose.</h2>
          </div>
          <Link href="/projects" className={cn(buttonVariants({ variant: "ghost" }))}>
            All projects
            <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      <section id="writing" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm text-muted-foreground">02 / learning notes</p>
            <h2 className="text-3xl font-semibold tracking-tight">New concepts, explained simply.</h2>
          </div>
          <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
            Read all notes
            <ArrowUpRightIcon data-icon="inline-end" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Separator />

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-3">
          <p className="font-mono text-sm text-muted-foreground">03 / toolkit</p>
          <h2 className="text-3xl font-semibold tracking-tight">A practical stack.</h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            I care about details that make interfaces feel calm: sensible structure, accessible interactions, and performance that does not ask the user to wait.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                <Code2Icon data-icon="inline-start" />
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
