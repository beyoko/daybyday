// src/components/BackButton.jsx
import { useState } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

type Props = {
  hide?: boolean
}

export default function BackButton({ hide = false }) {
  const handleClick = () => {
    window.history.back()
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-2 focus:outline-none"
    >
      <ArrowLeftIcon className="h-5 w-5" />
    </button>
  )
}
