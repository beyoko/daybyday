import React from 'react'
import type { TagsLinkProps } from '../types/interface'

export default function TagsLink({ tags }: TagsLinkProps) {
  return tags.map(tag => {
    return (
      <a
        className="text-md px-0.5 border-4 border-gray-50 dark:border-gray-950 bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-950 rounded-lg transition-all"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        {tag}
      </a>
    )
  })
}
