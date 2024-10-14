import { TagsLinkProps } from '@/lib/types'
import '@/styles/prism.css'

const TagsLink = ({ tags = [], classNames = [] }: TagsLinkProps) =>
  tags.map((tag) => {
    return (
      <a className={classNames} href={`/categories/${tag.toLowerCase()}`}>
        <p className="linkColor decoration-gray-300 dark:decoration-gray-700 hover:decoration-black dark:hover:decoration-white transition-all">
          {tag}
        </p>
      </a>
    )
  })

export default TagsLink
