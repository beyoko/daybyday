import { useState, ReactNode } from 'react'
import SearchBar from './Search-Bar'

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
      <h2 className="font-semibold tracking-tighter p-2 text-lg border-4 border-zinc-50 dark:border-zinc-950 bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 hover:dark:bg-zinc-50 hover:dark:text-zinc-950 rounded-xl transition-all">
        C.I.C
      </h2>
      {handleClick && <input type="text" placeholder="Search..." />}
    </a>
  )
}
