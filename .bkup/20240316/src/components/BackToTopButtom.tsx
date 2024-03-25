import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-10">
      <div className="flex gap-4">
        <button
          className={`
          p-2
          md:flex
          rounded-3xl
          transition-all
          border
          border-zinc-300
          dark:border-zinc-700
          backdrop-blur-md
          hover:backdrop-blur-xl
          ${showButton ? 'scale-100' : 'scale-0'}
          ${showButton ? 'visible' : 'invisible'}`}
          onClick={scrollToTop}
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
