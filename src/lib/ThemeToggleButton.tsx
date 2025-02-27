import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggleButton() {
  // 主题状态，优先从 localStorage 获取，否则检测系统偏好
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    return (
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    )
  }

  const [theme, setTheme] = useState(getInitialTheme)

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  // 监听主题变化
  useEffect(() => {
    const root = document.documentElement

    // 初始化主题
    root.classList.toggle('dark', theme === 'dark')

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const systemTheme = e.matches ? 'dark' : 'light'
      setTheme(systemTheme)
      localStorage.setItem('theme', systemTheme)
      root.classList.toggle('dark', systemTheme === 'dark')
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  return (
    <button
      className="p-2 linkColor cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  )
}
