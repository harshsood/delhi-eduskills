"use client"

import { useMemo, useState } from "react"
import { PROGRAMS } from "@/lib/programs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function FinderPage() {
  const [mode, setMode] = useState<"online" | "distance" | "executive" | "any">("any")
  const [emi, setEmi] = useState<"yes" | "no" | "any">("any")
  const [submitted, setSubmitted] = useState(false)

  const results = useMemo(() => {
    return PROGRAMS.filter((p) => (mode === "any" ? true : p.mode === mode)).filter((p) =>
      emi === "any" ? true : emi === "yes" ? p.emiAvailable : !p.emiAvailable,
    )
  }, [mode, emi])

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">AI Program Finder (Demo)</h1>
      <p className="text-muted-foreground">Answer a few questions to see matched programs.</p>
      <div className="mt-6 space-y-6">
        <Card>
          <CardContent className="space-y-4 p-4">
            <div>
              <p className="mb-2 font-medium">Preferred mode?</p>
              <RadioGroup value={mode} onValueChange={(v) => setMode(v as any)} className="grid grid-cols-2 gap-2">
                {["any", "online", "distance", "executive"].map((m) => (
                  <div className="flex items-center space-x-2" key={m}>
                    <RadioGroupItem id={`m-${m}`} value={m} />
                    <Label htmlFor={`m-${m}`} className="capitalize">
                      {m}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <p className="mb-2 font-medium">Need EMI facility?</p>
              <RadioGroup value={emi} onValueChange={(v) => setEmi(v as any)} className="grid grid-cols-3 gap-2">
                {["any", "yes", "no"].map((m) => (
                  <div className="flex items-center space-x-2" key={m}>
                    <RadioGroupItem id={`e-${m}`} value={m} />
                    <Label htmlFor={`e-${m}`} className="capitalize">
                      {m}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <Button onClick={() => setSubmitted(true)}>Show Matches</Button>
          </CardContent>
        </Card>

        {submitted && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{results.length} matches</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {results.map((r) => (
                <li key={r.id} className="rounded-md border p-3">
                  <p className="font-medium">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.university}</p>
                  <p className="mt-1 text-xs">
                    Mode: {r.mode} · EMI: {r.emiAvailable ? "Yes" : "No"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
