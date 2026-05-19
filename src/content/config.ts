import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(), // Title must be a string
      description: z.string(), // Description must be a string
      pubDate: z // Publication date
        .string() // Can be a string
        .or(z.date()) // Or a Date object
        .transform((val) => new Date(val)) // Convert to Date object
        .refine((date) => !isNaN(date.getTime()), 'Invalid pubDate'),

      tags: z.array(z.string().min(1)).optional(), // Optional array of non-empty tags
      draft: z.boolean().default(false), // Draft field, default to false
      heroImage: z.string().optional(),
      heroImageAlt: z.string().optional(),
    }),
})

export const collections = { blog: blogCollection }
