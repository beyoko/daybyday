import React, { useState } from 'react'

interface ImageProps {
  src: string
  alt: string
}

const ImageScript = ({ src, alt }: ImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const handleOverlayClick = () => {
    setIsZoomed(false)
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-pointer transition-transform ${
        isZoomed ? 'transform scale-150' : ''
      }`}
      onClick={handleImageClick}
    />
    {isZoomed && (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        onClick={handleOverlayClick}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full cursor-pointer"
          onClick={handleImageClick}
        />
      </div>
    )}
  )
}

export default ImageScript
