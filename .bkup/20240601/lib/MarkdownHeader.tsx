import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

interface Heading {
  depth: number
  slug: string
  text: string
}

interface MarkdownHeaderProps {
  headings: Heading[]
}

export default function MarkdownHeader({ headings }: MarkdownHeaderProps) {
  const [currentHeading, setCurrentHeading] = useState<string>('')
  const [showPopover, setShowPopover] = useState(false)
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      const offset = 10 // Adjust this to fine-tune the detection point
      for (const heading of headings) {
        const element = document.getElementById(heading.slug)
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight / 2 + offset
        ) {
          current = heading.slug
        }
      }
      setCurrentHeading(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentText =
    headings.find((heading) => heading.slug === currentHeading)?.text || ''

  const handleTextClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setAnchorPosition({ top: rect.top, left: rect.left })
    setShowPopover(!showPopover)
  }

  const toc = headings.filter(
    (heading) =>
      heading.depth <= 3 &&
      !(heading.slug === 'footnote-label' && heading.text === 'Footnotes'),
  )

  function getIndentation(level: number): string {
    return `${(level - 1) * 2}ch`
  }

  return (
    <div
      id="current-heading"
      className={`
      current-heading 
      flex gap-4 rounded-3xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800
      ${currentHeading ? 'block' : 'hidden'}
      `}
    >
      <button>
        <div className="p-2" onClick={handleTextClick}>
          {currentText}
        </div>
        {showPopover && (
          <div>
            <ol className="list-none pl-0 my-0 ml-1 relative">
              {toc.length > 0 &&
                headings.map((heading) => (
                  <li
                    key={heading.slug}
                    className="flex"
                    style={{ paddingLeft: getIndentation(heading.depth) }}
                  >
                    <a
                      className={`block text-zinc-600 hover:text-zinc-800 no-underline font-normal dark:text-zinc-200 dark:hover:text-zinc-100 ${getIndentation(heading.depth)}`}
                      href={`#${heading.slug}`}
                    >
                      {heading.depth && '- '}
                      {heading.text}
                    </a>
                  </li>
                ))}
            </ol>
          </div>
        )}
      </button>
      <div>
        <button className="p-2" onClick={scrollToTop}>
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
