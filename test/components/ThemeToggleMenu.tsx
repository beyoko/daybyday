import React, { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const themes = [
  { id: 'light', label: 'Light', icon: <SunIcon className="h-5 w-5" /> },
  { id: 'dark', label: 'Dark', icon: <MoonIcon className="h-5 w-5" /> }
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
    return 'light'
  })

  const toggleTheme = (selectedTheme: string): void => {
    localStorage.setItem('theme', selectedTheme)
    setTheme(selectedTheme)
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
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center rounded-md border border-gray-400 dark:border-gray-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all">
            {theme === 'light' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md ring-1 ring-black dark:ring-zinc-700 ring-opacity-5  bg-white dark:bg-zinc-900 shadow-xl focus:outline-none divide-zinc-400 dark:divide-zinc-700">
              <div className="py-1">
                {themes.map(t => (
                  <Menu.Item key={t.id}>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-zinc-950 text-zinc-50 dark:bg-zinc-800 '
                            : ''
                        } flex items-center w-full px-2 py-2`}
                        onClick={() => toggleTheme(t.id)}
                      >
                        {t.icon}
                        <span className="ml-2">{t.label}</span>
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
