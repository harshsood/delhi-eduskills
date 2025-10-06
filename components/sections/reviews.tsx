import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { REVIEWS } from "@/lib/reviews"

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-sm text-amber-600">
      {"★".repeat(n)} <span className="text-muted-foreground">{"★".repeat(5 - n)}</span>
    </span>
  )
}

export function ReviewsSection() {
  return (
    <section className="border-t" aria-label="Student reviews">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">What learners say</h2>
          <a href="/reviews" className="text-sm underline">
            See all
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {REVIEWS.slice(0, 6).map((r) => (
            <Card key={r.id} className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{r.name}</CardTitle>
                {r.role && <p className="text-xs text-muted-foreground">{r.role}</p>}
              </CardHeader>
              <CardContent className="space-y-2">
                <Stars n={r.rating} />
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
