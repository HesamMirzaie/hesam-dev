import { Reveal, Stagger } from "@/components/motion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { education, experience, siteConfig, skills } from "@/lib/site-data"

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="technical-rule grid gap-8 pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="section-label">Resume / 2026</p><h1 className="mt-5 text-5xl font-medium tracking-[-0.045em] sm:text-7xl">{siteConfig.name}<span className="text-accent">.</span></h1><p className="mt-5 text-xl text-muted-foreground">{siteConfig.role} · {siteConfig.location}</p></div>
        <div className="flex flex-col items-start gap-2 font-mono text-xs uppercase tracking-[0.12em] md:items-end"><a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a><a href={siteConfig.social.linkedin} className="text-muted-foreground hover:text-foreground">LinkedIn</a><a href={siteConfig.social.github} className="text-muted-foreground hover:text-foreground">GitHub</a></div>
      </Reveal>

      <Separator className="my-14" />
      <Reveal className="grid gap-7 md:grid-cols-[11rem_1fr]"><h2 className="section-label self-start">Profile</h2><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{siteConfig.description}</p></Reveal>
      <Separator className="my-14" />
      <section className="grid gap-8 md:grid-cols-[11rem_1fr]">
        <h2 className="section-label self-start">Experience</h2>
        <Stagger className="relative flex flex-col gap-2 before:absolute before:inset-y-2 before:left-1.5 before:w-px before:bg-border">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.period}`} className="relative ml-0 grid gap-3 border-b border-border/70 py-6 pl-10 last:border-0 sm:grid-cols-[9rem_1fr]">
              <span className="absolute top-8 left-0 size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_14px_color-mix(in_oklch,var(--primary),transparent_40%)]" />
              <div><p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{item.period}</p><p className="mt-2 font-mono text-[0.65rem] text-primary">EXP/{String(index + 1).padStart(2, "0")}</p></div>
              <div><h3 className="text-xl font-medium">{item.role}</h3><p className="mt-1 text-accent">{item.company}</p><p className="mt-3 leading-7 text-muted-foreground">{item.summary}</p></div>
            </article>
          ))}
        </Stagger>
      </section>
      <Separator className="my-14" />
      <Reveal className="grid gap-8 md:grid-cols-[11rem_1fr]"><h2 className="section-label self-start">Skills</h2><div className="flex flex-wrap gap-2">{skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}</div></Reveal>
      <Separator className="my-14" />
      <section className="grid gap-8 md:grid-cols-[11rem_1fr]"><h2 className="section-label self-start">Education</h2><Stagger className="grid gap-px overflow-hidden rounded-md border bg-border">{education.map((item, index) => <article key={`${item.institution}-${item.period}`} className="grid gap-3 bg-background p-6 sm:grid-cols-[9rem_1fr]"><div><p className="font-mono text-xs text-muted-foreground">{item.period}</p><p className="mt-2 font-mono text-[0.65rem] text-primary">EDU/{String(index + 1).padStart(2, "0")}</p></div><div><h3 className="text-xl font-medium">{item.degree}</h3><p className="mt-1 text-accent">{item.institution}</p><p className="mt-3 leading-7 text-muted-foreground">{item.summary}</p></div></article>)}</Stagger></section>
    </main>
  )
}
