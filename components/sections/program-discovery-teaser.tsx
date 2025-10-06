import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProgramDiscoveryTeaser() {
  return (
    <section id="programs" className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Discover Programs</h2>
          <a href="/programs" className="text-sm underline">
            View all
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Online MBA", "BBA (Online)", "Executive PG (Tech)"].map((title) => (
            <Card key={title} className="hover:shadow-sm">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Explore fees, duration, approvals, intakes, and EMI options. Placeholder content.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
