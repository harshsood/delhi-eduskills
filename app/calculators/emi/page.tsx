"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmiCalculatorPage() {
  const [p, setP] = useState(150000)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(24)

  const emi = useMemo(() => {
    const r = rate / 12 / 100
    const n = months
    if (r === 0) return p / n
    const v = Math.pow(1 + r, n)
    return (p * r * v) / (v - 1)
  }, [p, rate, months])

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-semibold">EMI Calculator</h1>
      <p className="text-muted-foreground">Estimate monthly installment for your program fees.</p>
      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <Label>Fees (₹)</Label>
          <Input type="number" value={p} onChange={(e) => setP(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Interest Rate (% p.a.)</Label>
          <Input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </div>
        <div className="grid gap-2">
          <Label>Tenure (months)</Label>
          <Input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">Estimated Monthly EMI</p>
          <p className="text-2xl font-semibold">₹{Math.round(emi).toLocaleString("en-IN")}</p>
        </div>
      </div>
    </div>
  )
}
