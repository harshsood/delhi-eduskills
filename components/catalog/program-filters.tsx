"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import type { Program, ProgramMode } from "@/lib/programs"

type Props = {
  data: Program[]
  onFiltered: (items: Program[]) => void
}

const MODES: ProgramMode[] = ["online", "distance", "executive"]
const APPROVALS = ["UGC", "AICTE", "NAAC A+", "DEB"]

export function ProgramFilters({ data, onFiltered }: Props) {
  const feesMax = useMemo(() => Math.max(...data.map((d) => d.feesTotal)), [data])
  const [query, setQuery] = useState("")
  const [modes, setModes] = useState<ProgramMode[]>([])
  const [approvals, setApprovals] = useState<string[]>([])
  const [maxFees, setMaxFees] = useState<number>(feesMax)
  const [maxDuration, setMaxDuration] = useState<number>(36)

  const apply = () => {
    const q = query.trim().toLowerCase()
    const items = data.filter((p) => {
      const byQ = !q || `${p.title} ${p.university}`.toLowerCase().includes(q)
      const byMode = modes.length === 0 || modes.includes(p.mode)
      const byApprovals = approvals.length === 0 || approvals.every((a) => p.approvals.includes(a))
      const byFees = p.feesTotal <= maxFees
      const byDuration = p.durationMonths <= maxDuration
      return byQ && byMode && byApprovals && byFees && byDuration
    })
    onFiltered(items)
  }

  return (
    <aside className="rounded-lg border p-4">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="q">Search</Label>
          <Input
            id="q"
            placeholder="Program or university"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={apply}
          />
        </div>

        <Separator />

        <div className="grid gap-2">
          <Label>Mode</Label>
          <div className="grid grid-cols-2 gap-2">
            {MODES.map((m) => (
              <label key={m} className="flex items-center gap-2 text-sm capitalize">
                <Checkbox
                  checked={modes.includes(m)}
                  onCheckedChange={(v) => {
                    setModes((s) => (v ? [...s, m] : s.filter((x) => x !== m)))
                  }}
                  onBlur={apply}
                />
                {m}
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Approvals</Label>
          <div className="grid grid-cols-2 gap-2">
            {APPROVALS.map((a) => (
              <label key={a} className="flex items-center gap-2 text-sm">
                <Checkbox
                  checked={approvals.includes(a)}
                  onCheckedChange={(v) => {
                    setApprovals((s) => (v ? [...s, a] : s.filter((x) => x !== a)))
                  }}
                  onBlur={apply}
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Max Fees (₹)</Label>
          <Slider
            min={20000}
            max={feesMax}
            step={5000}
            value={[maxFees]}
            onValueChange={([v]) => setMaxFees(v)}
            onValueCommit={apply}
          />
          <div className="text-xs text-muted-foreground">Up to ₹{maxFees.toLocaleString("en-IN")}</div>
        </div>

        <div className="grid gap-2">
          <Label>Max Duration (months)</Label>
          <Slider
            min={6}
            max={48}
            step={6}
            value={[maxDuration]}
            onValueChange={([v]) => setMaxDuration(v)}
            onValueCommit={apply}
          />
          <div className="text-xs text-muted-foreground">Up to {maxDuration} months</div>
        </div>
      </div>
    </aside>
  )
}
