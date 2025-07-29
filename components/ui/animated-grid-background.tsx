"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export function AnimatedGridBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative flex flex-col items-center justify-center bg-slate-900", className)}>
      <div className="animated-grid" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
