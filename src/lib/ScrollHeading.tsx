import { useState, useEffect } from 'react'

interface ScrollHeadingProps {
  children: string[]
}

const ScrollHeading: React.FC = ({ children }: ScrollHeadingProps) => {
  const [showHeading, setShowHeading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowHeading(true)
      } else {
        setShowHeading(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="fixed bottom-4 left-20">
        <nav className="flex items-center justify-between gap-3 text-base">
          <div
            className={`
            inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-zinc-950 md:hover:border-zinc-950 dark:md:hover:border-zinc-50 md:hover:bg-zinc-50 dark:md:hover:bg-zinc-950
            ${showHeading ? 'scale-100' : 'scale-0'}
            ${showHeading ? 'visible' : 'invisible'}

            `}
          >
            {children}
          </div>
        </nav>
      </div>
    </>
  )
}

export default ScrollHeading
