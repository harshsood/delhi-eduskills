import Image from "next/image"
import { PROGRAMS } from "@/lib/programs"

const universities = Array.from(new Map(PROGRAMS.map((p) => [p.university, p])).values()).map((p) => p.university)

export default function UniversitiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Universities</h1>
      <p className="text-muted-foreground">Explore partner universities and their programs.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {universities.map((u) => (
          <div key={u} className="rounded-lg border p-4">
            <div className="mb-3 flex items-center gap-3">
              <Image src="/placeholder-logo.png" alt={`${u} logo`} width={64} height={24} />
              <p className="font-medium">{u}</p>
            </div>
            <p className="text-sm text-muted-foreground">Programs available on our platform.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
