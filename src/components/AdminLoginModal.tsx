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
import { Loader2 } from 'lucide-react'
import { sendOtp, verifyOtp } from '@/actions/auth.actions'

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
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSendOtp = async () => {
    setLoading(true)

    try {
      emailSchema.parse(adminEmail)
      setError('')

      if (adminEmail !== adminEmailConstant) {
        setError('Invalid admin email')
        return
      }

      const resData = await sendOtp()

      if (resData?.success) {
        setStep('verify')
      } else {
        setError(resData?.message)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]?.message || 'Invalid input')
      } else {
        setError('Failed to send the verification code. Please try again.')
        console.error('Failed to send the verification code: ', error)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setLoading(true)

    try {
      codeSchema.parse(otp)
      setError('')

      const resData = await verifyOtp(otp)
      if (resData?.success) {
        window.open('/admin', '_blank')
        setModalOpen(false)
      } else {
        setError(resData?.message)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0]?.message || 'Invalid input')
      } else {
        setError('Failed to verify the code. Please try again.')
        console.error('Error verifying otp: ', error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
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

                <Button
                  variant="default"
                  className="mt-2"
                  onClick={handleSendOtp}
                  disabled={loading}
                >
                  <div className="flex items-center justify-center gap-2">
                    {loading && <Loader2 className="animate-spin" />}
                    <span>Send Verification Code</span>
                  </div>
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

                <Button
                  variant="default"
                  onClick={handleVerifyOtp}
                  disabled={loading}
                >
                  <div className="flex items-center justify-center gap-2">
                    {loading && <Loader2 className="animate-spin" />}
                    <span>Login as Admin</span>
                  </div>
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
