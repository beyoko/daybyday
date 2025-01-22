import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ListBulletIcon } from '@heroicons/react/24/solid'
import '@/styles/prism.css'

interface DropdownMenuProps {
  children: React.ReactNode
  iconName: 'menu' | 'toc'
}

const DropdownMenu = ({ children, iconName }: DropdownMenuProps) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button
        className="inline-flex justify-center p-2 text-sm"
        aria-label="menu"
      >
        {iconName === 'menu' ? (
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        ) : iconName === 'toc' ? (
          <ListBulletIcon className="h-5 w-5" aria-hidden="true" />
        ) : null}
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="bgCardColor absolute right-0 z-10 mt-2 w-56 max-h-96 overflow-y-auto origin-top-right rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none p-4">
        <Menu.Item>{children}</Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
)
export default DropdownMenu
