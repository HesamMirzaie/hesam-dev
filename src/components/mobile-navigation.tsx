"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function MobileNavigation({ navigation, email }: { navigation: { href: string; label: string }[]; email: string }) {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open navigation" />}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="w-[min(22rem,90vw)] border-border/80 bg-background/95 backdrop-blur-xl">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="font-mono uppercase tracking-[0.18em]">Navigation</SheetTitle>
          <SheetDescription>Portfolio sections and contact.</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="flex flex-col p-3">
          <SheetClose render={<Link href="/" className={cn("border-b px-3 py-4 font-mono text-sm uppercase tracking-[0.14em]", pathname === "/" ? "text-primary" : "text-muted-foreground")} />}>Home</SheetClose>
          {navigation.map((item) => (
            <SheetClose key={item.href} render={<Link href={item.href} className={cn("border-b px-3 py-4 font-mono text-sm uppercase tracking-[0.14em]", pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground")} />}>{item.label}</SheetClose>
          ))}
          <a href={`mailto:${email}`} className="px-3 py-4 font-mono text-sm uppercase tracking-[0.14em] text-accent">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
