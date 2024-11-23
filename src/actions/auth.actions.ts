'use server'

import { env } from '@/env'
import axios from 'axios'
import { cookies } from 'next/headers'

const { baseUrl } = env

export const sendOtp = async () => {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/send-otp`)
    return res?.data
  } catch (error) {
    console.error('Error sending otp: ', error)
  }
}

export const verifyOtp = async (code: string) => {
  try {
    const res = await axios.post(`${baseUrl}/api/auth/verify-otp`, {
      otp: code,
    })

    if (res.status === 200) {
      cookies().set('token', res.data.token)
    }

    return res?.data
  } catch (error) {
    console.error('Error verifying otp: ', error)
  }
}
