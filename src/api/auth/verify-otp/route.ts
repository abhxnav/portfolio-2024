import { adminEmail } from '@/constants'
import dbConnect from '@/lib/dbConnect'
import OTPModel from '@/models/otp.model'
import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { env } from '@/env'

const { jwtSecret } = env

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return

  await dbConnect()

  const { otp } = req.body

  try {
    const email = adminEmail
    const otpEntry = await OTPModel.findOne({ email, code: otp })

    if (!otpEntry) {
      return res.status(401).json({ success: false, message: 'Invalid OTP' })
    }

    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1d' })

    await OTPModel.deleteMany({ email })

    return res
      .status(200)
      .json({ success: true, message: 'OTP verified successfully', token })
  } catch (error) {
    console.error('Error verifying OTP: ', error)
    return res
      .status(500)
      .json({ success: false, message: 'Failed to verify OTP' })
  }
}

export default handler
