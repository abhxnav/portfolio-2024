import { z } from 'zod'

export const otpSchema = z.object({
  email: z.string().email(),
  code: z.string(),
  createdAt: z.date(),
})
