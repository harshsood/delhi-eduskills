import { HeroSection } from "@/components/sections/hero"
import { TrustLogos } from "@/components/sections/trust-logos"
import { FinderTeaser } from "@/components/sections/finder-teaser"
import { ProgramDiscoveryTeaser } from "@/components/sections/program-discovery-teaser"
import { ComparisonTeaser } from "@/components/sections/comparison-teaser"
import { FAQSection } from "@/components/sections/faqs"
import { StickyCta } from "@/components/sticky-cta"
import { QuickContact } from "@/components/quick-contact"
import { ReviewsSection } from "@/components/sections/reviews"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProgramDiscoveryTeaser />
      <ComparisonTeaser />
      <FinderTeaser />
      <TrustLogos />
      <ReviewsSection />
      <FAQSection />
      <StickyCta />
      <QuickContact />
    </>
  )
}
