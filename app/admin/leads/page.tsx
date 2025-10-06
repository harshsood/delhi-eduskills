"use client"

import useSWR from "swr"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function AdminLeadsPage() {
  const [authed, setAuthed] = useState(false)
  useEffect(() => {
    setAuthed(typeof window !== "undefined" && localStorage.getItem("edAuth") === "demo")
  }, [])

  const { data } = useSWR(authed ? "/api/leads" : null, fetcher)

  if (!authed) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Admin — Leads</h1>
        <p className="text-muted-foreground">Please sign in to view leads (use header “Sign in”).</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Leads</h1>
      <p className="text-muted-foreground">Recent enquiries captured from forms and tools.</p>
      <div className="mt-6 grid gap-3">
        {(data?.items ?? []).map((l: any) => (
          <Card key={l.id} className="p-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <div>
                <p className="font-medium">{l.name || "Anonymous"}</p>
                <p className="text-muted-foreground">{l.phone || l.email || "-"}</p>
              </div>
              <div className="text-xs">
                <p>Source: {l.source || "-"}</p>
                <p>Interest: {l.interest || "-"}</p>
              </div>
              <div className="text-xs text-muted-foreground">
                <p>
                  UTM: {l.utm?.utm_source || "-"} / {l.utm?.utm_medium || "-"} / {l.utm?.utm_campaign || "-"}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
