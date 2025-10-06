import { BookingModal } from "@/components/lead/booking-modal"
import { LeadModal } from "@/components/lead/lead-modal"

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-3 text-3xl font-semibold">Book a Counselor</h1>
      <p className="mb-6 text-muted-foreground">Choose a date and time or submit your details for a quick call-back.</p>
      <div className="flex flex-col gap-4">
        <BookingModal />
        <LeadModal />
      </div>
    </div>
  )
}
