import React, { useState, useRef } from 'react'

type ZoomedImageProps = {
  alt: string
  src: string
  height: string
  width: string
  className: string
}

const ZoomedImage = ({ alt, src, className }) => {
  const [zoomed, setZoomed] = useState(false)
  const imageRef = useRef(null)

  const toggleZoom = () => {
    setZoomed(!zoomed)

    if (zoomed) {
      // Reset image styles when zoomed out
      imageRef.current.style.position = 'static'
      imageRef.current.style.top = 'auto'
      imageRef.current.style.left = 'auto'
      imageRef.current.style.transform = 'none'
    } else {
      // Center and display at actual size when zoomed in
      const imageRect = imageRef.current.getBoundingClientRect()
      const centerX = window.innerWidth / 2 - imageRect.width / 2
      const centerY = window.innerHeight / 2 - imageRect.height / 2

      imageRef.current.style.position = 'fixed'
      imageRef.current.style.top = `${centerY}px`
      imageRef.current.style.left = `${centerX}px`
      imageRef.current.style.transform = 'scale(1)'
    }
  }

  return (
    <button className="image-container" onClick={toggleZoom}>
      <img
        ref={imageRef}
        alt={alt}
        src={src}
        className={`${className || ''}`}
      />
    </button>
  )
}

export default ZoomedImage
