import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { MotionProvider } from "@/components/motion";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.role}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

const themeScript = `try { const storedTheme = localStorage.getItem("portfolio-theme"); document.documentElement.classList.toggle("dark", storedTheme ? storedTheme === "dark" : true) } catch { document.documentElement.classList.add("dark") }`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="min-h-full">
        <MotionProvider>
          <div className="site-surface flex min-h-dvh flex-col">
            <SiteHeader />
            <div className="flex min-h-dvh flex-col pt-16">
              {children}
              <footer className="mt-auto border-t border-border/80 bg-background/70 backdrop-blur">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:px-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      HM / Portfolio
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4 sm:justify-end">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-mono text-xs uppercase tracking-[0.16em] text-accent hover:underline"
                    >
                      Start a conversation
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
