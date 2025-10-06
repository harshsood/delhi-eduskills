import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Delhi Eduskills</h3>
          <p className="text-sm text-muted-foreground">
            Guidance for online, distance, and executive education. Copy is placeholder.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#programs">Programs</Link>
            </li>
            <li>
              <Link href="#compare">Compare</Link>
            </li>
            <li>
              <Link href="#finder">AI Finder</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Delhi Eduskills</p>
          <p className="mt-1">
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
