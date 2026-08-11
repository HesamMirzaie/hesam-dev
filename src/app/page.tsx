import Link from "next/link";
import { ArrowRightIcon, Code2Icon, MailIcon } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { projects, siteConfig, skills } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="flex flex-col gap-7">
          <Badge variant="outline" className="w-fit font-mono">
            <span
              data-icon="inline-start"
              className="size-1.5 rounded-full bg-primary"
            />
            Available for thoughtful work
          </Badge>
          <div className="flex flex-col gap-5">
            <p className="font-mono text-sm text-muted-foreground">$ whoami</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-primary">H</span>esam{" "}
              <span className="text-primary">M</span>irzaee
              <span className="text-ring">.</span>
            </h1>
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-nowrap sm:text-4xl">
              I build scalable frontend systems for the web.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.description} I care about clean code, performance, and
              maintainable systems for product teams.
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
      </section>
      <Separator />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <h2 className="mb-10 text-3xl font-semibold tracking-tight">
          Projects with a purpose.
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <Separator />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight">
          A practical stack.
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              <Code2Icon data-icon="inline-start" />
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
