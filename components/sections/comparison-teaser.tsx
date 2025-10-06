import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ComparisonTeaser() {
  return (
    <section id="compare" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 md:flex md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold">Compare Programs</h2>
          <a href="/compare" className="text-sm underline">
            Start comparison
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Fees", "Approvals", "Duration"].map((k) => (
            <Card key={k}>
              <CardHeader>
                <CardTitle>{k}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Side-by-side comparison up to 3 programs. Placeholder content.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
