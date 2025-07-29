import type { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Business Consulting - Acumen",
  description: "Acumen Business Consulting Services",
}

const ServicePage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Business Consulting</h1>
        <p className="text-gray-600">Empowering your business with strategic insights and innovative solutions.</p>
        <Button className="mt-6">Get a Free Consultation</Button>
      </section>

      {/* Services Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
          <p className="text-gray-700">
            We offer a comprehensive suite of business consulting services tailored to meet your unique needs. From
            strategic planning to operational efficiency, we're here to help you achieve sustainable growth.
          </p>
        </div>
        <div>
          <Image
            src="/images/business-consulting.jpg"
            alt="Business Consulting"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Key Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
            <p className="text-gray-700">
              Develop a clear roadmap for your business success with our strategic planning services.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
            <p className="text-gray-700">
              Streamline your operations and improve efficiency with our expert consulting.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Financial Advisory</h3>
            <p className="text-gray-700">Make informed financial decisions with our comprehensive advisory services.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is business consulting?</AccordionTrigger>
            <AccordionContent>
              Business consulting involves providing expert advice and guidance to organizations to help them improve
              their performance and efficiency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can business consulting benefit my company?</AccordionTrigger>
            <AccordionContent>
              Business consulting can help your company identify areas for improvement, develop strategies for growth,
              and implement solutions to increase profitability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What types of businesses do you work with?</AccordionTrigger>
            <AccordionContent>
              We work with businesses of all sizes and across various industries, tailoring our services to meet their
              specific needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

export default ServicePage
