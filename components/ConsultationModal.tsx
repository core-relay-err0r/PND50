"use client"
import { useEffect } from "react"
import { useActionState } from "react"
import { scheduleConsultation, type FormState } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle2, AlertTriangle } from "lucide-react"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const initialState: FormState = {
  message: "",
  status: "error",
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [state, formAction, isPending] = useActionState(scheduleConsultation, initialState)

  useEffect(() => {
    if (state.status === "success") {
      const timer = setTimeout(() => {
        onClose()
      }, 2000) // Close modal after 2 seconds on success
      return () => clearTimeout(timer)
    }
  }, [state.status, onClose])

  const handleClose = () => {
    if (!isPending) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Schedule Consultation</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>

        {state.status === "success" ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Success!</h3>
            <p className="text-sm text-gray-600">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className={state.errors?.name ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className={state.errors?.email ? "border-red-500 focus:border-red-500" : ""}
              />
              {state.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
            </div>

            {state.status === "error" && state.message && !state.errors && (
              <div className="flex items-center gap-2 text-sm text-red-500 p-3 bg-red-50 rounded-md">
                <AlertTriangle className="h-4 w-4" />
                <span>{state.message}</span>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 bg-transparent"
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending} className="flex-1 bg-black hover:bg-gray-800 text-white">
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
