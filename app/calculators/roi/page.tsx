"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RoiCalculatorPage() {
  const [cost, setCost] = useState(150000)
  const [salaryBefore, setSalaryBefore] = useState(400000)
  const [salaryAfter, setSalaryAfter] = useState(600000)

  const delta = useMemo(() => Math.max(0, salaryAfter - salaryBefore), [salaryAfter, salaryBefore])
  const paybackMonths = useMemo(
    () => (delta > 0 ? Math.ceil(cost / (delta / 12)) : Number.POSITIVE_INFINITY),
    [delta, cost],
  )

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-semibold">ROI Calculator</h1>
      <p className="text-muted-foreground">Estimate how quickly your program pays back.</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <Label>Program Cost (₹)</Label>
          <Input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Annual Salary Before (₹)</Label>
          <Input type="number" value={salaryBefore} onChange={(e) => setSalaryBefore(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Annual Salary After (₹)</Label>
          <Input type="number" value={salaryAfter} onChange={(e) => setSalaryAfter(Number(e.target.value))} />
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">Estimated Payback</p>
          <p className="text-2xl font-semibold">
            {paybackMonths === Number.POSITIVE_INFINITY
              ? "N/A"
              : `${paybackMonths} month${paybackMonths > 1 ? "s" : ""}`}
          </p>
        </div>
      </div>
    </div>
  )
}
