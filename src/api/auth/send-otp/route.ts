import { adminEmail } from '@/constants'
import dbConnect from '@/lib/dbConnect'
import { sendVerificationCode } from '@/lib/resend'
import OTPModel from '@/models/otp.model'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return

  await dbConnect()

  const email = adminEmail
  const code = Math.floor(100000 + Math.random() * 900000).toString()

  try {
    await OTPModel.create({ email, code })

    const response = await sendVerificationCode({ email, code })
    if (!response.success) throw new Error(response.message)

    return res
      .status(200)
      .json({ success: true, message: 'Verification code sent successfully' })
  } catch (error) {
    console.error('Error sending verification code: ', error)
    return res
      .status(500)
      .json({ success: false, message: 'Failed to send verification code' })
  }
}

export default handler
