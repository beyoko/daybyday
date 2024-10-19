import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { DropdownMenuProps } from '@/lib/types'
import DropdownMenuItem from '@/lib/DropdownMenuItem'
import '@/styles/prism.css'

export default function DropdownMenu({ tags }: DropdownMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={toggle}
          className="inline-flex justify-center p-2 text-sm"
          aria-label="menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={menuOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items
          static
          className="bgCardColor absolute right-0 z-10 mt-2 w-56 max-h-80 overflow-y-auto origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            {tags.map((tag) => (
              <Menu.Item key={tag}>
                {({ active }) => (
                  <a
                    href={`/categories/${tag.toLowerCase()}`}
                    className={`${
                      active ? '' : ''
                    } block px-4 py-2 text-sm text-gray-700`}
                  >
                    {tag}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
