import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "VAT Management Services in Thailand | PND50",
  description:
    "Streamline your VAT registration, filing, and compliance in Thailand with PND50's expert VAT management services. Ensure accuracy and avoid penalties.",
}

const VatManagementPage = () => {
  return (
    <>
      <Section className="bg-slate-50 pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Effortless VAT Management in Thailand
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Navigate Thailand's VAT system with confidence. Our tech-enabled services simplify everything from
                registration to monthly filings, ensuring you remain compliant and penalty-free.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a VAT Health Check <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="VAT Management Process"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Comprehensive VAT Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We handle every aspect of VAT management, so you can focus on your core business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  VAT Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We manage the entire VAT registration process (Por Por 01) with the Thai Revenue Department, ensuring
                  all documentation is correct and submitted on time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  Monthly VAT Filing (PP30)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accurate and timely preparation and submission of your monthly VAT returns (PP30), including complex
                  calculations for input and output VAT.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  VAT Refund Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert assistance in claiming VAT refunds, including liaising with Revenue Department officers and
                  preparing all necessary supporting documents.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  Compliance & Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ongoing advice on VAT regulations, including zero-rated and exempt supplies, to ensure your business
                  remains fully compliant with Thai law.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  E-Tax Invoice Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guidance and support for implementing and managing Thailand's e-Tax Invoice and e-Receipt system for
                  seamless digital transactions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7 text-green-500" />
                  Cross-Border Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized advice on VAT implications for import/export activities and services provided to or from
                  overseas entities.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Simplify Your VAT?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Let our experts handle the complexities of VAT compliance. Schedule a free consultation to discuss your
            specific needs and learn how we can help.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-4 text-lg font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            Schedule Free Consultation
          </Button>
        </Container>
      </Section>
    </>
  )
}

export default VatManagementPage
