import React, { useState, ReactNode } from 'react'

export default function LogoBar(): ReactNode {
  const [handleClick, setHandleClick] = useState(false)

  const handleMouseEnter = () => {
    setHandleClick(true)
  }

  const handleMouseLeave = () => {
    setHandleClick(false)
  }

  return (
    <a href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="font-semibold tracking-tighter p-2 text-lg border-4 border-gray-50 dark:border-gray-950 bg-gray-50 dark:bg-gray-950 hover:bg-gray-950 hover:text-gray-50 hover:dark:bg-gray-50 hover:dark:text-gray-950 rounded-xl transition-all">
        C.I.C
      </h2>
      {handleClick && <input type="text" placeholder="Search..." />}
    </a>
  )
}
