import { adminEmail } from '@/constants'
import dbConnect from '@/lib/dbConnect'
import { sendVerificationCode } from '@/lib/resend'
import OTPModel from '@/models/otp.model'

export const POST = async (req: Request) => {
  await dbConnect()

  const email = adminEmail
  const code = Math.floor(100000 + Math.random() * 900000).toString()

  try {
    await OTPModel.updateOne(
      { email },
      { code, createdAt: new Date() },
      { upsert: true }
    )

    const response = await sendVerificationCode({ email, code })
    if (!response.success) throw new Error(response.message)

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Verification code sent successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error sending verification code: ', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send verification code',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
