import React, { useState, useEffect } from 'react'
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
    <div className="flex gap-4">
      <button
        className={`
          p-2
          md:flex
          rounded-3xl
          bg-zinc-100
          dark:bg-zinc-600
          dark:ring-zinc-700
          hover:ring-2
          hover:ring-zinc-800
          hover:dark:ring-zinc-200
          transition-all
          ${showButton ? 'scale-100' : 'scale-0'}
          ${showButton ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
