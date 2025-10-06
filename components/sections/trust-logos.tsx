import Image from "next/image"

export function TrustLogos() {
  return (
    <section aria-label="Trust" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by learners and partner universities</p>
        <div className="grid grid-cols-2 items-center gap-6 opacity-80 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image src="/placeholder-logo.png" alt="Partner logo" width={96} height={32} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
