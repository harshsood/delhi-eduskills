import { REVIEWS } from "@/lib/reviews"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-semibold">Reviews</h1>
      <p className="mb-6 text-muted-foreground">Real experiences from learners. Copy is placeholder.</p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <Card key={r.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{r.name}</CardTitle>
              {r.role && <p className="text-xs text-muted-foreground">{r.role}</p>}
            </CardHeader>
            <CardContent className="space-y-2">
              <span className="text-sm text-amber-600">{"★".repeat(r.rating)}</span>
              <p className="text-sm text-muted-foreground">{r.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
