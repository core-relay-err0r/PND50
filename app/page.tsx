import { Bot, FileText, Search, ShieldCheck, UserCheck, type LightbulbIcon as LucideProps } from "lucide-react"
import type React from "react"
import { SeoTopicsGrid } from "@/components/seo-topics-grid"
import { NewPricingSection } from "@/components/new-pricing-section"
import { FullscreenHero } from "@/components/fullscreen-hero"
import { UseCasesStrip } from "@/components/use-cases-strip"

const howItWorks: {
  Icon: React.ComponentType<LucideProps>
  title: string
  description: string
}[] = [
  {
    Icon: FileText,
    title: "Upload & Retain",
    description: "Submit your case documents and pay the initial retainer securely.",
  },
  {
    Icon: Bot,
    title: "AI Deep-Scan",
    description: "Our system scans global registries, sanctions lists, and digital footprints.",
  },
  {
    Icon: UserCheck,
    title: "Human Analyst Validation",
    description: "Ex-intelligence operators verify AI findings and add context.",
  },
  {
    Icon: ShieldCheck,
    title: "Receive Your Brief",
    description: "Get a PDF report and actionable playbook in ≤ 5 business days.",
  },
]

const trustBadges = [{ name: "OSINT Framework" }, { name: "Stripe Partner" }, { name: "GDPR Compliant" }]

export default function Home() {
  return (
    <div className="flex flex-col">
      <FullscreenHero />
      <UseCasesStrip />

      {/* How It Works Section */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Four-Step Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">From submission to actionable intelligence.</p>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
            <div className="space-y-12 md:space-y-0">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center md:flex-row md:items-start">
                  <div className="flex w-full items-center md:w-1/2 md:pr-8 md:justify-end">
                    {index % 2 === 0 ? (
                      <div className="w-full rounded-lg border border-border bg-background p-6 text-right">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full p-6">&nbsp;</div>
                    )}
                  </div>
                  <div className="absolute left-1/2 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <step.Icon />
                  </div>
                  <div className="flex w-full items-center md:w-1/2 md:pl-8">
                    {index % 2 !== 0 ? (
                      <div className="w-full rounded-lg border border-border bg-background p-6 text-left">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full p-6">&nbsp;</div>
                    )}
                  </div>
                  {index % 2 === 0 && (
                    <div className="block md:hidden w-full rounded-lg border border-border bg-background p-6 text-left mt-4">
                      <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SeoTopicsGrid />

      {/* Trust Badges Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <div key={badge.name} className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold text-muted-foreground">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewPricingSection />
    </div>
  )
}
