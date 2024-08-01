import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { DropdownMenuItem } from '@/lib/DropdownMenuItem'
import '@/styles/prism.css'

interface DropdownMenuProps {
  tags: string[]
}

export default function DropdownMenu({ tags }: DropdownMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
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
      </div>

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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 max-h-80 overflow-y-auto origin-top-right rounded-md shadow-l ring-1 ring-black ring-opacity-5 focus:outline-none bgCardColor">
          <div className="py-1">
            <div className="px-3 py-2 font-bold text-xs">Categories</div>
            {tags.map((tag) => {
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
