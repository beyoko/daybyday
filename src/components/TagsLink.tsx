import React from 'react'

interface Props {
  tags: string[]
}

export default function TagsLink({ tags }: Props) {
  return tags.map(tag => {
    return (
      <a
        className="text-lg bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-950 rounded-md transition-all"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        {tag}
      </a>
    )
  })
}
