export type ProgramMode = "online" | "distance" | "executive"

export type Program = {
  id: string
  slug: string
  title: string
  university: string
  mode: ProgramMode
  feesTotal: number // INR
  durationMonths: number
  approvals: string[] // e.g., ["UGC", "AICTE", "NAAC A+"]
  emiAvailable: boolean
  intakes: string[] // e.g., ["Jan", "Jul"]
  highlights: string[]
}

export const PROGRAMS: Program[] = [
  {
    id: "p1",
    slug: "online-mba-kavholm",
    title: "Online MBA",
    university: "Kavholm University",
    mode: "online",
    feesTotal: 165000,
    durationMonths: 24,
    approvals: ["UGC", "AICTE"],
    emiAvailable: true,
    intakes: ["Jan", "Jul"],
    highlights: ["Industry mentors", "Placement support", "NAAC A department"],
  },
  {
    id: "p2",
    slug: "bba-online-powdur",
    title: "BBA (Online)",
    university: "Powdur Institute",
    mode: "online",
    feesTotal: 96000,
    durationMonths: 36,
    approvals: ["UGC"],
    emiAvailable: true,
    intakes: ["Apr", "Oct"],
    highlights: ["Career services", "Live classes"],
  },
  {
    id: "p3",
    slug: "executive-pgp-tech-rocket",
    title: "Executive PGP (Tech Leadership)",
    university: "Rocket Rides School of Tech",
    mode: "executive",
    feesTotal: 245000,
    durationMonths: 12,
    approvals: ["AICTE"],
    emiAvailable: true,
    intakes: ["Mar", "Sep"],
    highlights: ["Weekend format", "Capstone project"],
  },
  {
    id: "p4",
    slug: "distance-mcom-kavholm",
    title: "M.Com (Distance)",
    university: "Kavholm University",
    mode: "distance",
    feesTotal: 60000,
    durationMonths: 24,
    approvals: ["UGC", "DEB"],
    emiAvailable: false,
    intakes: ["Jul"],
    highlights: ["Printed study material", "Exam centers across India"],
  },
]
