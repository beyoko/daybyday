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
  const [showHeader, setShowHeader] = useState(false)
  const [currentHeading, setCurrentHeading] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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

  return (
    <div className="fixed bottom-4 right-10">
      <div className="flex gap-4">
        <div
          className={`
            ${showHeader ? 'scale-100' : 'scale-0'} ${showHeader ? 'visible' : 'invisible'}`}
        >
          <div
            id="current-heading"
            className="current-heading fixed bottom-4 right-20 p-2 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded"
          >
            {headings.find((heading) => heading.slug === currentHeading)
              ?.text || ''}
          </div>
          <button
            className=" p-2 md:flex rounded-3xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
