export type Review = {
  id: string
  name: string
  role?: string
  rating: number // 1-5
  text: string
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Aarav S.",
    role: "Online MBA admit",
    rating: 5,
    text: "Clear comparison helped me choose the right online MBA within my budget.",
  },
  {
    id: "r2",
    name: "Neha K.",
    role: "BBA (Online)",
    rating: 5,
    text: "Counselor call answered all approval and placement questions quickly.",
  },
  {
    id: "r3",
    name: "Vikram R.",
    role: "Executive PGP",
    rating: 4,
    text: "Weekend program fit my schedule. EMI guidance was useful.",
  },
  {
    id: "r4",
    name: "Sanya D.",
    role: "M.Com (Distance)",
    rating: 5,
    text: "Smooth admission with transparent fees and intake timelines.",
  },
  {
    id: "r5",
    name: "Rahul P.",
    role: "Working professional",
    rating: 5,
    text: "AI Finder gave me a shortlist that matched my goals.",
  },
  {
    id: "r6",
    name: "Priya G.",
    role: "Career switch",
    rating: 4,
    text: "Great counselor experience and honest guidance.",
  },
]
