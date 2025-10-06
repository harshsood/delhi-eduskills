import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FinderTeaser() {
  return (
    <section id="finder" className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">AI Program Finder</h2>
            <p className="text-muted-foreground">
              Answer a few questions to get tailored program matches with explanations. Placeholder flow.
            </p>
            <Button asChild>
              <a href="/finder">Try the Finder</a>
            </Button>
          </div>
          <Card>
            <CardContent className="p-6 text-sm text-muted-foreground">
              Coming soon: a short questionnaire to rank programs by fit, career goals, and budget.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
