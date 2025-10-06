"use client"

export function QuickContact() {
  return (
    <div className="fixed bottom-20 right-4 z-40 hidden flex-col gap-2 md:flex" aria-label="Quick contact">
      <a
        className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow"
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a className="rounded-full border bg-background px-4 py-2 text-sm font-medium shadow" href="tel:+919999999999">
        Call Us
      </a>
    </div>
  )
}
