import React, { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoSunny, IoMoon, IoBug } from 'react-icons/io5'

const themes = [
  { id: 'auto', label: 'Auto', icon: <IoBug /> },
  { id: 'light', label: 'Light', icon: <IoSunny /> },
  { id: 'dark', label: 'Dark', icon: <IoMoon /> }
]

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    return 'auto'
  })

  const toggleTheme = (selectedTheme: string): void => {
    localStorage.setItem('theme', selectedTheme)
    setTheme(selectedTheme)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'auto') {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
      }
    } else if (theme === 'light') {
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

  return isMounted ? (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="p-[1px] rounded-3xl bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 cursor-pointer">
        <div className="flex items-center">
          {theme !== 'auto' && themes.find(t => t.id === theme)?.icon}
          <span className="pl-1 pr-2">
            {themes.find(t => t.id === theme)?.label}
          </span>
        </div>
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-8 right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg">
          {themes.map(t => (
            <Menu.Item key={t.id}>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-gray-200 dark:bg-dark-800' : ''
                  } w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-dark-700 dark:focus:text-gray-300 transition duration-150 ease-in-out`}
                  onClick={() => toggleTheme(t.id)}
                >
                  <div className="flex items-center">
                    {t.icon}
                    <span className="pl-2">{t.label}</span>
                  </div>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  ) : (
    <div />
  )
}
