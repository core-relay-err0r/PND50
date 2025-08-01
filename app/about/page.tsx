import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BrainCircuit, Users, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About PND50 | Our Mission & Expertise in Thai Accounting",
  description:
    "Learn about PND50, a Burakorn Partners company. We're dedicated to revolutionizing accounting for foreign-owned businesses in Thailand with technology and expert guidance.",
}

const AboutPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Bridging Ambition and Compliance with Technology
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                PND50 was born from a simple observation: foreign entrepreneurs in Thailand possess incredible drive and
                innovation, but are often hindered by complex, traditional accounting practices. We were founded to
                change that. As a proud part of the{" "}
                <a
                  href="https://burakornpartners.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Burakorn Partners
                </a>{" "}
                family, we combine decades of legal and financial expertise with a forward-thinking, tech-first
                approach.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="A modern office environment showing collaboration and technology"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We believe that financial management should be an accelerator for your business, not a bottleneck. Our
              philosophy is built on three core pillars.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <BrainCircuit className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation-Led</h3>
                <p className="text-gray-600">
                  We leverage AI and automation to deliver faster, more accurate, and more insightful financial
                  services, giving you a competitive edge.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert-Driven</h3>
                <p className="text-gray-600">
                  Our technology is backed by a team of seasoned accountants and tax advisors who specialize in the
                  nuances of Thai law for foreign businesses.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                <p className="text-gray-600">
                  We are more than service providers; we are your strategic partners. Your success is the ultimate
                  measure of our own.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Our team combines deep industry knowledge with a passion for innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photo of Jane Doe"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h4 className="text-xl font-bold">Jane Doe</h4>
              <p className="text-blue-600">Managing Partner</p>
              <p className="text-gray-600 mt-2 text-sm">
                A certified public accountant with over 15 years of experience helping foreign enterprises thrive in the
                Thai market.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photo of John Smith"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h4 className="text-xl font-bold">John Smith</h4>
              <p className="text-blue-600">Head of Technology</p>
              <p className="text-gray-600 mt-2 text-sm">
                The architect of our proprietary platform, John brings a wealth of experience from the fintech sector to
                revolutionize accounting.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photo of Emily White"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h4 className="text-xl font-bold">Emily White</h4>
              <p className="text-blue-600">Director of Client Relations</p>
              <p className="text-gray-600 mt-2 text-sm">
                Emily ensures every client receives personalized, strategic advice and seamless service, acting as a
                true partner in their growth journey.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join the Future of Accounting</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Ready to transform your financial operations? Let's discuss how PND50 can empower your business in Thailand.
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

export default AboutPage
