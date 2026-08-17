"use client"

import { m } from "motion/react"

const nodes = [
  [50, 9], [76, 18], [91, 43], [82, 72], [55, 91], [27, 80], [9, 53], [19, 25], [50, 28], [70, 48], [49, 70], [30, 49],
]

export function VortexField() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-primary/10 blur-3xl" />
      <m.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="size-full text-primary">
          <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth=".35" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth=".35" strokeDasharray="2 2" />
          {nodes.slice(0, 8).map(([x, y], index) => (
            <line key={index} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeOpacity=".18" strokeWidth=".3" />
          ))}
          {nodes.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r={index < 8 ? 1 : 0.7} fill="currentColor" fillOpacity={index < 8 ? ".9" : ".55"} />
          ))}
        </svg>
      </m.div>
      <m.div
        className="absolute inset-[18%] rounded-full border border-dashed border-accent/45"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <div className="absolute inset-[32%] grid place-items-center rounded-full border border-primary/50 bg-background/75 shadow-[0_0_60px_color-mix(in_oklch,var(--primary),transparent_70%)] backdrop-blur">
        <div className="text-center font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="mx-auto mb-2 block size-2 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />
          Frontend
          <br />
          systems
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[4%] border-l border-primary/60 pl-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
        Tehran / IR
        <br />
        35.6892° N
      </div>
    </div>
  )
}
