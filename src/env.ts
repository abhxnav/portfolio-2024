export const env = {
  emailJs: {
    publicKey: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
    serviceId: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
    templateId: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
  },
  mongodb: {
    uri: String(process.env.MONGODB_URI),
  },
  resend: {
    apiKey: String(process.env.RESEND_API_KEY),
  },
  jwtSecret: String(process.env.NEXT_PUBLIC_JWT_SECRET),
  baseUrl: String(process.env.NEXT_PUBLIC_BASE_URL),
}
