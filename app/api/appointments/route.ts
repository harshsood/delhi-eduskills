import { addAppointment, getAppointments } from "@/lib/store"

export async function GET() {
  return Response.json({ items: getAppointments() })
}

export async function POST(req: Request) {
  const body = await req.json()
  const item = addAppointment({ date: body.date, slot: body.slot })
  return Response.json({ ok: true, id: item.id })
}
