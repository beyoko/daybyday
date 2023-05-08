import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HoverLink({ children, color }) {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const handleHover = () => setHovered(true)
    const handleLeave = () => setHovered(false)
    const link = document.querySelector('.hover-link')

    link.addEventListener('mouseenter', handleHover)
    link.addEventListener('mouseleave', handleLeave)

    return () => {
      link.removeEventListener('mouseenter', handleHover)
      link.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <Link
      to="/"
      className={`hover-link inline-block p-2 rounded-lg ${
        hovered ? `bg-${color}-500` : ''
      }`}
    >
      {children}
    </Link>
  )
}

function HomeTitle() {
  return (
    <>
      <section className="text-5xl text-center font-sans mt-12 mb-8">
        <div className="flex flex-col items-center justify-center h-screen">
          <main className="flex flex-col md:flex-row justify-between w-full md:w-4/5 lg:w-2/3">
            <div className="w-full md:w-1/2 p-8">
              <HoverLink color="gray">day</HoverLink>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <HoverLink color="red">think</HoverLink>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export default HomeTitle
