import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Delhi Eduskills — Compare Online & Executive Programs",
  description: "Discover, compare, and get counseling for online, distance, and executive programs.",
  generator: "v0.app",
  alternates: { canonical: "https://delhieduskills.example.com" },
  openGraph: {
    title: "Delhi Eduskills",
    description: "Compare programs and talk to a counselor.",
    url: "https://delhieduskills.example.com",
    siteName: "Delhi Eduskills",
  },
  twitter: { card: "summary_large_image", title: "Delhi Eduskills", description: "Program discovery & counseling" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Delhi Eduskills",
              url: "https://delhieduskills.example.com",
              sameAs: ["https://www.linkedin.com", "https://twitter.com"],
            }),
          }}
        />
        {/* Optional GTM */}
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <>
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode?.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={null}>
            <SiteHeader />
            <main className="min-h-[70dvh]">{children}</main>
            <SiteFooter />
            <Toaster />
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
