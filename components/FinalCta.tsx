"use client"
import { Button } from "@/components/ui/button"
import { useModal } from "@/contexts/modal-context"
import { PlayCircle } from "lucide-react"

export function FinalCta() {
  const { openModal, openHowItWorks } = useModal()
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        onClick={openModal}
        size="lg"
        className="bg-white text-blue-600 hover:bg-gray-200 px-10 py-4 text-xl font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
      >
        Schedule Free Consultation
      </Button>
      <Button onClick={openHowItWorks} variant="link" className="text-blue-100 hover:text-white text-lg">
        <PlayCircle className="mr-2 h-5 w-5" />
        See How It Works
      </Button>
    </div>
  )
}
