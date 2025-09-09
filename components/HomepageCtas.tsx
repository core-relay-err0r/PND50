"use client"

import { Button } from "@/components/ui/button"
import { useModal } from "@/contexts/modal-context"
import { ArrowRight, PlayCircle } from "lucide-react"

export function HomepageCtas() {
  const { openModal, openHowItWorks } = useModal()

  return (
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
        onClick={openHowItWorks}
        size="lg"
        variant="outline"
        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-bold rounded-lg transition-colors bg-transparent"
      >
        <PlayCircle className="mr-2 h-5 w-5" />
        See How It Works
      </Button>
    </div>
  )
}
