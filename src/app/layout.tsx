import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { siteConfig } from "@/lib/site-data"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
export const metadata: Metadata = { title: { default: `${siteConfig.name} - ${siteConfig.role}`, template: `%s - ${siteConfig.name}` }, description: siteConfig.description }
const themeScript = `try { const storedTheme = localStorage.getItem("portfolio-theme"); const isDark = storedTheme ? storedTheme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", isDark) } catch {}`
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><head><Script id="theme-script" strategy="beforeInteractive">{themeScript}</Script></head><body className="min-h-full"><SiteHeader /><div className="flex min-h-dvh flex-col pt-16">{children}<footer className="mt-auto border-t"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground sm:px-8"><p>Hesam Mirzaee.</p><p className="font-mono">© {new Date().getFullYear()}</p></div></footer></div></body></html> }
