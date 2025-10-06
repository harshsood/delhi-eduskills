"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

type LeadModalProps = {
  trigger?: React.ReactNode
}

export function LeadModal({ trigger }: LeadModalProps) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    // extract UTM from URL
    let utm: Record<string, string> | undefined
    if (typeof window !== "undefined") {
      const sp = new URL(window.location.href).searchParams
      utm = {
        utm_source: sp.get("utm_source") || "",
        utm_medium: sp.get("utm_medium") || "",
        utm_campaign: sp.get("utm_campaign") || "",
      }
    }
    if (!payload.name || !payload.phone) {
      toast({ title: "Please fill name and phone." })
      return
    }
    try {
      setLoading(true)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "modal",
          utm,
          ts: Date.now(),
        }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Thanks! We’ll contact you shortly." })
      setOpen(false)
      ;(e.currentTarget as HTMLFormElement).reset()
    } catch {
      toast({ title: "Something went wrong. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger ?? <Button>Enquire Now</Button>}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Talk to a Counselor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" required type="tel" placeholder="+91-XXXXXXXXXX" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email (optional)</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Interest</Label>
            <Input id="interest" name="interest" placeholder="e.g., Online MBA" />
          </div>
          <Button disabled={loading} type="submit" className="w-full bg-primary text-primary-foreground">
            {loading ? "Submitting..." : "Submit"}
          </Button>
          <p className="text-xs text-muted-foreground">
            By submitting, you agree to be contacted. Copy is placeholder.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
