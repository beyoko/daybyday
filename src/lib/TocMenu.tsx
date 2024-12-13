import { useState, useRef, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import TocMenuItem from '@/lib/TocMenuItem'
import { Bars3Icon } from '@heroicons/react/24/solid'
import '@/styles/prism.css'

type HeadingsProps = {
  headings: { slug: string; text: string; depth: number }[]
}

const TocMenu = ({ headings }: HeadingsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className="z-50 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
        aria-label="Open Table of Contents"
      >
        <Bars3Icon className="w-4 h-4" />
      </button>
      {/* Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
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
              <Dialog.Panel className="w-full max-w-md space-y-6 overflow-y-auto bg-white dark:bg-gray-800 max-h-80 p-6 rounded-md shadow-lg">
                <ul className="space-y-4">
                  {headings.map((heading) => (
                    <a
                      href={`#${heading.slug}`}
                      className="block text-sm leading-7"
                      onClick={() => setIsOpen(false)}
                    >
                      {heading.text}
                    </a>
                  ))}
                </ul>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
export default TocMenu
