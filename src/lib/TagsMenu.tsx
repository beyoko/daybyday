import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import '@/styles/prism.css'

export default function TagsMenu({ tags }: { tags: string[] }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="linkColor inline-flex justify-center p-2 text-sm"
        aria-label="Open Menu"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>

      {/* Dialog */}
      <Transition appear show={menuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setMenuOpen(false)}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-md space-y-6 overflow-y-auto bg-white dark:bg-gray-800 max-h-80 p-6 shadow-lg rounded-lg">
                <ul className="space-y-4">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <a
                        href={`/categories/${tag.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                      >
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="linkColor underline hover:no-underline mt-4 w-full px-6 py-3 text-white rounded-lg"
                  aria-label="Close Menu"
                >
                  Close
                </button>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
