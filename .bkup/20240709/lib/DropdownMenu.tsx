import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { DropdownMenuItem } from '@/lib/DropdownMenuItem'

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
          className="inline-flex justify-center rounded-md border-2 border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-zinc-950 md:hover:border-zinc-950 md:hover:dark:border-zinc-50 md:hover:bg-zinc-50 dark:dark:bg-zinc-950"
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 max-h-80 overflow-y-auto origin-top-right rounded-md border-2 border-zinc-400 dark:border-zinc-700 bg-white dark:bg-zinc-950 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="py-1">
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
