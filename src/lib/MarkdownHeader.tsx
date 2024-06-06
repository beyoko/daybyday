import { useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import BackToTopButtom from '@/lib/BackToTopButtom'

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

  const currentText =
    headings.find((heading) => heading.slug === currentHeading)?.text || ''

  const toc = headings.filter(
    (heading) =>
      heading.depth <= 3 &&
      !(heading.slug === 'footnote-label' && heading.text === 'Footnotes'),
  )

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <div
      id="current-heading"
      className={`
      current-heading 
      flex gap-4 rounded-3xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 items-center
      ${currentHeading ? 'block' : 'hidden'}
      `}
    >
      <Menu as="div" className="relative inline-block text-left p-2">
        <Menu.Button
          onClick={toggleMenu}
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-zinc-950 md:hover:border-zinc-950 md:hover:dark:border-zinc-50 md:hover:bg-zinc-50 dark:dark:bg-zinc-950"
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
          {toc.length > 0 &&
            headings.map((heading) => (
              <li
                key={heading.slug}
                className="flex"
                style={{ paddingLeft: `${(heading.depth - 1) * 2}ch` }}
              >
                <a
                  className="block text-zinc-600 hover:text-zinc-800 no-underline font-normal dark:text-zinc-200 dark:hover:text-zinc-400"
                  href={`#${heading.slug}`}
                >
                  {heading.depth && '- '}
                  {heading.text}
                </a>
              </li>
            ))}
        </div>
      </Transition>
      <BackToTopButtom />
    </div>
  )
}
