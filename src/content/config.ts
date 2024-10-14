import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      // heroImage: z.string().optional()
      heroImage: image()
        .refine((img) => img.width >= 720, {
          message: 'Your cover image must be at least 1080 pixels wide!',
        })
        .optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
})

export const collections = { post: postCollection }
