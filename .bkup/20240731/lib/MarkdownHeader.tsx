import { useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import '@/styles/prism.css'

interface Heading {
  depth: number
  slug: string
  text: string
}

interface MarkdownHeaderProps {
  headings: Heading[]
}

export default ({ headings }: MarkdownHeaderProps) => {
  const [currentHeading, setCurrentHeading] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMouseVisible, setIsMouseVisible] = useState(true)

  useEffect(() => {
    // <Menu> and {scrollToTopButton} turn on
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
    const handleMouseMove = () => {
      if (!isMouseVisible) {
        // 鼠标重新显示时执行的操作
        // 例如，显示一个元素或执行其他操作
        setIsMouseVisible(true)
      }
    }

    const handleMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null && isMouseVisible) {
        // 鼠标消失时执行的操作
        // 例如，隐藏一个元素或执行其他操作
        setIsMouseVisible(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [isMouseVisible])

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
        flex rounded-md bg-gray-100 dark:bg-gray-900  opacity-70 hover:opacity-100
        ${currentHeading ? 'block' : 'hidden'}
        `}
    >
      {isMouseVisible ? (
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
            <div className="p-2">
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
                          className="p-1 textHeaderColor opacity-50 hover:opacity-100"
                          href={`#${heading.slug}`}
                        >
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
      ) : null}
      <div className="text-black dark:text-white">{scrollToTopButton()}</div>
    </div>
  )
}
