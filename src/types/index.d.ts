import { navLinks } from '@/constants'
import { Document } from 'mongoose'

export type SectionName = (typeof navLinks)[number]['name']

declare interface IProject {
  id: string
  title: string
  description: string
  imgUrl: string
  tech: string[]
  links: {
    live: string
    code: string
  }
}

declare interface IWorkExp {
  id: string
  role: string
  company: string
  description: string[]
}

declare interface ISkill {
  skill: string
  iconUrl: string
}

declare interface ISocial {
  name: string
  url: string
  iconUrl: string
}

declare interface IData extends Document {
  name: string
  role: string
  aboutText: string
  projects: IProject[]
  workExp: IWorkExp[]
  skills: ISkill[]
  socials: ISocial[]
}

declare interface IOTP extends Document {
  email: string
  code: string
  createdAt: Date
}

declare interface IConnectionObject {
  isConnected?: number
}

declare interface IVerificationEmailProps {
  username: string
  otp: string
}

declare interface IApiResponse {
  success: boolean
  message: string
}

declare interface ISendVerificationCodeParams {
  email: string
  code: string
}

declare interface IVerifyCodeProps {
  otp: string
  setOtp: React.Dispatch<React.SetStateAction<string>>
}
