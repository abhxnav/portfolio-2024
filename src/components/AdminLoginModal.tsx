'use client'

import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components/ui'
import { VerifyCode } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { adminEmail as adminEmailConstant } from '@/constants'
import axios from 'axios'

const emailSchema = z.string().email('Invalid email address')
const codeSchema = z
  .string()
  .length(6, { message: 'Code must be 6 digits long' })

const AdminLoginModal = ({
  type = 'desktop',
}: {
  type?: 'desktop' | 'mobile'
}) => {
  const [step, setStep] = useState<'send' | 'verify'>('send')
  const [adminEmail, setAdminEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')

  const sendOtp = async () => {
    try {
      emailSchema.parse(adminEmail)
      setError('')

      if (adminEmail === adminEmailConstant) {
        const res = await axios.post('/api/auth/send-otp')
        if (res.status === 200) {
          setStep('verify')
        } else {
          setError(res.data.message)
        }
      } else {
        setError('Invalid admin email')
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]?.message || 'Invalid input')
      } else {
        setError('Failed to send the verification code. Please try again.')
        console.error('Failed to send the verification code: ', error)
      }
    }
  }

  const verifyOtp = async () => {
    try {
      codeSchema.parse(otp)
      setError('')

      const res = await axios.post('/api/auth/verify-otp', { otp })
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token)
        window.open('/admin', '_blank')
      } else {
        setError(res.data.message)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]?.message || 'Invalid input')
      } else {
        setError('Failed to verify the code. Please try again.')
        console.error('Error verifying otp: ', error)
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href="#" className="flex items-center justify-center">
          {type === 'desktop' ? (
            <Image
              src="/assets/icons/login.svg"
              alt="login"
              width={22}
              height={22}
            />
          ) : (
            <span className="text-lg hover:text-white">Admin Login</span>
          )}
        </Link>
      </DialogTrigger>
      <DialogContent className="bg-dark-700 outline-none border-2 border-dark-500">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Admin Login
          </DialogTitle>
          {step === 'send' ? (
            <DialogDescription>
              <div className="flex flex-col gap-2 py-5">
                <Label htmlFor="email" className="text-sm text-dark-300">
                  Admin email address
                </Label>
                <Input
                  id="email"
                  placeholder="Enter admin email"
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="bg-dark-600 border border-dark-500 text-dark-200 placeholder:text-dark-300 !text-base !p-5"
                />
                {error && <p className="text-red-500">{error}</p>}

                <Button variant="default" className="mt-2" onClick={sendOtp}>
                  Send Verification Code
                </Button>
              </div>
            </DialogDescription>
          ) : (
            <DialogDescription>
              <div className="flex flex-col gap-2 py-5">
                <div className="py-5">
                  <VerifyCode otp={otp} setOtp={setOtp} />
                  {error && (
                    <p className="text-red-500 mt-2 text-center">{error}</p>
                  )}
                </div>

                <Button variant="default" onClick={verifyOtp}>
                  Verify
                </Button>
              </div>
            </DialogDescription>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AdminLoginModal
