import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { DropdownMenuItemProps } from '@/lib/types'
import '@/styles/prism.css'

const DropdownMenuItem = ({ href, children }: DropdownMenuItemProps) => {
  const DropdownMenuItemClassNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={DropdownMenuItemClassNames(
            active ? 'borderLeftColor' : '',
            'block px-4 py-2 text-sm',
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}

const DropdownMenu = ({ tags }: DropdownMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex justify-center p-2 text-sm"
        aria-label="menu"
      >
        {menuOpen ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <Bars3Icon className="h-5 w-5" />
        )}
      </Menu.Button>

      <Transition
        show={menuOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="bgCardColor absolute right-0 z-10 mt-2 w-56 max-h-80 overflow-y-auto origin-top-right rounded-md shadow-l ring-1 ring-black ring-opacity-5 focus:outline-none">
          {tags.map((toggle) => {
            return (
              <DropdownMenuItem
                key={toggle}
                href={`/categories/${toggle.toLowerCase()}`}
              >
                {toggle}
              </DropdownMenuItem>
            )
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default DropdownMenu
