"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useSyncExternalStore } from "react"

import { Switch } from "@/components/ui/switch"

function setDocumentTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark)
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light")
  window.dispatchEvent(new Event("portfolio-theme-change"))
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("portfolio-theme-change", callback)

  return () => window.removeEventListener("portfolio-theme-change", callback)
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark")
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => false)

  function handleThemeChange(checked: boolean) {
    setDocumentTheme(checked)
  }

  return (
    <label className="flex items-center gap-1.5 rounded-md border border-border/80 bg-background/60 px-2 py-1.5 text-muted-foreground">
      <SunIcon aria-hidden="true" className="size-3" />
      <Switch checked={isDark} onCheckedChange={handleThemeChange} aria-label="Toggle dark mode" />
      <MoonIcon aria-hidden="true" className="size-3" />
    </label>
  )
}
