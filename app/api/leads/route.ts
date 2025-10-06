import { addLead, getLeads } from "@/lib/store"

export async function GET() {
  return Response.json({ items: getLeads() })
}

export async function POST(req: Request) {
  const body = await req.json()
  const item = addLead({
    name: body.name,
    phone: body.phone,
    email: body.email,
    interest: body.interest,
    source: body.source,
    utm: body.utm,
  })
  return Response.json({ ok: true, id: item.id })
}
