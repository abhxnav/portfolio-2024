import { z } from 'zod'

export const dataSchema = z.object({
  name: z.string(),
  role: z.string(),
  aboutText: z.string(),
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      projectImg: z.string(),
      tech: z.string(),
      links: z.object({
        live: z.string(),
        code: z.string(),
      }),
    })
  ),
  workExp: z.array(
    z.object({
      role: z.string(),
      company: z.string(),
      description: z.string(),
    })
  ),
  skills: z.array(
    z.object({
      skill: z.string(),
      skillIcon: z.string(),
    })
  ),
  socials: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
      socialIcon: z.string(),
    })
  ),
})
