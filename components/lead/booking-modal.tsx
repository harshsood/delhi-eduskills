"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { addDays, format } from "date-fns"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/components/ui/use-toast"

type Props = { trigger?: React.ReactNode }

export function BookingModal({ trigger }: Props) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>(addDays(new Date(), 1))
  const [slot, setSlot] = useState<string>("")
  const { toast } = useToast()

  // generate 30-min slots 10:00–18:00
  const slots = useMemo(() => {
    const start = new Date(date)
    start.setHours(10, 0, 0, 0)
    const end = new Date(date)
    end.setHours(18, 0, 0, 0)
    const arr: string[] = []
    for (let d = new Date(start); d <= end; d = new Date(d.getTime() + 30 * 60000)) {
      arr.push(format(d, "hh:mm a"))
    }
    return arr
  }, [date])

  async function book() {
    if (!slot) return
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: format(date, "yyyy-MM-dd"), slot }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Call booked!", description: `${format(date, "eee, dd MMM")} at ${slot}` })
      setOpen(false)
      setSlot("")
    } catch (e) {
      toast({ title: "Could not book. Please try again." })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger ?? <Button>Book a Counselor</Button>}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Book a Counselor</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 md:grid-cols-[300px_1fr]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => d && setDate(d)}
            disabled={(d) => d < addDays(new Date(), 0)}
          />
          <div className="grid gap-3">
            <p className="text-sm text-muted-foreground">Select a slot for {format(date, "eeee, dd MMM")}</p>
            <div className="grid grid-cols-2 gap-2">
              {slots.map((s) => (
                <button
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`rounded-md border px-3 py-2 text-sm ${slot === s ? "bg-primary text-primary-foreground" : ""}`}
                  aria-pressed={slot === s}
                >
                  {s}
                </button>
              ))}
            </div>
            <Button onClick={book} disabled={!slot} className="mt-2 w-full bg-primary text-primary-foreground">
              Confirm Slot
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
