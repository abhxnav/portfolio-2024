import { z } from 'zod'

export const dataSchema = z.object({
  name: z.string(),
  role: z.string(),
  aboutText: z.string(),
  projects: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      imgUrl: z.string(),
      tech: z.array(z.string()),
      links: z.object({
        live: z.string(),
        code: z.string(),
      }),
    })
  ),
  workExp: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
      company: z.string(),
      description: z.array(z.string()),
    })
  ),
  skills: z.array(
    z.object({
      skill: z.string(),
      iconUrl: z.string(),
    })
  ),
  socials: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
      iconUrl: z.string(),
    })
  ),
})
