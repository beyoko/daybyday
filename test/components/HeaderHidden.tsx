import React, { useEffect, useState } from 'react'

function HeaderHidden(children: React.ReactNode) {
  const [showHeader, setShowHeader] = useState(false)
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

  return (
    <header className="fixed w-full p-2 z-20">
      <div
        className="mx-auto max-w-5xl
      "
      >
        <nav className="flex items-center justify-between gap-3 text-base">
          {children}
        </nav>
      </div>
    </header>
  )
}

export default HeaderHidden
