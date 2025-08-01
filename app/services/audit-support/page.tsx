import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShieldCheck, FileSearch, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tax Audit Support in Thailand | PND50",
  description:
    "Expert tax audit support and representation with the Thai Revenue Department. PND50 helps you prepare for, navigate, and resolve tax audits with confidence.",
}

const AuditSupportPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Navigate Tax Audits with Confidence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Facing a tax audit from the Thai Revenue Department can be stressful. Our expert team provides
                comprehensive support, from preparation to representation, ensuring a smooth and successful outcome.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Audit Support <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Team of experts providing audit support"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Audit Support Process</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We provide end-to-end support to protect your interests and minimize potential liabilities.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Phase 1: Pre-Audit Preparation & Risk Assessment
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Upon receiving an audit notice, we conduct a thorough review of your financial records, tax filings,
                  and supporting documents. Our team identifies potential risk areas and prepares a robust defense
                  strategy to address any discrepancies before the audit begins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  Phase 2: Representation & Negotiation
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  We act as your primary point of contact with the Revenue Department. Our experienced professionals
                  handle all communications, respond to inquiries, and represent your company during meetings with tax
                  officials, ensuring your rights are protected throughout the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Phase 3: Resolution & Post-Audit Follow-Up
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Our goal is to achieve the most favorable outcome. We negotiate with tax authorities on any proposed
                  adjustments and work to minimize penalties. After the audit is concluded, we provide guidance on
                  implementing any necessary changes to prevent future issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose PND50 for Audit Support?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Proactive Defense</h3>
              <p className="text-gray-600">
                We don't just react; we proactively identify and mitigate risks before they become major issues.
              </p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Representation</h3>
              <p className="text-gray-600">
                Our team has extensive experience dealing with the Thai Revenue Department and a proven track record of
                successful negotiations.
              </p>
            </div>
            <div className="p-6">
              <FileSearch className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Meticulous Preparation</h3>
              <p className="text-gray-600">
                We ensure all your documentation is in perfect order, leaving no room for error or ambiguity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Facing an Audit? Don't Go It Alone.</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Secure expert representation and peace of mind. Contact us immediately for a confidential consultation
            regarding your tax audit situation.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-4 text-lg font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            Get Confidential Support
          </Button>
        </Container>
      </Section>
    </>
  )
}

export default AuditSupportPage
