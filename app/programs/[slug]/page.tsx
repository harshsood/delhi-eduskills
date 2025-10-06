import { PROGRAMS } from "@/lib/programs"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead/lead-modal"

type Props = { params: { slug: string } }

export default function ProgramDetailPage({ params }: Props) {
  const program = PROGRAMS.find((p) => p.slug === params.slug)
  if (!program) return notFound()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6">
        <p className="text-sm text-primary">{program.university}</p>
        <h1 className="text-3xl font-semibold">{program.title}</h1>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badge variant="secondary" className="capitalize">
            {program.mode}
          </Badge>
          {program.approvals.map((a) => (
            <Badge key={a} variant="outline">
              {a}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-semibold">Highlights</h2>
            <ul className="list-disc pl-6 text-sm">
              {program.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-semibold">Overview</h2>
            <p className="text-sm text-muted-foreground">
              Duration: {program.durationMonths} months · Fees: ₹{program.feesTotal.toLocaleString("en-IN")} · Intakes:{" "}
              {program.intakes.join(", ")}
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-semibold">Curriculum Outline</h2>
            <p className="text-sm text-muted-foreground">Placeholder curriculum overview.</p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Next steps</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Download brochure, talk to a counselor, or add to compare.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <LeadModal />
              <Button variant="secondary" asChild>
                <a href="/compare">Add to compare</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/finder">Try AI Finder</a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Approvals</h3>
            <ul className="mt-1 text-sm">
              {program.approvals.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
