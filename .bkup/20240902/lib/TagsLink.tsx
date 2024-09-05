import '@/styles/prism.css'

interface TagsLinkProps {
  tags: string[]
}

export default function TagsLink({ tags = [] }: TagsLinkProps) {
  tags.map((tag) => {
    return (
      <a key={tag} href={`/categories/${tag.toLowerCase()}`}>
        <p className="linkColor underline underline-offset-4 decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white">
          {tag}
        </p>
      </a>
    )
  })
}
