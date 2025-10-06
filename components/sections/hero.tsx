"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead/lead-modal"
import { BookingModal } from "@/components/lead/booking-modal"

export function HeroSection() {
  return (
    <section className="bg-card" aria-label="Hero">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="space-y-5">
          <p className="text-sm font-medium text-primary">Delhi Eduskills</p>
          <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
            Find the right online, distance, or executive program with trusted guidance
          </h1>
          <p className="text-muted-foreground">
            Compare programs, use our AI finder, and talk to a counselor. All copy is placeholder.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <LeadModal />
            <BookingModal trigger={<Button variant="outline">Book a Counselor</Button>} />
            <Button variant="secondary" asChild>
              <a href="/programs">Browse Programs</a>
            </Button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center sm:max-w-md">
            <div className="rounded-md border p-3">
              <p className="text-xl font-semibold">50+</p>
              <p className="text-xs text-muted-foreground">Universities</p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-xl font-semibold">150+</p>
              <p className="text-xs text-muted-foreground">Programs</p>
            </div>
            <div className="rounded-md border p-3">
              <p className="text-xl font-semibold">UGC/AICTE</p>
              <p className="text-xs text-muted-foreground">Approvals</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
          <Image
            src={"/placeholder.svg?height=600&width=800&query=education%20illustration"}
            alt="Students exploring programs"
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 768px) 50vw, 90vw"
          />
        </div>
      </div>
    </section>
  )
}
