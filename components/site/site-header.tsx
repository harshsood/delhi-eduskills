"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead/lead-modal"
import { LoginModal } from "@/components/auth/login-modal"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Delhi Eduskills Home">
          <Image src="/placeholder-logo.svg" width={28} height={28} alt="Delhi Eduskills logo" />
          <span className="font-semibold">Delhi Eduskills</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          <Link href="/programs" className="text-sm hover:underline">
            Programs
          </Link>
          <Link href="/universities" className="text-sm hover:underline">
            Universities
          </Link>
          <Link href="/compare" className="text-sm hover:underline">
            Compare
          </Link>
          <Link href="/finder" className="text-sm hover:underline">
            Finder
          </Link>
          <Link href="/calculators/emi" className="text-sm hover:underline">
            Calculators
          </Link>
          <Link href="/reviews" className="text-sm hover:underline">
            Reviews
          </Link>
          <Link href="/blog" className="text-sm hover:underline">
            Blog
          </Link>
          <Link href="/faq" className="text-sm hover:underline">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LoginModal />
          <LeadModal
            trigger={<Button className="bg-primary text-primary-foreground hover:opacity-90">Enquire Now</Button>}
          />
        </div>
      </div>
    </header>
  )
}
