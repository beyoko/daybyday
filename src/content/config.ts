import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(), // Title must be a string
      description: z.string(), // Description must be a string
      pubDate: z // Publication date
        .string() // Can be a string
        .or(z.date()) // Or a Date object
        .transform((val) => new Date(val)), // Convert to Date object

      updatedDate: z // Updated date
        .string() // Can be a string
        .optional() // Optional field
        .transform((str) => (str ? new Date(str) : undefined)), // Convert if present

      heroImage: image() // Validate hero image
        .refine((img) => img.width >= 720, {
          // Ensure width is at least 720 pixels
          message: 'Your cover image must be at least 720 pixels wide!',
        })
        .optional(), // Optional field

      heroImageAlt: z.string().optional(), // Optional alt text for hero image
      tags: z.array(z.string()).optional(), // Optional array of tags
      draft: z.boolean().default(false), // Draft field, default to false
    }),
})

export const collections = { post: postCollection }
