import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon, IoBody } from 'react-icons/io5/index.js'

const themes = [
  { id: 'auto', label: 'Auto', icon: <IoBody /> },
  { id: 'dark', label: 'Dark', icon: <IoMoon /> },
  { id: 'light', label: 'Light', icon: <IoSunny /> }
]

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return 'undefined'
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   return 'dark'
    // }
    // return 'light'
  })
  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme !== 'undefined') {
      if (theme === 'light') {
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
      }
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: undefined)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return isMounted ? (
    <div
      className="
        p-[1px]
        inline-flex
        rounded-3xl
        items-center
        bg-gray-300
        dark:bg-gray-600
        focus:border-2
        hover:border-2
        hover:border-gray-800
        hover:dark:border-gray-200
        hover:border-offset-2
        transition-all
        "
    >
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${
              checked ? 'bg-gray-50 text-gray-950' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === 'light' ? <IoSunny /> : <IoMoon />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
