import '@/styles/prism.css'

type Props = {
  tags?: string[]
  includeComma: boolean
}

export default ({ tags = [] }: Props) => {
  // const tagCount = tags.length
  console.log('TagsLink props:', { tags })

  return tags.map((tag, index) => {
    return (
      <a key={tag} href={`/categories/${tag.toLowerCase()}`}>
        <p className="underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white linkColor transition-all">
          {tag}
        </p>
      </a>
    )
  })
}
