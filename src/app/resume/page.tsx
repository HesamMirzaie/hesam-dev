import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { education, experience, siteConfig, skills } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, skills, education, and contact information for Hesam Mirzaee.",
}

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-sm text-muted-foreground">Resume</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{siteConfig.name}</h1>
        <p className="text-lg text-muted-foreground">
          {siteConfig.role} · {siteConfig.location}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-primary underline underline-offset-4">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
          <a href={siteConfig.social.linkedin}>LinkedIn</a>
          <a href={siteConfig.social.github}>GitHub</a>
        </div>
      </div>

      <Separator className="my-12" />

      <section className="grid gap-7 md:grid-cols-[10rem_1fr]">
        <h2 className="font-mono text-sm text-muted-foreground">Profile</h2>
        <p className="max-w-2xl leading-7 text-muted-foreground">{siteConfig.description}</p>
      </section>

      <Separator className="my-12" />

      <section className="grid gap-7 md:grid-cols-[10rem_1fr]">
        <h2 className="font-mono text-sm text-muted-foreground">Experience</h2>
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="flex flex-col gap-2">
              <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p>{item.company}</p>
              <p className="leading-7 text-muted-foreground">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="grid gap-7 md:grid-cols-[10rem_1fr]">
        <h2 className="font-mono text-sm text-muted-foreground">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      <section className="grid gap-7 md:grid-cols-[10rem_1fr]">
        <h2 className="font-mono text-sm text-muted-foreground">Education</h2>
        <div className="flex flex-col gap-8">
          {education.map((item) => (
            <article key={`${item.institution}-${item.period}`} className="flex flex-col gap-2">
              <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p>{item.institution}</p>
              <p className="leading-7 text-muted-foreground">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
