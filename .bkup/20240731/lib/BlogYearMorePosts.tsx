import '@/styles/prism.css'

interface MoreLinkProps {
  year: number
}

export default ({ year }: MoreLinkProps) => (
  <a
    className="linkColor my-2 underline decoration-gray-300 dark:decoration-gray-700 hover:decoration-gray-500"
    href={`/blog/${year}`}
  >
    More...
  </a>
)
