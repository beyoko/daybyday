type Props = {
  tags: string[]
  includeComma: boolean
}

export default function TagsLink({ tags, includeComma }: Props) {
  const tagCount = tags.length
  return tags.map((tag, index) => {
    return (
      <a
        className="border border-transparent"
        key={tag}
        href={`/categories/${tag.toLowerCase()}`}
      >
        <p className="underline rounded-lg hover:no-underline">
          {tag}
          {includeComma && index < tagCount - 1 ? ',' : ''}
        </p>
      </a>
    )
  })
}
