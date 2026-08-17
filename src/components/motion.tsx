"use client"

import { Children, type ReactNode } from "react"
import { domAnimation, LazyMotion, m, MotionConfig } from "motion/react"

import { cn } from "@/lib/utils"

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "none"
}) {
  const offset = direction === "left" ? { x: 24 } : direction === "up" ? { y: 20 } : {}

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {Children.map(children, (child) => (
        <m.div
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {child}
        </m.div>
      ))}
    </m.div>
  )
}

export function MotionSurface({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={cn("h-full", className)}
      whileHover={{ y: -4 }}
      whileTap={{ y: -1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </m.div>
  )
}
