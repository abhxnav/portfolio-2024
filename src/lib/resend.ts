import { env } from '@/env'
import { IApiResponse, ISendVerificationCodeParams } from '@/types'
import { Resend } from 'resend'
import VerificationEmail from '../../emails/VerificationEmail'

const {
  resend: { apiKey },
} = env

const resend = new Resend(apiKey)

export const sendVerificationCode = async ({
  email,
  code,
}: ISendVerificationCodeParams): Promise<IApiResponse> => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Verification Code',
      react: VerificationEmail({ username: email, otp: code }),
    })
    return { success: true, message: 'Verification code sent successfully' }
  } catch (error) {
    console.error('Error sending verification code: ', error)
    return { success: false, message: 'Failed to send verification code' }
  }
}
