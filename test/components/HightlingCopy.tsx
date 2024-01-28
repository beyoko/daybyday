import React, { useState } from 'react'
import { ClipboardIcon } from '@heroicons/react/24/solid'

function CopyIcon() {
  const [showIcon, setShowIcon] = useState(false)
  const [copiedText, setCopiedText] = useState('')

  function handleCopy() {
    const selection = window.getSelection()
    const selectedText = selection?.toString()
    if (selectedText) {
      navigator.clipboard.writeText(selectedText)
      setCopiedText(selectedText)
    }
  }

  function handleMouseUp() {
    const selection = window.getSelection()
    if (selection && selection.toString()) {
      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()
      const firstLetter = range.startContainer.textContent?.[range.startOffset]
      if (firstLetter) {
        setShowIcon(true)
        setCopiedText('')
        const icon = document.createElement('div')
        icon.style.position = 'absolute'
        icon.style.top = `${rect.top - 36}px`
        icon.style.left = `${rect.left}px`
        icon.style.display = 'flex'
        icon.style.alignItems = 'center'
        icon.style.pointerEvents = 'none'
        document.body.appendChild(icon)
        ReactDOM.render(
          <ClipboardIcon className="w-6 h-6 text-gray-500" />,
          icon
        )
      }
    } else {
      setShowIcon(false)
      const icon = document.querySelector('#copyIcon')
      if (icon) {
        ReactDOM.unmountComponentAtNode(icon)
        icon.remove()
      }
    }
  }

  return (
    <div onMouseUp={handleMouseUp}>
      {showIcon && (
        <div
          id="copyIcon"
          className="absolute flex items-center justify-center"
          onClick={handleCopy}
        >
          {copiedText ? (
            <span className="text-green-500">Copied!</span>
          ) : (
            <ClipboardIcon className="w-6 h-6 text-gray-500" />
          )}
        </div>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dapibus
        tellus, ac facilisis nisl. Sed finibus, ligula sed finibus tincidunt,
        enim ipsum sagittis orci, eu tempor erat enim eget est. Duis maximus
        luctus metus, ac euismod mauris efficitur in. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Phasellus pharetra congue mi, a gravida felis cursus
        vitae. Integer volutpat faucibus orci, nec sagittis leo hendrerit eget.
        Fusce porta, leo eu varius venenatis, orci metus ultricies nulla, a
        fermentum lectus odio ut ipsum. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Praesent luctus, mi ut
        egestas semper, eros metus commodo lacus, ac lacinia leo dui a nibh.
        Duis pharetra orci felis, in ullamcorper odio semper id.
      </p>
    </div>
  )
}

export default CopyIcon
