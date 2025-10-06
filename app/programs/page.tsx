"use client"

import { useMemo, useState } from "react"
import { PROGRAMS, type Program } from "@/lib/programs"
import { ProgramCard } from "@/components/catalog/program-card"
import { ProgramFilters } from "@/components/catalog/program-filters"

export default function ProgramsPage() {
  const [items, setItems] = useState<Program[]>(PROGRAMS)
  const total = useMemo(() => items.length, [items])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Programs</h1>
        <p className="text-muted-foreground">Browse and filter programs. Data is placeholder.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <ProgramFilters data={PROGRAMS} onFiltered={setItems} />
        <section aria-live="polite">
          <p className="mb-3 text-sm text-muted-foreground">
            {total} result{total !== 1 && "s"}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((p) => (
              <ProgramCard key={p.id} program={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
