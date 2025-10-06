import { PROGRAMS } from "@/lib/programs"

const universities = Array.from(new Map(PROGRAMS.map((p) => [p.university, p])).values()).map((p) => p.university)

export default function AdminContentPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Content Overview</h1>
      <p className="text-muted-foreground">Read-only summary for demo.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Programs</p>
          <p className="text-3xl font-semibold">{PROGRAMS.length}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Universities</p>
          <p className="text-3xl font-semibold">{universities.length}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Blog Posts</p>
          <p className="text-3xl font-semibold">Demo</p>
        </div>
      </div>
    </div>
  )
}
