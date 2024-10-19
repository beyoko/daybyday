import type { MarkdownHeading } from 'astro'

type Post = {
  id: string
  slug: string

  publishDate: Date
  title: string
  description?: string

  image?: string

  canonical?: string | URL
  permalink?: string

  youtubeId?: string

  draft?: boolean

  excerpt?: string
  series?: string
  seriesName?: string
  tags?: Array<string>
  author?: string

  Content: any
  content?: string

  readingTime?: number
}

// var
interface Post {
  slug: string
  data: {
    title: string
    pubDate: string
  }
}

interface HeadingProps {
  depth: number
  slug: string
  text: string
}

// var

interface DropdownMenuProps {
  tags: string[]
}

interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

interface MarkdownHeaderProps {
  headings: Heading[]
}

export {
  DropdownMenuProps,
  DropdownMenuItemProps,
  TagsLinkProps,
  PostYearProps,
  BlogLinkProps,
  MoreLinkProps,
  HeadingProps,
}
