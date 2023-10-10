import React, { useState, useEffect } from 'react'
import { IoArrowUp } from 'react-icons/io5'

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
          rounded-3xl
          md:flex
          bg-zinc-300
          dark:bg-zinc-600
          focus:ring-2
          hover:ring-2
          hover:ring-zinc-800
          hover:dark:ring-zinc-200
          hover:ring-offset-2
          transition-all
          ${showButton ? 'scale-100' : 'scale-0'}
          ${showButton ? 'visible' : 'invisible'}`}
        onClick={scrollToTop}
      >
        <IoArrowUp />
      </button>
    </div>
  )
}
