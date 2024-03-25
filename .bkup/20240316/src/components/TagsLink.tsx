type Props = {
  tags: string[]
  includeComma: boolean
}

export default function TagsLink({ tags, includeComma }: Props) {
  const tagCount = tags.length
  return tags.map((tag, index) => {
    return (
      <a
        className="border-4 border-transparent"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        <p className="flex border-2 border-transparent hover:underline">
          {tag}
          {includeComma && index < tagCount - 1 ? ' ,' : ''}
        </p>
      </a>
    )
  })
}
