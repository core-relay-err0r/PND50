import type { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tax Planning - Agile Solutions",
  description: "Strategic tax planning services to optimize your financial position and minimize tax liabilities.",
}

const ServicePage = () => {
  return (
    <>
      <Section className="py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tax Planning</h1>
            <p className="text-gray-600">
              Strategic tax planning services to optimize your financial position and minimize tax liabilities.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Tax Planning Services</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tax strategy development</li>
                <li>Tax minimization strategies</li>
                <li>Compliance and reporting</li>
                <li>Estate and gift tax planning</li>
                <li>Business tax planning</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits of Tax Planning</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Reduced tax liabilities</li>
                <li>Improved cash flow</li>
                <li>Financial security</li>
                <li>Peace of mind</li>
                <li>Long-term financial growth</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Get Started with Tax Planning</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to schedule a consultation and learn how we can help you optimize your tax strategy.
            </p>
            <Button variant="secondary" size="lg">
              Contact Us <ArrowRight className="ml-2" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ServicePage
