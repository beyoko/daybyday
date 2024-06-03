import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme && storedTheme !== theme) {
        setTheme(storedTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [theme])

  if (!isMounted) {
    return <div />
  }

  return (
    <div className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-zinc-950 md:hover:border-zinc-950 dark:md:hover:border-zinc-50  md:hover:bg-zinc-50 dark:md:hover:bg-zinc-950">
      <button
        className={`${theme === 'light'} cursor-pointer rounded-3xl`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
