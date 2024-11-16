import { IOTP } from '@/types'
import mongoose, { Schema } from 'mongoose'

const OTPSchema = new Schema<IOTP>({
  email: { type: String, required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
})

OTPSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 })

const OTPModel =
  (mongoose.models.OTP as mongoose.Model<IOTP>) ||
  mongoose.model<IOTP>('OTP', OTPSchema)

export default OTPModel
