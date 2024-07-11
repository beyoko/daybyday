type Props = {
  tags?: string[]
  includeComma: boolean
}

export default function TagsLink({ tags = [] }: Props) {
  const tagCount = tags.length
  console.log('TagsLink props:', { tags })

  return tags.map((tag, index) => {
    return (
      <a key={tag} href={`/categories/${tag.toLowerCase()}`}>
        <p className="underline rounded-lg hover:no-underline">{tag}</p>
      </a>
    )
  })
}
