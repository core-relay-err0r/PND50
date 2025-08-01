"use server"

import { z } from "zod"
import { Resend } from "resend"
import NewConsultationEmail from "@/components/emails/NewConsultationEmail"
import ConfirmationEmail from "@/components/emails/ConfirmationEmail"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const scheduleSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
})

export type FormState = {
  message: string
  status: "success" | "error"
  errors?: Record<string, string[]>
}

export async function scheduleConsultation(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!resend) {
    console.error("Resend is not configured. RESEND_API_KEY is missing.")
    return {
      message: "Email service is not configured correctly. Please contact support.",
      status: "error",
    }
  }

  const validatedFields = scheduleSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  })

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone } = validatedFields.data

  try {
    // NOTE: In Resend's sandbox mode, you can only send emails TO your verified email address.
    // The 'from' address must be 'onboarding@resend.dev' until you verify a domain.
    const teamEmail = "info@pnd50.com" // <-- IMPORTANT: Replace with your actual team email address

    // Send notification email to your team
    await resend.emails.send({
      from: "PND50 Website <info@pnd50.com>",
      to: teamEmail,
      subject: "New Consultation Request",
      react: NewConsultationEmail({ name, email, phone }),
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "PND50 <info@pnd50.com>",
      to: email,
      subject: "Consultation Request Received",
      react: ConfirmationEmail({ name }),
    })

    return {
      message: "Thank you! Your consultation has been scheduled successfully.",
      status: "success",
    }
  } catch (e) {
    console.error(e)
    // Handle specific Resend sandbox error
    if (e instanceof Error && e.message.includes("you can only send email to your own email address")) {
      return {
        message:
          "Email service is in sandbox mode. Emails can only be sent to the verified address used for your Resend account.",
        status: "error",
      }
    }
    return {
      message: "An unexpected error occurred while sending the email. Please try again.",
      status: "error",
    }
  }
}
