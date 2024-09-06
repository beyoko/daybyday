export type Post = {
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

export interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}
