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

interface Heading {
  depth: number
  slug: string
  text: string
}

// var

interface TagsLinkProps {
  tags: string[]
  classNames: string[]
  includeComma: boolean
}

interface PostYearProps {
  postYear: string
}

interface BlogLinkProps {
  posts: Post[]
}

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

interface MarkdownHeaderMenuProps {
  headings: Heading[]
}

interface MoreLinkProps {
  yearMore: string
}

export {
  DropdownMenuProps,
  DropdownMenuItemProps,
  TagsLinkProps,
  PostYearProps,
  BlogLinkProps,
  MoreLinkProps,
}
