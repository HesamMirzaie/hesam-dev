import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/lib/site-data"

const navigation = [{ href: "/resume", label: "Resume" }, { href: "/projects", label: "Projects" }, { href: "/blog", label: "Blog" }]

export function SiteHeader() {
  return <header className="fixed inset-x-0 top-0 z-40 border-b bg-background/90 backdrop-blur"><div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-6 py-3 sm:px-8"><Link href="/" className="font-mono text-sm font-semibold tracking-tight">{siteConfig.name}<span className="text-primary">.</span></Link><div className="flex items-center gap-3 sm:gap-5"><nav aria-label="Primary navigation" className="flex items-center gap-3 text-sm text-muted-foreground sm:gap-4">{navigation.map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">{item.label}</Link>)}<a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">Contact</a></nav><ThemeToggle /></div></div></header>
}
