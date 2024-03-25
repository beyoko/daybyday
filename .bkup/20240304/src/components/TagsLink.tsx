import React from 'react'
import type { TagsLinkProps } from '../types/interface'

export default function TagsLink({ tags }: TagsLinkProps) {
  return tags.map(tag => {
    return (
      <a
        className="border-4 border-transparent"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        <p className="flex border-2 border-transparent hover:underline">
          {tag}
        </p>
      </a>
    )
  })
}
