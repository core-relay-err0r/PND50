import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HandCoins, Calculator, FileText, Globe, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Withholding Tax Services in Thailand | PND50",
  description:
    "Expert management of withholding tax (WHT) in Thailand. PND50 handles calculations, filing (PND 1, 3, 53), and compliance for your business.",
}

const WithholdingTaxPage = () => {
  return (
    <>
      <Section className="bg-slate-50 pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Mastering Withholding Tax in Thailand
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Withholding Tax is a critical component of Thai tax compliance. Our services ensure accurate
                calculations, timely filings, and complete peace of mind, protecting you from costly penalties.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Simplify Your WHT <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Withholding Tax concept illustration"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Withholding Tax Services</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We cover all aspects of WHT to ensure your business is fully compliant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-fit">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Accurate Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precise calculation of WHT for various payment types, including services, rent, dividends, and more,
                  based on the latest regulations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-fit">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Timely Filing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Preparation and e-filing of all relevant WHT forms, including P.N.D. 3, 53, and 54, ensuring you meet
                  every deadline.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-fit">
                  <HandCoins className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Certificate Issuance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generation and issuance of official Withholding Tax certificates to your vendors and service providers
                  as required by law.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-fit">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Cross-Border Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert advisory on WHT for international transactions (P.N.D. 54), leveraging Double Taxation
                  Agreements to optimize your tax position.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Eliminate Withholding Tax Headaches</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Focus on your business while we handle the complexities of tax compliance. Contact us for a free assessment
            of your WHT obligations.
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

export default WithholdingTaxPage
