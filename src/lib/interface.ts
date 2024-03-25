'use client'
import type { MarkdownLayoutProps } from 'astro'

export interface TagsLinkProps {
  tags: string[]
  index: number
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
  category: string
  frontmatter: {
    heroImage?: string
    title: string
    description: string
    pubDate: number
    tags: string[]
  }
}

export type MarkdownProps = MarkdownLayoutProps<{ category: string }>
