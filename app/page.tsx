"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  ArrowRight,
  PlayCircle,
  BrainCircuit,
  AreaChart,
  ShieldCheck,
  UserCheck,
  FileClock,
  Server,
  Lock,
  Bell,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useModal } from "@/contexts/modal-context"
import { AnimatedGridBackground } from "@/components/ui/animated-grid-background"
import { Progress } from "@/components/ui/progress"

export default function PND50Landing() {
  const { openModal } = useModal()

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "8 T-One Building, Sukhumvit Rd, Phra Khanong, Khlong Toei, Bangkok 10110",
  )}`
  const phoneUrl = "tel:+6621234567"
  const emailUrl = "mailto:info@pnd50.com"

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <main>
        {/* New High-Tech Hero Section */}
        <section className="relative w-full">
          <AnimatedGridBackground className="py-24 md:py-40">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 mb-4">
                Thailand’s #1 Tech-Driven Accounting Firm
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Future-Proof Your Finances with
                <br />
                <span className="text-blue-400">Technological</span> Excellence in{" "}
                <span className="text-blue-400">Accounting</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
                We merge cutting-edge technology with expert financial services to provide unparalleled precision,
                efficiency, and clarity for your business in Thailand.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-slate-300 mb-10 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-blue-400" />
                  <span>AI-Powered Processes</span>
                </div>
                <div className="flex items-center gap-2">
                  <AreaChart className="h-5 w-5 text-blue-400" />
                  <span>Instant Reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-400" />
                  <span>Real-Time Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-blue-400" />
                  <span>Expat Specialists</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 btn-pulse"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-bold rounded-lg transition-colors bg-transparent"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </div>
            </div>
          </AnimatedGridBackground>
        </section>

        {/* Redesigned Services Section */}
        <section id="services" className="py-20 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Next-Generation Financial Services</h2>
              <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
                We leverage technology to provide smarter, faster, and more reliable financial solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services/tax-planning" className="block group">
                <Card className="h-full p-1 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <CardContent className="h-full rounded-lg bg-white/80 backdrop-blur-lg p-8 text-center">
                    <div className="mb-6">
                      <TrendingUp className="h-12 w-12 text-blue-600 mx-auto animate-float" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Tax Planning</h3>
                    <p className="text-gray-600 mb-4">
                      Minimize your tax liability and optimize your financial structure with our expert guidance.
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      Leveraging predictive analytics to forecast and minimize tax liabilities.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/accounting" className="block group">
                <Card className="h-full p-1 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <CardContent className="h-full rounded-lg bg-white/80 backdrop-blur-lg p-8 text-center">
                    <div className="mb-6">
                      <ShieldCheck className="h-12 w-12 text-green-600 mx-auto animate-pulse-icon" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Accounting & Compliance</h3>
                    <p className="text-gray-600 mb-4">
                      Ensure full compliance with Thai regulations through our meticulous accounting services.
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      Our AI-driven platform ensures you're always audit-ready.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/business-consulting" className="block group">
                <Card className="h-full p-1 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <CardContent className="h-full rounded-lg bg-white/80 backdrop-blur-lg p-8 text-center">
                    <div className="mb-6">
                      <BrainCircuit className="h-12 w-12 text-purple-600 mx-auto animate-pulse-icon" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Consulting</h3>
                    <p className="text-gray-600 mb-4">
                      From company setup to strategic growth, we provide the insights you need to succeed.
                    </p>
                    <p className="text-sm font-semibold text-purple-600">
                      Data-backed strategies and 24-hour insight cycles for accelerated growth.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* "Why Clients Trust Us" Section */}
        <section id="security" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Security is Our Architecture</h2>
              <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
                We've built our platform from the ground up with enterprise-grade security and privacy by design, so you
                can focus on your business with peace of mind.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">End-to-End Encrypted Portal</h3>
                    <p className="text-gray-600 mt-1">
                      All data, documents, and communications are secured with AES-256 encryption, both in transit and
                      at rest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                    <FileClock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Real-Time Document Tracking</h3>
                    <p className="text-gray-600 mt-1">
                      Maintain a complete audit trail with live status updates and version history for every document
                      you share.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                    <Server className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ISO 27001-Ready Infrastructure</h3>
                    <p className="text-gray-600 mt-1">
                      Our systems are built on a framework compliant with the highest international standards for
                      information security management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                    <BrainCircuit className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Powered Anomaly Detection</h3>
                    <p className="text-gray-600 mt-1">
                      Our intelligent systems continuously monitor for unusual activity, proactively flagging potential
                      risks before they escalate.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                  >
                    See Security Details
                  </Button>
                </div>
              </div>
              <div className="p-2 rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200">
                <div className="rounded-xl bg-slate-900/90 backdrop-blur-lg p-6 shadow-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Lock className="h-6 w-6 text-blue-400 animate-scan-glow" />
                      <h4 className="text-lg font-bold text-white">Client Secure Portal</h4>
                    </div>
                    <Bell className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="space-y-5">
                    <div className="p-4 bg-slate-800/70 rounded-lg">
                      <p className="text-sm font-medium text-slate-300 mb-2">Document Status</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-slate-400 w-28">PND50 Filing</p>
                          <Progress value={100} className="w-full [&>*]:bg-green-500" />
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-slate-400 w-28">VAT Return</p>
                          <Progress value={75} className="w-full [&>*]:bg-blue-500" />
                          <p className="text-xs text-blue-400 font-mono">In Review</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-xs text-slate-400 w-28">Q3 Report</p>
                          <Progress value={20} className="w-full [&>*]:bg-yellow-500" />
                          <p className="text-xs text-yellow-400 font-mono">Pending</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/70 rounded-lg">
                      <p className="text-sm font-medium text-slate-300 mb-2">Anomaly Alerts</p>
                      <p className="text-sm text-slate-400">
                        <span className="font-bold text-green-400">All systems normal.</span> No unusual activity
                        detected in the last 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned CTA Section */}
        <section className="py-20 md:py-28 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Experience the Future of Accounting</h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              Unlock unparalleled efficiency and clarity. Our platform combines expert knowledge with powerful
              technology to deliver results you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-lg">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Tech-Driven Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Instant Reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Expat Specialists</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={openModal}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-200 px-10 py-4 text-xl font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
              <Button variant="link" className="text-blue-100 hover:text-white text-lg">
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
