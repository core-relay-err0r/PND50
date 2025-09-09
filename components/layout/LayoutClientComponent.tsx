"use client"

import { useModal } from "@/contexts/modal-context"
import ConsultationModal from "@/components/ConsultationModal"
import HowItWorksModal from "@/components/HowItWorksModal"

export default function LayoutClientComponent() {
  const { isModalOpen, closeModal, isHowItWorksOpen, closeHowItWorks } = useModal()

  return (
    <>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      <HowItWorksModal isOpen={isHowItWorksOpen} onClose={closeHowItWorks} />
    </>
  )
}
