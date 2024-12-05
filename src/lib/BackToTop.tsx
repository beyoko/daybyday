import { useState, useEffect } from 'react'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // 监听滚动事件，显示或隐藏按钮
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    if (scrollPosition > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // 滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <button onClick={scrollToTop}>Back To Top</button>
    </div>
  )
}

export default BackToTop
