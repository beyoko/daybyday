import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const TocMenu = ({ headings }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
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
      </Menu>

      <Transition
        show={menuOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <aside className="xl:col-span-3 xl:flex xl:flex-col xl:sticky xl:top-28 gap-y-6">
          <ul className="overflow-y-auto max-h-96">
            {headings.map((heading) => (
              <li key={heading.slug} className="flex">
                <a
                  className="p-1 opacity-50 hover:opacity-100"
                  href={`#${heading.slug}`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </Transition>
    </div>
  )
}

export default TocMenu
