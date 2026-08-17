import Link from "next/link";
import { ArrowRightIcon, Code2Icon, MailIcon } from "lucide-react";

import { Reveal, Stagger } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { VortexField } from "@/components/vortex-field";
import { cn } from "@/lib/utils";
import { projects, siteConfig, skills } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/80">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <Reveal className="flex flex-col gap-8">
            <Badge
              variant="outline"
              className="w-fit font-mono uppercase tracking-[0.12em]"
            >
              <span
                data-icon="inline-start"
                className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
              />
              Open to work
            </Badge>
            <div className="flex flex-col gap-6">
              <p className="section-label">Software engineer / Tehran</p>
              <h1 className="max-w-4xl text-5xl leading-[0.94] font-medium tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
                {siteConfig.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {siteConfig.description} I care about clean code, performance,
                and maintainable systems for product teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Explore projects
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                <MailIcon data-icon="inline-start" />
                Get in touch
              </a>
            </div>
            <div className="grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-md border bg-border ">
              {[
                ["03+", "Years building"],
                ["05", "Selected projects"],
              ].map(([value, label]) => (
                <div key={label} className="bg-background/90 p-4">
                  <p className="font-mono text-lg text-foreground">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal
            direction="left"
            delay={0.12}
            className="relative hidden lg:block"
          >
            <VortexField />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
        <Reveal className="mb-12 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em] sm:text-5xl">
              Projects with a purpose.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground md:justify-self-end">
            Product work and open-source experiments shaped around reliable
            interfaces, realtime behavior, and maintainable systems.
          </p>
        </Reveal>
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </Stagger>
        <Reveal className="mt-8">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline" })}
          >
            See all projects
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Reveal>
      </section>

      <Separator />
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <Reveal>
          <p className="section-label">Capabilities</p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.035em]">
            A practical stack.
          </h2>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex min-h-24 items-center gap-3 bg-background p-5 font-mono text-sm"
            >
              <Code2Icon className="text-primary" />
              {skill}
            </div>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
