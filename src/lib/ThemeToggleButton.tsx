import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggleButton() {
  // Initialize theme state based on localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Sync theme to root element and listen for storage changes
  useEffect(() => {
    const root = document.documentElement

    // Apply theme to root element
    root.classList.toggle('dark', theme === 'dark')

    // Sync theme across tabs/windows
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        setTheme(storedTheme)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Cleanup event listener on unmount
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [theme])

  // Render the button
  return (
    <div className="inline-flex">
      <button
        className="linkColor cursor-pointer p-2"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}
