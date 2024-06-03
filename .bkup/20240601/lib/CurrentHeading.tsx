import React, { useEffect, useState } from 'react'

interface Heading {
  depth: number
  slug: string
  text: string
}

interface Props {
  headings: Heading[]
}

const CurrentHeading: React.FC<Props> = ({ headings }) => {
  const [currentHeading, setCurrentHeading] = useState<string>('')

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

  const currentHeadingText =
    headings.find((heading) => heading.slug === currentHeading)?.text || ''

  return (
    <div
      id="current-heading"
      className={`
      current-heading
      ${currentHeading ? 'block' : 'hidden'}
      `}
    >
      <div className="fixed bottom-4 right-1/4 p-2 flex justify-center items-center bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 border border-zinc-300 dark:border-zinc-700 rounded-3xl">
        {currentHeadingText}
      </div>
    </div>
  )
}

export default CurrentHeading
