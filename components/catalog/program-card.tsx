import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import type { Program } from "@/lib/programs"

export function ProgramCard({ program }: { program: Program }) {
  const feesLakh = (program.feesTotal / 100000).toFixed(2)
  return (
    <Card className="h-full overflow-hidden">
      <div className="border-b">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`/placeholder.svg?height=240&width=400&query=program%20image`}
            alt={`${program.title} image`}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle className="text-pretty">{program.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{program.university}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="capitalize">
            {program.mode}
          </Badge>
          {program.emiAvailable && <Badge className="bg-accent text-accent-foreground">EMI</Badge>}
          {program.approvals.slice(0, 3).map((a) => (
            <Badge key={a} variant="outline">
              {a}
            </Badge>
          ))}
        </div>
        <p className="text-sm">Duration: {program.durationMonths} months</p>
        <p className="text-sm">Fees: ₹{feesLakh} Lakh (total)</p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {program.highlights.slice(0, 2).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" className="bg-primary text-primary-foreground">
            <Link href={`/programs/${program.slug}`}>View details</Link>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <a href="/compare">Add to compare</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
