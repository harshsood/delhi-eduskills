"use client"

import { LeadModal } from "@/components/lead/lead-modal"
import { Button } from "@/components/ui/button"

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-2xl items-center justify-center px-4 md:hidden">
      <LeadModal
        trigger={
          <Button className="h-12 w-full rounded-full bg-accent text-accent-foreground shadow-lg">Enquire Now</Button>
        }
      />
    </div>
  )
}
