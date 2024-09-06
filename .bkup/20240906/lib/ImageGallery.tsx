// src/components/ImageGallery.tsx
import React, { useEffect, useState, useRef } from 'react'

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 假设图片名为 image1.jpg, image2.jpg, ..., imageN.jpg
    const imagePaths = Array.from(
      { length: 20 },
      (_, i) => `/public/image${i + 1}.jpg`,
    )
    setImages(imagePaths)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    const imgs = containerRef.current?.querySelectorAll('img.lazy')
    imgs?.forEach((img) => observer.observe(img))

    return () => {
      imgs?.forEach((img) => observer.unobserve(img))
    }
  }, [])

  return (
    <div ref={containerRef} className="image-gallery">
      {images.map((src, index) => (
        <img
          key={index}
          data-src={src}
          src={post.data.heroImage}
          alt={`Image ${index + 1}`}
          className="lazy"
          width="300"
          height="200"
        />
      ))}
    </div>
  )
}

export default ImageGallery
