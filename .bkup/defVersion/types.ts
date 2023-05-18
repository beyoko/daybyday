interface MarkdownPostFrontmatter {
  content: {
    title: string
    description: string
    pubDate: string
    createdAt?: string
    updatedAt?: string
    heroImage?: string
    tags: string[]
  }
}

export type { MarkdownPostFrontmatter }
