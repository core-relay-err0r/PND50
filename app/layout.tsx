import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ModalProvider } from "@/contexts/modal-context"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "PND50 | Premier Tax & Accounting Services in Thailand",
  description:
    "Expert tax and accounting services for foreign-owned companies in Thailand. PND50 offers comprehensive solutions for tax planning, compliance, and business consulting.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PND50 | Premier Tax & Accounting Services in Thailand",
    description: "Accounting, tax strategy, and business compliance tailored for expat-led companies in Thailand.",
    url: "https://pnd50.com",
    siteName: "PND50",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PND50: Accounting for Expats in Thailand - Logo and tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PND50 | Premier Tax & Accounting Services in Thailand",
    description: "Accounting, tax strategy, and business compliance tailored for expat-led companies in Thailand.",
    images: ["/og-image.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ModalProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  )
}
