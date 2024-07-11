import { useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
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
  const [menuOpen, setMenuOpen] = useState(false)

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

  const scrollToTopButton = () => (
    <button
      className="inline-flex justify-center p-2 font-medium shadow-sm rounded-md border border-zinc-400 dark:border-zinc-600"
      onClick={() => {
        setMenuOpen((prev) => !prev)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <ArrowUpIcon className="h-5 w-5" />
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
        flex rounded-md border border-zinc-950 dark:border-zinc-50 bg-zinc-100 dark:bg-zinc-800 
        ${currentHeading ? 'block' : 'hidden'}
        `}
    >
      <div className="flex flex-col">
        <Menu as="div" className="relative inline-block text-left p-2">
          <Menu.Button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex justify-center"
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
                      style={{ paddingLeft: `${(heading.depth - 1) * 2}ch` }}
                    >
                      <a
                        className="p-2 font-medium block text-zinc-600 hover:text-zinc-800 no-underline dark:text-zinc-200"
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
  )
}
