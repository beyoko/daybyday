import React, { useEffect, useRef } from 'react'

interface Post {
  data: {
    heroImage: string
    flashVideo: string
  }
}

interface MastheadProps {
  posts: Post[]
}

export default ({ posts }: MastheadProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      },
      { threshold: 0.5 }, // 当视频有一半在视口内时触发
    )

    observer.observe(videoElement)

    return () => {
      observer.unobserve(videoElement)
    }
  }, [])

  const isProd = import.meta.env.PROD
  const baseAssetUrl = isProd ? 'flash the page' : ''

  return (
    <section className="relative mb-6 h-80 flex justify-center items-center">
      <div className="absolute w-full h-full overflow-hidden">
        {posts.map((post) => {
          ;<video
            ref={videoRef}
            className="absolute inset-0 min-w-full min-h-full object-cover opacity-30"
            poster={post.data.heroImage}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={baseAssetUrl + post.data.flashVideo}
              type="video/webm; codecs=vp9"
            />
          </video>
        })}
      </div>
      <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="uppercase text-sm mb-4">Welcome to</div>
        <div className="text-4xl font-mplus font-medium">
          A curated list of the tech I{' '}
          <span className="text-orange-500">use</span>
        </div>
      </div>
    </section>
  )
}
