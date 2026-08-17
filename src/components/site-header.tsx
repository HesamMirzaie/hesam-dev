import Link from "next/link"

import { MobileNavigation } from "@/components/mobile-navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site-data"

const navigation = [{ href: "/resume", label: "Resume" }, { href: "/projects", label: "Projects" }, { href: "/blog", label: "Notes" }]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-5 px-6 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em]">
          <span className="grid size-8 place-items-center rounded-md border border-primary/50 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">HM</span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground md:flex">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>)}
            <a href={`mailto:${siteConfig.email}`} className="text-accent transition-colors hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
          <div className="md:hidden"><MobileNavigation navigation={navigation} email={siteConfig.email} /></div>
        </div>
      </div>
    </header>
  )
}
