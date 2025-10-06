export type Lead = {
  id: string
  name?: string
  phone?: string
  email?: string
  interest?: string
  source?: string
  utm?: Record<string, string>
  createdAt: number
}

export type Appointment = {
  id: string
  date: string
  slot: string
  createdAt: number
}

const db = {
  leads: [] as Lead[],
  appointments: [] as Appointment[],
}

export function addLead(lead: Omit<Lead, "id" | "createdAt">) {
  const item: Lead = { id: crypto.randomUUID(), createdAt: Date.now(), ...lead }
  db.leads.unshift(item)
  return item
}
export function getLeads() {
  return db.leads
}

export function addAppointment(appt: Omit<Appointment, "id" | "createdAt">) {
  const item: Appointment = { id: crypto.randomUUID(), createdAt: Date.now(), ...appt }
  db.appointments.unshift(item)
  return item
}
export function getAppointments() {
  return db.appointments
}
