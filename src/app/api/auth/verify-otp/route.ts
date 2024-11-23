import { adminEmail } from '@/constants'
import dbConnect from '@/lib/dbConnect'
import OTPModel from '@/models/otp.model'
import jwt from 'jsonwebtoken'
import { env } from '@/env'

const { jwtSecret } = env

export async function POST(req: Request) {
  await dbConnect()

  try {
    const { otp } = await req.json()
    const email = adminEmail

    const otpEntry = await OTPModel.findOne({ email, code: otp })
    if (
      !otpEntry ||
      new Date(otpEntry.expiry).getTime() < new Date().getTime()
    ) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid code' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1d' })

    await OTPModel.deleteMany({ email })

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Verification successful!',
        token,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error verifying OTP:', error)
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Verification code invalid or expired.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
