import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Corporate Tax Planning - Ascendancy Tax Solutions",
  description: "Strategic corporate tax planning to optimize your business finances and minimize tax liabilities.",
}

const CorporateTaxPlanningPage = () => {
  return (
    <>
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Strategic Corporate Tax Planning</h1>
              <p className="text-gray-600 mb-6">
                Navigate the complexities of corporate tax with our expert planning services. We help you optimize your
                business finances, minimize tax liabilities, and ensure compliance.
              </p>
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
            <Image
              src="/images/corporate-tax-planning.jpg"
              alt="Corporate Tax Planning"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-100 py-12">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-8">Our Corporate Tax Planning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Tax Optimization</h3>
              <p className="text-gray-600">
                We identify opportunities to minimize your tax burden through strategic planning and compliance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Compliance Assurance</h3>
              <p className="text-gray-600">
                Ensure full compliance with all federal, state, and local tax regulations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Financial Forecasting</h3>
              <p className="text-gray-600">
                Develop accurate financial forecasts to guide your tax planning strategies.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Optimize Your Corporate Taxes?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a consultation and discover how our corporate tax planning services can
              benefit your business.
            </p>
            <Button size="lg">
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default CorporateTaxPlanningPage
