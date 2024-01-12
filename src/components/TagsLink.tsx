import React from 'react'
import type { TagsLinkProps } from '../types/interface'

export default function TagsLink({ tags }: TagsLinkProps) {
  return tags.map(tag => {
    return (
      <a
        className="hover:underline border-4 border-transparent bg-transparent"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        {tag}
      </a>
    )
  })
}
