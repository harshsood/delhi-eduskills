"use client"

import { useMemo, useState } from "react"
import { PROGRAMS, type Program } from "@/lib/programs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ComparePage() {
  // In a full build we read selected program IDs from storage/query.
  const [selected] = useState<Program[]>(PROGRAMS.slice(0, 3))
  const cols = useMemo(() => Math.max(selected.length, 1), [selected])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Compare Programs</h1>
      <p className="text-muted-foreground">Side-by-side overview. Add items from program cards to compare.</p>
      <div className={`mt-6 grid gap-4`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {selected.map((p) => (
          <Card key={p.id}>
            <CardHeader>
              <CardTitle className="text-pretty">{p.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.university}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="capitalize">
                  {p.mode}
                </Badge>
                {p.emiAvailable && <Badge className="bg-accent text-accent-foreground">EMI</Badge>}
              </div>
              <p className="text-sm">Duration: {p.durationMonths} months</p>
              <p className="text-sm">Fees: ₹{p.feesTotal.toLocaleString("en-IN")} (total)</p>
              <p className="text-sm">Approvals: {p.approvals.join(", ")}</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground">
                {p.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
