export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  content: string[]
  tags?: string[]
}

export const POSTS: BlogPost[] = [
  {
    slug: "ugc-aicte-approvals-explained",
    title: "UGC, AICTE, NAAC: Approvals Explained for Online & Distance Programs",
    excerpt: "Understand the key Indian approvals that matter when choosing online or distance degrees.",
    date: "2025-09-01",
    content: [
      "Approvals ensure academic validity and recognition. This article provides a practical overview.",
      "UGC and AICTE cover different scopes; NAAC rates institutional quality. Always verify on official sites.",
    ],
    tags: ["Approvals", "Guides"],
  },
  {
    slug: "how-to-compare-online-mba-programs",
    title: "How to Compare Online MBA Programs",
    excerpt: "Fees, duration, approvals, delivery, and outcomes—the five pillars of a smart comparison.",
    date: "2025-09-10",
    content: [
      "Start with your constraints: budget, time, and mode.",
      "Then evaluate approvals, pedagogy, and career services. Use our comparison tool to shortlist.",
    ],
    tags: ["MBA", "Comparison"],
  },
]
