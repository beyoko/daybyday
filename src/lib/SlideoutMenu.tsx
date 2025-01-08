import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface SlideoutMenuProps {
  children: React.ReactNode
  title?: string // 可选的标题
}

const SlideoutMenu = ({ children, title }: SlideoutMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center justify-center cursor-pointer text-sm border-2 p-1 rounded-md" // 添加样式
      >
        {title}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex items-center">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative w-screen max-w-md bg-white dark:bg-gray-800 h-full flex flex-col overflow-y-auto border-l border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="px-6 py-6 flex-grow">
                  {' '}
                  {/* 添加 flex-grow 使内容区域可滚动 */}
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default SlideoutMenu
