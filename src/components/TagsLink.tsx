import React from 'react'

interface Props {
  tags: string[]
}

export default function TagsLink({ tags }: Props) {
  return tags.map(tag => {
    return (
      <a key={tag} href={`/categories/${tag.toLowerCase()}`}>
        {tag}
      </a>
    )
  })
}
