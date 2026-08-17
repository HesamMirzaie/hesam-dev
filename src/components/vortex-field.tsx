"use client"

import { m } from "motion/react"

const skills = [
  { name: "React", position: [50, 9] },
  { name: "TypeScript", position: [76, 18] },
  { name: "Next.js", position: [91, 43] },
  { name: "Vite", position: [82, 72] },
  { name: "REST", position: [55, 91] },
  { name: "WebSocket", position: [27, 80] },
  { name: "Docker", position: [9, 53] },
  { name: "Azure", position: [19, 25] },
] as const

const innerNodes = [
  [50, 28], [70, 48], [49, 70], [30, 49],
]

function SkillMark({ name }: { name: (typeof skills)[number]["name"] }) {
  const common = { viewBox: "0 0 24 24", className: "size-[62%]", fill: "none", stroke: "currentColor", strokeWidth: 1.8 }

  switch (name) {
    case "React":
      return <svg {...common}><circle cx="12" cy="12" r="1.4" fill="currentColor" /><ellipse cx="12" cy="12" rx="9" ry="3.7" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" /></svg>
    case "TypeScript":
      return <svg {...common}><path d="M4 4h16v16H4z" /><path d="M8 10h5M10.5 10v7M14 15.8c.7.8 3.4 1.1 3.4-.6 0-2-3.3-1.1-3.3-3.2 0-1.6 2.5-1.8 3.4-.8" /></svg>
    case "Next.js":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M8.2 16V8l7.7 9.4M15.8 8v6.2" /></svg>
    case "Vite":
      return <svg {...common}><path d="m3 5 9 15 9-15-6.7 1.2L12 2 9.7 6.2 3 5Z" /><path d="m13.2 6-4.1 7h3l-1.3 5 4.2-7h-3l1.2-5Z" fill="currentColor" stroke="none" /></svg>
    case "REST":
      return <svg {...common}><circle cx="5" cy="12" r="2" /><circle cx="19" cy="7" r="2" /><circle cx="19" cy="17" r="2" /><path d="m7 11 10-3M7 13l10 3" /></svg>
    case "WebSocket":
      return <svg {...common}><path d="M4 8.5A8 8 0 0 1 17.5 5L20 7.5M20 7.5h-5M20 7.5v-5M20 15.5A8 8 0 0 1 6.5 19L4 16.5M4 16.5h5M4 16.5v5" /></svg>
    case "Docker":
      return <svg {...common}><path d="M3 12h18c-.6 5-4.2 7.5-9 7.5S4.2 17 3 12Z" /><path d="M6 9h3v3H6zM9 6h3v3H9zM9 9h3v3H9zM12 9h3v3h-3zM15 9h3v3h-3zM18 8c1.4 0 2.2-.7 2.7-1.5" /></svg>
    case "Azure":
      return <svg {...common}><path d="M10.2 3 4 18h5l2.2-4.2h5.5L20 18 13.7 3h-3.5Zm2 4.2 2.7 4.2h-4.8l2.1-4.2Z" /></svg>
  }
}

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
          {skills.map(({ name, position: [x, y] }) => (
            <line key={name} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeOpacity=".18" strokeWidth=".3" />
          ))}
          {innerNodes.map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r=".7" fill="currentColor" fillOpacity=".55" />
          ))}
        </svg>
        {skills.map(({ name, position: [x, y] }) => (
          <div
            key={name}
            className="absolute grid size-[8.5%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/45 bg-background/90 text-primary shadow-[0_0_18px_color-mix(in_oklch,var(--primary),transparent_72%)] backdrop-blur-sm"
            style={{ left: `${x}%`, top: `${y}%` }}
            title={name}
          >
            <m.div
              className="grid size-full place-items-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 42, ease: "linear", repeat: Infinity }}
            >
              <SkillMark name={name} />
            </m.div>
          </div>
        ))}
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
