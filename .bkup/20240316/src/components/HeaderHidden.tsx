import React, { useEffect, useState } from 'react'

const ScrollNavigation = (
  children1: React.ReactNode,
  children2: React.ReactNode
) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <header
      className={`fixed w-full p-2 z-20 transition-all duration-300 ${
        visible ? 'top-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <nav className="flex items-center justify-between gap-3 text-base">
          <a href="/">
            <h2 className="underline underline-offset-2 p-2 font-semibold tracking-tighter gap-4 rounded-md text-lg text-zinc-50 dark:text-zinc-950 bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-50 hover:text-zinc-950 hover:dark:bg-zinc-950 hover:dark:text-zinc-50 transition-all">
              C.I.C
            </h2>
          </a>

          <div className="flex gap-4">
            <div className="hidden md:flex gap-5 border-2 border-zinc-950 dark:border-zinc-50 rounded-md bg-zinc-50 dark:bg-zinc-950 display:inline-block">
              {children1}
            </div>
            <div className="md:hidden flex">{children2}</div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default ScrollNavigation
