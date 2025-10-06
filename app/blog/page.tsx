import Link from "next/link"
import { POSTS } from "@/lib/blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-semibold">Guides & Insights</h1>
      <p className="mb-6 text-muted-foreground">
        Actionable advice for choosing online, distance, and executive programs.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {POSTS.map((p) => (
          <Card key={p.slug}>
            <CardHeader>
              <CardTitle className="text-pretty">{p.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              <Link className="text-sm underline" href={`/blog/${p.slug}`}>
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
