import React, { useEffect, useRef, useState } from 'react'
import { ClipboardIcon } from '@heroicons/react/24/solid'

const CopyIcon = ({ onCopy }) => (
  <ClipboardIcon
    className="h-6 w-6 absolute text-blue-500 cursor-pointer"
    onClick={onCopy}
  />
)

const CopyQuick = () => {
  const [selectedText, setSelectedText] = useState('')
  const [showCopyIcon, setShowCopyIcon] = useState(false)
  const [iconPosition, setIconPosition] = useState({ top: 0, left: 0 })

  const copyIconRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedText)
    // 可以添加一些反馈，比如提示用户已复制到剪贴板
    console.log('已复制到剪贴板:', selectedText)
    setShowCopyIcon(false)
  }

  const handleSelectionChange = () => {
    const selection = window.getSelection()
    if (selection) {
      const selectedText = selection.toString()
      if (selectedText && selectedText.trim() !== '') {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        setSelectedText(selectedText)
        setShowCopyIcon(true)
        setIconPosition({
          top: rect.top - 25, // 调整位置
          left: rect.left + rect.width / 2
        })
      } else {
        setShowCopyIcon(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange)
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
    }
  }, [])

  return (
    <div className="relative">
      {showCopyIcon && (
        <CopyIcon
          onCopy={handleCopy}
          ref={copyIconRef}
          style={{ top: iconPosition.top, left: iconPosition.left }}
        />
      )}
    </div>
  )
}

export default CopyQuick
