'use client'

export interface TagsLinkProps {
  tags: string[]
}

export interface TagsLinkItemProps {
  href: string
  children: React.ReactNode
}

export interface DropdownMenuProps {
  tags: string[]
}

export interface DropdownMenuItemProps {
  href: string
  children: React.ReactNode
}

export interface PostProps {
  url: string
  frontmatter: {
    heroImage?: string
    title: string
    description: string
    pubDate: string
  }
}
