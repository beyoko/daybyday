import { Menu, Transition } from '@headlessui/react'
import React, { useState, Fragment } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import type {
  DropdownMenuProps,
  DropdownMenuItemProps
} from '../types/interface'

const DropdownMenuItemClassNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

function DropdownMenuItem({ href, children }: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={DropdownMenuItemClassNames(
            active ? 'bg-gray-950 text-gray-50 dark:bg-gray-700 ' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}

export default function DropdownMenu({ tags }: DropdownMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={toggleMenu}
          className="inline-flex justify-center rounded-md border border-gray-400 dark:border-gray-700 px-2 py-2 text-sm font-medium shadow-sm bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </Menu.Button>
      </div>

      <Transition
        show={menuOpen}
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-gray-400 dark:divide-gray-700">
          <div className="py-1">
            {tags.map(tag => {
              return (
                <DropdownMenuItem
                  key={tag}
                  href={`/categories/${tag.toLowerCase()}`}
                >
                  {tag}
                </DropdownMenuItem>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
