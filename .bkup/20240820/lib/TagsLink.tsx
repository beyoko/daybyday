import '@/styles/prism.css'

type Props = {
  tags: string[]
  includeComma: boolean
}

export default ({ tags = [] }: Props) =>
  tags.map((tag) => {
    return (
      <a key={tag} href={`/categories/${tag.toLowerCase()}`}>
        <p className="linkColor underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-all">
          {tag}
        </p>
      </a>
    )
  })
