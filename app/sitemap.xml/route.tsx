import { PROGRAMS } from "@/lib/programs"

export function GET() {
  const base = "https://delhieduskills.example.com"
  const staticUrls = [
    "/",
    "/programs",
    "/universities",
    "/compare",
    "/finder",
    "/calculators/emi",
    "/calculators/roi",
    "/reviews",
    "/blog",
    "/faq",
  ]
  const programUrls = PROGRAMS.map((p) => `/programs/${p.slug}`)
  const urls = [...staticUrls, ...programUrls]
    .map((u) => `<url><loc>${base}${u}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
    .join("")
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}
