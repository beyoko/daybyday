import { useState, useEffect, useCallback, useMemo } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import '@/styles/prism.css'

type TocProps = {
  depth: number
  slug: string
  text: string
}

export default function TocCard({ headings }): Headings[] {
  const [currentHeading, setCurrentHeading] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMouseVisible, setIsMouseVisible] = useState<boolean>(true)

  // Scroll handler
  const handleScroll = useCallback(() => {
    const offset = 10
    const current = headings.reduce(
      (closest: string, heading: TocProps): string => {
        const element = document.getElementById(heading.slug)
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight / 2 + offset
        ) {
          return heading.slug
        }
        return closest
      },
      '',
    )
    setCurrentHeading(current)
  }, [headings])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Mouse visibility handler
  useEffect(() => {
    const handleMouseMove = () => {
      if (!isMouseVisible) setIsMouseVisible(true)
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && isMouseVisible) setIsMouseVisible(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isMouseVisible])

  const scrollToTopButton = useMemo(
    () => (
      <button
        className="p-4"
        onClick={() => {
          setMenuOpen(false)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <ArrowUpIcon className="h-4 w-4" />
      </button>
    ),
    [],
  )

  const currentText = useMemo(
    () =>
      headings.find((heading: TocProps) => heading.slug === currentHeading)
        ?.text || '',
    [currentHeading, headings],
  )

  const toc = useMemo(
    (): TocProps[] =>
      headings.filter(
        (heading: TocProps): boolean =>
          heading.depth <= 3 &&
          !(heading.slug === 'footnote-label' && heading.text === 'Footnotes'),
      ),
    [headings],
  )

  return (
    <div
      className={`flex flex-col justify-center items-center ${currentHeading ? 'block' : 'hidden'}`}
    >
      {isMouseVisible && (
        <div className="hidden md:block">
          <Menu as="div" className="p-3 relative inline-block">
            <Menu.Button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex justify-center pl-1 transition-all"
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
            <aside className="xl:col-span-3 xl:flex xl:flex-col xl:sticky xl:top-28 gap-y-6">
              {toc.length > 0 && (
                <ul className="overflow-y-auto max-h-96">
                  {toc.map(
                    (heading): TocProps => (
                      <li key={heading.slug} className="flex">
                        <a
                          className="p-1 opacity-50 hover:opacity-100"
                          href={`#${heading.slug}`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </aside>
          </Transition>
          <div className="text-black dark:text-white">{scrollToTopButton}</div>
        </div>
      )}
    </div>
  )
}
