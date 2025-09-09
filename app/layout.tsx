import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ModalProvider } from "@/contexts/modal-context"
import LayoutClientComponent from "@/components/layout/LayoutClientComponent"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PND50 | Tech-Driven Accounting in Thailand",
  description: "Future-Proof Your Finances with Technological Excellence in Accounting.",
  icons: {
    icon: "/fav-50.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <LayoutClientComponent />
        </ModalProvider>
      </body>
    </html>
  )
}
