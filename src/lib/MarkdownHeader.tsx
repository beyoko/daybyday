import { useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import { init } from 'astro/virtual-modules/prefetch.js'

interface Heading {
  depth: number
  slug: string
  text: string
}

interface MarkdownHeaderProps {
  headings: Heading[]
  initialStatus: boolean
}

export default function MarkdownHeader({
  headings,
  initialStatus,
}: MarkdownHeaderProps) {
  const [currentHeading, setCurrentHeading] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [markdownStatus, setMarkdownStatus] = useState(initialStatus)

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

  useEffect(() => {
    setMarkdownStatus(initialStatus)
  }, [initialStatus])

  const scrollToTopButton = () => (
    <button
      className="p-4"
      onClick={() => {
        setMenuOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  )

  const currentText =
    headings.find((heading) => heading.slug === currentHeading)?.text || ''

  const toc = headings.filter(
    (heading) =>
      heading.depth <= 3 &&
      !(heading.slug === 'footnote-label' && heading.text === 'Footnotes'),
  )

  return (
    <div
      className={`
        flex rounded-md bg-white dark:bg-zinc-950 border border-zinc-950 dark:border-zinc-50
        ${currentHeading ? 'block' : 'hidden'}
        `}
    >
      {markdownStatus && (
        <div>
          <div className="flex flex-col">
            <Menu as="div" className="p-3 relative inline-block">
              <Menu.Button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex justify-center pl-1 hover:border-l hover:border-zinc-950 dark:hover:border-zinc-50 transition-all"
                aria-label="menu"
              >
                {currentText}
              </Menu.Button>
            </Menu>
            <Transition
              show={menuOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="py-1">
                <aside className="xl:col-span-3 xl:flex xl:flex-col xl:sticky xl:top-28 gap-y-6">
                  {toc.length > 0 && (
                    <ul className="overflow-y-auto max-h-96">
                      {headings.map((heading) => (
                        <li
                          key={heading.slug}
                          className="flex"
                          style={{
                            paddingLeft: `${(heading.depth - 1) * 2}ch`,
                          }}
                        >
                          <a
                            className="p-1 text-zinc-600 hover:text-zinc-800 no-underline dark:text-zinc-200"
                            href={`#${heading.slug}`}
                          >
                            {heading.depth && '- '}
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </aside>
              </div>
            </Transition>
          </div>
        </div>
      )}
      <div>{scrollToTopButton()}</div>
    </div>
  )
}
